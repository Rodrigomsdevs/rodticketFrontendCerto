import React, { useState } from 'react';
import { Search, Book, Settings, MessageSquare, PlayCircle, Filter, ChevronRight, Clock, BarChart2, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import SEO from '@/components/SEO';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Tutorial {
  id: number;
  title: string;
  description: string;
  category: 'iniciante' | 'intermediario' | 'avancado';
  type: 'video' | 'artigo';
  image?: string;
  youtubeId?: string; // YouTube video ID
  duration: string;
  url: string;
  popular?: boolean;
  topics: string[];
  author: string;
  date: string;
}

// YouTube Video Modal Component
const YouTubeVideoModal = ({ 
  videoId, 
  isOpen, 
  onClose, 
  title 
}: { 
  videoId: string, 
  isOpen: boolean, 
  onClose: () => void,
  title: string 
}) => {
  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] p-0 overflow-hidden">
        <DialogHeader className="p-4 bg-white border-b relative">
          <DialogTitle className="pr-8 text-lg">{title}</DialogTitle>
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-4 top-4" 
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        <div className="aspect-video w-full">
          <iframe
            title={title}
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Tutoriais = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<Tutorial | null>(null);

  const openVideoModal = (tutorial: Tutorial) => {
    setCurrentVideo(tutorial);
    setVideoModalOpen(true);
  };

  const tutoriais: Tutorial[] = [
    {
      id: 1,
      title: "Primeiros passos com o RodTicket",
      description: "Aprenda a configurar sua conta e conectar seu primeiro número de WhatsApp.",
      category: 'iniciante',
      type: 'video',
      youtubeId: "ErZeHvP1L1s", // ID do vídeo do YouTube
      duration: "8:14",
      url: "https://www.youtube.com/watch?v=ErZeHvP1L1s",
      popular: true,
      topics: ["configuração inicial", "conexão WhatsApp", "perfil"],
      author: "Amanda Silva",
      date: "01/05/2025"
    },
  ];

  const filteredTutorials = tutoriais.filter(tutorial => {
    const matchesSearch = searchQuery === '' || 
      tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tutorial.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tutorial.topics.some(topic => topic.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || tutorial.category === selectedCategory;
    const matchesType = selectedType === 'all' || tutorial.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  const getCategoryBadgeColor = (category: string) => {
    switch (category) {
      case 'iniciante':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'intermediario':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'avancado':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'iniciante':
        return 'Iniciante';
      case 'intermediario':
        return 'Intermediário';
      case 'avancado':
        return 'Avançado';
      default:
        return category;
    }
  };

  const getTutorialTypeIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <PlayCircle className="h-4 w-4 text-red-500" />;
      case 'artigo':
        return <Book className="h-4 w-4 text-blue-500" />;
      default:
        return <Book className="h-4 w-4 text-gray-500" />;
    }
  };

  const tutoriaisIniciantes = filteredTutorials.filter(t => t.category === 'iniciante');
  const tutoriaisIntermediarios = filteredTutorials.filter(t => t.category === 'intermediario');
  const tutoriaisAvancados = filteredTutorials.filter(t => t.category === 'avancado');
  const tutoriaisPopulares = filteredTutorials.filter(t => t.popular);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": tutoriais.map(tutorial => ({
      "@type": "Question",
      "name": tutorial.title,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": tutorial.description
      }
    }))
  };

  return (
    <>
      <SEO 
        title="Tutoriais" 
        description="Aprenda a utilizar todas as funcionalidades do RodTicket com nossos tutoriais em vídeo e artigos detalhados."
        keywords="tutoriais, guias, como usar, rodticket, whatsapp, chatbot, atendimento"
        structuredData={structuredData}
      />
      
      <Navbar />
      
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <section className="py-12 md:py-16 px-4">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-medium text-sm mb-3 md:mb-4">
                Centro de Aprendizado
              </span>
              
              <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
                Tutoriais e Guias do <span className="gradient-text">RodTicket</span>
              </h1>
              
              <p className="text-gray-600 mb-6 md:mb-8 text-base md:text-lg">
                Domine todas as funcionalidades da plataforma e otimize seu atendimento com nossos tutoriais passo a passo.
              </p>

              <div className="relative max-w-lg mx-auto mb-8">
                <div className="flex items-center border rounded-lg border-gray-300 bg-white shadow-sm overflow-hidden transition-all focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
                  <Input
                    type="text"
                    placeholder="Pesquisar tutoriais..."
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

              <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
                <div className="flex items-center space-x-2 bg-white rounded-lg border border-gray-200 shadow-sm px-3 py-2">
                  <Filter className="h-4 w-4 text-gray-500" />
                  <Select 
                    defaultValue="all"
                    onValueChange={(value) => setSelectedCategory(value)}
                  >
                    <SelectTrigger className="border-0 shadow-none p-0 min-w-[140px] h-7">
                      <SelectValue placeholder="Todos os níveis" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos os níveis</SelectItem>
                      <SelectItem value="iniciante">Iniciante</SelectItem>
                      <SelectItem value="intermediario">Intermediário</SelectItem>
                      <SelectItem value="avancado">Avançado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex items-center space-x-2 bg-white rounded-lg border border-gray-200 shadow-sm px-3 py-2">
                  <Settings className="h-4 w-4 text-gray-500" />
                  <Select 
                    defaultValue="all"
                    onValueChange={(value) => setSelectedType(value)}
                  >
                    <SelectTrigger className="border-0 shadow-none p-0 min-w-[140px] h-7">
                      <SelectValue placeholder="Todos os tipos" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos os tipos</SelectItem>
                      <SelectItem value="video">Vídeos</SelectItem>
                      <SelectItem value="artigo">Artigos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className=" px-4">
          <div className="container-custom">
            {filteredTutorials.length === 0 ? (
              <div className="text-center py-12">
                <MessageSquare className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Nenhum tutorial encontrado</h3>
                <p className="text-gray-600">Tente ajustar seus filtros ou termos de pesquisa</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setSelectedType('all');
                  }}
                >
                  Limpar filtros
                </Button>
              </div>
            ) : (
              <div className="max-w-screen-xl mx-auto">
                <Tabs defaultValue="todos" className="mb-8">
                  <div className="border-b mb-6 overflow-x-auto scrollbar-hide">
                    <TabsList className="bg-transparent border-b-0 p-0 h-auto w-full flex-nowrap">
                      <TabsTrigger 
                        value="todos" 
                        className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none px-3 sm:px-4 py-2 data-[state=active]:text-primary h-10 whitespace-nowrap text-sm sm:text-base"
                      >
                        Todos ({filteredTutorials.length})
                      </TabsTrigger>
                      <TabsTrigger 
                        value="populares" 
                        className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none px-3 sm:px-4 py-2 data-[state=active]:text-primary h-10 whitespace-nowrap text-sm sm:text-base"
                      >
                        Populares ({tutoriaisPopulares.length})
                      </TabsTrigger>
                      <TabsTrigger 
                        value="iniciante" 
                        className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none px-3 sm:px-4 py-2 data-[state=active]:text-primary h-10 whitespace-nowrap text-sm sm:text-base"
                      >
                        Iniciante ({tutoriaisIniciantes.length})
                      </TabsTrigger>
                      <TabsTrigger 
                        value="intermediario" 
                        className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none px-3 sm:px-4 py-2 data-[state=active]:text-primary h-10 whitespace-nowrap text-sm sm:text-base"
                      >
                        Interm. ({tutoriaisIntermediarios.length})
                      </TabsTrigger>
                      <TabsTrigger 
                        value="avancado" 
                        className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none px-3 sm:px-4 py-2 data-[state=active]:text-primary h-10 whitespace-nowrap text-sm sm:text-base"
                      >
                        Avançado ({tutoriaisAvancados.length})
                      </TabsTrigger>
                    </TabsList>
                  </div>
                  
                  <TabsContent value="todos" className="mt-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredTutorials.map(tutorial => (
                        <TutorialCard key={tutorial.id} tutorial={tutorial} openVideoModal={openVideoModal} />
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="populares" className="mt-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {tutoriaisPopulares.map(tutorial => (
                        <TutorialCard key={tutorial.id} tutorial={tutorial} openVideoModal={openVideoModal} />
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="iniciante" className="mt-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {tutoriaisIniciantes.map(tutorial => (
                        <TutorialCard key={tutorial.id} tutorial={tutorial} openVideoModal={openVideoModal} />
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="intermediario" className="mt-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {tutoriaisIntermediarios.map(tutorial => (
                        <TutorialCard key={tutorial.id} tutorial={tutorial} openVideoModal={openVideoModal} />
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="avancado" className="mt-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {tutoriaisAvancados.map(tutorial => (
                        <TutorialCard key={tutorial.id} tutorial={tutorial} openVideoModal={openVideoModal} />
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            )}

            {currentVideo && (
              <YouTubeVideoModal 
                videoId={currentVideo.youtubeId!} 
                isOpen={videoModalOpen} 
                onClose={() => setVideoModalOpen(false)} 
                title={currentVideo.title} 
              />
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

const TutorialCard = ({ tutorial, openVideoModal }: { tutorial: Tutorial, openVideoModal: (tutorial: Tutorial) => void }) => {
  const categoryColor = getCategoryBadgeColor(tutorial.category);
  const typeIcon = getTutorialTypeIcon(tutorial.type);
  const categoryName = getCategoryName(tutorial.category);
  
  const handleVideoClick = () => {
    if (tutorial.type === 'video' && tutorial.youtubeId) {
      openVideoModal(tutorial);
    }
  };
  
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all overflow-hidden group">
      <div 
        className="relative aspect-video bg-gray-100 overflow-hidden cursor-pointer"
        onClick={handleVideoClick}
      >
        {tutorial.type === 'video' && tutorial.youtubeId ? (
          <div className="w-full h-full">
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-0 transition-opacity z-10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <PlayCircle className="h-8 w-8 text-primary" />
                </div>
              </div>
            </div>
            <img 
              src={`https://img.youtube.com/vi/${tutorial.youtubeId}/maxresdefault.jpg`} 
              alt={tutorial.title}
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://img.youtube.com/vi/${tutorial.youtubeId}/mqdefault.jpg`;
              }}
            />
          </div>
        ) : (
          <div 
            className="w-full h-full bg-cover bg-center transition-transform group-hover:scale-105"
            style={{ 
              backgroundImage: tutorial.image 
                ? `url(${tutorial.image})`
                : 'url(/images/placeholder.svg)'
            }}
          />
        )}
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md flex items-center z-10">
          <Clock className="h-3 w-3 mr-1" />
          {tutorial.duration}
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex flex-wrap gap-2 mb-3">
          <Badge variant="outline" className={`${categoryColor} border`}>
            {categoryName}
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1 bg-gray-50">
            {typeIcon}
            {tutorial.type === 'video' ? 'Vídeo' : 'Artigo'}
          </Badge>
          {tutorial.popular && (
            <Badge variant="outline" className="bg-yellow-50 text-yellow-800 border-yellow-200">
              Popular
            </Badge>
          )}
        </div>
        
        <h3 
          className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors cursor-pointer" 
          onClick={handleVideoClick}
        >
          {tutorial.title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-2 mb-3">
          {tutorial.description}
        </p>
        
        <div className="flex justify-between items-center text-xs text-gray-500 pt-3 border-t border-gray-100">
          <span>{tutorial.author}</span>
          <span>{tutorial.date}</span>
        </div>
        
        {tutorial.type === 'video' ? (
          <button 
            onClick={handleVideoClick}
            className="mt-4 text-primary font-medium text-sm flex items-center"
          >
            Assistir vídeo
            <PlayCircle className="h-4 w-4 ml-1" />
          </button>
        ) : (
          <a 
            href={tutorial.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-4 text-primary font-medium text-sm flex items-center"
          >
            Ler artigo
            <ChevronRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
          </a>
        )}
      </div>
    </div>
  );
};

const getCategoryBadgeColor = (category: string) => {
  switch (category) {
    case 'iniciante':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'intermediario':
      return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'avancado':
      return 'bg-purple-100 text-purple-800 border-purple-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

const getCategoryName = (category: string) => {
  switch (category) {
    case 'iniciante':
      return 'Iniciante';
    case 'intermediario':
      return 'Intermediário';
    case 'avancado':
      return 'Avançado';
    default:
      return category;
  }
};

const getTutorialTypeIcon = (type: string) => {
  switch (type) {
    case 'video':
      return <PlayCircle className="h-4 w-4 text-red-500" />;
    case 'artigo':
      return <Book className="h-4 w-4 text-blue-500" />;
    default:
      return <Book className="h-4 w-4 text-gray-500" />;
  }
};

export default Tutoriais;