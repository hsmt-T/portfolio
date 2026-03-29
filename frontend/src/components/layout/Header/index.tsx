import "./Header.css"

const Header = ()=> {
    return (
        <header className="header">
            <nav className="nav">
                <a href="#top">トップ</a>
                <a href="#profile">プロフィール</a>
                <a href="#portfolio">ポートフォリオ</a>
                <a href="#message">メッセージ</a>
                <a href="#form">フォーム</a>
            </nav>
        </header>
    )
}

export default Header