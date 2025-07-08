type CardProps = {
    children: React.ReactNode;
    padding?: string;
}


const Card = ({children = 'Content', padding = 'p-4'}: CardProps) => {
    return (
        <div className={`card ${padding}`}>
            {children}
        </div>
    )
}

export default Card;