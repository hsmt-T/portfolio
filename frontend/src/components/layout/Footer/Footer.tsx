import SocialLinks from "../../ui/SocialLinks/SocialLinks"
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer-text footer-inner">TOPへ</p>
            <SocialLinks/>

            <p className="footer-text footer-inner">© 2026 Hashimoto Portfolio</p>
        </footer>
    )
}

export default Footer