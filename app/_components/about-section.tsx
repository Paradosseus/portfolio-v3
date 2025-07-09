import Section from "./section";
import Button from "./button";
import Image from "next/image";
import techStackIcons from "../_data/techStackIcons";
const AboutSection = () => {
    return (
        <Section>
                <div className="flex flex-col gap-8">
                    <h2 className="heading-2">About</h2>
                    <div className="flex flex-col gap-12">
                        <div className="flex flex-row justify-between">
                            <div className="max-w-[1000px] flex flex-row gap-6">
                                <p className="paragraph max-w-[560px]">Hey, FJ (Francis Joshua) here! With my specialization in  Web Design and Web Development, I aid businesses in establishing their online presence by crafting websites that catch fire in the eyes of the viewers and ignite real results.</p>
                            </div>
                            <Button variant="primary">Let's Work Together</Button>
                        </div>
                        <div className="w-full h-[500px] bg-[#D9D9D9] rounded-lg"></div>
                    </div>
                </div>

                <div className="flex flex-col gap-8">
                    <h3 className="heading-3 text-center">My Tech Stack</h3>
                    <div className="flex flex-wrap justify-center gap-16 ">
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

export default AboutSection;