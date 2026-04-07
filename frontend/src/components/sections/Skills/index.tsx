import { useEffect, useState } from "react";
import TechCard from "../../ui/TechCard";
import "./Skills.css";
import noImg from "../../../assets/img/Noimg.jpg"; 
import SectionTitle from "../../ui/SectionTitle";
import { getSkills } from "../../../features/api/skills/getSkills";
import type { Skill } from "../../../types/skills";

const Skills = () => {
    const [skills, setSkills] = useState<Skill[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSkills = async () => {
        try {
            const data: Skill[] = await getSkills();
            setSkills(data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
        };

        fetchSkills();
    }, []);

    return (
        <section className="skills">
            <SectionTitle title="Skills" />
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="skills-container">
                {skills.map((skill) => (
                    <TechCard
                    key={skill.id}
                    name={skill.name}
                    icon_url={skill.icon_url || noImg}
                    />
                ))}
                </div>
            )}
        </section>
    );
};

export default Skills;