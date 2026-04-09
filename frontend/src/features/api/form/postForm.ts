import type { FormInput } from "../../../types/form";

export const postForm = async (data: FormInput) => {
    const response = await fetch("http://127.0.0.1:8787/form", {
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