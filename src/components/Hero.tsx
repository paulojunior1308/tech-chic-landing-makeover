
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100vh] flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-mesh opacity-40"></div>
      <div className="blur-dot bg-tech-200 h-64 w-64 top-20 left-10 animate-pulse"></div>
      <div className="blur-dot bg-tech-400 h-48 w-48 bottom-20 right-10 animate-pulse delay-1000"></div>
      
      <div className="section flex flex-col items-center text-center">
        <span className="px-4 py-1.5 bg-tech-50 text-tech-600 rounded-full mb-6 text-sm font-medium opacity-0 animate-fadeIn">
          Soluções tecnológicas para o seu negócio
        </span>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 tracking-tight max-w-4xl leading-tight opacity-0 animate-fadeIn" style={{ animationDelay: "200ms" }}>
          Transformando ideias em <span className="text-gradient">soluções digitais</span> de impacto
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 opacity-0 animate-fadeIn" style={{ animationDelay: "400ms" }}>
          Desenvolvimento de softwares, websites e aplicativos com foco em 
          experiência do usuário e resultados para o seu negócio.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 opacity-0 animate-fadeIn" style={{ animationDelay: "600ms" }}>
          <a 
            href="#services" 
            className="button-shine bg-tech-600 hover:bg-tech-700 text-white px-8 py-3 rounded-md font-medium transition-colors shadow-md hover:shadow-lg text-lg"
          >
            Nossos Serviços
          </a>
          
          <a 
            href="#contact" 
            className="button-shine bg-white hover:bg-tech-50 text-tech-700 border border-tech-200 px-8 py-3 rounded-md font-medium transition-colors shadow-md hover:shadow-lg text-lg"
          >
            Fale Conosco
          </a>
        </div>
        
        <a 
          href="#services" 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-tech-500 hover:text-tech-600 transition-colors mt-12 opacity-0 animate-fadeIn" 
          style={{ animationDelay: "800ms" }}
        >
          <span className="text-sm mb-2">Saiba mais</span>
          <ArrowDown className="h-5 w-5 animate-float" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
