'use client'

import Button from "./button"
import Section from "./section"
import TypewriterEffect from "./plugins/typewriterEffect"

const HeroSection = () => {
    return (
        <Section>
            <div className="flex flex-col gap-10 h-[480px] justify-center">  
                <h1 className="heading-1"><TypewriterEffect value='Hi, my name is <span style="color: #CB1B1B; font-weight: 700">FJ</span>' /></h1>
                <div className="flex flex-col gap-6">
                    <p className="paragraph">Your Fiery Web Designer and Front-end Developer based in the Philippines.</p>
                    <div className="flex gap-6">
                        <Button variant="primary">Let's Work Together</Button>
                        <Button variant="secondary">View My Works <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.33704 7L15.6641 13.327L9.33704 19.6541" stroke="#CB1B1B" stroke-width="2.53081" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</Button>
                    </div>
                </div>
            </div>
        </Section>
    )
}


export default HeroSection;