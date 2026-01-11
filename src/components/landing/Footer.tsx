import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">TF</span>
              </div>
              <span className="font-bold text-xl">TikFlow</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Automatize suas postagens no TikTok e ganhe tempo para criar.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Produto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/#features" className="hover:text-foreground transition-colors">Recursos</Link></li>
              <li><Link to="/#pricing" className="hover:text-foreground transition-colors">Preços</Link></li>
              <li><Link to="/#faq" className="hover:text-foreground transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground transition-colors">Sobre nós</Link></li>
              <li><Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
              <li><Link to="/careers" className="hover:text-foreground transition-colors">Carreiras</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/privacy" className="hover:text-foreground transition-colors">Privacidade</Link></li>
              <li><Link to="/terms" className="hover:text-foreground transition-colors">Termos</Link></li>
              <li><Link to="/cookies" className="hover:text-foreground transition-colors">Cookies</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 TikFlow. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              Twitter
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              Instagram
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              TikTok
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
