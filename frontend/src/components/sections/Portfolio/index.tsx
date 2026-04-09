import SectionTitle from "../../ui/SectionTitle";
import "./Portfolio.css"
import PortfolioItemCard from "../../ui/PortfolioItemCard";
import ScrollDown from "../../ui/ScrollDown";

const Portfolio = () => {
    return (
        <section className="portfolio" id="portfolio">
            <SectionTitle title="Portfolio"/>
            <div className="portfolio-grid">
                <PortfolioItemCard 
                    title="Works" 
                    description="今まで開発した作品をいくつか載せています"
                />
                <PortfolioItemCard 
                    title="Skills" 
                    description="使用経験がある技術を記載しています"
                />
                {/* <PortfolioItemCard 
                    title="Intern" 
                    description="参加させて頂いたインターンを記載しています。"
                />
                <PortfolioItemCard 
                    title="Event" 
                    description="参加させて頂いたイベントを記載しています。"
                /> */}
            </div>
            <ScrollDown/>
        </section>
    )
}

export default Portfolio;
