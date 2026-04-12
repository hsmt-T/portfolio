import SectionTitle from "../../ui/SectionTitle"
import ScrollDown from "../../ui/ScrollDown";
import "./Top.css";

const Top = () => {
    return (
        <section className="top" id="top">
            <div className="top-inner">
                <SectionTitle title="Welcome Portfolio!!" />
                <ScrollDown/>
            </div>
        </section>
    );
};

export default Top;