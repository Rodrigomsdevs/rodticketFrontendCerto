import React, { useState } from 'react';
import { Search, BookOpen, Code, Database, Server, Zap, MessageSquare } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Badge } from '@/components/ui/badge';
import SEO from '@/components/SEO';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Interface para as seções de documentação
interface DocSection {
  id: string;
  title: string;
  description: string;
  content: string;
  category: 'getting-started' | 'api' | 'webhooks' | 'integrations' | 'chatbots';
  version?: string;
  codeBlocks: {
    language: string;
    code: string;
    title?: string;
  }[];
}

const Documentacao = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  // Dados estruturados para SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "Documentação Técnica RodTicket",
    "description": "Documentação técnica completa da API e funcionalidades do RodTicket para integração com WhatsApp Business.",
    "keywords": "documentação, api, webhook, rodticket, whatsapp, desenvolvimento",
    "datePublished": "2025-05-08",
    "dateModified": "2025-05-08",
    "author": {
      "@type": "Organization",
      "name": "RodTicket"
    },
    "publisher": {
      "@type": "Organization",
      "name": "RodTicket",
      "logo": {
        "@type": "ImageObject",
        "url": "https://rodticket.com/icons/apple-touch-icon.png"
      }
    }
  };

  const docSections: DocSection[] = [
    {
      id: 'getting-started',
      title: 'Começando com o RodTicket',
      description: 'Guia inicial para configurar e começar a usar o RodTicket',
      category: 'getting-started',
      version: 'v1.0',
      content: 'Para começar a usar o RodTicket, você precisará se registrar e configurar seu número do WhatsApp. Siga os passos abaixo para uma configuração rápida.',
      codeBlocks: [
        {
          language: 'json',
          code: `{
  "api_key": "seu_token_aqui",
  "number": "5511999999999",
  "webhook_url": "https://sua-api.com/webhook"
}`
        }
      ]
    },
    {
      id: 'authentication',
      title: 'Autenticação',
      description: 'Como autenticar suas requisições à API do RodTicket',
      category: 'api',
      version: 'v1.0',
      content: 'Todas as requisições à API do RodTicket devem incluir um token de autenticação no cabeçalho.',
      codeBlocks: [
        {
          language: 'bash',
          code: 'curl -H "Authorization: Bearer seu_token_aqui" https://api.rodticket.com/v1/messages',
          title: 'Exemplo de requisição com autenticação'
        }
      ]
    },
    {
      id: 'webhooks',
      title: 'Webhooks',
      description: 'Configuração e uso de webhooks para eventos em tempo real',
      category: 'webhooks',
      version: 'v1.0',
      content: 'Os webhooks permitem que você receba notificações em tempo real sobre novos eventos, como mensagens recebidas ou status de envio.',
      codeBlocks: [
        {
          language: 'typescript',
          code: `// Configuração do servidor para receber webhooks
app.post('/webhook', (req, res) => {
  const { type, message } = req.body;
  console.log('Novo evento:', type);
  console.log('Mensagem:', message);
  res.status(200).send();
});`,
          title: 'Exemplo de servidor para receber webhooks'
        }
      ]
    },
    {
      id: 'send-message',
      title: 'Envio de Mensagens',
      description: 'Como enviar diferentes tipos de mensagens através da API',
      category: 'api',
      version: 'v1.0',
      content: 'A API do RodTicket permite enviar diferentes tipos de mensagens, como texto simples, imagens, documentos e mais.',
      codeBlocks: [
        {
          language: 'javascript',
          code: `// Enviando uma mensagem de texto
fetch('https://api.rodticket.com/v1/messages', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer seu_token_aqui',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    to: '5511999999999',
    type: 'text',
    content: 'Olá, esta é uma mensagem de teste!'
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Erro:', error));`,
          title: 'Enviando mensagem de texto'
        },
        {
          language: 'javascript',
          code: `// Enviando uma imagem
fetch('https://api.rodticket.com/v1/messages', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer seu_token_aqui',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    to: '5511999999999',
    type: 'image',
    content: {
      url: 'https://exemplo.com/imagem.jpg',
      caption: 'Legenda da imagem'
    }
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Erro:', error));`,
          title: 'Enviando imagem'
        }
      ]
    },
    {
      id: 'chatbots',
      title: 'Chatbots Automatizados',
      description: 'Como criar e configurar chatbots no RodTicket',
      category: 'chatbots',
      version: 'v1.0',
      content: 'O RodTicket permite criar chatbots avançados com fluxos de conversação personalizados para automatizar atendimentos.',
      codeBlocks: [
        {
          language: 'json',
          code: `{
  "name": "Bot de Atendimento",
  "trigger": "ola|oi|bom dia|boa tarde|boa noite",
  "steps": [
    {
      "type": "message",
      "content": "Olá! Bem-vindo ao atendimento automatizado. Como posso ajudar?",
      "options": [
        {
          "label": "Suporte",
          "value": "suporte"
        },
        {
          "label": "Vendas",
          "value": "vendas"
        },
        {
          "label": "Outros",
          "value": "outros"
        }
      ]
    }
  ],
  "routes": {
    "suporte": [
      {
        "type": "message",
        "content": "Entendi que você precisa de suporte. Um atendente será designado para te ajudar em instantes."
      },
      {
        "type": "assign",
        "department": "support"
      }
    ],
    "vendas": {
      "type": "message",
      "content": "Vou te transferir para o setor de vendas."
    }
  }
}`,
          title: 'Configuração de um chatbot simples'
        }
      ]
    },
    {
      id: 'database-integration',
      title: 'Integração com Banco de Dados',
      description: 'Como integrar o RodTicket com seu banco de dados',
      category: 'integrations',
      version: 'v1.0',
      content: 'O RodTicket pode ser integrado com diversos bancos de dados para armazenar conversas, tickets e dados de clientes.',
      codeBlocks: [
        {
          language: 'javascript',
          code: `// Exemplo de integração com MongoDB
const mongoose = require('mongoose');
const MessageSchema = new mongoose.Schema({
  sender: String,
  recipient: String,
  content: String,
  timestamp: { type: Date, default: Date.now },
  ticketId: mongoose.Schema.Types.ObjectId
});

const Message = mongoose.model('Message', MessageSchema);

// Salvando mensagem recebida via webhook
app.post('/webhook', async (req, res) => {
  try {
    const { type, message } = req.body;
    
    if (type === 'new_message') {
      const newMessage = new Message({
        sender: message.key.remoteJid,
        recipient: 'seu-numero',
        content: message.message.conversation,
        ticketId: await getOrCreateTicket(message.key.remoteJid)
      });
      
      await newMessage.save();
      console.log('Mensagem salva com sucesso!');
    }
    
    res.status(200).send();
  } catch (error) {
    console.error('Erro ao processar webhook:', error);
    res.status(500).send();
  }
});

async function getOrCreateTicket(phoneNumber) {
  // Lógica para buscar ou criar um ticket
}`,
          title: 'Integração com MongoDB'
        }
      ]
    }
  ];

  // Filtrar seções baseado na pesquisa e categoria selecionada
  const filteredSections = docSections.filter(section => {
    const matchesSearch = searchQuery === '' || 
      section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      section.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      section.content.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeTab === 'all' || section.category === activeTab;
    
    return matchesSearch && matchesCategory;
  });

  // Categorias exclusivas para o filtro
  const categories = [
    { id: 'all', label: 'Todos', icon: <BookOpen className="h-4 w-4" /> },
    { id: 'getting-started', label: 'Primeiros Passos', icon: <Zap className="h-4 w-4" /> },
    { id: 'api', label: 'API', icon: <Code className="h-4 w-4" /> },
    { id: 'webhooks', label: 'Webhooks', icon: <Server className="h-4 w-4" /> },
    { id: 'chatbots', label: 'Chatbots', icon: <MessageSquare className="h-4 w-4" /> },
    { id: 'integrations', label: 'Integrações', icon: <Database className="h-4 w-4" /> }
  ];

  // Helper para obter o ícone da categoria
  const getCategoryIcon = (category: string) => {
    const found = categories.find(cat => cat.id === category);
    return found ? found.icon : <BookOpen className="h-4 w-4" />;
  };

  return (
    <>
      <SEO 
        title="Documentação Técnica" 
        description="Documentação técnica completa da API e funcionalidades do RodTicket para integração com WhatsApp Business."
        keywords="documentação, api, webhook, rodticket, whatsapp, desenvolvimento, integração, chatbot"
        structuredData={structuredData}
      />
      
      <Navbar />
      
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Header */}
        <section className="py-12 md:py-16 px-4">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-medium text-sm mb-3 md:mb-4">
                Documentação Técnica
              </span>
              <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
                API do <span className="gradient-text">RodTicket</span> para WhatsApp
              </h1>
              <p className="text-gray-600 mb-6 md:mb-8 text-base md:text-lg">
                Guias completos, referências de API e exemplos para integrar o WhatsApp Business em suas aplicações.
              </p>

              {/* Search Box */}
              <div className="relative max-w-lg mx-auto mb-8">
                <div className="flex items-center border rounded-lg border-gray-300 bg-white shadow-sm overflow-hidden transition-all focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
                  <Input
                    type="text"
                    placeholder="Pesquisar na documentação..."
                    className="flex-grow border-0 focus-visible:ring-0 focus-visible:ring-transparent"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <div className="pr-3">
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="h-8 w-8 text-gray-400 hover:text-primary bg-transparent hover:bg-transparent"
                    >
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Category Tabs */}
            <div className="max-w-4xl mx-auto">
              <Tabs 
                defaultValue="all" 
                value={activeTab}
                onValueChange={setActiveTab}
                className="mb-8"
              >
                <TabsList className="bg-white shadow-sm border border-gray-100 p-1 rounded-lg flex flex-wrap justify-center">
                  {categories.map(category => (
                    <TabsTrigger 
                      key={category.id}
                      value={category.id}
                      className="flex items-center gap-1.5 data-[state=active]:bg-primary data-[state=active]:text-white rounded-md px-3 py-2"
                    >
                      {category.icon}
                      {category.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Documentation Content */}
        <section className="pb-16 px-4">
          <div className="container-custom max-w-5xl">
            {filteredSections.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-gray-100">
                <BookOpen className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Nenhuma documentação encontrada</h3>
                <p className="text-gray-600 mb-4">Tente ajustar sua pesquisa ou selecione outra categoria</p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchQuery('');
                    setActiveTab('all');
                  }}
                >
                  Limpar filtros
                </Button>
              </div>
            ) : (
              <div className="space-y-8">
                {filteredSections.map((section) => (
                  <div 
                    key={section.id}
                    id={section.id} 
                    className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                  >
                    {/* Header */}
                    <div className="border-b border-gray-100 px-6 py-5 flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          {getCategoryIcon(section.category)}
                          <h2 className="text-xl font-semibold">{section.title}</h2>
                          {section.version && (
                            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                              {section.version}
                            </Badge>
                          )}
                        </div>
                        <p className="text-gray-600 text-sm">{section.description}</p>
                      </div>
                      <Badge variant="outline" className="capitalize bg-gray-50 text-gray-700">
                        {section.category === 'getting-started' ? 'Primeiros Passos' : 
                         section.category === 'api' ? 'API' :
                         section.category === 'webhooks' ? 'Webhooks' :
                         section.category === 'chatbots' ? 'Chatbots' : 
                         section.category === 'integrations' ? 'Integrações' : 
                         section.category}
                      </Badge>
                    </div>
                    
                    {/* Content */}
                    <div className="px-6 py-5 prose prose-gray max-w-none">
                      <p>{section.content}</p>

                      {/* Code Blocks */}
                      <div className="mt-5 space-y-5">
                        {section.codeBlocks.map((block, index) => (
                          <div key={index} className="rounded-md overflow-hidden">
                            {block.title && (
                              <div className="bg-gray-100 px-4 py-2 text-sm font-medium border-b border-gray-200">
                                {block.title}
                              </div>
                            )}
                            <SyntaxHighlighter 
                              language={block.language} 
                              style={tomorrow}
                              customStyle={{
                                margin: 0,
                                padding: '1rem',
                                fontSize: '0.875rem',
                                lineHeight: 1.5
                              }}
                              wrapLines
                              wrapLongLines
                            >
                              {block.code}
                            </SyntaxHighlighter>
                            <div className="bg-gray-100 px-4 py-1.5 text-xs flex justify-end border-t border-gray-200">
                              <button 
                                onClick={() => {
                                  navigator.clipboard.writeText(block.code);
                                  // You could add a toast notification here
                                }}
                                className="text-gray-500 hover:text-primary flex items-center gap-1"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                                  <path d="M8 3a1 1 0 011-1h2a1 0 110 2H9a1 1 0 01-1-1z" />
                                  <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                                </svg>
                                Copiar
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Help Section */}
        <section className="py-12 px-4 bg-gray-50 mt-8">
          <div className="container-custom max-w-4xl text-center">
            <h2 className="text-2xl font-bold mb-6">Precisa de ajuda com a API?</h2>
            <p className="text-gray-600 mb-6">
              Nossa equipe de suporte técnico está disponível para ajudar com qualquer dúvida sobre a integração.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary-600">
                Agendar Consulta Técnica
              </Button>
              <Button variant="outline">
                Ver Tutoriais em Vídeo
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Documentacao;