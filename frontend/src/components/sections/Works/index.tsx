import SectionTitle from "../../ui/SectionTitle";
import WorkCard from "../../ui/WorkCard";
import { worksData } from "../../../mock/worksData";
import "./Works.css";

const Works = () => {
  return (
    <section className="works">
      <SectionTitle title="Works"/>
      <div className="works-container">
        {worksData.map((work, index) => (
          <WorkCard key={index} data={work} />
        ))}
      </div>
    </section>
  );
}

export default Works;