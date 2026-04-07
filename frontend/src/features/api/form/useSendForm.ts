import { useState } from "react";
import { postForm } from "./postForm"
import type { FormInput } from "./types";

export const useSendForm = () => {
    const [isLoading, setIsLoading] = useState(false);

    const sendMessage = async (data: FormInput) => {
        setIsLoading(true);
        try {
            await postForm(data);
            alert("送信完了！");
        } catch (error) {
            console.log(error)
            alert("エラーが発生しました");
        } finally {
            setIsLoading(false);
        }
    };

    return { sendMessage, isLoading };
};