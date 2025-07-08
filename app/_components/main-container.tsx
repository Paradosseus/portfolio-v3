type MainContainerProps = {
    children: React.ReactNode;
}

const MainContainer = ({children}: MainContainerProps) => {
    return (
        <div className="max-w-7xl mx-auto">{children}</div>
    )
}

export default MainContainer;