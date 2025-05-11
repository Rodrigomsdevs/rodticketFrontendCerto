import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Home, Search, HelpCircle, MessageSquare, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <SEO
        title="Página não encontrada | RodTicket"
        description="A página que você está procurando não existe ou foi removida."
        ogType="website"
        canonical="https://rodticket.com/404"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Página não encontrada",
          "description": "A página que você está procurando não existe ou foi removida."
        }}
      />

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-40 -top-40 w-80 h-80 rounded-full bg-primary/5"></div>
        <div className="absolute -left-20 top-1/4 w-60 h-60 rounded-full bg-secondary/5"></div>
        <div className="absolute right-10 bottom-1/4 w-40 h-40 rounded-full bg-red-100/20"></div>
      </div>
      
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center p-6 relative z-10">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-6">
              <AlertCircle size={48} className="text-primary" />
            </div>

            <h1 className="text-6xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              404
            </h1>

            <h2 className="text-2xl font-semibold mb-4">
              Página não encontrada
            </h2>
            
            <p className="text-gray-600 mb-8">
              A página que você está procurando foi movida, removida ou nunca existiu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Link to="/" className="w-full">
              <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                <Home size={16} />
                <span>Ir para a Página Inicial</span>
              </Button>
            </Link>
            
            <Link to="/contato" className="w-full">
              <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                <MessageSquare size={16} />
                <span>Entre em Contato</span>
              </Button>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-medium mb-3 flex items-center">
              <Search size={16} className="mr-2 text-primary" />
              Páginas Populares
            </h3>
            
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link to="/funcionalidades" className="hover:text-primary transition-colors flex items-center">
                  <ArrowLeft size={14} className="mr-2" />
                  Funcionalidades
                </Link>
              </li>
              <li>
                <Link to="/agendamento" className="hover:text-primary transition-colors flex items-center">
                  <ArrowLeft size={14} className="mr-2" />
                  Agendamento
                </Link>
              </li>
              <li>
                <Link to="/precos" className="hover:text-primary transition-colors flex items-center">
                  <ArrowLeft size={14} className="mr-2" />
                  Preços
                </Link>
              </li>
              <li>
                <Link to="/documentacao" className="hover:text-primary transition-colors flex items-center">
                  <ArrowLeft size={14} className="mr-2" />
                  Documentação
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-primary transition-colors flex items-center">
                  <ArrowLeft size={14} className="mr-2" />
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;