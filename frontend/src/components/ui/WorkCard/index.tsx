import React from 'react';
// noImgをインポート（パスはプロジェクトの構造に合わせて調整してください）
import noImg from "../../../assets/img/noImg.png"; 
import "./WorkCard.css";

// APIから返ってくるデータの型定義
interface WorkData {
  title: string;
  description: string;
  role: string;
  githubUrl: string;
  imageUrl?: string; // 画像がない場合を考慮してOptionalに
  techLogos?: string[]; // ロゴ配列がない場合を考慮してOptionalに
}

interface WorkCardProps {
  data: WorkData;
}

const WorkCard: React.FC<WorkCardProps> = ({ data }) => {
  // プレビュー画像のURLを決定（データがなければnoImgを使用）
  const previewImageUrl = data.imageUrl || noImg;

  // 技術ロゴの配列を決定（データがなければnoImgを1つ入れた配列にする）
  const techLogos = data.techLogos && data.techLogos.length > 0 
    ? data.techLogos 
    : [noImg];

  return (
    <div className="work-card">
      {/* 左セクション：テキスト詳細 */}
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
            <a href={data.githubUrl} target="_blank" rel="noreferrer" className="work-card__link">
              {data.githubUrl}
            </a>
          </section>

          <section className="work-card__section work-card__tech-section">
            <h3 className="work-card__label">使用技術：</h3>
            <div className="work-card__tech-logo-list">
              {techLogos.map((logoUrl, index) => (
                <div key={index} className="work-card__tech-logo-wrapper">
                  <img 
                    src={logoUrl} 
                    alt={`Technology logo ${index + 1}`} 
                    // noImgが表示されている場合にスタイルを変えるためのクラス
                    className={`work-card__tech-logo ${logoUrl === noImg ? 'is-fallback' : ''}`}
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
            // noImgが表示されている場合にスタイルを変えるためのクラス
            className={`work-card__image ${previewImageUrl === noImg ? 'is-fallback' : ''}`}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkCard;