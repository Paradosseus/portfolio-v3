import Section from "./_components/section";

const TestimoniesSection = () => {
    return (
        <Section>
            <div className="flex lg:flex-row flex-col gap-12">
                <div className="flex flex-col gap-8 lg:border-r-1 border-r-0 lg:border-b-0 border-b-1 border-[rgba(250,250,250,0.1)] flex-2/5 lg:py-32 py-0 lg:pr-4 pb-6">
                    <h2 className="heading-2">What People Say About Me</h2>
                    <p className="paragraph">Here’s what clients and colleagues have said about working with me.</p>
                </div>
                <div className="flex flex-col gap-16 flex-3/5 justify-center">
                    <p className="lg:text-2xl text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et  ullamcorper diam. Mauris id sapien tempus, tempus ipsum vitae, blandit  ligula. Etiam molestie, metus congue aliquam consectetur.</p>
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row gap-2">
                            <div className="w-12 h-12 bg-[#D9D9D9] rounded-sm"></div>
                            <div>
                                <p>John Doe Cooper</p>
                                <p>Client</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-1">
                            <button className="bg-[#191919] w-12 h-12 rounded-sm p-3"><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.663 7.50024L8.33594 13.8273L14.663 7.50024ZM8.33594 13.8273L14.663 20.1543L8.33594 13.8273Z" fill="#FAFAFA"/><path d="M14.663 7.50024L8.33594 13.8273L14.663 20.1543" stroke="#FAFAFA" stroke-width="2.53081" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </button>
                            <button className="bg-[#191919] w-12 h-12 rounded-sm p-3"><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.33704 7.50024L15.6641 13.8273L9.33704 7.50024ZM15.6641 13.8273L9.33704 20.1543L15.6641 13.8273Z" fill="#FAFAFA"/><path d="M9.33704 7.50024L15.6641 13.8273L9.33704 20.1543" stroke="#FAFAFA" stroke-width="2.53081" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default TestimoniesSection;