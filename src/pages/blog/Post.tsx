import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Calendar, 
  User, 
  Tag, 
  ArrowLeft, 
  Share2, 
  MessageSquare,
  ThumbsUp,
  Facebook,
  Twitter,
  Linkedin,
  Link as LinkIcon,
  Send,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import SEO from '@/components/SEO';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getPostBySlug, getRelatedPosts, BlogPost } from './data/blog-data';

interface CommentType {
  id: number;
  name: string;
  email: string;
  avatar?: string;
  date: string;
  content: string;
  likes: number;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [commentText, setCommentText] = useState<string>('');
  const [commentName, setCommentName] = useState<string>('');
  const [commentEmail, setCommentEmail] = useState<string>('');

  // Mock comments
  const [comments, setComments] = useState<CommentType[]>([
    {
      id: 1,
      name: "Carlos Almeida",
      email: "carlos@exemplo.com",
      avatar: "/images/authors/avatar1.jpg",
      date: "05/05/2025 - 14:32",
      content: "Excelente artigo! Implementamos a API do WhatsApp em nossa empresa há 3 meses e os resultados são realmente impressionantes. O atendimento ficou muito mais rápido.",
      likes: 5
    },
    {
      id: 2,
      name: "Juliana Rocha",
      email: "ju.rocha@exemplo.com",
      avatar: "/images/authors/avatar2.jpg",
      date: "04/05/2025 - 09:15",
      content: "Gostaria de saber qual é o custo médio de implementação para uma empresa pequena. Vocês têm algum case específico para esse tamanho de negócio?",
      likes: 2
    }
  ]);

  // Load post data
  useEffect(() => {
    if (slug) {
      const postData = getPostBySlug(slug);
      if (postData) {
        setPost(postData);
        // Get related posts
        if (postData.relatedPosts && postData.relatedPosts.length > 0) {
          const related = getRelatedPosts(postData.relatedPosts);
          setRelatedPosts(related);
        }
      } else {
        // Post not found
        navigate('/blog'); // Redirect to blog index
      }
      setLoading(false);
    }
  }, [slug, navigate]);

