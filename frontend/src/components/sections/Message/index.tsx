import SectionTitle from "../../ui/SectionTitle/SectionTitle"
import "./Message.css"

const Message = () => {
    return (
        <section className="message">
            <SectionTitle title="Message" />
            <div className="message-inner">
                <p>ただコードを書くのではなく</p>
                <p>「なぜその設計や実装を選択したのか」を説明できるエンジニアを目指しています。</p>
                <p>そのため、学習や開発では技術の理解だけでなく設計意図や技術選定の理由を意識しながら取り組んでいます。</p>

                <p className="spacer">将来的には</p>
                <p>PdMやPMのようにプロダクト全体を俯瞰しながら価値を生み出せるエンジニアになることが目標です。</p>
                <p>その実現のために、技術力だけでなく開発経験や知見を積み重ねながら成長していきたいと考えています。</p>

                <p className="spacer">まだ学習途中ではありますが</p>
                <p>開発を通して継続的に成長し、価値を提供できるエンジニアを目指していきます。</p>
            </div>
        </section>
    )
}

export default Message