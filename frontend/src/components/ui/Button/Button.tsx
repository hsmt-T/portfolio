import "./Button.css"

type Props = {
    children: React.ReactNode
    variant?: "submit"
    type?: "button" | "submit" | "reset"
    onClick?: () => void
}

const Button = ({ children, variant }: Props) => {
    return (
        <button className={`btn ${variant ? `btn-${variant}` : ""}`}>
            {children}  
        </button>
    )
}

export default Button