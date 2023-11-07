export const fetchWords = async (fileId: string, token: string) => {
    const response = await fetch(
        `https://api.mly0110.org.cn:8444/word/word/parse/${fileId}`,
        {
            headers: { Token: token },
        }
    );

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return response.json();
};
