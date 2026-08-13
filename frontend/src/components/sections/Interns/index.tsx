import { useEffect, useState } from "react";
import { getInterns } from "../../../features/api/interns/getInterns";
import type { Interns as Intern } from "../../../types/interns";
import InternCard from "../../ui/InternCard";
import SectionTitle from "../../ui/SectionTitle";
import "./Interns.css";

const Interns = () => {
    const [interns, setInterns] = useState<Intern[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchInterns = async () => {
            try {
                const data: Intern[] = await getInterns();
                setInterns(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchInterns();
    }, []);

    return (
        <section className="interns">
        <SectionTitle title="Interns" />

        {loading ? (
            <p className="interns__status">Loading...</p>
        ) : interns.length > 0 ? (
            <div className="interns-container">
            {interns.map((intern) => (
                <InternCard key={intern.id} data={intern} />
            ))}
            </div>
        ) : (
            <p className="interns__status">インターン情報はまだありません。</p>
        )}
        </section>
    );
};

export default Interns;
