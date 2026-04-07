import { useSendForm } from "../../../features/api/form/useSendForm";
import type { FormEvent } from "react";
import Button from "../../ui/Button";
import SectionTitle from "../../ui/SectionTitle";
import "./Form.css";

const Form = () => {
    const { sendMessage, isLoading } = useSendForm();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        
        const emailValue = formData.get("email") as string;

        const data = {
            name: formData.get("name") as string,
            email: emailValue || null, 
            message: formData.get("message") as string,
        };

        await sendMessage(data);
        (e.target as HTMLFormElement).reset();
    };

    return (
        <section className="form" id="form">
            <SectionTitle title="Form" />
            <div className="form-text">
                <p>最後までご覧いただきありがとうございます。</p>
                <p>もし私やこのサイトについて何かコメントがありましたら</p>
                <p>下記フォームかEmail・Xをご利用ください。</p>
            </div>

            <form className="form-content" id="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email"  />
                    </div>
                </div>
                <div className="form-group full-width">
                    <label htmlFor="comment">Comment</label>
                    <textarea
                        id="comment"
                        name="message"
                        rows={1}
                        required
                    ></textarea>
                </div>
            </form>
            <div className="form-actions">
                    <Button 
                        variant="submit" 
                        type="submit" 
                        form="contact-form" 
                        disabled={isLoading}
                    >
                        {isLoading ? "Sending..." : "Send"}
                    </Button>
            </div>
        </section>
    );
};

export default Form;