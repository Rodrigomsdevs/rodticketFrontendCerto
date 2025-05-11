import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Users, Kanban, FileText, BarChart3, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import CTA from '@/components/home/CTA';
import SEO from '@/components/SEO';
import { useIsMobile } from '@/hooks/use-mobile';
import { useState } from 'react';

const Funcionalidades = () => {
  const isMobile = useIsMobile();
  const [expandedFeatures, setExpandedFeatures] = useState<string[]>([]);

  const toggleFeature = (featureId: string) => {
    setExpandedFeatures(prev => 
      prev.includes(featureId) 
        ? prev.filter(id => id !== featureId) 
        : [...prev, featureId]
    );
  };

  const features = [
    {
      id: "gestao-centralizada",
      title: "Gestão Centralizada de Atendentes e Contatos",
      description: "Centralize a comunicação com clientes através de WhatsApp, Instagram e Facebook em uma única plataforma.",
      icon: <MessageSquare className="h-10 w-10 text-primary" />,
      details: [
        "Gerencie múltiplos atendentes e números de WhatsApp em um só lugar",
        "Organize contatos por tags e grupos personalizados",
        "Histórico completo de conversas com clientes",
        "Facilite o gerenciamento de atendentes e contatos, otimizando o fluxo de trabalho",
        "Transição suave entre atendentes sem perder o contexto da conversa"
      ],
      image: "/images/gestaoFuncionalidades.png"
    },
    {
      id: "setores-personalizaveis",
      title: "Setores Personalizáveis",
      description: "Crie setores específicos para cada área da sua empresa.",
      icon: <Users className="h-10 w-10 text-secondary" />,
      details: [
        "Crie setores específicos para cada área da sua empresa",
        "Direcione atendimentos de acordo com o setor solicitado pelo cliente",
        "Hierarquia de permissões por setor",
        "Personalização de mensagens automáticas por setor",
        "Métricas e relatórios segmentados por setor"
      ],
      image: "/images/setoresFuncionalidades.png"
    },
    {
      id: "chatbots-automacao",
      title: "Integração com Chatbots e Automação",
      description: "Utilize automações e inteligência artificial para respostas rápidas e direcionadas.",
      icon: <MessageSquare className="h-10 w-10 text-teal-dark" />,
      details: [
        "Utilize automações e inteligência artificial para respostas rápidas",
        "Fluxos de conversação personalizados e intuitivos",
        "Integração nativa com Typebot e OpenAI",
        "Respostas automáticas baseadas em palavras-chave",
        "Transferência inteligente para atendentes humanos quando necessário",
        "Agendamentos automatizados via chatbot"
      ],
      image: "/images/feature-chatbot.png"
    },
    {
      id: "api-integration",
      title: "API e Webhooks",
      description: "Integre o RodTicket com seus sistemas existentes através da nossa API robusta.",
      icon: <FileText className="h-10 w-10 text-whatsapp-accent" />,
      details: [
        "API RESTful completa para integração com sistemas existentes",
        "Webhooks para notificações em tempo real",
        "Suporte para envio e recebimento de mensagens programaticamente",
        "Documentação detalhada e exemplos de código",
        "Autenticação segura com tokens JWT",
        "Limitação de taxa configurável"
      ],
      image: "/images/feature-api.png"
    },
    {
      id: "kanban-tickets",
      title: "Kanban para Gerenciamento de Tickets",
      description: "Organize e visualize os tickets de atendimento usando o método Kanban.",
      icon: <Kanban className="h-10 w-10 text-whatsapp" />,
      details: [
        "Organize e visualize os tickets de atendimento usando o método Kanban",
        "Personalize colunas e etapas do fluxo de atendimento",
        "Arraste e solte tickets entre as colunas",
        "Atribua tickets a atendentes específicos",
        "Priorização visual de tickets urgentes",
        "Filtros avançados para encontrar tickets rapidamente"
      ],
      image: "/images/feature-kanban.png"
    },
    {
      id: "relatorios",
      title: "Relatórios e Análise de Dados",
      description: "Acompanhe métricas e obtenha insights para otimizar o atendimento ao cliente.",
      icon: <BarChart3 className="h-10 w-10 text-secondary" />,
      details: [
        "Acompanhe métricas importantes como tempo de resposta e satisfação do cliente",
        "Gráficos e visualizações interativas para análise de dados",
        "Relatórios personalizados por período, atendente ou setor",
        "Exportação de dados em diversos formatos (CSV, PDF, Excel)",
        "Insights automáticos para melhorar o desempenho da equipe",
        "Métricas de desempenho de chatbots e automações"
      ],
      image: "/images/feature-reports.png"
    },
    {
      id: "agendamento",
      title: "Sistema de Agendamento",
      description: "Permita que seus clientes agendem serviços diretamente pelo WhatsApp.",
      icon: <Calendar className="h-10 w-10 text-whatsapp-accent" />,
      details: [
        "Integração nativa com o calendário de sua equipe",
        "Confirmações e lembretes automáticos via WhatsApp",
        "Personalização de horários disponíveis e duração de serviços",
        "Reagendamento e cancelamento simplificados",
        "Sincronização com Google Calendar e outros serviços",
        "Visualização de agenda por dia, semana ou mês"
      ],
      image: "/images/feature-calendar.png"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Funcionalidades"
        description="Conheça as funcionalidades completas do RodTicket para transformar seu atendimento via WhatsApp com chatbots, automação, setores personalizáveis e mais."
        keywords="funcionalidades rodticket, chatbot whatsapp, automação atendimento, kanban tickets, setores personalizáveis, sistema agendamento whatsapp, api whatsapp"
      />
      <Navbar />
      <main className="flex-grow">
        {/* Hero section */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
                Funcionalidades Completas
              </span>
              <h1 className="font-bold mb-6">Todas as ferramentas para um <span className="gradient-text">atendimento WhatsApp profissional</span></h1>
              <p className="text-gray-600 text-lg mb-8">
                Conheça todas as funcionalidades do RodTicket que vão transformar o atendimento da sua empresa através do WhatsApp.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/precos">
                  <Button className="bg-primary hover:bg-primary-600">
                    Teste 7 Dias Grátis
                  </Button>
                </Link>
                <a href="#features">
                  <Button variant="outline">
                    Ver Funcionalidades
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features section */}
        <section className="section" id="features">
          <div className="container-custom">
            <div className="space-y-12 md:space-y-24">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  id={feature.id}
                  className="scroll-mt-24"
                >
                  {isMobile ? (
                    <Card className="overflow-hidden border shadow-sm hover:shadow-md transition-all">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className={`${index % 2 === 0 ? 'bg-primary/10' : 'bg-secondary/10'} w-12 h-12 rounded-lg flex items-center justify-center`}>
                              {feature.icon}
                            </div>
                            <h2 className="text-lg font-bold">{feature.title}</h2>
                          </div>
                          <button
                            onClick={() => toggleFeature(feature.id)}
                            className="text-gray-500 p-2"
                            aria-label={expandedFeatures.includes(feature.id) ? "Recolher detalhes" : "Expandir detalhes"}
                          >
                            {expandedFeatures.includes(feature.id) ? (
                              <ChevronUp size={20} />
                            ) : (
                              <ChevronDown size={20} />
                            )}
                          </button>
                        </div>
                        
                        <p className="text-gray-600 mb-4">{feature.description}</p>
                        
                        {expandedFeatures.includes(feature.id) && (
                          <div className="space-y-3 mb-4 animate-fadeIn">
                            {feature.details.map((detail, i) => (
                              <div key={i} className="flex items-start">
                                <span className="text-primary font-bold mr-2">✓</span>
                                <span className="text-gray-700 text-sm">{detail}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        
                        <Link to="/precos" className="inline-block w-full">
                          <Button 
                            className="bg-primary hover:bg-primary-600 w-full mt-2"
                            size="sm"
                          >
                            Escolher um Plano
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ) : (
                    <div className={`flex ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}>
                      <div className="w-full lg:w-1/2">
                        <div className={`${index % 2 === 0 ? 'bg-primary/10' : 'bg-secondary/10'} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
                          {feature.icon}
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">{feature.title}</h2>
                        <p className="text-gray-600 text-lg mb-6">{feature.description}</p>
                        <ul className="space-y-3 mb-8">
                          {feature.details.map((detail, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-primary font-bold mr-2">✓</span>
                              <span className="text-gray-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                        <Link to="/precos">
                          <Button className="bg-primary hover:bg-primary-600">
                            Escolher um Plano
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>

                      <div className="w-full lg:w-1/2">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="object-cover w-[100%] h-auto rounded-lg shadow-lg transform -translate-y-3 transition-all"
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA section */}
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Funcionalidades;
