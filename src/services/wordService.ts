export const fetchWords = async (fileId: string, token: string) => {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/csv/parse/${fileId}`;
    const response = await fetch(apiUrl, {
        headers: { Token: token },
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return response.json();
};
