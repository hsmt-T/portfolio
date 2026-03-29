import "./SectionTitle.css"

type Props = {
    title: string
}

const SectionTitle = ({ title }: Props) => {
    return (
        <div className="section-title">
            <p>{title}</p>
        </div>
    )
}

export default SectionTitle