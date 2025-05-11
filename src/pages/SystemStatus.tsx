import React, { useState, useEffect } from 'react';
import { Circle, CheckCircle, AlertTriangle, AlertCircle, Clock, BarChart2, Bell, RefreshCw, Calendar, MessageSquare, Database, Server, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const SystemStatus = () => {
  const [currentTab, setCurrentTab] = useState('status');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState('2025-05-05 04:05:32');
  
  const refreshStatus = () => {
    setIsRefreshing(true);
    // Simulação de atualização dos dados
    setTimeout(() => {
      setIsRefreshing(false);
      setLastUpdated(new Date().toISOString().replace('T', ' ').substring(0, 19));
    }, 1500);
  };

  useEffect(() => {
    document.title = 'Status do Sistema | RodTicket';
    // Atualizar status a cada 60 segundos
    const interval = setInterval(refreshStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  // Dados simulados dos serviços
  const services = [
    { 
      name: 'WhatsApp API', 
      status: 'operational', 
      description: 'Serviço de conexão com a API oficial do WhatsApp',
      uptime: '99.98%',
      icon: <MessageSquare />
    },
    { 
      name: 'Facebook Integration', 
      status: 'operational', 
      description: 'Integração com Messenger e comentários do Facebook',
      uptime: '99.95%',
      icon: <Globe />
    },
    { 
      name: 'Instagram Direct', 
      status: 'degraded', 
      description: 'Serviço de mensagens diretas do Instagram',
      uptime: '98.72%',
      icon: <MessageSquare />
    },
    { 
      name: 'Chatbot Engine', 
      status: 'operational', 
      description: 'Motor de automação e fluxos de chatbot',
      uptime: '99.99%',
      icon: <MessageSquare />
    },
    { 
      name: 'Database Cluster', 
      status: 'operational', 
      description: 'Cluster de banco de dados principal',
      uptime: '100%',
      icon: <Database />
    },
    { 
      name: 'Media Storage', 
      status: 'operational', 
      description: 'Armazenamento de mídias (fotos, vídeos, documentos)',
      uptime: '99.96%',
      icon: <Server />
    },
    { 
      name: 'API Server', 
      status: 'operational', 
      description: 'Servidor da API REST pública',
      uptime: '99.92%',
      icon: <Server />
    },
    { 
      name: 'Agendamentos', 
      status: 'incident', 
      description: 'Sistema de agendamento online',
      uptime: '95.43%',
      icon: <Calendar />
    }
  ];

  // Dados simulados de incidentes
  const incidents = [
    {
      id: 'INC-2025-0012',
      title: 'Lentidão no serviço de Agendamentos',
      date: '2025-05-05',
      time: '03:42:15',
      status: 'investigating',
      description: 'Estamos investigando relatos de lentidão no sistema de agendamentos. Nossa equipe está trabalhando para resolver o problema o mais rápido possível.',
      affected: ['Agendamentos'],
      updates: [
        {
          timestamp: '2025-05-05 03:42:15',
          message: 'Identificamos lentidão no sistema de agendamentos e estamos investigando.'
        },
        {
          timestamp: '2025-05-05 03:55:22',
          message: 'Identificado gargalo no banco de dados. Equipe está trabalhando na otimização das consultas.'
        }
      ]
    },
    {
      id: 'INC-2025-0011',
      title: 'Instabilidade na integração com Instagram',
      date: '2025-05-05',
      time: '01:15:42',
      status: 'degraded',
      description: 'Detectamos uma degradação no serviço de integração com Instagram Direct. As mensagens estão sendo entregues com atraso.',
      affected: ['Instagram Direct'],
      updates: [
        {
          timestamp: '2025-05-05 01:15:42',
          message: 'Detectada latência elevada na API do Instagram.'
        },
        {
          timestamp: '2025-05-05 01:45:18',
          message: 'Implementamos solução temporária para minimizar o impacto. O serviço está operando com performance reduzida.'
        }
      ]
    },
    {
      id: 'INC-2025-0010',
      title: 'Interrupção na API de WhatsApp',
      date: '2025-05-02',
      time: '14:22:37',
      status: 'resolved',
      description: 'A API do WhatsApp apresentou interrupção temporária devido a uma atualização de infraestrutura.',
      affected: ['WhatsApp API'],
      updates: [
        {
          timestamp: '2025-05-02 14:22:37',
          message: 'Identificamos falha na conexão com a API do WhatsApp.'
        },
        {
          timestamp: '2025-05-02 14:37:45',
          message: 'Equipe está investigando e trabalhando com o time do WhatsApp para resolver.'
        },
        {
          timestamp: '2025-05-02 15:08:12',
          message: 'Serviço restaurado. Monitorando estabilidade.'
        },
        {
          timestamp: '2025-05-02 15:30:00',
          message: 'Incidente resolvido. Todas as conexões estão funcionando normalmente.'
        }
      ]
    }
  ];

  // Dados simulados de métricas
  const metrics = {
    uptime: '99.97%',
    messagesSent: '12.4M',
    messagesReceived: '8.7M',
    averageResponseTime: '1.2s',
    activeConnections: '5.8K'
  };

  // Função para renderizar o ícone de status
  const renderStatusIcon = (status) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="text-green-500" />;
      case 'degraded':
        return <AlertTriangle className="text-orange-500" />;
      case 'incident':
        return <AlertCircle className="text-red-500" />;
      case 'maintenance':
        return <Clock className="text-blue-500" />;
      default:
        return <Circle className="text-gray-400" />;
    }
  };

  // Função para renderizar o status em texto
  const getStatusText = (status) => {
    switch (status) {
      case 'operational':
        return 'Operacional';
      case 'degraded':
        return 'Degradado';
      case 'incident':
        return 'Incidente';
      case 'maintenance':
        return 'Manutenção';
      case 'investigating':
        return 'Investigando';
      case 'resolved':
        return 'Resolvido';
      default:
        return 'Desconhecido';
    }
  };

  // Função para renderizar a classe de cor do status
  const getStatusClass = (status) => {
    switch (status) {
      case 'operational':
      case 'resolved':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'degraded':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'incident':
      case 'investigating':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'maintenance':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  // Cálculo do status geral do sistema
  const calculateOverallStatus = () => {
    if (services.some(s => s.status === 'incident')) {
      return 'incident';
    } else if (services.some(s => s.status === 'degraded')) {
      return 'degraded';
    } else if (services.some(s => s.status === 'maintenance')) {
      return 'maintenance';
    } else {
      return 'operational';
    }
  };

  const overallStatus = calculateOverallStatus();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEO 
        title="Status do Sistema"
        description="Monitore em tempo real o status de todos os serviços e componentes do RodTicket. Verifique a disponibilidade e performance atual dos sistemas."
        keywords="status sistema, monitoramento, serviços rodticket, disponibilidade, incidentes, métricas, uptime"
      />
      <Navbar />
      
      <main className="flex-grow pt-8 pb-16">
        <div className="container-custom max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Status do Sistema</h1>
              <p className="text-gray-600">
                Monitore o status de todos os serviços e componentes do RodTicket
              </p>
            </div>
            
            <div className="flex items-center mt-4 md:mt-0">
              <span className="text-sm text-gray-500 mr-3">
                Atualizado: {lastUpdated}
              </span>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={refreshStatus}
                disabled={isRefreshing}
                className="flex items-center"
              >
                <RefreshCw className={`h-4 w-4 mr-1 ${isRefreshing ? 'animate-spin' : ''}`} />
                Atualizar
              </Button>
            </div>
          </div>

          {/* Status geral */}
          <div className={`p-6 rounded-xl mb-8 shadow-sm ${
            overallStatus === 'operational' ? 'bg-green-50 border border-green-100' :
            overallStatus === 'degraded' ? 'bg-orange-50 border border-orange-100' :
            overallStatus === 'incident' ? 'bg-red-50 border border-red-100' :
            'bg-blue-50 border border-blue-100'
          }`}>
            <div className="flex items-center">
              {renderStatusIcon(overallStatus)}
              <div className="ml-4">
                <h2 className="text-xl font-semibold">
                  {overallStatus === 'operational' 
                    ? 'Todos os sistemas operacionais' 
                    : overallStatus === 'degraded'
                    ? 'Alguns sistemas apresentam degradação'
                    : overallStatus === 'incident'
                    ? 'Incidentes em andamento'
                    : 'Manutenção programada em andamento'
                  }
                </h2>
                <p className="text-gray-700 mt-1">
                  {overallStatus === 'operational' 
                    ? 'Todos os serviços estão funcionando normalmente.'
                    : overallStatus === 'degraded'
                    ? 'Alguns serviços estão com performance reduzida.'
                    : overallStatus === 'incident'
                    ? 'Há incidentes ativos afetando alguns serviços.'
                    : 'Manutenção programada em alguns serviços.'
                  }
                </p>
              </div>
            </div>
          </div>
          
          {/* Tabs de navegação */}
          <Tabs defaultValue="status" className="w-full" onValueChange={setCurrentTab}>
            <TabsList className="mb-6">
              <TabsTrigger value="status">Status dos Serviços</TabsTrigger>
              <TabsTrigger value="incidents">Incidentes</TabsTrigger>
              <TabsTrigger value="metrics">Métricas</TabsTrigger>
            </TabsList>
            
            {/* Tab de Status */}
            <TabsContent value="status" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div 
                    key={index} 
                    className="bg-white border rounded-xl p-4 shadow-sm flex items-start"
                  >
                    <div className={`w-10 h-10 rounded-full ${
                      service.status === 'operational' ? 'bg-green-100' :
                      service.status === 'degraded' ? 'bg-orange-100' :
                      service.status === 'incident' ? 'bg-red-100' :
                      'bg-blue-100'
                    } flex items-center justify-center mr-4 flex-shrink-0`}>
                      {service.icon}
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium">{service.name}</h3>
                        <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${getStatusClass(service.status)}`}>
                          {getStatusText(service.status)}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mt-1">{service.description}</p>
                      <div className="mt-2 text-sm text-gray-500">
                        <span>Uptime: {service.uptime}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            {/* Tab de Incidentes */}
            <TabsContent value="incidents" className="space-y-6">
              {incidents.length > 0 ? (
                incidents.map((incident, index) => (
                  <div 
                    key={index} 
                    className={`border rounded-xl overflow-hidden shadow-sm ${
                      incident.status === 'resolved' 
                        ? 'border-green-200 bg-green-50' 
                        : incident.status === 'degraded'
                        ? 'border-orange-200 bg-orange-50'
                        : 'border-red-200 bg-red-50'
                    }`}
                  >
                    <div className="p-4">
                      <div className="flex flex-wrap justify-between items-start gap-2">
                        <div>
                          <span className="text-xs font-medium text-gray-500">{incident.id}</span>
                          <h3 className="font-medium text-lg">{incident.title}</h3>
                        </div>
                        
                        <div className="flex items-center">
                          <span className="text-sm text-gray-600 mr-3">
                            {incident.date} {incident.time}
                          </span>
                          <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${getStatusClass(incident.status)}`}>
                            {getStatusText(incident.status)}
                          </span>
                        </div>
                      </div>
                      
                      <p className="mt-2 text-gray-700">{incident.description}</p>
                      
                      <div className="mt-3">
                        <span className="text-sm font-medium text-gray-700">Serviços afetados:</span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {incident.affected.map((service, idx) => (
                            <span key={idx} className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-4 border-t border-gray-200 pt-3">
                        <div className="text-sm font-medium text-gray-700 mb-2">Atualizações:</div>
                        <div className="space-y-3">
                          {incident.updates.map((update, idx) => (
                            <div key={idx} className="text-sm">
                              <div className="flex items-start">
                                <span className="text-gray-500 font-mono mr-2">{update.timestamp}</span>
                                <span className="text-gray-800">{update.message}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-lg font-medium">Nenhum incidente registrado</h3>
                  <p className="text-gray-600 mt-1">Todos os sistemas estão operando normalmente.</p>
                </div>
              )}
            </TabsContent>
            
            {/* Tab de Métricas */}
            <TabsContent value="metrics">
              <div className="bg-white rounded-xl border shadow-sm p-6">
                <h3 className="text-lg font-medium mb-4">Métricas de Performance</h3>
                
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-gray-500 text-sm mb-1">Uptime</div>
                    <div className="text-2xl font-bold text-primary">{metrics.uptime}</div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-gray-500 text-sm mb-1">Msgs Enviadas</div>
                    <div className="text-2xl font-bold text-primary">{metrics.messagesSent}</div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-gray-500 text-sm mb-1">Msgs Recebidas</div>
                    <div className="text-2xl font-bold text-primary">{metrics.messagesReceived}</div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-gray-500 text-sm mb-1">Tempo Resposta</div>
                    <div className="text-2xl font-bold text-primary">{metrics.averageResponseTime}</div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-gray-500 text-sm mb-1">Conexões Ativas</div>
                    <div className="text-2xl font-bold text-primary">{metrics.activeConnections}</div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-medium mb-3">Performance das últimas 24 horas</h4>
                  <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                    <BarChart2 className="w-12 h-12 text-gray-400" />
                    <span className="text-gray-500 ml-2">Gráficos de performance</span>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          {/* Seção de inscrição para notificações de status */}
          <div className="bg-white rounded-xl border shadow-sm p-6 mt-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <Bell className="h-5 w-5 text-primary mr-3" />
                <div>
                  <h3 className="font-medium">Receba notificações de status</h3>
                  <p className="text-sm text-gray-600">
                    Seja notificado quando houver mudanças no status dos serviços.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Button variant="outline">Via Email</Button>
                <Button variant="outline">Via Slack</Button>
                <Button>Via WhatsApp</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SystemStatus;