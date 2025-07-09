import Image from "next/image";
import Section from "./section"
import Card from "./card";


const ServicesSection = () => {
    return (
        <Section>
           <div>
                <div className="flex flex-row justify-between">
                    <h2 className="heading-2">Services</h2>
                    <p className="paragraph max-w-[560px]">From design to development, I deliver comprehensive website solutions tailored to ignite your brand's potential — built with passionate precision to engage audiences, drive performance, and fuel explosive business growth online.</p>
                </div>
                <div className="flex flex-row gap-6">
                    <Card padding="p-8">
                        <div className=" flex flex-col justify-between h-[480px] leading-none gap-4">
                            <Image src="/icons/services/frontendDevelopment.svg" alt="frontend development icon" width={48} height={48} title="frontend development icon"/>
                            <div>
                                <h4 className="text-[40px] font-medium">Web/Mobile Design</h4>
                                <p className="paragraph">I design clean and responsive interfaces that deliver a smooth user experience across both the web and mobile devices.</p>
                            </div>
                        </div>
                    </Card>
                    <Card padding="p-8">
                        <div className=" flex flex-col justify-between h-[480px] leading-none gap-4">
                            <Image src="/icons/services/frontendDevelopment.svg" alt="frontend development icon" width={48} height={48} title="frontend development icon"/>
                            <div>
                                <h4 className="text-[40px] font-medium">Web/Mobile Design</h4>
                                <p className="paragraph">I design clean and responsive interfaces that deliver a smooth user experience across both the web and mobile devices.</p>
                            </div>
                        </div>
                    </Card>
                    <Card padding="p-8">
                        <div className=" flex flex-col justify-between h-[480px] leading-none gap-4">
                            <Image src="/icons/services/frontendDevelopment.svg" alt="frontend development icon" width={48} height={48} title="frontend development icon"/>
                            <div>
                                <h4 className="text-[40px] font-medium">Web/Mobile Design</h4>
                                <p className="paragraph">I design clean and responsive interfaces that deliver a smooth user experience across both the web and mobile devices.</p>
                            </div>
                        </div>
                    </Card>
                    

                </div>
           </div>
        </Section>
    )
}

export default ServicesSection;