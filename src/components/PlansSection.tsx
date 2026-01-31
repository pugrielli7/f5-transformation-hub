import { Check, MessageCircle, Star, TrendingUp, Flame } from "lucide-react";

const plans = [
  {
    name: "Mensal",
    price: "R$200,00",
    perMonth: "por mês",
    badge: { type: "economy", label: "Mais em conta", icon: TrendingUp },
    featured: false,
  },
  {
    name: "Trimestral",
    price: "R$450,00",
    perMonth: "R$150,00/mês",
    badge: null,
    featured: false,
  },
  {
    name: "Semestral",
    price: "R$850,00",
    perMonth: "R$141,66/mês",
    badge: { type: "recommended", label: "Recomendado", icon: Star },
    featured: true,
  },
  {
    name: "Anual",
    price: "R$1.700,00",
    perMonth: "R$141,66/mês",
    badge: { type: "popular", label: "Mais vendido", icon: Flame },
    featured: false,
  },
];

const benefits = [
  "Treino personalizado",
  "Ajustes periódicos",
  "Acompanhamento remoto",
  "Suporte via WhatsApp",
  "Relatórios de evolução",
  "Flexibilidade total",
];

const PlansSection = () => {
  const phoneNumber = "5518991415772";
  const message = encodeURIComponent("Olá, quero começar minha consultoria de treino.");
  // `wa.me` tende a ser mais compatível do que `api.whatsapp.com` (e evita o bloqueio visto no print).
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <section
      id="planos"
      className="min-h-screen flex flex-col justify-center px-6 py-20"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight uppercase">
            PLANOS
          </h2>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={plan.featured ? "card-plan-featured" : "card-plan"}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="mb-4">
                  <span
                    className={
                      plan.badge.type === "recommended"
                        ? "badge-recommended"
                        : plan.badge.type === "popular"
                        ? "badge-popular"
                        : "badge-economy"
                    }
                  >
                    <plan.badge.icon className="w-3 h-3" />
                    {plan.badge.label}
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-lg font-bold mb-4">
                Plano <span className="text-primary">{plan.name}</span>
              </h3>

              {/* Benefits */}
              <ul className="space-y-2 mb-6">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Price */}
              <div className="pt-4 border-t border-border">
                <p className="text-2xl font-black">{plan.price}</p>
                <p className="text-sm text-muted-foreground">{plan.perMonth}</p>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <div className="text-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <MessageCircle className="w-6 h-6" />
            Falar com Filipe no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
