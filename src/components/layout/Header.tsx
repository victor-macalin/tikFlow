import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">TF</span>
            </div>
            <span className="font-bold text-xl">TikFlow</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Recursos
            </Link>
            <Link to="/#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Preços
            </Link>
            <Link to="/#faq" className="text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </Link>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" asChild>
              <Link to="/login">Entrar</Link>
            </Button>
            <Button variant="gradient" asChild>
              <Link to="/register">Começar grátis</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              <Link to="/#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Recursos
              </Link>
              <Link to="/#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                Preços
              </Link>
              <Link to="/#faq" className="text-muted-foreground hover:text-foreground transition-colors">
                FAQ
              </Link>
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button variant="ghost" asChild>
                  <Link to="/login">Entrar</Link>
                </Button>
                <Button variant="gradient" asChild>
                  <Link to="/register">Começar grátis</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
