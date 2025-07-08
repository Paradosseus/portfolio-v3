type ButtonProps = {
    children: React.ReactNode;
    variant?: string;
}


const Button = ({children, variant}: ButtonProps) => {
    return (
        <button className={`btn-primary`}>
        {children}
        </button>
    )
}

export default Button;