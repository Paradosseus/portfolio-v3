import Image from "next/image";
import Section from "./section"
import Card from "./ui/card";
import { servicesData } from "../_data/portfolioData";

const ServicesSection = () => {
    return (
        <Section>
           <div className="flex flex-col gap-16">
                <div className="flex flex-row justify-between">
                    <h2 className="heading-2">Services</h2>
                    <p className="paragraph max-w-[720px]">From design to development, I deliver comprehensive website solutions tailored to ignite your brand's potential — built with passionate precision to engage audiences, drive performance, and fuel explosive business growth online.</p>
                </div>
                <div className="flex flex-row gap-6">
                    {servicesData.map((service, index) => {
                        return (
                            <Card padding="p-8" key={index} >
                                <div className=" flex flex-col justify-between h-[400px] leading-none gap-4">
                                    <Image src={service.iconUrl} alt={`${service.title} icon`} width={48} height={48}/>
                                    <div className="flex flex-col gap-4">
                                        <h4 className="heading-4">{service.title}</h4>
                                        <p className="paragraph-2">{service.description}</p>
                                    </div>
                                </div>
                            </Card>
                        )
                    })}



                </div>
           </div>
        </Section>
    )
}

export default ServicesSection;