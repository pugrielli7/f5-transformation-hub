import { ArrowRight, Dumbbell, UserCheck, Brain } from "lucide-react";

interface ResultsSectionProps {
  onCtaClick: () => void;
}

const features = [
  {
    icon: Dumbbell,
    title: "Treinos personalizados",
    description: "Montados conforme seu nível, objetivo e rotina",
  },
  {
    icon: UserCheck,
    title: "Acompanhamento profissional",
    description: "Ajustes periódicos e feedback contínuo",
  },
  {
    icon: Brain,
    title: "Estratégia física e mental",
    description: "Foco em constância, disciplina e evolução real",
  },
];

const ResultsSection = ({ onCtaClick }: ResultsSectionProps) => {
  return (
    <section
      id="resultados"
      className="min-h-screen flex flex-col justify-center px-6 py-20 bg-gradient-to-b from-primary/10 via-primary/5 to-background"
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="mb-12 animate-fade-up">
          <h2 className="section-title mb-4">
            Resultados reais,
            <br />
            <span className="text-primary">não promessas vazias</span>
          </h2>
          <p className="section-subtitle max-w-xl">
            Método focado em{" "}
            <strong className="text-foreground">saúde, estética e performance</strong>,
            adaptado à sua rotina e ao seu corpo.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-4 mb-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card-feature flex items-start gap-4"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Card */}
        <div className="card-feature text-center p-8">
          <p className="text-lg mb-4 font-medium">
            Entenda o processo antes de começar
          </p>
          <button onClick={onCtaClick} className="btn-primary">
            Veja como funciona a consultoria
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
