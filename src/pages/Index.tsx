import { useRef } from "react";
import HeroSection from "@/components/HeroSection";
import ResultsSection from "@/components/ResultsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PlansSection from "@/components/PlansSection";

const Index = () => {
  const resultsRef = useRef<HTMLDivElement>(null);
  const howItWorksRef = useRef<HTMLDivElement>(null);
  const plansRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen">
      <HeroSection onCtaClick={() => scrollToSection(resultsRef)} />
      
      <div ref={resultsRef}>
        <ResultsSection onCtaClick={() => scrollToSection(howItWorksRef)} />
      </div>
      
      <div ref={howItWorksRef}>
        <HowItWorksSection onCtaClick={() => scrollToSection(plansRef)} />
      </div>
      
      <div ref={plansRef}>
        <PlansSection />
      </div>
    </main>
  );
};

export default Index;
