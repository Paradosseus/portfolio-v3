import Section from "./section";
import Button from "./ui/button";
import Link from "next/link";
const CtaSection = () => {


    return (
        <Section>
            <div className="lg:p-12 p-6 border border-[#CB1B1B] rounded-lg flex flex-col gap-8 justify-center items-center lg:h-auto h-[400px]">
                <div className="flex flex-col gap-8 text-center">
                    <h3 className="heading-3">Ready to Ignite Your Online Success?</h3>
                    <p className="paragraph">Don't let your business blend into the background. Let's craft a website that catches fire with your audience and drives real results for your brand.</p>
                </div>
               <Link href={"/contact"}><Button variant="primary">Set My Brand Ablaze Online</Button></Link>
            </div>
        </Section>
    )
}

export default CtaSection;