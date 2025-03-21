
import { useState } from "react";
import { Phone, Mail, MapPin, MessageSquare, Send } from "lucide-react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const handleWhatsAppContact = () => {
    // Substitua pelo seu número de WhatsApp no formato internacional
    const phoneNumber = "5511999999999";
    const text = "Olá, gostaria de saber mais sobre seus serviços!";
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, "_blank");
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Normalmente você enviaria os dados para um backend aqui
    console.log({ name, email, message });
    
    // Para este exemplo, apenas redirecionamos para o WhatsApp
    handleWhatsAppContact();
  };
  
  return (
    <section id="contact" className="py-24 bg-gradient-blue text-white">
      <div className="section">
        <h2 className="section-title text-center !text-white">Entre em Contato</h2>
        <p className="section-subtitle text-center !text-white/80">
          Estamos prontos para transformar suas ideias em realidade
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="flex flex-col h-full">
            <div className="glass-dark rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-semibold mb-5">Vamos conversar!</h3>
              <p className="text-white/80 mb-6">
                Preencha o formulário ou entre em contato diretamente pelos nossos canais.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="p-2 bg-tech-700/50 rounded-full mr-3">
                    <Phone className="h-5 w-5" />
                  </div>
                  <span>+55 (11) 99999-9999</span>
                </div>
                
                <div className="flex items-center">
                  <div className="p-2 bg-tech-700/50 rounded-full mr-3">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span>contato@jrtechsolutions.com</span>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 bg-tech-700/50 rounded-full mr-3 mt-1">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <span>São Paulo, SP - Brasil</span>
                </div>
              </div>
            </div>
            
            <button
              onClick={handleWhatsAppContact}
              className="button-shine flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-xl font-medium transition-colors shadow-md hover:shadow-lg mt-auto"
            >
              <MessageSquare className="h-5 w-5" />
              Fale conosco pelo WhatsApp
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="glass-dark rounded-2xl p-8">
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md text-white focus:ring-2 focus:ring-tech-300 focus:border-transparent outline-none"
                  placeholder="Seu nome"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md text-white focus:ring-2 focus:ring-tech-300 focus:border-transparent outline-none"
                  placeholder="Seu email"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md text-white focus:ring-2 focus:ring-tech-300 focus:border-transparent outline-none resize-none"
                  placeholder="Como podemos ajudar?"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="button-shine flex items-center justify-center gap-2 w-full bg-tech-500 hover:bg-tech-600 text-white px-6 py-3 rounded-md font-medium transition-colors shadow-md hover:shadow-lg"
              >
                <Send className="h-5 w-5" />
                Enviar mensagem
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
