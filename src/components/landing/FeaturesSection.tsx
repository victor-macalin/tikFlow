import { Calendar, Clock, BarChart3, Zap, Shield, Users } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Agendamento Inteligente",
    description: "Agende seus vídeos para os melhores horários e maximize seu alcance automaticamente."
  },
  {
    icon: Clock,
    title: "Postagem Automática",
    description: "Configure uma vez e deixe o TikFlow publicar seus vídeos no horário programado."
  },
  {
    icon: BarChart3,
    title: "Analytics Avançado",
    description: "Acompanhe métricas detalhadas de performance e otimize sua estratégia."
  },
  {
    icon: Zap,
    title: "API Rápida",
    description: "Integração direta com TikTok para uploads rápidos e confiáveis."
  },
  {
    icon: Shield,
    title: "Segurança Total",
    description: "Seus dados e credenciais protegidos com criptografia de ponta."
  },
  {
    icon: Users,
    title: "Multi-contas",
    description: "Gerencie múltiplas contas TikTok em um único painel centralizado."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tudo que você precisa para{" "}
            <span className="text-gradient">crescer no TikTok</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ferramentas profissionais para criadores e empresas que querem escalar sua presença.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
