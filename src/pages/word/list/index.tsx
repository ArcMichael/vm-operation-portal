import useAuthToken from '@/components/Atomic/useAuthToken';
import useMessageApi from '@/components/Atomic/useMessageApi';
import LayoutWord from '@/components/Layout/layout-word';
import { getWordLearningData } from '@/services/wordService';
import { Button, Space, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useRouter } from 'next/router';
// import Table, { ColumnsType } from "antd/es/table";
import React, { useEffect, useState } from 'react';

interface DataType {
    key: React.Key;
    studyDate: string;
    totalWords: number;
    newWordsLearned: number;
    wordsRemaining: number;
}

const Component: React.FC = () => {
    const router = useRouter();
    const [wordData, setWordData] = useState<DataType[]>([]); // State to hold the fetched data
    const { messageLoading, messageSuccess, messageError, messageWarning } =
        useMessageApi();

    // 使用自定义钩子来获取 token
    const token = useAuthToken();

    const columns: ColumnsType<DataType> = [
        {
            title: 'study date',
            dataIndex: 'studyDate',
            key: 'studyDate',
        },
        {
            title: 'total Words',
            dataIndex: 'totalWords',
            key: 'totalWords',
        },
        {
            title: 'new Words Learned',
            dataIndex: 'newWordsLearned',
            key: 'newWordsLearned',
        },
        {
            title: 'words Remaining',
            dataIndex: 'wordsRemaining',
            key: 'wordsRemaining',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button
                        type="link"
                        onClick={() =>
                            router.push(
                                `/word/list/detail?date=${record.studyDate}`
                            )
                        }
                    >
                        Details
                    </Button>
                </Space>
            ),
        },
    ];

    const loadData = async () => {
        try {
            messageLoading('Loading data...');
            // messageApi.loading('Loading data...');
            // Assuming `getWordLearningData` is a function that makes an API call
            // and returns the data in the expected format.
            const fetchedData = await getWordLearningData(token);
            // Transform data to match the DataType interface if needed
            const transformedData = fetchedData.map(
                (item: DataType, index: number) => ({
                    key: index, // or use a unique id from the item if available
                    studyDate: item.studyDate,
                    totalWords: item.totalWords,
                    newWordsLearned: item.newWordsLearned,
                    wordsRemaining: item.wordsRemaining,
                })
            );
            setWordData(transformedData); // Update the state with the transformed data
            messageSuccess('Data loaded successfully');
            // messageApi.success('Data loaded successfully');
        } catch (error) {
            messageError('Error fetching data');
            console.log(error);
        }
    };

    useEffect(() => {
        messageWarning('Start Loading...');
        loadData();
    }, []); // This useEffect runs when `fileId` changes);

    return <Table columns={columns} dataSource={wordData} />;
};

export default LayoutWord(Component);
