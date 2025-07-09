type ButtonProps = {
    children: React.ReactNode;
    variant?: string;
}


const Button = ({children, variant}: ButtonProps) => {
    return (
        <button className={`btn ${variant} flex flex-row items-center gap-2.5`}>
        {children}
        </button>
    )
}

export default Button;