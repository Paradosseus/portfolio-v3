type CardProps = {
    children: React.ReactNode;
    padding?: string;
}


const Card = ({children = 'Content', padding = 'p-4'}: CardProps) => {
    return (
        <div className={`card ${padding} flex-1`}>
            {children}
        </div>
    )
}

export default Card;