import { ArrowRight } from "lucide-react";
import logoF5 from "@/assets/logo-f5.png";
import heroImage from "@/assets/hero-gym.jpg";

interface HeroSectionProps {
  onCtaClick: () => void;
}

const HeroSection = ({ onCtaClick }: HeroSectionProps) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-12 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Academia"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center animate-fade-up">
        {/* Logo */}
        <div className="mb-12">
          <img
            src={logoF5}
            alt="F5 - Filipe Souza Personal Trainer"
            className="h-48 md:h-64 lg:h-80 mx-auto object-contain"
          />
        </div>

        {/* Headline */}
        <h1 className="section-title mb-4">
          Transforme seu corpo e{" "}
          <span className="text-primary">sua mente</span>
        </h1>

        {/* Subheadline */}
        <p className="section-subtitle mb-10">
          Consultoria para resultados extraordinários
        </p>

        {/* CTA Button */}
        <button onClick={onCtaClick} className="btn-primary">
          Comece sua jornada
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-muted-foreground/50" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
