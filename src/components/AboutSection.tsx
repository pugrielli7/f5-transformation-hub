import { GraduationCap, Award, Target, Utensils, ArrowRight } from "lucide-react";

interface AboutSectionProps {
  onCtaClick: () => void;
}

const AboutSection = ({ onCtaClick }: AboutSectionProps) => {
  return (
    <section
      id="quem-somos"
      className="min-h-screen flex flex-col justify-center px-6 py-20 bg-gradient-to-b from-background via-primary/5 to-background"
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="section-title mb-4">
            Quem está por trás da <span className="text-primary">sua transformação</span>
          </h2>
          <p className="section-subtitle">
            Profissionais comprometidos com a sua evolução
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Filipe */}
          <div className="card-feature p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Filipe Souza</h3>
                <p className="text-primary font-semibold">Personal Trainer</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground text-sm">
                  Bacharelado em Educação Física pela <strong className="text-foreground">UNESP</strong>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground text-sm">
                  Foco em <strong className="text-foreground">saúde, estética e performance</strong>
                </p>
              </div>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed">
              Acredito que cada pessoa tem sua própria história, rotina e desafios — por isso, 
              meu trabalho vai muito além de simplesmente passar um treino. Meu objetivo é 
              entender sua realidade, respeitar seus limites e montar uma estratégia personalizada, 
              que realmente se encaixe no seu dia a dia.
            </p>
            
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-foreground font-medium">
                "Aqui, você não é tratado como mais um aluno: o acompanhamento é próximo, 
                com seriedade, profissionalismo e compromisso real com a sua evolução."
              </p>
            </div>
          </div>

          {/* Lucas */}
          <div className="card-feature p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-[hsl(142,70%,45%)]/20 border-2 border-[hsl(142,70%,45%)] flex items-center justify-center">
                <Utensils className="w-8 h-8 text-[hsl(142,70%,45%)]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Lucas Manoel</h3>
                <p className="text-[hsl(142,70%,45%)] font-semibold">Nutricionista Parceiro</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground text-sm">
                  Graduação em Nutrição pela <strong className="text-foreground">Unoeste</strong>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground text-sm">
                  Especialidade em <strong className="text-foreground">Nutrição Esportiva</strong>
                </p>
              </div>
            </div>

            <div className="bg-secondary/50 rounded-lg p-4 mb-4">
              <p className="text-xs text-muted-foreground">
                Registro Profissional
              </p>
              <p className="text-lg font-bold text-foreground">
                CRN3-75058
              </p>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed">
              Responsável por elaborar planos alimentares personalizados que complementam 
              seu treino, respeitando sua rotina e preferências. O acompanhamento nutricional 
              é essencial para maximizar seus resultados.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button onClick={onCtaClick} className="btn-primary">
            Ver planos e começar agora
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
