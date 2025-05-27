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
                  <span>(11) 94988-5625</span>
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
          </div>
          
          <form 
            data-netlify="true"
            method="POST"
            name="contact"
            onSubmit={handleSubmit}
            className="glass-dark rounded-2xl p-8 space-y-6"
          >
            <input type="hidden" name="form-name" value="contact" />
            
            <div>
              <label className="text-white">Nome</label>
              <input
                name="name"
                type="text"
                placeholder="Seu nome"
                className="w-full p-4 rounded-lg bg-white/10 text-white placeholder:text-gray-400"
                required
              />
            </div>
            
            <div>
              <label className="text-white">Email</label>
              <input
                name="email"
                type="email"
                placeholder="Seu email"
                className="w-full p-4 rounded-lg bg-white/10 text-white placeholder:text-gray-400"
                required
              />
            </div>
            
            <div>
              <label className="text-white">Mensagem</label>
              <textarea
                name="message"
                placeholder="Como podemos ajudar?"
                className="w-full p-4 rounded-lg bg-white/10 text-white placeholder:text-gray-400"
                rows={4}
                required
              />
            </div>
            
            <button
              type="submit"
              className="button-shine w-full flex items-center justify-center gap-2 bg-tech-500 text-white px-6 py-4 rounded-xl font-medium hover:bg-tech-600 transition-colors"
            >
              <span>Enviar mensagem</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
