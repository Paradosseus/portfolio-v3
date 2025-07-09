type SectionProps = {
    children: React.ReactNode
}

const Section = ({children}: SectionProps) => {
    return (
        <div className='section'>
            {children}
        </div>
    )
}

export default Section;