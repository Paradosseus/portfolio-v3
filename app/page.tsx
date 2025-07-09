import Image from "next/image";
import Card from "./_components/card";
import Button from "./_components/button";
import Chip from "./_components/chip";
import MainContainer from "./_components/main-container";
import HeroSection from "./_components/hero-section";
import QuoteSection from "./_components/quote-section";
import AboutSection from "./_components/about-section";
import ServicesSection from "./_components/services-section";

export default function Home() {
  return (
    <>
      <MainContainer>
        <HeroSection />
        <QuoteSection/>
        <AboutSection />
        <ServicesSection />
      </MainContainer>
    </>
  );
}
