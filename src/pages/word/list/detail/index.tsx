import useAuthToken from '@/components/Atomic/useAuthToken';
import LayoutWord from '@/components/Layout/layout-word';
import { DatePicker, DatePickerProps, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

interface DataType {
    key: string; // Unique identifier for each row, which can be "#" from your data
    word: string; // For "单词"
    phonetic: string; // For "音标"
    meaning: string; // For "解释"
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Id',
        dataIndex: 'key',
        key: 'key', // 这里改为 'key' 以匹配 DataType
    },
    {
        title: '单词',
        dataIndex: 'word',
        key: 'word', // 这里改为 'word' 以匹配 DataType
    },
    {
        title: '音标',
        dataIndex: 'phonetic',
        key: 'phonetic', // 这里改为 'phonetic' 以匹配 DataType
    },
    {
        title: '解释',
        dataIndex: 'meaning',
        key: 'meaning', // 这里改为 'meaning' 以匹配 DataType
    },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
        console.log(
            `selectedRowKeys: ${selectedRowKeys}`,
            'selectedRows: ',
            selectedRows
        );
    },
    getCheckboxProps: (record: DataType) => ({
        disabled: record.word === 'Disabled Word', // Column configuration not to be checked
        name: record.word,
    }),
};

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
};

const Component: React.FC = () => {
    const router = useRouter();
    const [fileId, setFileId] = useState('');
    const [tableData, setTableData] = useState<DataType[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // 使用自定义钩子来获取 token
    const token = useAuthToken();

    useEffect(() => {
        // Check if the router is ready and if the query parameters are available
        if (router.isReady) {
            // Access the query parameters using router.query
            const queryFileId = router.query.fileId;
            // If the parameter is available, update the state
            if (queryFileId && typeof queryFileId === 'string') {
                setFileId(queryFileId);
            }
        }
    }, [router.isReady, router.query]);

    useEffect(() => {
        if (fileId) {
            // Start loading
            setLoading(true);
            // Reset error
            setError('');

            fetch(`https://api.mly0110.org.cn:8444/word/word/parse/${fileId}`, {
                headers: {
                    Token: token,
                },
            })
                .then((response) => {
                    // Check if the response is successful
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((originalData) => {
                    // 假设 originalData 就是你的返回对象数组
                    const transformedData: DataType[] = originalData.map(
                        (item: any) => ({
                            key: String(item['#']), // 或其他独一无二的属性
                            word: item['单词'],
                            phonetic: item['音标'],
                            meaning: item['解释'], // 清除换行符
                        })
                    );
                    setTableData(transformedData); // 使用转换后的数据更新状态
                })
                .catch((error) => {
                    // Handle errors, such as network issues
                    setError('Failed to fetch data');
                    console.error('Fetch error:', error);
                })
                .finally(() => {
                    // Stop loading
                    setLoading(false);
                });
        }
    }, [fileId]); // This useEffect runs when `fileId` changes);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <DatePicker onChange={onChange} />
            <Table
                columns={columns}
                dataSource={tableData}
                loading={loading}
                pagination={false}
                rowSelection={{
                    type: 'checkbox',
                    ...rowSelection,
                }}
            />
        </>
    );
};

export default LayoutWord(Component);
