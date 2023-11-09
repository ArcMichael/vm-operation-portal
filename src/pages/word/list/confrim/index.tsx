import useAuthToken from '@/components/Atomic/useAuthToken';
import LayoutWord from '@/components/Layout/layout-word';
import { Button, DatePicker, Flex, Table } from 'antd';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { fetchWords, saveWords } from '@/services/wordService';
import { wordTableColumns } from '@/components/Molecular/Table/molecular-table-word';
import type { DataType } from '@/components/Molecular/Table/molecular-table-word';
import useMessageApi from '@/components/Atomic/useMessageApi';

const Component: React.FC = () => {
    const router = useRouter();
    const [fileId, setFileId] = useState('');
    const [tableData, setTableData] = useState<DataType[]>([]);
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [selectedTable, setSelectedTable] = useState<DataType[]>([]);
    const [saveDisable, setSaveDisable] = useState<boolean>(true);
    const { messageLoading, messageSuccess, messageError, messageWarning } =
        useMessageApi();
    // 使用自定义钩子来获取 token
    const token = useAuthToken();

    const onSave = async () => {
        if (selectedDate && selectedTable.length > 0) {
            try {
                messageLoading('Saving data...');
                // 调用保存数据的服务函数
                await saveWords(selectedTable, selectedDate, token);
                messageSuccess('Data saved successfully');
            } catch (error) {
                messageError('Error saving data: ' + error);
            }
        } else {
            messageError('Please select a date and at least one word.');
        }
    };

    const loadData = async () => {
        try {
            messageLoading('Loading data...');
            const originalData = await fetchWords(fileId, token);
            const transformedData: DataType[] = originalData.map(
                (item: any, index: number) => ({
                    key: index + 1, // 或其他独一无二的属性
                    word: item['单词'],
                    phonetic: item['音标'],
                    meaning: item['解释'], // 清除换行符
                })
            );
            setTableData(transformedData);
            messageSuccess('Data loaded successfully');
        } catch (error) {
            messageError('Error fetching data: ' + error);
        }
    };

    useEffect(() => {
        if (selectedDate !== '' && selectedTable.length > 0) {
            setSaveDisable(false);
        } else {
            setSaveDisable(true);
        }
    }, [selectedDate, selectedTable]);

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
            messageWarning('Start loading');
            loadData();
        }
    }, [fileId]); // This useEffect runs when `fileId` changes);

    return (
        <>
            <Flex
                wrap="wrap"
                gap="small"
                className="site-button-ghost-wrapper"
                style={{ marginBottom: '24px' }}
            >
                <DatePicker
                    onChange={(date, dateString) => {
                        console.log(date, dateString);
                        setSelectedDate(dateString); // 更新状态
                    }}
                />
                <Button
                    type="primary"
                    ghost
                    onClick={() => onSave()}
                    disabled={saveDisable}
                >
                    Save
                </Button>
            </Flex>

            <Table
                columns={wordTableColumns}
                dataSource={tableData}
                pagination={false}
                rowSelection={{
                    type: 'checkbox',
                    onChange: (
                        selectedRowKeys: React.Key[],
                        selectedRows: DataType[]
                    ) => {
                        console.log(selectedRows);
                        setSelectedTable(selectedRows);
                    },
                    getCheckboxProps: (record: DataType) => ({
                        disabled: record.word === 'Disabled Word', // Column configuration not to be checked
                        name: record.word,
                    }),
                }}
            />
        </>
    );
};

export default LayoutWord(Component);
export type { DataType };
