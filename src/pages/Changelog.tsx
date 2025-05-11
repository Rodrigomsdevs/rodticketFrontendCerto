import React, { useState } from 'react';
import { 
  Calendar, 
  CheckCircle, 
  BugOff, 
  Sparkles, 
  Rocket, 
  AlertCircle, 
  ArrowRight, 
  Filter,
  ChevronDown,
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import SEO from '@/components/SEO';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface ChangelogItem {
  id: number;
  date: string;
  version: string;
  title: string;
  description: string;
  type: 'feature' | 'bugfix' | 'improvement' | 'breaking' | 'security';
  details?: string[];
  isPinned?: boolean;
}

const Changelog = () => {
  // Estado para filtrar as entradas do changelog
  const [filter, setFilter] = useState<string>('all');
  const [yearFilter, setYearFilter] = useState<string>('2025');
  
  // Dados do changelog
  const changelogItems: ChangelogItem[] = [
    {
      id: 1,
      date: '08 de maio, 2025',
      version: 'v3.9.0',
      title: 'Integração com RD Station',
      description: 'Sincronização completa entre RodTicket e RD Station para gestão unificada de leads e clientes.',
      type: 'feature',
      isPinned: true,
      details: [
        'Importação automática de leads da RD Station com todas as tags e segmentações'
      ]
    },
    {
      id: 2,
      date: '05 de maio, 2025',
      version: 'v3.8.0',
      title: 'Integração com IA Generativa',
      description: 'Nova funcionalidade de geração de respostas automáticas usando múltiplos modelos de inteligência artificial contextual.',
      type: 'feature',
      isPinned: true,
      details: [
        'Suporte para modelos avançados da OpenAI e Deepseek com capacidade de personalização avançada',
        'Sistema flexível para escolha de diferentes modelos de IA conforme necessidade e custo',
        'Integração com histórico de conversas para respostas mais precisas e contextualizadas',
        'Painel de controle para ajuste de configurações de cada modelo de IA'
      ]
    }
  ];

  // Filtrar os itens de acordo com o tipo e ano selecionados
  const filteredItems = changelogItems.filter(item => {
    const matchesType = filter === 'all' || item.type === filter;
    const matchesYear = item.date.includes(yearFilter);
    return matchesType && matchesYear;
  });

  // Separar itens destacados
  const pinnedItems = filteredItems.filter(item => item.isPinned);
  const regularItems = filteredItems.filter(item => !item.isPinned);

  // Função para exibir o ícone correto para cada tipo de mudança
  const getChangeTypeIcon = (type: string) => {
    switch (type) {
      case 'feature':
        return <Sparkles className="h-5 w-5" />;
      case 'bugfix':
        return <BugOff className="h-5 w-5" />;
      case 'improvement':
        return <Rocket className="h-5 w-5" />;
      case 'breaking':
        return <AlertCircle className="h-5 w-5" />;
      case 'security':
        return <CheckCircle className="h-5 w-5" />;
      default:
        return <Calendar className="h-5 w-5" />;
    }
  };

  // Função para exibir a badge com o texto e cor corretos para cada tipo
  const getChangeTypeInfo = (type: string) => {
    switch (type) {
      case 'feature':
        return {
          color: 'bg-blue-100 text-blue-800 border-blue-200',
          iconColor: 'text-blue-500',
          bgColor: 'bg-blue-500',
          text: 'Novo Recurso'
        };
      case 'bugfix':
        return {
          color: 'bg-green-100 text-green-800 border-green-200',
          iconColor: 'text-green-500',
          bgColor: 'bg-green-500',
          text: 'Correção'
        };
      case 'improvement':
        return {
          color: 'bg-purple-100 text-purple-800 border-purple-200',
          iconColor: 'text-purple-500',
          bgColor: 'bg-purple-500',
          text: 'Melhoria'
        };
      case 'breaking':
        return {
          color: 'bg-orange-100 text-orange-800 border-orange-200',
          iconColor: 'text-orange-500',
          bgColor: 'bg-orange-500',
          text: 'Mudança Crítica'
        };
      case 'security':
        return {
          color: 'bg-red-100 text-red-800 border-red-200',
          iconColor: 'text-red-500',
          bgColor: 'bg-red-500',
          text: 'Segurança'
        };
      default:
        return {
          color: 'bg-gray-100 text-gray-800 border-gray-200',
          iconColor: 'text-gray-500',
          bgColor: 'bg-gray-500',
          text: 'Atualização'
        };
    }
  };

  return (
    <>
      <SEO 
        title="Changelog - RodTicket" 
        description="Acompanhe as mais recentes atualizações e melhorias do RodTicket, nossa plataforma de atendimento via WhatsApp."
        keywords="changelog, atualizações, melhorias, rodticket, whatsapp, novidades"
      />
      
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Navbar />

        {/* Hero Section */}
        <section className="relative py-5 overflow-hidden">
          <div className="container-custom max-w-7xl mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center relative z-10">
              <Badge className="bg-primary/10 hover:bg-primary/15 text-primary mb-4 px-3 py-1.5 text-sm font-medium">
                Atualizações e Novidades
              </Badge>
              
              <h1 className="font-bold text-3xl md:text-5xl mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Changelog da Plataforma
              </h1>
              
              <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                Acompanhe a evolução constante do RodTicket com novas funcionalidades, 
                melhorias e correções para oferecer uma experiência cada vez melhor.
              </p>

              {/* Filter Section */}
              <div className="bg-white rounded-2xl shadow-lg p-3 mb-8 md:mb-16 flex flex-col sm:flex-row items-center gap-3 max-w-xl mx-auto">
                <Tabs defaultValue="all" className="w-full" onValueChange={(value) => setFilter(value)}>
                  <TabsList className="w-full grid grid-cols-3 mb-3 sm:mb-0">
                    <TabsTrigger value="all">Todas</TabsTrigger>
                    <TabsTrigger value="feature">Novidades</TabsTrigger>
                    <TabsTrigger value="improvement">Melhorias</TabsTrigger>
                  </TabsList>
                </Tabs>

                <div className="flex items-center bg-gray-50 rounded-lg px-3 py-1.5 w-full sm:w-auto">
                  <Calendar className="h-4 w-4 text-gray-500 mr-2" />
                  <Select 
                    defaultValue="2025"
                    onValueChange={(value) => setYearFilter(value)}
                  >
                    <SelectTrigger className="border-0 shadow-none p-0">
                      <SelectValue placeholder="Filtrar por ano" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2025">2025</SelectItem>
                      <SelectItem value="2024">2024</SelectItem>
                      <SelectItem value="2023">2023</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary blur-3xl"></div>
              <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-secondary blur-3xl"></div>
            </div>
          </div>
        </section>

        {/* Featured Updates Section */}
        {pinnedItems.length > 0 && (
          <section className="py-6 md:py-10 px-4 mb-8">
            <div className="container-custom max-w-6xl mx-auto">
              <div className="flex items-center mb-6">
                <Star className="h-5 w-5 text-amber-500 mr-2" />
                <h2 className="text-2xl font-bold">Atualizações em Destaque</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pinnedItems.map((item) => {
                  const typeInfo = getChangeTypeInfo(item.type);
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
                    >
                      <div className={`h-2 w-full ${typeInfo.bgColor}`}></div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <span className="inline-block text-xs font-mono bg-gray-100 text-gray-800 rounded-full px-2 py-1 mb-2">
                              {item.version}
                            </span>
                            <h3 className="text-xl font-bold line-clamp-2">{item.title}</h3>
                          </div>
                          <div className={`p-2 rounded-lg ${typeInfo.color}`}>
                            {getChangeTypeIcon(item.type)}
                          </div>
                        </div>
                        
                        <p className="text-gray-600 mb-4">{item.description}</p>
                        
                        <div className="flex justify-between items-center">
                          <p className="text-gray-500 text-sm">{item.date}</p>
                          <Badge variant="outline" className={typeInfo.color}>
                            {typeInfo.text}
                          </Badge>
                        </div>
                        
                        {item.details && (
                          <div className="mt-4 bg-gray-50 rounded-lg p-4 border border-gray-100">
                            <p className="font-medium mb-2 text-sm text-gray-700">Detalhes da atualização:</p>
                            <ul className="space-y-2">
                              {item.details.map((detail, idx) => (
                                <li key={idx} className="flex items-start text-sm">
                                  <span className={`${typeInfo.iconColor} mr-2 mt-0.5`}>•</span>
                                  <span className="text-gray-700">{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Timeline Section */}
        <section className="pb-24 px-4">
          <div className="container-custom max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-primary" /> 
              Histórico de Atualizações
            </h2>
            
            {filteredItems.length > 0 ? (
              <div className="relative">
                {/* Timeline track */}
                <div className="absolute left-6 md:left-8 top-0 h-full w-1 bg-gradient-to-b from-primary via-secondary to-gray-200 rounded-full"></div>
                
                <div className="space-y-10 md:space-y-16">
                  {regularItems.map((item, index) => {
                    const typeInfo = getChangeTypeInfo(item.type);
                    return (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative pl-16 md:pl-24"
                      >
                        {/* Timeline node */}
                        <div className={`absolute left-4 md:left-6 top-0 w-6 h-6 rounded-full ${typeInfo.bgColor} flex items-center justify-center z-10 shadow-md`}>
                          <div className={`${typeInfo.iconColor} text-white`}>
                            {getChangeTypeIcon(item.type)}
                          </div>
                        </div>
                        
                        <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-5">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 gap-2">
                            <div>
                              <span className="inline-block text-xs font-mono bg-gray-100 text-gray-800 rounded-full px-2 py-1 mb-1">
                                {item.version}
                              </span>
                              <h3 className="text-xl font-bold">{item.title}</h3>
                            </div>
                            
                            <div className="flex items-center space-x-3">
                              <Badge variant="outline" className={typeInfo.color}>
                                {typeInfo.text}
                              </Badge>
                              <span className="text-gray-500 text-sm whitespace-nowrap">{item.date}</span>
                            </div>
                          </div>
                          
                          <p className="text-gray-600 mb-4">{item.description}</p>
                          
                          {item.details && (
                            <div className="bg-gray-50 rounded-lg p-4">
                              <p className="font-medium mb-2 text-sm text-gray-700">Detalhes:</p>
                              <ul className="space-y-2">
                                {item.details.map((detail, idx) => (
                                  <li key={idx} className="flex items-start text-sm">
                                    <span className={`${typeInfo.iconColor} mr-2 mt-0.5`}>•</span>
                                    <span className="text-gray-700">{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
                <Calendar className="h-12 w-12 mx-auto text-gray-300 mb-3" />
                <h3 className="text-xl font-medium mb-2">Nenhuma atualização encontrada</h3>
                <p className="text-gray-500 mb-4">Não encontramos atualizações com os filtros selecionados.</p>
                <Button variant="outline" onClick={() => {setFilter('all'); setYearFilter('2025');}}>
                  Limpar filtros
                </Button>
              </div>
            )}
            
            {/* Subscribe to updates section */}
            <div className="mt-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/5 rounded-2xl p-8 text-center">
              <div className="max-w-2xl mx-auto">
                <h3 className="font-bold text-2xl mb-3">Contribua com sugestões</h3>
                <p className="text-gray-600 mb-6">
                  Tem alguma sugestão ou encontrou um bug? Sua opinião é fundamental para continuarmos melhorando o RodTicket para você.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contato">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">
                      Enviar feedback
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                  <Link to="/roadmap">
                    <Button variant="outline" size="lg">
                      Ver roadmap
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </main>
    </>
  );
};

export default Changelog;