  // Handle comment submission
  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!commentText || !commentName || !commentEmail) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    
    // Create new comment
    const newComment: CommentType = {
      id: comments.length + 1,
      name: commentName,
      email: commentEmail,
      date: new Date().toLocaleString('pt-BR').replace(',', ' -'),
      content: commentText,
      likes: 0
    };
    
    // Add to comments
    setComments([...comments, newComment]);
    
    // Clear form
    setCommentText('');
    setCommentName('');
    setCommentEmail('');
  };

  // Handle like comment
  const handleLikeComment = (id: number) => {
    setComments(
      comments.map(comment => 
        comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment
      )
    );
  };

  // Function to render Markdown-like content (simplified)
  const renderContent = (content: string) => {
    // Replace headers
    let formattedContent = content
      .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mb-4 mt-6">$1</h1>')
      .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mb-3 mt-6">$1</h2>')
      .replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold mb-3 mt-5">$1</h3>')
      // Replace lists
      .replace(/^\- (.*$)/gm, '<li class="flex items-start"><div class="mr-2 mt-1.5 text-primary text-lg">•</div><div>$1</div></li>')
      // Replace paragraphs
      .replace(/^(?!<h|<li|<ul|<ol|<div)(.+$)/gm, '<p class="mb-4 text-gray-700">$1</p>')
      // Wrap lists
      .replace(/(<li.*<\/li>)\s+(<li.*<\/li>)/gs, '<ul class="my-4 space-y-2 ml-4">$1$2</ul>');
    
    // Return formatted HTML
    return { __html: formattedContent };
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 flex items-center justify-center">
          <div className="animate-pulse text-center">
            <div className="w-48 h-6 bg-gray-200 rounded mx-auto mb-4"></div>
            <div className="w-64 h-10 bg-gray-200 rounded mx-auto"></div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (!post) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
          <div className="container-custom text-center">
            <h1 className="text-3xl font-bold mb-4">Artigo não encontrado</h1>
            <p className="text-gray-600 mb-6">O artigo que você está procurando não está disponível.</p>
            <Link to="/blog">
              <Button variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar para o Blog
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <SEO 
        title={`${post.title} | Blog RodTicket`} 
        description={post.excerpt}
        keywords={post.tags.join(', ')}
      />
      
      <Navbar />
      
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 bg-gradient-to-b from-primary/5 to-transparent overflow-hidden">
          <div className="container-custom px-4">
            <div className="max-w-3xl mx-auto">
              {/* Back to blog */}
              <Link to="/blog" className="inline-flex items-center text-gray-600 hover:text-primary mb-6 transition-colors">
                <ArrowLeft className="h-4 w-4 mr-2" />
                <span>Voltar para o Blog</span>
              </Link>
              
              {/* Category */}
              <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">
                {post.category}
              </Badge>
              
              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {post.title}
              </h1>
              
              {/* Meta info */}
              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1.5" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1.5" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1.5" />
                  {post.readTime} min de leitura
                </div>
                <div className="flex items-center">
                  <MessageSquare className="h-4 w-4 mr-1.5" />
                  {comments.length} comentários
                </div>
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap items-center gap-2 mb-8">
                {post.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="bg-white">
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="relative -mt-8 mb-12">
          <div className="container-custom px-4">
            <div className="max-w-4xl mx-auto">
              <div className="aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={post.coverImage} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="pb-16 px-4">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
              {/* Main Content */}
              <div className="lg:w-2/3">
                {/* Article */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 mb-8">
                  <article className="prose prose-lg max-w-none">
                    <div dangerouslySetInnerHTML={renderContent(post.content)} />
                  </article>
                </div>
                
                {/* Share Section */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
                  <h3 className="text-lg font-semibold mb-4">Compartilhar este artigo</h3>
                  <div className="flex gap-3">
                    <Button variant="outline" className="gap-2">
                      <Facebook className="h-4 w-4" />
                      <span className="hidden md:inline">Facebook</span>
                    </Button>
                    <Button variant="outline" className="gap-2">
                      <Twitter className="h-4 w-4" />
                      <span className="hidden md:inline">Twitter</span>
                    </Button>
                    <Button variant="outline" className="gap-2">
                      <Linkedin className="h-4 w-4" />
                      <span className="hidden md:inline">LinkedIn</span>
                    </Button>
                    <Button variant="outline" className="gap-2">
                      <LinkIcon className="h-4 w-4" />
                      <span className="hidden md:inline">Copiar Link</span>
                    </Button>
                  </div>
                </div>
                
                {/* Author section */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
                  <div className="flex items-start gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={post.authorAvatar || ''} alt={post.author} />
                      <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        {post.author}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Especialista em atendimento ao cliente e integração de APIs. 
                        Trabalha com tecnologias de comunicação há mais de 10 anos, 
                        ajudando empresas a melhorar seu relacionamento com clientes.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Comments Section */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
                  <h3 className="text-xl font-semibold mb-6">
                    Comentários ({comments.length})
                  </h3>
                  
                  {/* Comments list */}
                  <div className="space-y-6 mb-8">
                    {comments.map(comment => (
                      <div key={comment.id} className="border-b border-gray-100 pb-6 last:border-0">
                        <div className="flex items-start gap-3">
                          <Avatar className="w-10 h-10">
                            <AvatarImage src={comment.avatar || ''} alt={comment.name} />
                            <AvatarFallback>{comment.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex justify-between items-center mb-2">
                              <h4 className="font-semibold">{comment.name}</h4>
                              <span className="text-gray-500 text-xs">{comment.date}</span>
                            </div>
                            <p className="text-gray-700 text-sm mb-3">
                              {comment.content}
                            </p>
                            <div className="flex items-center">
                              <button
                                onClick={() => handleLikeComment(comment.id)}
                                className="flex items-center gap-1 text-xs text-gray-500 hover:text-primary transition-colors"
                              >
                                <ThumbsUp className="h-3.5 w-3.5" />
                                <span>{comment.likes > 0 ? comment.likes : ''} Curtir</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Comment Form */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Deixe seu comentário</h4>
                    <form onSubmit={handleSubmitComment}>
                      <div className="mb-4">
                        <Textarea
                          placeholder="Escreva seu comentário aqui..."
                          className="resize-none"
                          rows={4}
                          value={commentText}
                          onChange={(e) => setCommentText(e.target.value)}
                          required
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <Input
                          type="text"
                          placeholder="Nome *"
                          value={commentName}
                          onChange={(e) => setCommentName(e.target.value)}
                          required
                        />
                        <Input
                          type="email"
                          placeholder="E-mail *"
                          value={commentEmail}
                          onChange={(e) => setCommentEmail(e.target.value)}
                          required
                        />
                      </div>
                      <Button type="submit" className="bg-primary hover:bg-primary-600">
                        Enviar comentário
                        <Send className="h-4 w-4 ml-2" />
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="lg:w-1/3">
                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
                    <h3 className="text-lg font-semibold mb-4">Artigos Relacionados</h3>
                    <div className="space-y-4">
                      {relatedPosts.map(related => (
                        <Card key={related.id} className="border-0 shadow-none">
                          <Link to={`/blog/post/${related.slug}`} className="group">
                            <CardContent className="p-0 flex gap-3 items-center">
                              {/* Thumbnail */}
                              <div className="w-16 h-16 flex-shrink-0 rounded-md overflow-hidden">
                                <img 
                                  src={related.coverImage} 
                                  alt={related.title}
                                  className="h-full w-full object-cover"
                                />
                              </div>
                              {/* Content */}
                              <div className="flex-1">
                                <h4 className="font-medium text-sm group-hover:text-primary transition-colors">
                                  {related.title}
                                </h4>
                                <div className="flex items-center mt-1 text-xs text-gray-500">
                                  <Calendar className="h-3 w-3 mr-1" />
                                  {related.date}
                                </div>
                              </div>
                            </CardContent>
                          </Link>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Topics */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
                  <h3 className="text-lg font-semibold mb-4">Tópicos</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <Link key={index} to={`/blog?tag=${tag}`}>
                        <Badge variant="outline" className="bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors">
                          {tag}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </div>
                
                {/* Newsletter */}
                <div className="bg-gradient-to-br from-primary to-primary-800 text-white rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-2">Receba nossas novidades</h3>
                  <p className="text-white/80 text-sm mb-4">
                    Inscreva-se para receber conteúdos exclusivos sobre WhatsApp e atendimento.
                  </p>
                  <form className="space-y-3">
                    <Input 
                      type="email" 
                      placeholder="Seu e-mail" 
                      className="bg-white/20 border-white/10 text-white placeholder:text-white/60"
                    />
                    <Button className="w-full bg-white text-primary hover:bg-white/90">
                      Inscrever-se
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default BlogPost;