import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    price: "Grátis",
    description: "Para começar a automatizar",
    features: [
      "1 conta TikTok",
      "10 vídeos/mês",
      "Agendamento básico",
      "Analytics básico"
    ],
    cta: "Começar grátis",
    popular: false
  },
  {
    name: "Pro",
    price: "R$49",
    period: "/mês",
    description: "Para criadores sérios",
    features: [
      "3 contas TikTok",
      "Vídeos ilimitados",
      "Agendamento inteligente",
      "Analytics avançado",
      "Suporte prioritário",
      "API access"
    ],
    cta: "Começar Pro",
    popular: true
  },
  {
    name: "Business",
    price: "R$149",
    period: "/mês",
    description: "Para equipes e agências",
    features: [
      "10 contas TikTok",
      "Vídeos ilimitados",
      "Todos recursos Pro",
      "Multi-usuários",
      "White-label",
      "Suporte dedicado"
    ],
    cta: "Falar com vendas",
    popular: false
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute inset-0 bg-glow opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Planos para todos os{" "}
            <span className="text-gradient">tamanhos</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Escolha o plano ideal para suas necessidades. Cancele quando quiser.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-6 rounded-2xl border transition-all duration-300 ${
                plan.popular 
                  ? "bg-gradient-card border-primary/50 shadow-lg shadow-primary/20 scale-105" 
                  : "bg-card border-border hover:border-primary/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-primary rounded-full text-xs font-semibold text-primary-foreground">
                  Mais popular
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                </div>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <Check size={16} className="text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.popular ? "hero" : "outline"} 
                className="w-full"
                asChild
              >
                <Link to="/register">{plan.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
