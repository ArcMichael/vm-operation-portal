import useAuthToken from '@/components/Atomic/useAuthToken';
import useMessageApi from '@/components/Atomic/useMessageApi';
import LayoutWord from '@/components/Layout/layout-word';
import { getDetailWithDate } from '@/services/wordService';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useRouter } from 'next/router';
// import Table, { ColumnsType } from "antd/es/table";
import React, { useEffect, useState } from 'react';

interface DataType {
    key: React.Key;
    studyDate: string;
    wordsRemaining: number;
    phonetic: string;
    meaning: string;
    recordDate: string;
}

const Component: React.FC = () => {
    const router = useRouter();
    const { messageLoading, messageSuccess, messageError, messageWarning } =
        useMessageApi();
    const [Date, setDate] = useState('');
    const [tableData, setTableData] = useState<DataType[]>([]);

    // 使用自定义钩子来获取 token
    const token = useAuthToken();

    const loadData = async () => {
        try {
            messageLoading('Loading data...');
            const originalData = await getDetailWithDate(Date, token);
            const transformedData: DataType[] = originalData.map(
                (item: any, index: number) => ({
                    key: index + 1, // 或其他独一无二的属性
                    meaning: item.meaning, // 清除换行符
                    wordProficiencyWord: item.wordProficiencyWord,
                    phonetic: item.phonetic,
                    recordDate: item.recordDate,
                })
            );
            setTableData(transformedData);
            messageSuccess('Data loaded successfully');
        } catch (error) {
            messageError('Error fetching data: ' + error);
        }
    };

    useEffect(() => {
        // Check if the router is ready and if the query parameters are available
        if (router.isReady) {
            // Access the query parameters using router.query
            const queryDate = router.query.date;
            // If the parameter is available, update the state
            if (queryDate && typeof queryDate === 'string') {
                setDate(queryDate);
            }
        }
    }, [router.isReady, router.query]);

    useEffect(() => {
        if (Date) {
            messageWarning('Start loading');
            loadData();
        }
    }, [Date]); // This useEffect runs when `fileId` changes);

    const columns: ColumnsType<DataType> = [
        {
            title: 'recordDate',
            dataIndex: 'recordDate',
            key: 'recordDate',
        },
        {
            title: 'word',
            dataIndex: 'wordProficiencyWord',
            key: 'wordProficiencyWord',
        },
        {
            title: 'phonetic',
            dataIndex: 'phonetic',
            key: 'phonetic',
        },
        {
            title: 'meaning',
            dataIndex: 'meaning',
            key: 'meaning',
        },
    ];

    return <Table columns={columns} dataSource={tableData} />;
};

export default LayoutWord(Component);
