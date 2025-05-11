import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { X } from "lucide-react";

const Cookie = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Verificar se o usuário já aceitou os cookies
    const cookieConsent = localStorage.getItem("cookie-consent");
    
    // Se não aceitou, mostrar o banner
    if (!cookieConsent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    // Salvar a preferência do usuário
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    // Salvar a preferência do usuário que recusou
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  const handleClose = () => {
    // Fechar sem salvar preferência
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 p-4 shadow-lg border-t border-gray-200 dark:border-gray-800 z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Utilizamos cookies para melhorar sua experiência em nosso site. Ao continuar navegando, 
            você concorda com nossa{" "}
            <a href="/privacidade" className="underline font-medium">
              Política de Privacidade
            </a>{" "}
            e{" "}
            <a href="/termos" className="underline font-medium">
              Termos de Uso
            </a>.
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <Button variant="outline" size="sm" onClick={handleDecline}>
            Recusar
          </Button>
          <Button size="sm" onClick={handleAccept}>
            Aceitar Cookies
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8" 
            onClick={handleClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cookie;