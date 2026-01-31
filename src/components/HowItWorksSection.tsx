import { ArrowRight, CheckCircle, ClipboardList, MessageSquare, Trophy } from "lucide-react";

interface HowItWorksSectionProps {
  onCtaClick: () => void;
}

const steps = [
  {
    icon: CheckCircle,
    title: "Avaliação inicial",
    description: "Análise de objetivo, rotina, histórico e nível físico",
  },
  {
    icon: ClipboardList,
    title: "Planejamento personalizado",
    description: "Treino e estratégia ajustados à sua realidade",
  },
  {
    icon: MessageSquare,
    title: "Acompanhamento contínuo",
    description: "Feedback, ajustes semanais e suporte",
  },
  {
    icon: Trophy,
    title: "Evolução consistente",
    description: "Estética, performance e constância no longo prazo",
  },
];

const HowItWorksSection = ({ onCtaClick }: HowItWorksSectionProps) => {
  return (
    <section
      id="como-funciona"
      className="min-h-screen flex flex-col justify-center px-6 py-20"
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="mb-12 animate-fade-up">
          <h2 className="section-title mb-4">
            Como funciona a consultoria
          </h2>
          <p className="section-subtitle">
            Um processo <em className="text-foreground not-italic font-semibold">simples</em>, 
            feito para <strong className="text-foreground">gerar resultados</strong>.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6 mb-12">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="flex items-start gap-4 p-5 rounded-xl bg-secondary/50 border border-border hover:border-muted-foreground/30 transition-colors"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="step-number">{index + 1}</span>
              <div className="flex items-start gap-4 flex-1">
                <div className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center flex-shrink-0">
                  <step.icon className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{step.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button onClick={onCtaClick} className="btn-secondary">
            Conhecer os planos
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
