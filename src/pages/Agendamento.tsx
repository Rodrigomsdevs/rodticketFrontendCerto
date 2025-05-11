import React from 'react';
import SEO from '@/components/SEO';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, Bell, Users, CheckCircle, Smartphone, ExternalLink, ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTA from '@/components/home/CTA';

const Agendamento = () => {
  const features = [
    {
      icon: <ExternalLink className="h-10 w-10 text-primary" />,
      title: "Link de Agendamento Personalizado",
      description: "Aumente suas conversões com links personalizados com sua marca, enviados diretamente pelo WhatsApp para agendamentos instantâneos."
    },
    {
      icon: <Bell className="h-10 w-10 text-secondary" />,
      title: "Notificações Automáticas",
      description: "Reduza faltas em até 70% com confirmações e lembretes automáticos via WhatsApp que garantem a presença do cliente."
    },
    {
      icon: <Clock className="h-10 w-10 text-teal-dark" />,
      title: "Horários em Tempo Real",
      description: "Elimine overbooking: o sistema mostra apenas horários realmente disponíveis e atualiza instantaneamente seu calendário."
    },
    {
      icon: <Users className="h-10 w-10 text-whatsapp-accent" />,
      title: "Multi-setorial",
      description: "Solução versátil que atende perfeitamente barbearias, clínicas, salões, consultorias e qualquer negócio baseado em agendamentos."
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-whatsapp" />,
      title: "Confirmação via WhatsApp",
      description: "Aumente a satisfação do cliente com confirmações instantâneas pelo canal que ele já usa diariamente: o WhatsApp."
    },
    {
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      title: "Tecnologia PWA",
      description: "Funciona como aplicativo nativo em qualquer dispositivo sem necessidade de download nas lojas, com acesso offline e carregamento ultra-rápido."
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Cliente solicita agendamento",
      description: "O cliente entra em contato pelo WhatsApp solicitando um horário."
    },
    {
      number: "02",
      title: "Bot envia link personalizado",
      description: "Automaticamente, o sistema responde com um link para a página de agendamento."
    },
    {
      number: "03",
      title: "Cliente acessa interface externa",
      description: "Ao clicar, o cliente é direcionado para uma página personalizada com sua marca."
    },
    {
      number: "04",
      title: "Seleção de serviço e horário",
      description: "Na interface, ele escolhe o serviço, profissional, data e hora disponíveis."
    },
    {
      number: "05",
      title: "Finalização do agendamento",
      description: "Após confirmar os dados, o sistema registra o agendamento instantaneamente."
    },
    {
      number: "06",
      title: "Confirmação via WhatsApp",
      description: "A confirmação e lembretes são enviados diretamente no WhatsApp do cliente."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Sistema de Agendamento Online"
        description="Transforme seu negócio com o sistema de agendamento online do RodTicket. Permita que seus clientes agendem serviços diretamente pelo WhatsApp."
        keywords="agendamento online, agendamento whatsapp, sistema de agendamento, marcação de horários, atendimento automatizado"
      />
      <Navbar />
      <main className="flex-grow">
        {/* Hero section */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block py-1 px-3 rounded-full bg-whatsapp-accent/10 text-whatsapp-accent font-medium text-sm mb-4">
                  Agendamento Online Revolucionário
                </span>
                <h1 className="font-bold mb-6">Transforme seu <span className="gradient-text">WhatsApp</span> em um Sistema de Agendamento Profissional</h1>
                <p className="text-gray-600 text-lg mb-8">
                  Aumente sua receita em até 40% com o RodTicket. Seus clientes recebem um link personalizado via WhatsApp, 
                  fazem o agendamento em segundos, e você elimina as faltas com lembretes automáticos.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/precos">
                    <Button className="bg-primary hover:bg-primary-600">
                      Comece Hoje - 7 Dias Grátis
                    </Button>
                  </Link>
                  <Link to="/funcionalidades">
                    <Button variant="outline">
                      Ver Todas as Funcionalidades
                    </Button>
                  </Link>
                </div>
              </div>
              
              {/* Demonstração visual do fluxo de agendamento */}
              <div className="relative">
                {/* Simulação do WhatsApp - agora à esquerda e mais proeminente em desktop */}
                <div className="bg-white rounded-2xl shadow-medium border border-gray-100 w-72 md:w-80 absolute top-0 left-0 z-30">
                  <div className="bg-whatsapp p-3 rounded-t-2xl flex items-center">
                    <div className="w-8 h-8 rounded-full bg-white flex-shrink-0 mr-2"></div>
                    <div>
                      <h3 className="text-white text-sm font-medium">RodTicket Agendamentos</h3>
                      <p className="text-white/80 text-xs">Online</p>
                    </div>
                  </div>
                  <div className="p-3 max-h-80 overflow-y-auto bg-[#e5e1dd]">
                    {/* Conversa de WhatsApp */}
                    <div className="space-y-2">
                      <div className="bg-white rounded-lg p-2.5 shadow-sm max-w-[75%] ml-auto">
                        <p className="text-xs">Olá, quero agendar um horário</p>
                      </div>
                      
                      <div className="bg-whatsapp-light rounded-lg p-2.5 max-w-[75%]">
                        <p className="text-xs">Olá! Você pode agendar facilmente clicando no link abaixo:</p>
                      </div>
                      
                      <div className="bg-whatsapp-light rounded-lg p-2.5 max-w-[75%]">
                        <p className="text-xs text-blue-600 underline flex items-center">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          https://rodticket.com
                        </p>
                      </div>
                      
                      <div className="text-center my-1.5">
                        <span className="text-[10px] bg-white/70 text-gray-500 px-2 py-0.5 rounded-full">2 horas depois</span>
                      </div>
                      
                      <div className="bg-whatsapp-light rounded-lg p-2.5 max-w-[75%]">
                        <p className="text-xs font-medium">✅ Agendamento Confirmado</p>
                        <p className="text-xs">Serviço: Corte de cabelo</p>
                        <p className="text-xs">Data: 05/05/2025</p>
                        <p className="text-xs">Horário: 14:30</p>
                        <div className="mt-1.5 text-[10px] text-gray-600">
                          Você receberá um lembrete 24h antes.
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-lg p-2.5 shadow-sm max-w-[75%] ml-auto">
                        <p className="text-xs">Obrigado! Estarei lá.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Simulação da interface de agendamento - agora atrás do WhatsApp em desktop */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 ml-auto md:ml-[160px] lg:ml-[180px] mr-0 lg:mr-10 w-80 lg:w-96 transform translate-y-10 md:translate-y-20 z-20">
                  <div className="bg-primary p-4 rounded-t-2xl">
                    <div className="flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-white mr-2" />
                      <h3 className="text-white font-medium">Agendamento Online</h3>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="mb-4">
                      <h4 className="text-sm font-medium mb-2">Selecione o serviço:</h4>
                      <div className="bg-primary/5 p-2 rounded-md border border-primary/20 flex items-center">
                        <div className="h-4 w-4 rounded-full bg-primary mr-2"></div>
                        <span className="text-sm">Corte de cabelo</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium mb-2">Selecione o profissional:</h4>
                      <div className="bg-gray-50 p-2 rounded-md border border-gray-200 flex items-center">
                        <div className="h-6 w-6 rounded-full bg-gray-300 mr-2"></div>
                        <span className="text-sm">Roberto</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium mb-2">Selecione a data:</h4>
                      <div className="bg-white border border-gray-200 rounded-md p-2">
                        <div className="grid grid-cols-7 gap-1 text-center mb-1">
                          {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((day, i) => (
                            <div key={i} className="text-xs text-gray-500">{day}</div>
                          ))}
                        </div>
                        <div className="grid grid-cols-7 gap-1 text-center">
                          {Array.from({length: 14}).map((_, i) => {
                            const isHighlighted = i === 4;
                            
                            return (
                              <div 
                                key={i} 
                                className={`text-xs p-1 ${
                                  isHighlighted 
                                    ? 'bg-primary text-white rounded-full' 
                                    : ''
                                }`}
                              >
                                {i + 1}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium mb-2">Selecione o horário:</h4>
                      <div className="grid grid-cols-3 gap-2">
                        {['09:00', '10:30', '14:30', '16:00'].map((time, i) => (
                          <div 
                            key={i} 
                            className={`text-center p-2 text-xs rounded-md border ${
                              i === 2 
                                ? 'bg-primary text-white border-primary' 
                                : 'border-gray-200'
                            }`}
                          >
                            {time}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Button className="w-full bg-primary hover:bg-primary-600 text-white">
                      Confirmar Agendamento
                    </Button>
                  </div>
                </div>
                
                {/* Linha conectora animada do WhatsApp para o calendário - melhorada para desktop */}
                <svg 
                  className="absolute top-24 md:top-28 left-48 md:left-64 z-25 hidden md:block" 
                  width="160" 
                  height="100" 
                  viewBox="0 0 160 100" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M0 20C40 20 80 60 160 60" 
                    stroke="#25D366" 
                    strokeWidth="3" 
                    strokeDasharray="6 4" 
                  />
                  <path 
                    d="M145 45L160 60L145 75" 
                    stroke="#25D366" 
                    strokeWidth="3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Features section */}
        <section className="section">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-4">
                Benefícios Exclusivos
              </span>
              <h2 className="font-bold mb-4">Por que usar o sistema de agendamento do RodTicket</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Nossa solução de agendamento via link externo com confirmação pelo WhatsApp oferece uma experiência superior para seus clientes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all overflow-hidden">
                  <CardContent className="p-6">
                    <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How it works section */}
        <section className="section bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary rounded-full"></div>
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-secondary rounded-full"></div>
          </div>
          
          <div className="container-custom relative z-10">
            <div className="text-center mb-12">
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
                Fluxo de Agendamento
              </span>
              <h2 className="font-bold mb-4">De Mensagem para Agendamento em Segundos</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                O sistema RodTicket automatiza todo o processo de agendamento, transformando cada contato em uma oportunidade de venda concluída.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-all h-full">
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                    <h3 className="text-lg font-semibold mb-3 mt-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                    
                    {/* Ícone correspondente para cada etapa */}
                    <div className="mt-4">
                      {index === 0 && <MessageCircle className="h-8 w-8 text-gray-300" />}
                      {index === 1 && <ExternalLink className="h-8 w-8 text-gray-300" />}
                      {index === 2 && <Smartphone className="h-8 w-8 text-gray-300" />}
                      {index === 3 && <Calendar className="h-8 w-8 text-gray-300" />}
                      {index === 4 && <CheckCircle className="h-8 w-8 text-gray-300" />}
                      {index === 5 && <Bell className="h-8 w-8 text-gray-300" />}
                    </div>
                  </div>
                  
                  {index < steps.length - 1 && index % 3 !== 2 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 items-center justify-center z-20">
                      <ArrowRight className="h-6 w-6 text-primary" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration section */}
        

        {/* PWA Section */}
        

        {/* CTA */}
        <CTA/>
      </main>
      <Footer />
    </div>
  );
};

export default Agendamento;