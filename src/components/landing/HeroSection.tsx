import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Play, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-glow opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8 animate-fade-in">
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm">Novo: Agendamento inteligente com IA</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
            Automatize suas postagens no{" "}
            <span className="text-gradient">TikTok</span>
            {" "}e ganhe tempo
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Agende, organize e publique vídeos automaticamente. 
            Foque na criação enquanto nós cuidamos da distribuição.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/register">
                Começar grátis
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/#demo" className="flex items-center gap-2">
                <Play size={20} />
                Ver demo
              </Link>
            </Button>
          </div>

          {/* Social Proof */}
          <div className="mt-16 pt-10 border-t border-border/50 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <p className="text-sm text-muted-foreground mb-4">Confiado por mais de 10.000 criadores</p>
            <div className="flex items-center justify-center gap-8">
              <div className="text-center">
                <p className="text-2xl font-bold text-gradient">50M+</p>
                <p className="text-sm text-muted-foreground">Vídeos publicados</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <p className="text-2xl font-bold text-gradient">99.9%</p>
                <p className="text-sm text-muted-foreground">Uptime</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <p className="text-2xl font-bold text-gradient">4.9★</p>
                <p className="text-sm text-muted-foreground">Avaliação</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
