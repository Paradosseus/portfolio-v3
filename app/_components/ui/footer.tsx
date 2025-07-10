import Image from "next/image";

Image
const Footer = () => {
    return (
        <footer className="pt-16 pb-8 flex flex-col gap-8">
            <div className="flex flex-row justify-between items-center">
                <Image src="/logo.svg" width={56} height={56} alt="logo"/>
                <div>
                    <ul className="flex flex-row gap-11">
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