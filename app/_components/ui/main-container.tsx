type MainContainerProps = {
    children: React.ReactNode;
}

const MainContainer = ({children}: MainContainerProps) => {
    return (
        <div className="max-w-[1400px] mx-auto p-5">{children}</div>
    )
}

export default MainContainer;