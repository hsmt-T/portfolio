import type { JSX } from "react";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./SocialLinks.css";

type SocialType = "github" | "twitter" | "mail";

const SocialLinks = () => {
    const links: { type: SocialType; url: string }[] = [
        { type: "github", url: "https://github.com/hsmt-T" },
        { type: "twitter", url: "https://x.com/hsmt2005" },
        { type: "mail", url: "mailto:ittuyo.hashi244@gmail.com" },
    ];

    const iconMap: Record<SocialType, JSX.Element> = {
        github: <FaGithub />,
        twitter: <FaXTwitter />,
        mail: <FaEnvelope />,
    };

    return (
        <div className="container">
        {links.map((link, index) => (
            <div className="item" key={index}>
            <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
            >
                {iconMap[link.type]}
            </a>
            </div>
        ))}
        </div>
    );
};

export default SocialLinks;