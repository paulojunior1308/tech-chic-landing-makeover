
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-tech-50 p-6">
      <div className="text-center max-w-md glass rounded-2xl p-8 shadow-lg">
        <div className="p-4 bg-tech-100 rounded-full inline-flex mb-6">
          <span className="text-4xl">🔍</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient">404</h1>
        <p className="text-xl text-muted-foreground mb-8">Oops! Página não encontrada</p>
        <a 
          href="/" 
          className="button-shine inline-flex items-center justify-center gap-2 bg-tech-600 hover:bg-tech-700 text-white px-5 py-2.5 rounded-md font-medium transition-colors shadow-sm hover:shadow-md"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para o início
        </a>
      </div>
    </div>
  );
};

export default NotFound;
