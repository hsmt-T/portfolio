import React from 'react';
import noImg from "../../../assets/img/NoImg.jpg"; 
import "./WorkCard.css";
import type { Work } from '../../../types/works';

interface WorkCardProps {
  data: Work;
}

const WorkCard: React.FC<WorkCardProps> = ({ data }) => {

  const previewImageUrl = data.img_url || noImg;

  const techLogos =
    data.skills && data.skills.length > 0
      ? data.skills.map((s) => s.icon_url)
      : [noImg];

  return (
    <div className="work-card">
      <div className="work-card__content">
        <h2 className="work-card__title">{data.title}</h2>

        <div className="work-card__details">
          <section className="work-card__section">
            <h3 className="work-card__label">概要：</h3>
            <p className="work-card__description">{data.description}</p>
          </section>

          <section className="work-card__section">
            <h3 className="work-card__label">担当：</h3>
            <span className="work-card__value">{data.role}</span>
          </section>

          <section className="work-card__section">
            <h3 className="work-card__label">Github：</h3>
            {data.github_url ? (
              <a
                href={data.github_url}
                target="_blank"
                rel="noreferrer"
                className="work-card__link"
              >
                {data.github_url}
              </a>
            ) : (
              <span>なし</span>
            )}
          </section>

          <section className="work-card__section work-card__tech-section">
            <h3 className="work-card__label">使用技術：</h3>
            <div className="work-card__tech-logo-list">
              {techLogos.map((logoUrl, index) => (
                <div key={index} className="work-card__tech-logo-wrapper">
                  <img
                    src={logoUrl}
                    alt={`Technology logo ${index + 1}`}
                    className={`work-card__tech-logo ${
                      logoUrl === noImg ? "is-fallback" : ""
                    }`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <div className="work-card__preview">
        <div className="work-card__image-container">
          <img
            src={previewImageUrl}
            alt={data.title}
            className={`work-card__image ${
              previewImageUrl === noImg ? "is-fallback" : ""
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkCard;