import noImg from "../../../assets/img/noImg.jpg";
import type { Interns } from "../../../types/interns";
import "./InternCard.css";

type InternCardProps = {
    data: Interns;
};

const InternCard = ({ data }: InternCardProps) => {
    return (
        <article className="intern-card">
        <div className="intern-card__content">
            <p className="intern-card__company">{data.company_name}</p>
            <h2 className="intern-card__title">{data.title}</h2>

            <dl className="intern-card__details">
            <div className="intern-card__detail">
                <dt>期間：</dt>
                <dd>{data.term}</dd>
            </div>
            <div className="intern-card__detail">
                <dt>内容：</dt>
                <dd>{data.context}</dd>
            </div>
            </dl>
        </div>

        <div className="intern-card__image-wrapper">
            <img
                className="intern-card__image"
                src={data.img_url || noImg}
                alt={`${data.company_name} ${data.title}`}
                loading="lazy"
            />
        </div>
        </article>
    );
};

export default InternCard;
