import Image from "next/image";
import Card from "./_components/ui/card";
import Button from "./_components/ui/button";
import Chip from "./_components/ui/chip";
import MainContainer from "./_components/ui/main-container";
import HeroSection from "./_components/hero-section";
import QuoteSection from "./_components/quote-section";
import AboutSection from "./_components/about-section";
import ServicesSection from "./_components/services-section";
import MyTechStackSection from "./_components/my-tech-stack-section";
import MyProjectsSection from "./_components/my-projects-section";
import TestimoniesSection from "./testimonies-section";
import CtaSection from "./_components/cta-section";
export default function Home() {
  return (
    <>
      <MainContainer>
        <HeroSection />
        <QuoteSection />
        <AboutSection />
        <MyTechStackSection/>
        <ServicesSection />
        <MyProjectsSection/>
        <TestimoniesSection />
        <CtaSection/>
      </MainContainer>
    </>
  );  
}
