import "./PortfolioItemCard.css"
import type { PortfolioItem } from "../../../types/portfolioItem";

const PortfolioItemCard = ({ title, description }: PortfolioItem) => {
    return (
        <div className="portfolio-item">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default PortfolioItemCard;