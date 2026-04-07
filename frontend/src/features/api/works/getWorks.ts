export const getWorks = async () => {
    const response = await fetch("http://127.0.0.1:8787/works", {
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