import Image from "next/image";
import Section from "./section"
import Card from "./ui/card";
import { servicesData } from "../_data/portfolioData";

const ServicesSection = () => {
    return (
        <Section>
           <div className="flex flex-col lg:gap-16 gap-12">
                <div className="flex lg:flex-row flex-col lg:justify-between justify-start lg:gap-0 gap-6">
                    <h2 className="heading-2">Services</h2>
                    <p className="paragraph max-w-[720px]">From design to development, I deliver comprehensive website solutions tailored to ignite your brand's potential — built with passionate precision to engage audiences, drive performance, and fuel explosive business growth online.</p>
                </div>
                <div className="flex lg:flex-row flex-col gap-6">
                    {servicesData.map((service, index) => {
                        return (
                            <Card padding="lg:p-8 p-6" key={index} >
                                <div className=" flex flex-col justify-between lg:h-[400px] h-[300px] leading-none gap-4">
                                    <Image src={service.iconUrl} alt={`${service.title} icon`} width={24} height={24} className="lg:h-[48px] lg:w-[48px] h-[36px] w-[36px]"/>
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