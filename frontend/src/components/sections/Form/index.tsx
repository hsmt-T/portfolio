import Button from "../../ui/Button/Button";
import SectionTitle from "../../ui/SectionTitle/SectionTitle";
import "./Form.css"

const Form = () => {
    return (
        <section className="form" id="form">
            <SectionTitle title="Form"/>
            <div className="form-text">
                <p>最後までご覧いただきありがとうございます。</p>
                <p>もし私やこのサイトについて何かコメントがありましたら</p>
                <p>下記フォームかEmail・Xをご利用ください。</p>
            </div>

            <div className="form-content">
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" />
                    </div>
                </div>
                <div className="form-group full-width">
                    <label htmlFor="comment">Comment</label>
                    <textarea id="comment" name="comment" rows={1}></textarea>
                </div>
            </div>

            <div className="form-actions">
                <Button variant="submit">Send</Button>
            </div>
        </section>
    );
}
export default Form;