import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, ArrowRight } from "lucide-react";
import { useInView } from 'react-intersection-observer';

const portfolioCategories = [
  {
    name: "Desenvolvimento de Sites",
    projects: [
      {
        title: "Moda Style",
        description: "E-commerce fictício chamado Moda Style, desenvolvido em React, JavaScript, HTML e CSS.",
        image: "/images/modastyle.png",
        link: "https://modastyle.netlify.app/"
      },
      {
        title: "JB Queijos e Laticínios",
        description: "E-commerce real com propósito de chamar clientes e fazer o primeiro atendimento, desenvolvido em React, JavaScript, HTML e CSS.",
        image: "/images/jbqueijos.png",
        link: "https://jbqueijoslaticinios.netlify.app/"
      },
      {
        title: "Cida Confeiteira",
        description: "E-commerce real com propósito de chamar clientes e fazer o primeiro atendimento, desenvolvido em React, JavaScript, HTML e CSS.",
        image: "/images/cidabolos.png",
        link: "https://cidabolos.netlify.app/"
      },
      {
        title: "Claudio Revendedor Natura",
        description: "Landing page para divulgar produtos da marca Natura, desenvolvido em React, JavaScript, HTML e CSS.",
        image: "/images/natura.png",
        link: "https://claudiorevendedornatura.netlify.app/"
      }
    ]
  },
  {
    name: "Configuração e Manutenção",
    projects: [
      {
        title: "Manutenção de notebooks",
        description: "Troca da carcaça da tela de um notebook.",
        video: "images/manutencao.mp4",
        type: "video"
      }
    ]
  }
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState("Todos");
  
  const { ref: titleRef, inView: titleIsVisible } = useInView({ triggerOnce: true });
  const { ref: buttonsRef, inView: buttonsAreVisible } = useInView({ triggerOnce: true });
  const { ref: cardsRef, inView: cardsAreVisible } = useInView({ triggerOnce: true });

  const nextSlide = () => {
    const category = portfolioCategories[activeCategory];
    setActiveSlide((prev) => 
      prev === category.projects.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    const category = portfolioCategories[activeCategory];
    setActiveSlide((prev) => 
      prev === 0 ? category.projects.length : prev - 1
    );
  };

  return (
    <section className="py-16 px-4 md:px-8">
      <div 
        ref={titleRef}
        className={`transform transition-all duration-700 ${
          titleIsVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Portfólio
        </h2>
      </div>

      {/* Botões de categoria */}
      <div 
        ref={buttonsRef}
        className={`flex justify-center gap-4 mt-8 mb-12 transform transition-all duration-700 delay-200 ${
          buttonsAreVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        {portfolioCategories.map((category) => (
          <button
            key={category.name}
            onClick={() => {
              setActiveCategory(portfolioCategories.indexOf(category));
              setActiveSlide(0);
            }}
            className={`button-shine flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-medium transition-colors
              ${activeCategory === portfolioCategories.indexOf(category)
                ? "bg-tech-500 text-white hover:bg-tech-600"
                : "bg-white text-gray-600 hover:bg-tech-50"
              }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Carrossel */}
      <div className="relative max-w-xs mx-auto mt-8">
        <div 
          ref={sliderRef}
          className="overflow-hidden rounded-xl shadow-lg bg-white transform transition-all duration-700 hover:scale-105"
        >
          {/* Título da categoria */}
          <div className="p-4 text-center bg-gradient-tech text-white">
            <h3 className="text-lg font-semibold">
              {portfolioCategories[activeCategory].name}
            </h3>
          </div>

          {/* Conteúdo do slide */}
          <div className="p-4">
            {portfolioCategories[activeCategory].projects.map((project, index) => (
              <div
                key={project.title}
                className={`transition-opacity duration-300 ${
                  index === activeSlide ? "opacity-100" : "opacity-0 hidden"
                }`}
              >
                <div className="h-[180px] overflow-hidden rounded-lg mb-3">
                  {project.type === "video" ? (
                    <video 
                      controls 
                      className="w-full h-full object-cover"
                    >
                      <source src={project.video} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                
                <div className="text-center px-2">
                  <h4 className="text-base font-semibold mb-2">{project.title}</h4>
                  <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button-shine flex items-center justify-center gap-2 bg-tech-500 text-white px-6 py-4 rounded-xl font-medium hover:bg-tech-600 transition-colors"
                    >
                      Acesse o site
                      <ArrowRight className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controles do carrossel */}
        <div className="flex justify-center gap-1.5 mt-3">
          {portfolioCategories[activeCategory].projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                index === activeSlide ? "bg-tech-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
