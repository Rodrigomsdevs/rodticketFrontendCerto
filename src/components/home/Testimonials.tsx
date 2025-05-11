import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  
  // Ajuste responsivo do número de itens por página
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Depoimentos mais realistas e detalhados
  const testimonials = [
    {
      name: "Marcos Oliveira",
      position: "Proprietário, Barbearia Vintage",
      location: "São Paulo, SP",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      content: "O sistema de agendamento do RodTicket mudou meu negócio. Antes eu perdia 30% dos clientes por não conseguir responder mensagens no WhatsApp a tempo. Hoje, com o bot de agendamento automático, minha agenda está sempre lotada e as faltas caíram 65% graças aos lembretes automáticos. Consegui um aumento real de R$4.200 na receita mensal sem contratar mais funcionários.",
      stars: 5,
      date: "11/03/2025"
    },
    {
      name: "Juliana Mendes",
      position: "Gerente de Atendimento, SoluçõesTech",
      location: "Curitiba, PR",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      content: "Nossa equipe de suporte técnico atendia 120 tickets diários com muito estresse e longo tempo de espera. Com o sistema Kanban do RodTicket e a automação de respostas frequentes, hoje gerenciamos 280+ atendimentos por dia com a mesma equipe. A integração com nossa base de conhecimento através da API foi perfeita, e o NPS subiu de 67 para 89 em apenas dois meses.",
      stars: 5,
      date: "02/04/2025"
    },
    {
      name: "Roberto Santos",
      position: "CEO, Contabilidade Express",
      location: "Belo Horizonte, MG",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      content: "Implementamos o RodTicket para automatizar dúvidas frequentes sobre impostos e prazos. O resultado foi impressionante: 78% das perguntas são respondidas pelo chatbot com integração de OpenAI, liberando nossa equipe para análises complexas. O tempo médio de resposta caiu de 3h para apenas 4min, e a classificação por setores nos ajuda a direcionar corretamente as demandas mais técnicas.",
      stars: 5,
      date: "19/02/2025"
    },
    {
      name: "Carolina Almeida",
      position: "Diretora, Clínica Estética Belle",
      location: "Rio de Janeiro, RJ",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      content: "Nossa clínica estava perdendo agendamentos porque a recepcionista não conseguia atender todos os WhatsApps. Com o RodTicket, 92% dos agendamentos agora são feitos pelo link automatizado e os lembretes 24h antes reduziram nosso índice de no-shows em 70%. Os relatórios me ajudam a identificar os horários mais requisitados e otimizar a agenda dos profissionais. Investimento que se pagou no primeiro mês.",
      stars: 5,
      date: "28/03/2025"
    },
    {
      name: "Paulo Ribeiro",
      position: "Gerente de Vendas, Distribuidora Alimentos & Cia",
      location: "Porto Alegre, RS",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      content: "O RodTicket transformou nosso processo de pedidos. Implementamos um bot no WhatsApp que recebe pedidos e integra diretamente com nosso estoque via webhook. Nossa equipe de 42 vendedores externos agora consegue processar pedidos instantaneamente. Os erros de digitação zeraram e o tempo de processamento caiu de 1 dia para 20 minutos. Já estamos expandindo para nossas outras 5 filiais.",
      stars: 5,
      date: "07/04/2025"
    },
    {
      name: "Luciana Castro",
      position: "Coordenadora de Marketing, Escola Futuro",
      location: "Brasília, DF",
      image: "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      content: "Utilizamos o RodTicket para campanhas de captação de novos alunos e o resultado foi surpreendente. O chatbot qualifica leads, responde dúvidas sobre cursos e agenda visitas automaticamente. Com os setores personalizados, direcionamos cada interesse para o departamento correto. Nossa taxa de conversão aumentou 52% e o tempo de resposta caiu para menos de 2 minutos, mesmo fora do horário comercial.",
      stars: 5,
      date: "15/03/2025"
    }
  ];

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  
  const nextPage = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const currentTestimonials = testimonials.slice(
    currentPage * itemsPerPage, 
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section className="section bg-gray-50 py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-whatsapp-light text-teal-dark font-medium text-sm mb-4">
            Casos de Sucesso
          </span>
          <h2 className="font-bold text-3xl mb-4">O que nossos clientes estão dizendo</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça histórias reais de empresas que transformaram seu atendimento com o RodTicket
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          {/* Grid de depoimentos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentTestimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-medium h-full flex flex-col transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="p-6 flex-grow relative">
                  {/* Aspas decorativas */}
                  <div className="absolute top-4 right-4 text-gray-100">
                    <svg width="40" height="40" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M32 16H16V32C16 40.8366 23.1634 48 32 48V32H48V16H32ZM64 16H48V32C48 40.8366 55.1634 48 64 48V32H80V16H64Z" fill="currentColor"/>
                    </svg>
                  </div>

                  {/* Conteúdo do depoimento */}
                  <p className="text-gray-700 mb-6 relative z-10 text-sm">"{testimonial.content}"</p>

                  {/* Informações do cliente */}
                  <div className="mt-auto">
                    <div className="flex items-center mt-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-primary/20">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-gray-500 text-xs">{testimonial.position}</p>
                        <p className="text-gray-400 text-xs">{testimonial.location}</p>
                      </div>
                    </div>

                    {/* Avaliação por estrelas e data */}
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < testimonial.stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-gray-400 text-xs">{testimonial.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controles de navegação */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center space-x-4">
              <button 
                onClick={prevPage}
                className="bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-all duration-200 hover:bg-gray-50"
                aria-label="Depoimentos anteriores"
              >
                <ChevronLeft className="h-5 w-5 text-gray-700" />
              </button>
              
              <div className="flex space-x-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      currentPage === index 
                        ? 'bg-primary w-6' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Ir para página ${index + 1}`}
                  ></button>
                ))}
              </div>
              
              <button 
                onClick={nextPage}
                className="bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-all duration-200 hover:bg-gray-50"
                aria-label="Próximos depoimentos"
              >
                <ChevronRight className="h-5 w-5 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;