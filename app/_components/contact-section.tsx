    import Image from "next/image";
    import Section from "./section";

    const ContactSection = () => {
        return (
            <Section>
                <div className="flex flex-col lg:gap-16 gap-12">
                    <div className="flex flex-col gap-8">
                        <h1 className="heading-1">Let’s Talk About Your Project</h1>
                        <p className="paragraph-1">Crafting websites that ignite brands and deliver flawless digital experiences—through bold design and deliberate development.</p>
                    </div>
                    <div className="flex flex-row gap-12 rounded-[var(--border-radius)] border border-[var(--card-border-color)] lg:p-12"> 
                        <div className="flex flex-col gap-12">
                            <div className="flex flex-col gap-6">
                                <p className="lg:text-2xl">Alternatively, you can reach out to me using the contact details below:</p>
                                {/* Contact details */}
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-row gap-2">
                                        <Image src="./icons/ContactUs/email.svg" alt="email icon" width={24} height={24} className="h-[24px] w-[24px]"/>
                                        <div>
                                            <p className="font-semibold">Email Address</p>
                                            <a href="mailto:colladofrancisjoshua@gmail.com"><p>colladofrancisjoshua@gmail.com</p></a>
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-2">
                                        <Image src="./icons/ContactUs/whatsapp.svg" alt="email icon" width={24} height={24} className="h-[24px] w-[24px]"/>
                                        <div>
                                            <p className="font-semibold">WhatsApp</p>
                                            <a href="mailto:colladofrancisjoshua@gmail.com"><p>colladofrancisjoshua@gmail.com</p></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <p className="text-xl">Connect with Me</p>
                                <div className="flex flex-row gap-6">
                                    <div className="flex flex-row gap-2">
                                        <Image src="./icons/ContactUs/linkedin.svg" alt="email icon" width={24} height={24} className="h-[24px] w-[24px]"/>
                                        <p className="font-semibold">LinkedIn</p>
                                    </div>
                                    <div className="flex flex-row gap-2">
                                        <Image src="./icons/ContactUs/linkedin.svg" alt="email icon" width={24} height={24} className="h-[24px] w-[24px]"/>
                                        <p className="font-semibold">LinkedIn</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>FORM HERE</div>
                    </div>
                </div>
            </Section>
        )
    }

    export default ContactSection;