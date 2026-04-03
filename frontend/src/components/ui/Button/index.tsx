import "./Button.css"

type Props = {
    children: React.ReactNode
    variant?: "submit"
    type?: "button" | "submit" | "reset"
    disabled?: boolean 
    form?: string;
    onClick?: () => void
}

const Button = ({ children, variant, type = "button", disabled, form, onClick }: Props) => {
    return (
        <button 
        type={type} 
        disabled={disabled}
        form={form}
        onClick={onClick}   
        className={`btn ${variant ? `btn-${variant}` : ""}`}
        >
        {children}  
        </button>
    )
}

export default Button