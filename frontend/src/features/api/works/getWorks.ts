const API_URL = import.meta.env.VITE_API_URL;

export const getWorks = async () => {
    const response = await fetch(`${API_URL}/works`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
    throw new Error("送信に失敗しました");
    }

    return response.json();
};