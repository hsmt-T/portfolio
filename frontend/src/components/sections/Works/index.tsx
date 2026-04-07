import { useEffect, useState } from "react";
import SectionTitle from "../../ui/SectionTitle";
import WorkCard from "../../ui/WorkCard";
import { getWorks } from "../../../features/api/works/getWorks";
import "./Works.css";
import type { Work } from "../../../types/works";

const Works = () => {
  const [works, setWorks] = useState<Work[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const data: Work[] = await getWorks();
        setWorks(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchWorks();
  }, []);

  return (
    <section className="works">
      <SectionTitle title="Works" />

      <div className="works-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          works.map((work) => (
            <WorkCard key={work.id} data={work} />
          ))
        )}
      </div>
    </section>
  );
};

export default Works;