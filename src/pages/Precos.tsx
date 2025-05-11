import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTA from '@/components/home/CTA';
import SEO from '@/components/SEO';

const Precos = () => {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');
  const [showComparison, setShowComparison] = useState(false);

  const plans = [
    {
      name: "Básico",
      price: billing === 'monthly' ? "R$99" : "R$79",
      description: "Impulsione suas vendas com recursos de mensagens e CRM",
      yearlyTotalText: billing === 'annual' ? 'R$948 por ano' : undefined,
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
      price: billing === 'monthly' ? "R$169" : "R$135",
      description: "Faça ainda mais vendas com bots e automatizações",
      yearlyTotalText: billing === 'annual' ? 'R$1.620 por ano' : undefined,
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
      price: billing === 'monthly' ? "R$339" : "R$271",
      description: "Organize grandes quantidades de leads e dados",
      yearlyTotalText: billing === 'annual' ? 'R$3.252 por ano' : undefined,
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

  // Detailed comparison features
  const comparisonFeatures = [
    {
      category: "Básico",
      features: [
        { name: "Quantidade de atendentes", basic: "1", advanced: "5", business: "15" },
        { name: "Números de WhatsApp", basic: "1", advanced: "2", business: "4" },
        { name: "Setores", basic: "2", advanced: "10", business: "Ilimitados" }
      ]
    },
    {
      category: "Chatbots e Automação",
      features: [
        { name: "Respostas automáticas", basic: "✓", advanced: "✓", business: "✓" },
        { name: "Construtor de fluxos", basic: "✗", advanced: "✓", business: "✓" },
        { name: "Integração com OpenAI", basic: "✗", advanced: "✓", business: "✓" },
        { name: "Fluxos personalizáveis", basic: "✗", advanced: "10", business: "Ilimitados" }
      ]
    },
    {
      category: "Integrações",
      features: [
        { name: "Webhook", basic: "✓", advanced: "✓", business: "✓" },
        { name: "API completa", basic: "✗", advanced: "✗", business: "✓" },
        { name: "Google Calendar", basic: "✗", advanced: "✓", business: "✓" },
        { name: "Typebot", basic: "✗", advanced: "✓", business: "✓" },
        { name: "Zapier", basic: "✗", advanced: "✓", business: "✓" }
      ]
    },
    {
      category: "Relatórios",
      features: [
        { name: "Relatórios básicos", basic: "✓", advanced: "✓", business: "✓" },
        { name: "Exportação de dados", basic: "✓", advanced: "✓", business: "✓" },
        { name: "Relatórios avançados", basic: "✗", advanced: "✓", business: "✓" },
        { name: "Relatórios personalizados", basic: "✗", advanced: "✗", business: "✓" },
        { name: "Insights de IA", basic: "✗", advanced: "✗", business: "✓" }
      ]
    },
    {
      category: "Suporte",
      features: [
        { name: "Email", basic: "✓", advanced: "✓", business: "✓" },
        { name: "Chat", basic: "✓", advanced: "✓", business: "✓" },
        { name: "Telefone", basic: "✗", advanced: "✓", business: "✓" },
        { name: "Onboarding dedicado", basic: "✗", advanced: "✗", business: "✓" },
        { name: "Gerente de sucesso", basic: "✗", advanced: "✗", business: "✓" }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Planos e Preços"
        description="Escolha o plano ideal do RodTicket para seu negócio. Oferecemos opções para todos os tamanhos de empresa, desde pequenos negócios até grandes corporações."
        keywords="preços rodticket, planos atendimento whatsapp, valores automação, chatbot preços, atendimento whatsapp valores, pacotes atendimento"
      />
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-50 to-white py-16">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
                Planos e Preços
              </span>
              <h1 className="font-bold mb-6">Escolha o plano ideal para o seu negócio</h1>
              <p className="text-gray-600 text-lg mb-8">
                Transforme seu atendimento no WhatsApp com a plataforma completa do RodTicket. Temos planos para todos os tamanhos de negócio.
              </p>
            </div>

            {/* Billing toggle */}
            <div className="flex items-center justify-center mt-8 mb-12">
              <div className="bg-white rounded-lg p-1 inline-flex shadow-soft">
                <button
                  onClick={() => setBilling('monthly')}
                  className={`px-6 py-2 rounded-md font-medium text-sm transition-all ${
                    billing === 'monthly' 
                      ? 'bg-primary text-white shadow-sm' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Mensal
                </button>
                <button
                  onClick={() => setBilling('annual')}
                  className={`px-6 py-2 rounded-md font-medium text-sm transition-all ${
                    billing === 'annual' 
                      ? 'bg-primary text-white shadow-sm' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Anual <span className="text-xs font-normal">(-20%)</span>
                </button>
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {plans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`rounded-xl overflow-hidden ${plan.highlighted ? 'ring-2 ring-primary shadow-lg md:scale-105' : 'bg-white shadow-soft'}`}
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
                      {plan.yearlyTotalText && (
                        <div className="text-xs text-gray-500 mt-1">
                          {plan.yearlyTotalText}
                        </div>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                    <Button 
                      variant={plan.highlighted ? "default" : "outline"}
                      className={`w-full ${plan.highlighted ? 'bg-primary hover:bg-primary-600' : ''}`}
                    >
                      {plan.buttonText}
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

            {/* Toggle comparison table */}
            <div className="text-center mb-8">
              <Button 
                variant="outline" 
                onClick={() => setShowComparison(!showComparison)}
                className="mx-auto"
              >
                {showComparison ? "Ocultar comparativo detalhado" : "Ver comparativo detalhado"}
              </Button>
            </div>

            {/* Comparison table */}
            {showComparison && (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg shadow-soft overflow-hidden">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="p-4 text-left text-gray-900 font-medium border-b">Recursos</th>
                      <th className="p-4 text-center text-gray-900 font-medium border-b">Básico</th>
                      <th className="p-4 text-center text-gray-900 font-medium border-b">Avançado</th>
                      <th className="p-4 text-center text-gray-900 font-medium border-b">Empresarial</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((category, idx) => (
                      <React.Fragment key={idx}>
                        <tr className="bg-gray-50">
                          <td colSpan={4} className="p-3 font-medium text-primary">{category.category}</td>
                        </tr>
                        {category.features.map((feature, featureIdx) => (
                          <tr key={`${idx}-${featureIdx}`} className="border-b last:border-b-0">
                            <td className="p-3 text-gray-700">{feature.name}</td>
                            <td className="p-3 text-center">
                              {feature.basic === "✓" ? (
                                <Check className="h-5 w-5 text-primary mx-auto" />
                              ) : feature.basic === "✗" ? (
                                <span className="text-gray-400">—</span>
                              ) : (
                                <span>{feature.basic}</span>
                              )}
                            </td>
                            <td className="p-3 text-center">
                              {feature.advanced === "✓" ? (
                                <Check className="h-5 w-5 text-primary mx-auto" />
                              ) : feature.advanced === "✗" ? (
                                <span className="text-gray-400">—</span>
                              ) : (
                                <span>{feature.advanced}</span>
                              )}
                            </td>
                            <td className="p-3 text-center">
                              {feature.business === "✓" ? (
                                <Check className="h-5 w-5 text-primary mx-auto" />
                              ) : feature.business === "✗" ? (
                                <span className="text-gray-400">—</span>
                              ) : (
                                <span>{feature.business}</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">Perguntas Frequentes</h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-soft">
                  <h3 className="font-semibold text-lg mb-3">Posso mudar de plano a qualquer momento?</h3>
                  <p className="text-gray-600">Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As alterações serão aplicadas imediatamente e o valor será ajustado no próximo ciclo de pagamento.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-soft">
                  <h3 className="font-semibold text-lg mb-3">Quais formas de pagamento são aceitas?</h3>
                  <p className="text-gray-600">Aceitamos cartões de crédito, débito, boleto bancário e PIX. No caso de pagamentos recorrentes, utilizamos apenas cartão de crédito.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-soft">
                  <h3 className="font-semibold text-lg mb-3">O teste gratuito possui limitações?</h3>
                  <p className="text-gray-600">O teste gratuito de 7 dias oferece acesso completo a todas as funcionalidades do plano escolhido, sem nenhuma limitação. Você pode testar todas as funcionalidades antes de decidir.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-soft">
                  <h3 className="font-semibold text-lg mb-3">Preciso fornecer cartão de crédito para testar?</h3>
                  <p className="text-gray-600">Não, não é necessário fornecer dados de cartão de crédito para começar o período de teste gratuito de 7 dias.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTA/>
      </main>
      <Footer />
    </div>
  );
};

export default Precos;
