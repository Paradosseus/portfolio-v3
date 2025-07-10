import {techStackIcons} from "../_data/portfolioData";
import Image from "next/image";
import Section from "./section";


const MyTechStackSection = () => {
    return (
     <Section>
        <div className="flex flex-col gap-16 px-[150px]">
            <div className="flex flex-col gap-6 items-center">
                <h3 className="heading-2">My Tech Stack</h3>
                <p className="paragraph max-w -[820px] text-center">Behind every website that catches fire lies a carefully chosen arsenal of technologies. I leverage these cutting-edge tools and frameworks to craft digital solutions with the passionate precision your brand deserves.</p>
            </div>
            <div className="flex flex-wrap gap-16 justify-center">
                {techStackIcons.map((techStackIcon) => {
                    return (
                        <div className="">
                            <Image src={techStackIcon.src} alt={`${techStackIcon.name} icon`} width={48} height={48} title={`${techStackIcon.name} icon`} className="mx-auto" />
                            {/* <p className=" text-center text-[14px]">{techStackIcon.name}</p> */}
                        </div>
                     )
                })}             
            </div>               
        </div>
     </Section>
    )
}

export default MyTechStackSection;