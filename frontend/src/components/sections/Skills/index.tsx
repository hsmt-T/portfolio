import TechCard from "../../ui/TechCard"
import "./Skills.css"
import noImg from "../../../assets/img/noImg.png"; 
import SectionTitle from "../../ui/SectionTitle/SectionTitle";

const Skills = () => {
    return(
        <section className="skills">
            <SectionTitle title="skills"/>
            <TechCard name="React" iconUrl={noImg} level={3}  />
        </section>
    )
}

export default Skills;