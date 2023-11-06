import React, { useState } from 'react';
import LayoutWord from '@/components/Layout/layout-word';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { Button, Input, message, Space, Upload } from 'antd';
import useAuthToken from '@/components/Atomic/useAuthToken';
import { useRouter } from 'next/router';

const { Search } = Input;

// Define an enum to handle the upload statuses
// eslint-disable-next-line no-unused-vars
enum UploadStatus {
    // eslint-disable-next-line no-unused-vars
    Ready = 'ready',
    // eslint-disable-next-line no-unused-vars
    Uploading = 'uploading',
    // eslint-disable-next-line no-unused-vars
    Done = 'done',
    // eslint-disable-next-line no-unused-vars
    Error = 'error',
}

// Define interface for function arguments for better type safety
interface IUseUploadProps {
    token: string;
    onUploadStatusChange: any;
    onUploadFileNameChange: any;
}

const useUploadProps = ({
    token,
    onUploadStatusChange,
    onUploadFileNameChange,
}: IUseUploadProps): UploadProps => {
    return {
        name: 'file',
        action: 'https://api.mly0110.org.cn:8444/word/word/upload/csv',
        headers: {
            token,
        },
        onChange(info) {
            const { status, response, name } = info.file;
            const fileStatus = status as UploadStatus;
            onUploadStatusChange(fileStatus);

            if (fileStatus === UploadStatus.Done) {
                const filename = response?.filename;
                if (filename) {
                    onUploadFileNameChange(filename);
                    message.success(`${name} file uploaded successfully`);
                }
            } else if (fileStatus === UploadStatus.Error) {
                message.error(`${name} file upload failed.`);
            }
        },
    };
};

const Component: React.FC = () => {
    const router = useRouter();
    const [uploadStatus, setUploadStatus] = useState('ready');
    const [uploadFileName, setUploadFileName] = useState('');

    // 使用自定义钩子来获取 token
    const token = useAuthToken();

    // 使用 token 来获取上传属性
    const uploadProps = useUploadProps({
        token,
        onUploadStatusChange: setUploadStatus,
        onUploadFileNameChange: setUploadFileName,
    });

    const navigateToWordList = () => {
        router.push(`/word/list?fileId=${uploadFileName}`);
    };

    return (
        <Space direction="vertical" size="middle">
            <Upload {...uploadProps}>
                <Button icon={<UploadOutlined />}>上传单词本...</Button>
            </Upload>
            <Search
                placeholder="Enter .csv filename"
                value={uploadFileName}
                enterButton={
                    uploadStatus === UploadStatus.Done ? 'Parse' : uploadStatus
                }
                size="middle"
                disabled={uploadStatus !== 'done'}
                onSearch={navigateToWordList}
            />
        </Space>
    );
};

export default LayoutWord(Component);
