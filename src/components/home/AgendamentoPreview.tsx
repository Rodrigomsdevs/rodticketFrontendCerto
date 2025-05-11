import React, { useState, lazy, Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, BellRing, LayoutGrid, Layers, CheckCircle, Clock, ChevronDown, ChevronUp, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Componente para exibir skeleton durante o carregamento
const BenefitsSkeleton = () => (
  <div className="animate-pulse grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    {[1, 2, 3, 4].map((i) => (
      <div key={i} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <div className="bg-gray-200 w-12 h-12 rounded-lg mb-4"></div>
        <div className="bg-gray-200 h-6 w-3/4 mb-3 rounded"></div>
        <div className="bg-gray-200 h-4 w-full rounded mb-2"></div>
        <div className="bg-gray-200 h-4 w-5/6 rounded"></div>
      </div>
    ))}
  </div>
);

const AgendamentoPreview = () => {
  // Estados para interatividade e responsividade em dispositivos móveis
  const [expandedStep, setExpandedStep] = useState<number | null>(0);
  const [showCalendarDetails, setShowCalendarDetails] = useState(false);
  const [selectedDay, setSelectedDay] = useState(12); // Dia padrão selecionado
  
  const toggleStep = (index: number) => {
    setExpandedStep(expandedStep === index ? null : index);
  };

  const benefits = [
    {
      title: "Agenda Lotada e Zero Faltas",
      description: "Reduza em até 70% os no-shows com lembretes automáticos pelo WhatsApp 24h e 1h antes do serviço.",
      icon: <Clock className="h-5 w-5 text-whatsapp-accent" />
    },
    {
      title: "Agende 24/7 sem Interrupções",
      description: "Seus clientes marcam horários mesmo quando você está ocupado cortando cabelo ou fazendo barba.",
      icon: <BellRing className="h-5 w-5 text-amber-500" />
    },
    {
      title: "Controle Total da Sua Equipe",
      description: "Cada barbeiro ou profissional gerencia sua própria agenda, evitando conflitos e overbooking.",
      icon: <LayoutGrid className="h-5 w-5 text-indigo-500" />
    },
    {
      title: "Solução Completa para Seu Negócio",
      description: "Usado por mais de 800 barbearias, salões e estúdios que aumentaram o faturamento em até 40%.",
      icon: <Layers className="h-5 w-5 text-rose-500" />
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Cliente pede horário no WhatsApp",
      description: "Automaticamente, seu cliente recebe um link personalizado com sua marca para agendar sem sair do WhatsApp."
    },
    {
      number: "02",
      title: "Escolha instantânea de horários reais",
      description: "O sistema mostra apenas horários disponíveis de verdade, sem conflitos, com a agenda atualizada em tempo real."
    },
    {
      number: "03",
      title: "Agendamento confirmado e cliente fidelizado",
      description: "Cliente recebe confirmação imediata e lembretes automáticos, aumentando em 70% a taxa de comparecimento."
    }
  ];

  // Simula dias com compromissos
  const appointmentDays = [8, 15, 21, 26];
  const today = 5;

  // Seleciona um horário (simplesmente para interatividade)
  const [selectedTime, setSelectedTime] = useState("10:00");
  const availableTimes = ['08:00', '09:30', '10:00', '13:30', '15:00', '16:30'];

  return (
    <section className="section bg-gradient-to-b from-gray-50 to-white py-10 md:py-20" id="agendamento">
      <div className="container-custom px-4 md:px-6">
        {/* Top Section with Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center ">
          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center py-1.5 px-4 rounded-full bg-whatsapp-accent/10 text-whatsapp-accent font-medium text-sm mb-4 md:mb-5 border border-whatsapp-accent/20">
              <Calendar className="h-4 w-4 mr-2" />
              <span>Revolucione seus Agendamentos</span>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 leading-tight">
              Aumente em <span className="text-primary">40%</span> seu faturamento com agendamentos
              <br className="hidden md:block" />
              <span className="relative">
                direto pelo WhatsApp
                <svg className="absolute bottom-1 left-0 w-full" width="100%" height="6" viewBox="0 0 180 6" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M3 3C35.5119 3.5 97.3749 3.5 177 3" stroke="#25D366" strokeWidth="5" strokeLinecap="round" />
                </svg>
              </span>
            </h2>

            <p className="text-gray-700 text-base md:text-lg mb-6">
              Dê adeus às agendas manuais e clientes que não aparecem. Com o RodTicket, 
              sua barbearia ou salão recebe agendamentos 24/7 pelo WhatsApp, reduz faltas em até 70% 
              e mantém sua cadeira sempre ocupada.
            </p>

            <ul className="space-y-3 mb-6 md:mb-8">
              {[
                "Link exclusivo de agendamento com sua marca",
                "Confirmações automáticas direto no WhatsApp",
                "Zero duplo agendamento ou conflitos de horários"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-whatsapp-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link to="/agendamento" className="w-full sm:w-auto">
                <Button className="bg-primary hover:bg-primary-600 px-4 md:px-6 py-5 md:py-6 text-base font-medium w-full">
                  Teste Grátis por 7 Dias
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Link to="/agendamento/demo" className="text-gray-700 font-medium flex items-center hover:text-primary transition-colors">
                Ver demonstração
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            {/* Mostrar botão para exibir calendário em dispositivos móveis */}
            <button 
              className="mt-6 text-primary font-medium flex items-center justify-center lg:hidden w-full border border-primary/30 rounded-lg py-3"
              onClick={() => setShowCalendarDetails(!showCalendarDetails)}
              aria-expanded={showCalendarDetails}
            >
              {showCalendarDetails ? 'Ocultar calendário' : 'Ver exemplo do calendário'}
              {showCalendarDetails ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
            </button>
          </div>

          {/* Right Column - Visual Demo */}
          <div className={`order-1 lg:order-2 relative ${showCalendarDetails || 'hidden lg:block'}`}>
            {/* Calendar Demo Interface */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden max-w-md mx-auto">
              {/* Header bar */}
              <div className="bg-primary text-white p-3 md:p-4 flex justify-between items-center">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span className="font-medium">RodTicket Barbearia</span>
                </div>
                <span className="text-sm">Maio 2025</span>
              </div>

              {/* Calendar body */}
              <div className="p-3 md:p-4">
                {/* Week days header */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((day, i) => (
                    <div key={i} className="text-center text-gray-500 text-xs md:text-sm py-1">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar grid */}
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: 35 }).map((_, i) => {
                    const day = i - 3; // Offset to start the month on a Wednesday
                    const isCurrentMonth = day > 0 && day <= 31;
                    const isToday = day === today;
                    const isSelected = day === selectedDay;
                    const hasAppointment = appointmentDays.includes(day);

                    return isCurrentMonth ? (
                      <button
                        key={i}
                        onClick={() => setSelectedDay(day)}
                        className={`
                          h-8 md:h-10 flex items-center justify-center rounded-md text-xs md:text-sm transition-colors
                          ${isToday ? 'border border-primary text-primary font-medium' : ''}
                          ${isSelected ? 'bg-primary text-white' : ''}
                          ${hasAppointment && !isSelected ? 'bg-primary/10 text-primary' : ''}
                          ${!isToday && !isSelected && !hasAppointment ? 'hover:bg-gray-100' : ''}
                        `}
                        aria-selected={isSelected}
                        aria-label={`Dia ${day} de maio`}
                      >
                        {day}
                      </button>
                    ) : (
                      <div key={i} className="h-8 md:h-10 text-gray-300 flex items-center justify-center text-xs md:text-sm">
                        {day > 0 ? day : ''}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Time slots */}
              <div className="p-3 md:p-4 border-t border-gray-100">
                <h4 className="font-medium mb-2 text-gray-700 text-sm md:text-base">Horários Disponíveis - Dia {selectedDay}</h4>
                <div className="grid grid-cols-3 gap-2">
                  {availableTimes.map((time, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedTime(time)}
                      className={`
                        text-center py-2 rounded-md text-xs md:text-sm border transition-colors
                        ${time === selectedTime ? 'bg-primary text-white border-primary' : 'border-gray-200 hover:border-primary text-gray-700'}
                      `}
                      aria-selected={time === selectedTime}
                    >
                      {time}
                    </button>
                  ))}
                </div>

                <div className="mt-4 p-3 rounded-lg bg-green-50 border border-green-100 flex items-start">
                  <CheckCircle className="h-4 md:h-5 w-4 md:w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-green-800 font-medium text-sm md:text-base">Agendamento confirmado</p>
                    <p className="text-green-700 text-xs md:text-sm">Corte Degradê com Roberto - {selectedDay}/05 às {selectedTime}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements - mais sutis em mobile */}
            <div className="absolute -z-10 -top-6 -right-6 h-24 md:h-32 w-24 md:w-32 bg-yellow-300 rounded-full opacity-20 md:opacity-30 blur-xl md:blur-2xl"></div>
            <div className="absolute -z-10 -bottom-8 -left-8 h-32 md:h-40 w-32 md:w-40 bg-primary rounded-full opacity-10 md:opacity-20 blur-xl md:blur-3xl"></div>
          </div>
        </div>


        
      </div>
    </section>
  );
};

export default AgendamentoPreview;