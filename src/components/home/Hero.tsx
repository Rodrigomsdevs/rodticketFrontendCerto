import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-white pt-16 md:pt-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-40 -top-40 w-80 h-80 rounded-full bg-primary/5"></div>
        <div className="absolute -left-20 top-1/4 w-60 h-60 rounded-full bg-secondary/5"></div>
        <div className="absolute right-10 bottom-1/4 w-40 h-40 rounded-full bg-teal-light/5"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2  md:mb-0 text-center md:text-left">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              Integração com API do WhatsApp
            </span>

            <h1 className="font-bold mb-6">
              Atendimento no WhatsApp de <span className="gradient-text">forma profissional</span>
            </h1>

            <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto md:ml-0">
              Gerencie mensagens, automatize atendimentos e conecte múltiplos atendentes a um único número de WhatsApp.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/precos">
                <Button className="bg-primary hover:bg-primary-600 w-full sm:w-auto">
                  Teste 7 Dias Grátis
                </Button>
              </Link>
              <Link to="/funcionalidades">
                <Button variant="outline" className="w-full sm:w-auto group">
                  <span>Ver Funcionalidades</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="relative">
              {/* WhatsApp interface mockup - versão melhorada */}
              <div className="bg-white rounded-2xl shadow-medium overflow-hidden border border-gray-100 max-w-[360px] mx-auto">
                {/* Header do WhatsApp */}
                <div className="bg-teal-dark h-14 rounded-t-2xl flex items-center px-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div className="text-white">
                      <p className="font-medium text-sm">RodTicket Atendimento</p>
                      <p className="text-xs opacity-75">Online agora</p>
                    </div>
                  </div>
                </div>

                {/* Área de chat com scroll */}
                <div className="p-3 bg-[#e5ded8] h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                  <div className="space-y-3">
                    {/* Bolhas de chat em sequência */}
                    <div className="flex justify-start">
                      <div className="bg-white rounded-lg p-2.5 max-w-[80%] text-sm relative chat-bubble-left">
                        <p className="text-gray-800">Olá! Bem-vindo ao RodTicket. Como posso te ajudar hoje?</p>
                        <span className="text-[10px] text-gray-500 block text-right mt-1">10:02</span>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <div className="bg-[#dcf8c6] rounded-lg p-2.5 max-w-[80%] text-sm relative chat-bubble-right">
                        <p className="text-gray-800">Olá! Preciso de suporte técnico para minha conta</p>
                        <span className="text-[10px] text-gray-500 block text-right mt-1">10:03</span>
                      </div>
                    </div>

                    <div className="flex justify-start">
                      <div className="bg-white rounded-lg p-2.5 max-w-[80%] text-sm relative chat-bubble-left">
                        <p className="text-gray-800">Claro! Por favor, escolha uma das opções abaixo:</p>
                        <p className="text-gray-800 mt-2">1️⃣ Problemas com login</p>
                        <p className="text-gray-800">2️⃣ Faturamento</p>
                        <p className="text-gray-800">3️⃣ Configuração do sistema</p>
                        <p className="text-gray-800">4️⃣ Falar com atendente</p>
                        <span className="text-[10px] text-gray-500 block text-right mt-1">10:03</span>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <div className="bg-[#dcf8c6] rounded-lg p-2.5 max-w-[80%] text-sm relative chat-bubble-right">
                        <p className="text-gray-800">3</p>
                        <span className="text-[10px] text-gray-500 block text-right mt-1">10:04</span>
                      </div>
                    </div>

                    <div className="flex justify-start">
                      <div className="bg-white rounded-lg p-2.5 max-w-[80%] text-sm relative chat-bubble-left">
                        <p className="text-gray-800">Entendi! Você escolheu "Configuração do sistema". Qual parte específica você precisa de ajuda?</p>
                        <p className="text-gray-800 mt-2">A) Integração API</p>
                        <p className="text-gray-800">B) Configuração de chatbot</p>
                        <p className="text-gray-800">C) Gerenciamento de usuários</p>
                        <p className="text-gray-800">D) Relatórios e métricas</p>
                        <span className="text-[10px] text-gray-500 block text-right mt-1">10:04</span>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <div className="bg-[#dcf8c6] rounded-lg p-2.5 max-w-[80%] text-sm relative chat-bubble-right">
                        <p className="text-gray-800">B</p>
                        <span className="text-[10px] text-gray-500 block text-right mt-1">10:05</span>
                      </div>
                    </div>

                    <div className="flex justify-start">
                      <div className="bg-white rounded-lg p-2.5 max-w-[80%] text-sm relative chat-bubble-left">
                        <p className="text-gray-800">Perfeito! Vou conectar você ao nosso especialista em configuração de chatbots.</p>
                        <span className="text-[10px] text-gray-500 block text-right mt-1">10:05</span>
                      </div>
                    </div>

                    <div className="flex justify-start">
                      <div className="bg-white rounded-lg p-2.5 max-w-[80%] text-sm relative chat-bubble-left">
                        <p className="text-gray-800">Olá! Sou Carlos, especialista em chatbots. Vi que você precisa de ajuda com configuração. Em que posso ajudar?</p>
                        <span className="text-[10px] text-gray-500 block text-right mt-1">10:06</span>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <div className="bg-[#dcf8c6] rounded-lg p-2.5 max-w-[80%] text-sm relative chat-bubble-right">
                        <p className="text-gray-800">Preciso criar um fluxo automático para agendamentos</p>
                        <span className="text-[10px] text-gray-500 block text-right mt-1">10:07</span>
                      </div>
                    </div>

                    <div className="flex justify-start">
                      <div className="bg-white rounded-lg p-2.5 max-w-[80%] text-sm relative chat-bubble-left">
                        <p className="text-gray-800">Com certeza! Posso te mostrar como configurar isso em 3 passos simples. Você tem alguns minutos agora?</p>
                        <span className="text-[10px] text-gray-500 block text-right mt-1">10:08</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Área de digitação */}
                <div className="bg-white p-2.5 flex items-center space-x-2">
                  <div className="rounded-full bg-gray-100 flex-1 py-2 px-4 text-sm text-gray-400 flex items-center">
                    Digite uma mensagem...
                  </div>
                  <button className="w-9 h-9 rounded-full bg-teal-dark flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Elementos flutuantes */}
              <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white rounded-lg shadow-soft p-3 rotate-6">
                <div className="h-full bg-whatsapp-light rounded-md flex items-center justify-center">
                  <div className="text-teal-dark text-2xl font-bold">+40%</div>
                </div>
              </div>

              <div className="absolute -left-4 top-1/4 w-20 h-20 bg-white rounded-lg shadow-soft p-2 -rotate-6">
                <div className="h-full bg-secondary/10 rounded-md flex items-center justify-center">
                  <div className="text-secondary text-xl font-bold">24/7</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits area - Melhorada 
        <div className="mt-20 md:mt-28">
         

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 
            <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-all border border-gray-100">
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

            {/* Card 2 
            <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-all border border-gray-100">
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

            {/* Card 3 
            <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-all border border-gray-100">
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

            {/* Card 4 
            <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-all border border-gray-100">
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
        </div> */ }

        {/* Principais Recursos - Nova Seção 
        <div className="mt-24 pb-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Gestão Completa de Atendimento</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Centralize a comunicação e optimize processos com nossas ferramentas avançadas
            </p>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
             Recurso 1 
            <div className="flex flex-col">
              <div className="mb-5 flex items-center">
                <div className="mr-4 flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary to-primary-600 rounded-xl flex items-center justify-center shadow-soft">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-xl">Gestão Centralizada</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="mr-2 text-primary mt-1">✔</div>
                  <p className="text-gray-600 text-sm">Centralize a comunicação com clientes através de WhatsApp, Instagram e Facebook em uma única plataforma.</p>
                </div>
                <div className="flex items-start">
                  <div className="mr-2 text-primary mt-1">✔</div>
                  <p className="text-gray-600 text-sm">Facilite o gerenciamento de atendentes e contatos, otimizando o fluxo de trabalho.</p>
                </div>
              </div>
            </div>*/}

          {/* Recurso 2 
            <div className="flex flex-col">
              <div className="mb-5 flex items-center">
                <div className="mr-4 flex-shrink-0 w-14 h-14 bg-gradient-to-br from-secondary to-secondary-600 rounded-xl flex items-center justify-center shadow-soft">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="font-semibold text-xl">Setores Personalizáveis</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="mr-2 text-secondary mt-1">✔</div>
                  <p className="text-gray-600 text-sm">Crie setores específicos para cada área da sua empresa.</p>
                </div>
                <div className="flex items-start">
                  <div className="mr-2 text-secondary mt-1">✔</div>
                  <p className="text-gray-600 text-sm">Direcione atendimentos de acordo com o setor solicitado pelo cliente, garantindo eficiência.</p>
                </div>
              </div>
            </div>*/}

          {/* Recurso 3 
            <div className="flex flex-col">
              <div className="mb-5 flex items-center">
                <div className="mr-4 flex-shrink-0 w-14 h-14 bg-gradient-to-br from-teal-dark to-teal-600 rounded-xl flex items-center justify-center shadow-soft">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-xl">Integração com Chatbots</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="mr-2 text-teal-dark mt-1">✔</div>
                  <p className="text-gray-600 text-sm">Utilize automações e inteligência artificial para respostas rápidas e direcionadas.</p>
                </div>
                <div className="flex items-start">
                  <div className="mr-2 text-teal-dark mt-1">✔</div>
                  <p className="text-gray-600 text-sm">Aumente a eficiência no atendimento com integrações como Typebot e OpenAI.</p>
                </div>
              </div>
            </div>*/}

          {/* Recurso 4 
            <div className="flex flex-col">
              <div className="mb-5 flex items-center">
                <div className="mr-4 flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary-600 to-secondary rounded-xl flex items-center justify-center shadow-soft">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="font-semibold text-xl">Kanban para Tickets</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="mr-2 text-primary mt-1">✔</div>
                  <p className="text-gray-600 text-sm">Organize e visualize os tickets de atendimento usando o método Kanban.</p>
                </div>
                <div className="flex items-start">
                  <div className="mr-2 text-primary mt-1">✔</div>
                  <p className="text-gray-600 text-sm">Facilite a gestão e acompanhamento das solicitações de atendimento.</p>
                </div>
              </div>
            </div>*/}

          {/* Recurso 5
            <div className="flex flex-col">
              <div className="mb-5 flex items-center">
                <div className="mr-4 flex-shrink-0 w-14 h-14 bg-gradient-to-br from-secondary to-teal-dark rounded-xl flex items-center justify-center shadow-soft">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-xl">Relatórios e Análises</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="mr-2 text-secondary mt-1">✔</div>
                  <p className="text-gray-600 text-sm">Acompanhe métricas e obtenha insights para otimizar continuamente o atendimento ao cliente.</p>
                </div>
                <div className="flex items-start">
                  <div className="mr-2 text-secondary mt-1">✔</div>
                  <p className="text-gray-600 text-sm">Tome decisões informadas com base em dados precisos e atualizados.</p>
                </div>
              </div>
            </div> */}

          {/* Call-to-action 
            <div className="flex flex-col bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 shadow-soft hover:shadow-medium transition-all border border-gray-100">
              <div className="mb-5">
                <h3 className="font-semibold text-xl mb-2">Comece agora e transforme seu atendimento!</h3>
                <p className="text-gray-600 text-sm">Escolha o plano ideal e tenha acesso a todas essas funcionalidades incríveis.</p>
              </div>
              <div className="mt-auto">
                <Link to="/precos">
                  <Button className="bg-primary hover:bg-primary-600 w-full">
                    Ver Planos e Preços
                  </Button>
                </Link>
              </div>
            </div>
        </div>*/}
      </div>

      {/* Trust badges 
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-6">Utilizado por empresas de todos os portes:</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {["Magazine Luiza", "Americanas", "Renner", "Natura", "O Boticário"].map((company) => (
              <div key={company} className="text-gray-400 font-medium">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>*/}
    </div>
  );
};

export default Hero;
