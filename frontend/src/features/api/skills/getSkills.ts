const API_URL = import.meta.env.VITE_API_URL;

export const getSkills = async () => {
    const response = await fetch(`${API_URL}/skills`, {
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