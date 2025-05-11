import React, { useState, lazy, Suspense } from 'react';
import { MessageSquare, BarChart3, Calendar, Kanban, Bot, Users, Globe, ChevronDown, ChevronRight, ChevronUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Componente para exibir o skeleton durante o carregamento
const FeatureSkeleton = () => (
  <div className="animate-pulse">
    <div className="bg-gray-200 w-16 h-16 rounded-lg mb-4"></div>
    <div className="bg-gray-200 h-6 w-3/4 mb-3 rounded"></div>
    <div className="space-y-2 mb-4">
      <div className="bg-gray-200 h-4 w-full rounded"></div>
      <div className="bg-gray-200 h-4 w-full rounded"></div>
    </div>
    <div className="bg-gray-200 h-5 w-28 rounded mt-4"></div>
  </div>
);

const FeaturesPreview = () => {
  // Estado para controlar quais recursos estão expandidos em visualização móvel
  const [expandedFeatures, setExpandedFeatures] = useState<number[]>([]);
  // Estado para controlar se o código da API está visível em dispositivos móveis
  const [showApiCode, setShowApiCode] = useState(false);

  // Função para alternar a expansão de um recurso
  const toggleFeature = (index: number) => {
    setExpandedFeatures(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const features = [
    {
      title: "Gestão Centralizada de Atendentes",
      description: [
        "Centralize a comunicação com clientes através de WhatsApp em uma única plataforma.",
        "Conecte múltiplos atendentes ao mesmo número de WhatsApp com controle de permissões."
      ],
      icon: <Users className="h-10 w-10 text-primary" />,
      color: "bg-primary/10",
      link: "/funcionalidades#gestao-centralizada"
    },
    {
      title: "Setores Personalizáveis",
      description: [
        "Crie setores específicos para cada área da sua empresa (vendas, suporte, etc.).",
        "Direcione atendimentos automaticamente de acordo com o setor solicitado pelo cliente."
      ],
      icon: <Globe className="h-10 w-10 text-secondary" />,
      color: "bg-secondary/10",
      link: "/funcionalidades#setores-personalizaveis"
    },
    {
      title: "Kanban para Gerenciamento de Tickets",
      description: [
        "Organize e visualize os tickets de atendimento usando o método Kanban intuitivo.",
        "Acompanhe o status de cada atendimento (pendente, em andamento, concluído) em tempo real."
      ],
      icon: <Kanban className="h-10 w-10 text-whatsapp" />,
      color: "bg-whatsapp/10",
      link: "/funcionalidades#kanban-tickets"
    },
    {
      title: "Chatbots e Automação",
      description: [
        "Configure chatbots inteligentes com fluxos lógicos para respostas automáticas.",
        "Economize tempo automatizando respostas para perguntas frequentes dos clientes."
      ],
      icon: <Bot className="h-10 w-10 text-teal-dark" />,
      color: "bg-teal-dark/10",
      link: "/funcionalidades#chatbots-automacao"
    },
    {
      title: "Relatórios e Análise de Dados",
      description: [
        "Acompanhe métricas de tempo de resposta, satisfação e produtividade dos atendentes.",
        "Visualize dados de mais de 75.000 mensagens processadas mensalmente com gráficos intuitivos."
      ],
      icon: <BarChart3 className="h-10 w-10 text-secondary" />,
      color: "bg-secondary/10",
      link: "/funcionalidades#relatorios"
    },
    {
      title: "Agendamento Integrado",
      description: [
        "Permita que clientes escolham datas e horários disponíveis diretamente pelo WhatsApp.",
        "Sistema envia lembretes automáticos para reduzir faltas e otimizar sua agenda."
      ],
      icon: <Calendar className="h-10 w-10 text-whatsapp-accent" />,
      color: "bg-whatsapp-accent/10",
      link: "/agendamento"
    },
  ];

  return (
    <section className="section py-10 md:py-16" id="features">
      <div className="container-custom px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-3 md:mb-4">
            Recursos Principais
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Transforme seu <span className="gradient-text">atendimento via WhatsApp</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Gerencie mensagens, automatize atendimentos e conecte múltiplos atendentes a um único número de WhatsApp com o RodTicket.
          </p>
        </div>

        {/* Cards de recursos - versão responsiva */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          <Suspense fallback={<FeatureSkeleton />}>
            {features.map((feature, index) => (
              <Card
                key={index}
                className="overflow-hidden border-0 shadow-soft hover:shadow-medium transition-all"
              >
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-4">
                      <div className={`${feature.color} w-12 h-12 md:w-16 md:h-16 rounded-lg flex items-center justify-center`}>
                        {feature.icon}
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold flex-1">{feature.title}</h3>

                      {/* Botão de expansão em dispositivos móveis */}
                      <button
                        className="md:hidden text-gray-500"
                        onClick={() => toggleFeature(index)}
                        aria-expanded={expandedFeatures.includes(index)}
                        aria-controls={`feature-content-${index}`}
                      >
                        {expandedFeatures.includes(index) ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                      </button>
                    </div>
                  </div>

                  {/* Conteúdo do card - visível em todos os dispositivos ou em móvel apenas quando expandido */}
                  <div
                    id={`feature-content-${index}`}
                    className={`${expandedFeatures.includes(index) || 'md:block hidden'}`}
                  >
                    <ul className="space-y-2 mb-4">
                      {feature.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary font-bold mr-2 flex-shrink-0">✔</span>
                          <span className="text-gray-600 text-sm md:text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={feature.link}
                      className="text-primary font-medium hover:text-primary-700 flex items-center text-sm md:text-base mt-2 md:mt-4"
                      aria-label={`Saiba mais sobre ${feature.title}`}
                    >
                      Saiba Mais
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </Suspense>
        </div>

        {/* Benefits area - Melhorada */}
        <div className="mt-10 md:mt-20 mb-12 md:mb-20">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-medium text-sm mb-2">
              Diferenciais
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Benefícios da <span className="gradient-text">Integração com WhatsApp</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Potencialize seu negócio com recursos avançados de integração e automação
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-soft hover:shadow-medium transition-all border border-gray-100">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-medium text-lg mb-2">Integração Completa</h3>
              <p className="text-gray-600 text-sm">
                Receba e processe mensagens do WhatsApp diretamente em seu sistema através de webhooks em tempo real
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-soft hover:shadow-medium transition-all border border-gray-100">
              <div className="w-12 h-12 bg-teal-light/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-medium text-lg mb-2">Webhooks Seguros</h3>
              <p className="text-gray-600 text-sm">
                Receba notificações instantâneas de novas mensagens com criptografia e autenticação
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-soft hover:shadow-medium transition-all border border-gray-100">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-medium text-lg mb-2">Chatbots Inteligentes</h3>
              <p className="text-gray-600 text-sm">
                Integre chatbots personalizados para automatizar respostas e melhorar o tempo de atendimento
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-soft hover:shadow-medium transition-all border border-gray-100">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-medium text-lg mb-2">Mensagens Rich Media</h3>
              <p className="text-gray-600 text-sm">
                Suporte completo para imagens, vídeos, documentos e mensagens de localização
              </p>
            </div>
          </div>
        </div>

        {/* API Integration section - versão responsiva */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl md:rounded-2xl p-4 md:p-8 mt-8 md:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start md:items-center">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">Plataforma Avançada para WhatsApp</h3>
              <h4 className="text-lg md:text-xl font-semibold text-primary mb-4 md:mb-6">Solução Completa e Segura para sua Comunicação</h4>

              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded mr-3 text-primary flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm md:text-base">Webhooks em Tempo Real</h5>
                    <p className="text-gray-600 text-xs md:text-sm">Receba notificações instantâneas de mensagens com todos os metadados importantes</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary/10 p-2 rounded mr-3 text-secondary flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3 5-5" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm md:text-base">Chatbots e Fluxos Lógicos</h5>
                    <p className="text-gray-600 text-xs md:text-sm">Crie chatbots intuitivos que economizam tempo respondendo a consultas de rotina</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal-dark/10 p-2 rounded mr-3 text-teal-dark flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm md:text-base">Suporte a Múltiplos Formatos</h5>
                    <p className="text-gray-600 text-xs md:text-sm">Processe textos, imagens, vídeos, documentos e localizações com facilidade</p>
                  </div>
                </li>
              </ul>
              <Button className="mt-4 md:mt-6 bg-primary hover:bg-primary-600 w-full md:w-auto">
                <Link to="/funcionalidades#api-integration" className="text-white text-sm md:text-base">
                  Conhecer API
                </Link>
              </Button>

              {/* Botão para mostrar/esconder código em dispositivos móveis */}
              <button
                className="mt-4 flex items-center text-primary text-sm font-medium md:hidden w-full justify-center"
                onClick={() => setShowApiCode(prev => !prev)}
                aria-expanded={showApiCode}
                aria-controls="api-code-example"
              >
                {showApiCode ? 'Ocultar exemplo de código' : 'Ver exemplo de código'}
                {showApiCode ? <ChevronUp size={16} className="ml-1" /> : <ChevronDown size={16} className="ml-1" />}
              </button>
            </div>

            {/* Exemplo de código - responsivo */}
            <div id="api-code-example" className={`flex justify-center ${showApiCode || 'md:block hidden'}`}>
              <div className="bg-white rounded-xl shadow-soft p-3 md:p-6 w-full max-w-md">
                <div className="font-mono text-xs md:text-sm bg-gray-50 p-2 md:p-4 rounded-md mb-3 md:mb-4 overflow-x-auto">
                  <pre className="text-teal-dark whitespace-pre-wrap">
                    {`// Evento de nova mensagem
{
  "type": "new_message",
  "timestamp": "2025-05-02T01:40:21.882Z",
  "data": {
    "key": {
      "remoteJid": "55449999999@s.whatsapp.net",
      "fromMe": false,
      "id": "3EB0B71CF4FD8583D1EDB7"
    },
    "messageTimestamp": 1746150021,
    "pushName": "RodTicket da Silva",
    "message": {
      "conversation": "Texto da mensagem"
    }
  }
}`}
                  </pre>
                </div>

              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default FeaturesPreview;