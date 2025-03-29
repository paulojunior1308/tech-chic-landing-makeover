import { Facebook, Instagram, Linkedin, Twitter, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-tech-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-display font-bold mb-6 text-gradient">JR Tech</h3>
            <p className="text-white/70 mb-6">
              Soluções tecnológicas que transformam o seu negócio e potencializam seus resultados.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/people/Jr-Cell/100054458381347/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://www.instagram.com/jr.tech_solutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-white/70 hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#portfolio" className="text-white/70 hover:text-white transition-colors">Portfólio</a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors">Contato</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <ul className="space-y-3 text-white/70">
              <li>São Paulo, SP - Brasil</li>
              <li>contato@jrtechsolutions.com</li>
              <li>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-white" />
                  <span className="text-white">(11) 94988-5625</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-tech-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            &copy; {currentYear} JR Technology Solutions. Todos os direitos reservados.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6 text-sm text-white/60">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
