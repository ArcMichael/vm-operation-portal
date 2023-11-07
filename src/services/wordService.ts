import { DataType } from '@/components/Molecular/Table/molecular-table-word';

/**
 * 从已经上穿的 .csv 中获取数据
 * @param fileId 文件名
 * @param token 请求令牌
 * @returns 数据格式 ("#":string, "单词":string, "音标": string, "解释": string, "笔记": string }[]
 */
export const fetchWords = async (fileId: string, token: string) => {
    try {
        const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/csv/parse/${fileId}`;
        const response = await fetch(apiUrl, {
            headers: { Token: token },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return response.json();
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error;
    }
};

export const saveWords = async (
    words: DataType[],
    recordDate: string,
    token: string
) => {
    try {
        const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/upload`;
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Token: token,
            },
            body: JSON.stringify({ wordsData: words, recordDate }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return await response.json();
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error;
    }
};
