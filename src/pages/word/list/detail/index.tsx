import LayoutWord from '@/components/Layout/layout-word';
import { Space, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import Link from 'next/link';
// import Table, { ColumnsType } from "antd/es/table";
import React from 'react';

interface DataType {
    key: React.Key;
    studyDate: Date;
    newWordsLearned: number;
    wordsRemaining: number;
}

const columns: ColumnsType<DataType> = [
    {
        title: '日期',
        dataIndex: 'date',
        key: 'studyDate',
    },
    {
        title: '新增',
        dataIndex: 'newWordsLearned',
        key: 'newWordsLearned',
    },
    {
        title: '遗失',
        dataIndex: 'wordsRemaining',
        key: 'wordsRemaining',
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <Link href={`/word/list/detail?${record.studyDate}`}>
                    Details
                </Link>
            </Space>
        ),
    },
];

const data: DataType[] = [
    {
        key: 1,
        studyDate: new Date('2023-10-15'),
        newWordsLearned: 100,
        wordsRemaining: 50,
    },
    {
        key: 2,
        studyDate: new Date('2023-10-16'),
        newWordsLearned: 110,
        wordsRemaining: 40,
    },
    {
        key: 3,
        studyDate: new Date('2023-10-17'),
        newWordsLearned: 120,
        wordsRemaining: 30,
    },
];

const Component: React.FC = () => <Table columns={columns} dataSource={data} />;

export default LayoutWord(Component);
