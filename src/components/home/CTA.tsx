import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';

const CTA = () => {
  // Ref para a seção de CTA para efeito de intersection observer
  const ctaRef = useRef<HTMLElement>(null);
  // Estado para controlar animação ao entrar na viewport
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Configurar o IntersectionObserver para detectar quando o CTA está visível
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 } // Ativa quando 20% do elemento está visível
    );
    
    // Observar o elemento quando o componente montar
    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }
    
    // Limpar o observer quando o componente desmontar
    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={ctaRef}
      className={`py-16 md:py-20 relative overflow-hidden transition-all duration-700 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Background com gradiente melhorado */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary-600 to-teal-900 -z-10" />
      
      {/* Elementos decorativos para efeito visual */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute -right-12 top-1/4 w-32 h-32 rounded-full bg-white opacity-5" />
        <div className="absolute left-1/4 bottom-0 w-40 h-40 rounded-full bg-white opacity-5" />
        <div className="absolute right-1/3 top-0 w-24 h-24 rounded-full bg-teal-light opacity-5" />
      </div>

      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center relative">
          {/* Ícone decorativo na parte superior */}
          <div className="inline-flex items-center justify-center p-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
            <Sparkles className="h-5 w-5 text-yellow-300" />
          </div>
          
          {/* Conteúdo principal mais atraente */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-white">
            Comece agora e transforme seu<br className="hidden sm:block" /> atendimento via WhatsApp!
          </h2>
          
          <p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto">
            Escolha o plano ideal e tenha acesso a todas as funcionalidades para aumentar sua eficiência em até 40%.
          </p>
          
          {/* Botões com design melhorado e interativo */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/precos" className="w-full sm:w-auto group">
              <Button className="bg-white text-primary hover:bg-yellow-50 w-full transition-all duration-300 py-6 text-base font-medium group-hover:shadow-lg group-hover:scale-[1.02]">
                Ver Planos e Preços
                <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/funcionalidades" className="w-full sm:w-auto group">
              <Button variant="outline" className="text-green border-white/70 hover:bg-white/10 w-full transition-all duration-300 py-6 text-base font-medium">
                Todas as Funcionalidades
                <ArrowRight className="h-5 w-5 ml-2 opacity-70 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          
          {/* Lista de benefícios */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-white/80">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-teal-300" />
              <span>Sem cartão de crédito</span>
            </div>
            <div className="hidden sm:block h-1 w-1 bg-white/30 rounded-full"></div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-teal-300" />
              <span>Teste gratuito por 7 dias</span>
            </div>
            <div className="hidden sm:block h-1 w-1 bg-white/30 rounded-full"></div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-teal-300" />
              <span>Suporte personalizado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
