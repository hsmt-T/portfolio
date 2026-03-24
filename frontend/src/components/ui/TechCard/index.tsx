import "./TechCard.css"

type TechCardProps = {
  name: string
  iconUrl?: string
  level: number
}

const TechCard = ({
  name,
  iconUrl,
  level,
}: TechCardProps) => {
  return (
    <div className="tech-card">
      
      <div className="tech-card__icon">
        {iconUrl ? (
          <img src={iconUrl} alt={name} />
        ) : (
          <span>{name.slice(0, 2).toUpperCase()}</span>
        )}
      </div>
      <div className="tech-card__level">
        Level {level}
      </div>
    </div>
  )
}

export default TechCard