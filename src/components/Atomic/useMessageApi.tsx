import { message } from 'antd';
import { useRef } from 'react';

export default function useMessageApi() {
    const messageApiRef = useRef(message);

    const messageLoading = (content: string) => {
        messageApiRef.current.loading(content);
    };

    const messageSuccess = (content: string) => {
        messageApiRef.current.success(content);
    };

    const messageError = (content: string) => {
        messageApiRef.current.error(content);
    };

    const messageWarning = (content: string) => {
        messageApiRef.current.warning(content);
    };

    return { messageLoading, messageSuccess, messageError, messageWarning };
}
