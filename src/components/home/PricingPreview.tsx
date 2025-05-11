import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const PricingPreview = () => {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');
  const [activePlan, setActivePlan] = useState(1); // Para o slider em dispositivos móveis
  const isMobile = useIsMobile();
  
  const plans = [
    {
      name: "Básico",
      price: billing === 'monthly' ? "R$99" : "R$99",
      description: "Impulsione suas vendas com recursos de mensagens e CRM",
      features: [
        "Até 1 atendente",
        "1 número de WhatsApp",
        "2 setores",
        "Integração com Webhook"
      ],
      highlighted: false,
      buttonText: "Teste 7 Dias grátis",
      cta: "Ideal para iniciar"
    },
    {
      name: "Avançado",
      price: billing === 'monthly' ? "R$169" : "R$169",
      description: "Faça ainda mais vendas com bots e automatizações",
      features: [
        "Até 5 atendentes",
        "2 números de WhatsApp",
        "10 setores",
        "Construção de ChatBOT",
        "Integração com OpenAI",
        "Integração com Webhook"
      ],
      highlighted: true,
      buttonText: "Teste 7 Dias grátis",
      cta: "Mais Escolhido"
    },
    {
      name: "Empresarial",
      price: billing === 'monthly' ? "R$339" : "R$339",
      description: "Organize grandes quantidades de leads e dados",
      features: [
        "Até 15 atendentes",
        "4 números de WhatsApp",
        "Setores ilimitados",
        "Construção de ChatBOT",
        "Integração com OpenAI",
        "API disponível",
        "Webhook disponível"
      ],
      highlighted: false,
      buttonText: "Teste 7 Dias grátis",
      cta: "Recursos completos"
    }
  ];

  // Função para navegar entre planos em dispositivos móveis
  const navigatePlan = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setActivePlan(prev => (prev > 0 ? prev - 1 : plans.length - 1));
    } else {
      setActivePlan(prev => (prev < plans.length - 1 ? prev + 1 : 0));
    }
  };

  return (
    <section className="section bg-gray-50 py-12 md:py-16" id="precos">
      <div className="container-custom px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Planos Flexíveis
          </span>
          <h2 className="font-bold text-2xl md:text-3xl mb-2 md:mb-4">Escolha o plano ideal para o seu negócio</h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            Temos opções para empresas de todos os tamanhos, desde pequenos negócios até grandes corporações.
          </p>
          
          {/* Billing toggle */}
          <div className="flex items-center justify-center mt-6 md:mt-8 mb-8 md:mb-12">
            <div className="bg-white rounded-lg p-1 inline-flex shadow-soft">
              <button
                onClick={() => setBilling('monthly')}
                className={`px-3 md:px-6 py-2 rounded-md font-medium text-sm transition-all ${
                  billing === 'monthly' 
                    ? 'bg-primary text-white shadow-sm' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Mensal
              </button>
              <button
                onClick={() => setBilling('annual')}
                className={`px-3 md:px-6 py-2 rounded-md font-medium text-sm transition-all ${
                  billing === 'annual' 
                    ? 'bg-primary text-white shadow-sm' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Anual <span className="text-xs font-normal">(-20%)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Carousel View */}
        {isMobile && (
          <div className="relative mb-6">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${activePlan * 100}%)` }}
              >
                {plans.map((plan, index) => (
                  <div 
                    key={index} 
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className={`rounded-xl overflow-hidden ${plan.highlighted ? 'ring-2 ring-primary shadow-lg' : 'bg-white shadow-soft'}`}>
                      {plan.highlighted && (
                        <div className="bg-primary text-white py-2 text-center text-sm font-medium">
                          Recomendado
                        </div>
                      )}
                      <div className="p-6">
                        {!plan.highlighted && <div className="h-2"></div>}
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-bold">{plan.name}</h3>
                          <span className="bg-gray-100 text-gray-600 text-xs font-medium py-1 px-2 rounded">{plan.cta}</span>
                        </div>
                        <div className="mb-4">
                          <span className="text-3xl font-bold">{plan.price}</span>
                          <span className="text-gray-500">/mês</span>
                        </div>
                        <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                        <Button 
                          variant={plan.highlighted ? "default" : "outline"}
                          className={`w-full ${plan.highlighted ? 'bg-primary hover:bg-primary-600' : ''}`}
                        >
                          <Link to="/precos" className={plan.highlighted ? 'text-white' : ''}>
                            {plan.buttonText}
                          </Link>
                        </Button>
                        <div className="mt-6">
                          <p className="text-sm font-medium text-gray-700 mb-3">Inclui:</p>
                          <ul className="space-y-2">
                            {plan.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start">
                                <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                                <span className="text-sm text-gray-600">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {plans.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActivePlan(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    activePlan === index ? 'bg-primary' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={() => navigatePlan('prev')}
              className="absolute top-1/2 left-0 -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
              aria-label="Previous plan"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => navigatePlan('next')}
              className="absolute top-1/2 right-0 -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
              aria-label="Next plan"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        )}

        {/* Desktop Grid View */}
        {!isMobile && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`rounded-xl overflow-hidden ${plan.highlighted ? 'ring-2 ring-primary shadow-lg scale-105' : 'bg-white shadow-soft'}`}
              >
                {plan.highlighted && (
                  <div className="bg-primary text-white py-2 text-center text-sm font-medium">
                    Recomendado
                  </div>
                )}
                <div className="p-6 md:p-8">
                  {!plan.highlighted && <div className="h-2"></div>}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold">{plan.name}</h3>
                    <span className="bg-gray-100 text-gray-600 text-xs font-medium py-1 px-2 rounded">{plan.cta}</span>
                  </div>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-gray-500">/mês</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                  <Button 
                    variant={plan.highlighted ? "default" : "outline"}
                    className={`w-full ${plan.highlighted ? 'bg-primary hover:bg-primary-600' : ''}`}
                  >
                    <Link to="/precos" className={plan.highlighted ? 'text-white' : ''}>
                      {plan.buttonText}
                    </Link>
                  </Button>
                  <div className="mt-6">
                    <p className="text-sm font-medium text-gray-700 mb-3">Inclui:</p>
                    <ul className="space-y-2">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="mt-8 md:mt-12 text-center">
          <p className="text-gray-600 mb-4 text-sm md:text-base">Precisa de um plano personalizado?</p>
          <Link to="/precos">
            <Button variant="outline" className="text-sm md:text-base">
              Ver comparativo completo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingPreview;
