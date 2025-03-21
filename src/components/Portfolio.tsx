
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-commerce Dashboard",
    category: "Desenvolvimento Web",
    description: "Dashboard administrativo para gestão de produtos, pedidos e clientes de uma loja virtual.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Aplicativo de Delivery",
    category: "Aplicativo Mobile",
    description: "Aplicativo de pedidos online para restaurantes com sistema de rastreamento em tempo real.",
    image: "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Sistema de Gestão Empresarial",
    category: "Software Personalizado",
    description: "ERP customizado para otimização de processos internos de uma indústria.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Plataforma Educacional",
    category: "Desenvolvimento Web",
    description: "Ambiente virtual de aprendizagem com recursos interativos e gestão de cursos.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "App de Gestão Financeira",
    category: "Aplicativo Mobile",
    description: "Aplicativo para controle financeiro pessoal com relatórios detalhados e categorização automática.",
    image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Painel de Business Intelligence",
    category: "Data Visualization",
    description: "Dashboard analítico para visualização de KPIs e métricas empresariais em tempo real.",
    image: "https://images.unsplash.com/photo-1553484771-11998c592b9c?q=80&w=2070&auto=format&fit=crop",
  },
];

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const projectsRef = useRef<HTMLDivElement>(null);
  
  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn");
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = projectsRef.current?.querySelectorAll(".project-card");
    cards?.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      cards?.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section id="portfolio" className="bg-tech-50 py-24">
      <div className="section">
        <h2 className="section-title text-center">Nosso Portfólio</h2>
        <p className="section-subtitle text-center">
          Conheça alguns dos projetos que desenvolvemos para nossos clientes
        </p>
        
        {/* Mobile Carousel */}
        <div className="relative mt-12 md:hidden">
          <div 
            className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-tech-100"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
          >
            <div className="absolute inset-0 bg-black/20 z-10"></div>
            <img 
              src={projects[activeIndex].image} 
              alt={projects[activeIndex].title}
              className="w-full h-full object-cover transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20 bg-gradient-to-t from-black/80 to-transparent">
              <span className="text-sm font-medium text-tech-300 block mb-1">
                {projects[activeIndex].category}
              </span>
              <h3 className="text-xl font-bold mb-2">{projects[activeIndex].title}</h3>
              <p className="text-white/80 text-sm">{projects[activeIndex].description}</p>
            </div>
            
            {/* Navigation Buttons */}
            <button 
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors"
              aria-label="Previous project"
            >
              <ChevronLeft className="h-5 w-5 text-white" />
            </button>
            <button 
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors"
              aria-label="Next project"
            >
              <ChevronRight className="h-5 w-5 text-white" />
            </button>
          </div>
          
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {projects.map((_, i) => (
              <button
                key={i}
                className={`h-2 rounded-full transition-all ${
                  i === activeIndex ? "w-8 bg-tech-500" : "w-2 bg-tech-300"
                }`}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Desktop Grid */}
        <div 
          ref={projectsRef}
          className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-5 text-white w-full">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-tech-200">
                        {project.category}
                      </span>
                      <a href="#" className="text-white hover:text-tech-200 transition-colors">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <a 
            href="#contact" 
            className="button-shine bg-tech-600 hover:bg-tech-700 text-white px-6 py-3 rounded-md font-medium transition-colors shadow-md hover:shadow-lg"
          >
            Vamos trabalhar juntos?
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
