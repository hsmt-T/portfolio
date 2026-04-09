import type { FormInput } from "../../../types/form";
const API_URL = import.meta.env.VITE_API_URL;

export const postForm = async (data: FormInput) => {
    const response = await fetch(`${API_URL}/form`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
    throw new Error("送信に失敗しました");
    }

    return response.json();
};