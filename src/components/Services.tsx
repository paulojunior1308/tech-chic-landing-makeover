
import { 
  Monitor, 
  Smartphone, 
  Code2, 
  Lightbulb, 
  LineChart, 
  ShieldCheck, 
  Clock, 
  Zap 
} from "lucide-react";
import { useEffect, useRef } from "react";

const services = [
  {
    title: "Desenvolvimento Web",
    description: "Criação de sites responsivos, landing pages e aplicações web com tecnologias modernas.",
    icon: <Monitor className="h-10 w-10 text-tech-500" />,
  },
  {
    title: "Aplicativos Mobile",
    description: "Desenvolvimento de aplicativos nativos e híbridos para iOS e Android.",
    icon: <Smartphone className="h-10 w-10 text-tech-500" />,
  },
  {
    title: "Soluções Personalizadas",
    description: "Desenvolvimento de softwares sob medida para as necessidades específicas do seu negócio.",
    icon: <Code2 className="h-10 w-10 text-tech-500" />,
  },
  {
    title: "Consultoria em TI",
    description: "Análise e implementação de soluções tecnológicas para otimizar seus processos.",
    icon: <Lightbulb className="h-10 w-10 text-tech-500" />,
  },
  {
    title: "Business Intelligence",
    description: "Transforme dados em insights valiosos para sua tomada de decisão.",
    icon: <LineChart className="h-10 w-10 text-tech-500" />,
  },
  {
    title: "Segurança Digital",
    description: "Proteja seus dados e aplicações com nossas soluções de segurança.",
    icon: <ShieldCheck className="h-10 w-10 text-tech-500" />,
  },
];

const features = [
  {
    title: "Agilidade",
    description: "Entregas rápidas e eficientes, respeitando prazos e cronogramas.",
    icon: <Clock className="h-6 w-6" />,
  },
  {
    title: "Inovação",
    description: "Soluções modernas que utilizam as mais recentes tecnologias do mercado.",
    icon: <Zap className="h-6 w-6" />,
  },
  {
    title: "Qualidade",
    description: "Desenvolvimento com foco em performance, segurança e experiência do usuário.",
    icon: <ShieldCheck className="h-6 w-6" />,
  },
];

const Services = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

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

    const cards = servicesRef.current?.querySelectorAll(".service-card");
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
    <section id="services" className="bg-white py-24">
      <div className="section">
        <h2 className="section-title text-center">Nossos Serviços</h2>
        <p className="section-subtitle text-center">
          Oferecemos soluções tecnológicas completas para impulsionar seu negócio
        </p>

        <div 
          ref={servicesRef} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card highlight-card bg-white hover:bg-gradient-to-b from-white to-tech-50 opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-2xl bg-tech-50 mb-5">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-tech rounded-3xl p-10 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-white/10 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
