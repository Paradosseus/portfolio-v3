import Image from "next/image";


const Footer = () => {
    return (
        <footer className="max-w-[1400px] mx-auto lg:px-0 px-5 lg:pt-16 pt-12 pb-8 flex flex-col gap-8">
            <div className="flex lg:flex-row flex-col lg:justify-between justify-start lg:gap-0 gap-8 lg:items-center items-start">
                <Image src="/logo.svg" width={56} height={56} alt="logo"/>
                <div>
                    <ul className="flex lg:flex-row flex-col gap-11">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">My Portfolio</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="max-w-full h-[1px] border-t border-[#fafafa10] "></div>
            <p className="text-sm">©2023 Francis Joshua Collado. All rights reserved.</p>
        </footer>
    )
}

export default Footer;