import React, { useState } from 'react';
import { 
  Search, 
  Calendar, 
  User, 
  Tag, 
  ChevronRight, 
  Clock, 
  Filter,
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SEO from '@/components/SEO';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { blogPosts } from './data/blog-data';

const BlogIndex = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  // Get unique categories from blog posts
  const categories = [...new Set(blogPosts.map(post => post.category))];

  // Filter posts by search and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = categoryFilter === 'all' || post.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });

  // Featured post is the first post with isFeatured=true
  const featuredPost = blogPosts.find(post => post.isFeatured);

  // Recent posts (excluding featured)
  const recentPosts = filteredPosts
    .filter(post => !post.isFeatured || post !== featuredPost)
    .slice(0, 6);

  return (
    <>
      <SEO 
        title="Blog | RodTicket" 
        description="Fique por dentro das novidades sobre atendimento via WhatsApp, automação de chatbots, e dicas para melhorar o relacionamento com seus clientes."
        keywords="blog, atendimento, whatsapp, chatbot, rodticket, api whatsapp, automação"
      />
      
      <Navbar />
      
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Header */}
        <section className="py-12 md:py-16 px-4">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-medium text-sm mb-3 md:mb-4">
                Blog do RodTicket
              </span>
              
              <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
                Insights sobre atendimento e <span className="gradient-text">WhatsApp Business</span>
              </h1>
              
              <p className="text-gray-600 mb-6 md:mb-8 text-base md:text-lg">
                Dicas, tutoriais e novidades sobre como melhorar seu atendimento ao cliente via WhatsApp.
              </p>

              {/* Search Box */}
              <div className="relative max-w-lg mx-auto mb-8">
                <div className="flex items-center border rounded-lg border-gray-300 bg-white shadow-sm overflow-hidden transition-all focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
                  <Input
                    type="text"
                    placeholder="Pesquisar artigos..."
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

              {/* Filters */}
              <div className="flex justify-center mb-8">
                <div className="flex items-center space-x-2 bg-white rounded-lg border border-gray-200 shadow-sm px-3 py-2">
                  <Filter className="h-4 w-4 text-gray-500" />
                  <Select 
                    defaultValue="all"
                    onValueChange={(value) => setCategoryFilter(value)}
                  >
                    <SelectTrigger className="border-0 shadow-none p-0 min-w-[180px] h-7">
                      <SelectValue placeholder="Todas as categorias" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todas as categorias</SelectItem>
                      {categories.map(category => (
                        <SelectItem key={category} value={category}>{category}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="mb-16 px-4">
            <div className="container-custom">
              <div className="relative overflow-hidden bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Image Section */}
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img 
                      src={featuredPost.coverImage} 
                      alt={featuredPost.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6 md:p-8 flex flex-col">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 self-start mb-4">
                      Em Destaque
                    </Badge>
                    <h2 className="text-2xl md:text-3xl font-bold mb-3">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-600 mb-4 flex-grow">
                      {featuredPost.excerpt}
                    </p>
                    
                    {/* Meta info */}
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-5">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {featuredPost.date}
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        {featuredPost.comments} comentários
                      </div>
                    </div>
                    
                    <Link to={`/blog/post/${featuredPost.slug}`}>
                      <Button className="bg-primary hover:bg-primary-600 w-full md:w-auto">
                        Ler artigo completo
                        <ChevronRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="pb-16 px-4">
          <div className="container-custom">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <MessageSquare className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Nenhum artigo encontrado</h3>
                <p className="text-gray-600 mb-4">Tente ajustar seus filtros ou termos de pesquisa</p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchQuery('');
                    setCategoryFilter('all');
                  }}
                >
                  Limpar filtros
                </Button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold">Artigos Recentes</h2>
                  
                  {/* Category filter for mobile (can be expanded for more complex filtering) */}
                  <div className="md:hidden">
                    <Select 
                      defaultValue="all"
                      onValueChange={(value) => setCategoryFilter(value)}
                    >
                      <SelectTrigger className="h-9 min-w-[150px]">
                        <SelectValue placeholder="Categoria" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todos</SelectItem>
                        {categories.map(category => (
                          <SelectItem key={category} value={category}>{category}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {recentPosts.map(post => (
                    <BlogPostCard key={post.id} post={post} />
                  ))}
                </div>

                {/* Pagination (simplified) */}
                <div className="flex justify-center">
                  <div className="flex space-x-1">
                    <Button variant="outline" size="sm" disabled>
                      Anterior
                    </Button>
                    <Button variant="outline" size="sm" className="bg-primary text-white">
                      1
                    </Button>
                    <Button variant="outline" size="sm">
                      2
                    </Button>
                    <Button variant="outline" size="sm">
                      3
                    </Button>
                    <Button variant="outline" size="sm">
                      Próxima
                    </Button>
                  </div>
                </div>
              </>
            )}
          </div>
        </section>

      
      </main>
      
      <Footer />
    </>
  );
};

// BlogPostCard component for displaying individual blog posts in the grid
const BlogPostCard = ({ post }) => {
  return (
    <Link 
      to={`/blog/post/${post.slug}`}
      className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all overflow-hidden group flex flex-col"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={post.coverImage} 
          alt={post.title}
          className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
        />
        {/* Category badge */}
        <div className="absolute top-3 right-3">
          <Badge className="bg-white/80 text-primary">
            {post.category}
          </Badge>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
          {post.excerpt}
        </p>
        
        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag, idx) => (
              <Badge key={idx} variant="outline" className="text-xs bg-gray-50 border-gray-200">
                {tag}
              </Badge>
            ))}
          </div>
        )}
        
        {/* Meta info */}
        <div className="flex justify-between items-center text-xs text-gray-500 border-t border-gray-100 pt-3">
          <div className="flex items-center">
            <User className="h-3 w-3 mr-1" />
            {post.author}
          </div>
          <div className="flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            {post.readTime} min de leitura
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogIndex;