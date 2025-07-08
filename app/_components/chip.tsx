type ChipProps = {
    children: React.ReactNode;
}

const Chip = ({children}: ChipProps) => {
    return (
        <div className="chip">
            {children}
        </div>
    )
}

export default Chip;