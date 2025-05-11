import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { X, Download, Smartphone } from 'lucide-react';

const InstallPWA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Verificar se já foi fechado anteriormente
    const installBannerDismissed = localStorage.getItem('pwa-install-banner-dismissed');
    const installBannerInstalled = localStorage.getItem('pwa-installed');
    
    // Verificar se é iOS
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    setIsIOS(isIOSDevice);
    
    // Detectar se estamos em um dispositivo móvel
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    
    // Apenas mostrar em dispositivos móveis e se não tiver sido instalado ou fechado
    if (!installBannerDismissed && !installBannerInstalled && isMobile) {
      setIsVisible(true);
    }
    
    // Evento de instalação do PWA para Android/Chrome
    window.addEventListener('beforeinstallprompt', (e) => {
      // Previne o comportamento padrão do Chrome
      e.preventDefault();
      // Armazena o evento para usar mais tarde
      setDeferredPrompt(e);
      // Mostra o banner apenas se não foi fechado ou instalado antes
      if (!installBannerDismissed && !installBannerInstalled) {
        setIsVisible(true);
      }
    });
    
    // Evento disparado quando o PWA é instalado
    window.addEventListener('appinstalled', () => {
      // Esconde o banner após instalação
      setIsVisible(false);
      localStorage.setItem('pwa-installed', 'true');
      console.log('PWA instalado com sucesso!');
    });
  }, []);
  
  const handleInstall = async () => {
    if (!deferredPrompt) return;
    
    // Mostra o prompt de instalação
    deferredPrompt.prompt();
    
    // Espera pela resposta do usuário
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`Usuário ${outcome === 'accepted' ? 'aceitou' : 'recusou'} a instalação`);
    
    // Limpa a referência ao prompt, apenas pode ser usado uma vez
    setDeferredPrompt(null);
    
    // Esconde o banner
    setIsVisible(false);
  };
  
  const handleClose = () => {
    setIsVisible(false);
    // Salva que o banner foi fechado para não mostrar novamente
    localStorage.setItem('pwa-install-banner-dismissed', 'true');
  };
  
  if (!isVisible) return null;
  
  return (
    <div className="fixed bottom-16 left-4 right-4 md:right-auto md:bottom-6 md:left-6 z-40 md:max-w-sm animate-slide-up">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="flex items-center justify-between bg-[#128c7e] dark:bg-[#025c4c] px-4 py-2.5 text-white">
          <h3 className="font-medium flex items-center gap-2">
            <Smartphone size={18} /> Instalar Aplicativo
          </h3>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-7 w-7 text-white hover:bg-[#0c6b62] dark:hover:bg-[#054c40] rounded-full" 
            onClick={handleClose}
          >
            <X size={16} />
          </Button>
        </div>
        
        <div className="p-4">
          <div className="mb-4">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {isIOS 
                ? 'Adicione o RodTicket à sua tela inicial para acesso rápido e experiência completa de aplicativo.' 
                : 'Instale o aplicativo RodTicket para acesso rápido e melhor experiência, mesmo offline.'}
            </p>
          </div>
          
          {isIOS ? (
            <div className="space-y-2 text-xs text-gray-600 dark:text-gray-400">
              <p>1. Toque em <span className="bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded">Compartilhar</span> ou <span className="bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded"><svg xmlns="http://www.w3.org/2000/svg" className="inline w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></span></p>
              <p>2. Selecione <span className="bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded">Adicionar à Tela Inicial</span></p>
            </div>
          ) : (
            <Button 
              onClick={handleInstall}
              className="w-full bg-[#25d366] hover:bg-[#1da952] text-white rounded-full flex items-center justify-center gap-2 py-5 font-medium"
            >
              <Download size={16} /> Instalar Aplicativo
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default InstallPWA;