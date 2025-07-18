import Section from "./section";
import Button from "./ui/button";
import Image from "next/image";

const AboutSection = () => {
    return (
        <Section>
                <div className="flex flex-col lg:gap-16 gap-12">
                    <div className="flex lg:flex-row flex-col lg:justify-between justify-start lg:gap-0 gap-6">
                        <h2 className="heading-2">About</h2>
                        <div className="flex flex-row gap-6">
                            <p className="paragraph max-w-[720px]">Hey, FJ (Francis Joshua) here! With my specialization in  Web Design and Web Development, I aid businesses in establishing their online presence by crafting websites that catch fire in the eyes of the viewers and ignite real results.</p>
                        </div>   
                    </div> 
                    <div className="max-w-full lg:h-[560px] h-[320px] bg-[#D9D9D9] rounded-lg "></div>                  
                </div>

                
        </Section>
    )
}

export default AboutSection;