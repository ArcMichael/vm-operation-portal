import { ColumnsType } from 'antd/es/table';

interface DataType {
    key: string; // Unique identifier for each row, which can be "#" from your data
    word: string; // For "单词"
    phonetic: string; // For "音标"
    meaning: string; // For "解释"
}

const wordTableColumns: ColumnsType<DataType> = [
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

export { wordTableColumns };
export type { DataType };
