import "./TechCard.css"

type TechCardProps = {
  name: string
  icon_url?: string
}

const TechCard = ({
  name,
  icon_url,
}: TechCardProps) => {
  return (
    <div className="tech-card">
      
      <div className="tech-card__icon">
        {icon_url ? (
          <img src={icon_url} alt={name} />
        ) : (
          <span>{name.slice(0, 2).toUpperCase()}</span>
        )}
      </div>
      <div className="tech-card__name">
        {name}
      </div>
    </div>
  )
}

export default TechCard