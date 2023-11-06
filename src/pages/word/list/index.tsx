import LayoutWord from '@/components/Layout/layout-word';
import { Space, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import Link from 'next/link';
// import Table, { ColumnsType } from "antd/es/table";
import React from 'react';

interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Id',
        dataIndex: 'key',
        key: 'id',
        render: (text) => <a>{text}</a>,
    },
    {
        title: '日期',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'New',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Leftover',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Details {record.name}</a>
                <Link href={`/word/list/detail?2023-10-15`}>2023-10-15</Link>
            </Space>
        ),
    },
];

const data: DataType[] = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];

const Component: React.FC = () => <Table columns={columns} dataSource={data} />;

export default LayoutWord(Component);
