
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

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
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full bg-tech-800 hover:bg-tech-700 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-tech-800 hover:bg-tech-700 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-tech-800 hover:bg-tech-700 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-tech-800 hover:bg-tech-700 transition-colors">
                <Linkedin className="h-5 w-5" />
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
              <li>+55 (11) 99999-9999</li>
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
