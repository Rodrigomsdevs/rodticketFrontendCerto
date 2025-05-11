import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, MessageSquare, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Interface para formulário
interface ContactFormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  department: string;
  newsletter: boolean;
}

const Contato = () => {
  // Estado para o formulário
  const [formState, setFormState] = useState<ContactFormState>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    department: 'support',
    newsletter: false
  });

  // Estado para loading, erro e sucesso
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  // Dados estruturados para SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contato - RodTicket",
    "description": "Entre em contato com nossa equipe para obter suporte, tirar dúvidas ou solicitar uma demonstração personalizada do RodTicket.",
    "url": "https://rodticket.com/contato",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-11-4000-1000",
      "contactType": "customer support",
      "availableLanguage": ["Portuguese", "English"],
      "email": "contato@rodticket.com"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Paulista, 1000, Conjunto 101",
      "addressLocality": "São Paulo",
      "addressRegion": "SP",
      "postalCode": "01310-100",
      "addressCountry": "BR"
    }
  };

  // Handler para mudanças no formulário
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handler para mudanças no select
  const handleSelectChange = (value: string) => {
    setFormState(prev => ({
      ...prev,
      department: value
    }));
  };

  // Handler para o switch de newsletter
  const handleSwitchChange = (checked: boolean) => {
    setFormState(prev => ({
      ...prev,
      newsletter: checked
    }));
  };

  // Handler para envio do formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError(null);

    try {
      // Aqui você enviaria os dados para seu backend
      // Simulando uma requisição com timeout
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Simulando sucesso após o envio
      setFormSuccess(true);
      setFormState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        department: 'support',
        newsletter: false
      });

      // Resetar o status de sucesso após 5 segundos
      setTimeout(() => {
        setFormSuccess(false);
      }, 5000);

    } catch (error) {
      // Lidar com erros
      setFormError('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Perguntas frequentes
  const faqs = [
    {
      question: "Como funciona o suporte técnico?",
      answer: "Nosso suporte técnico está disponível de segunda a sexta, das 8h às 18h. Você pode entrar em contato por telefone, email ou pelo formulário nesta página. Para clientes com planos Business ou Enterprise, oferecemos suporte prioritário 24/7."
    },
    {
      question: "Quanto tempo leva para configurar o RodTicket?",
      answer: "A configuração básica do RodTicket pode ser feita em menos de 30 minutos. Nossa equipe de onboarding está disponível para ajudar na integração com seus sistemas existentes, o que pode levar de algumas horas a alguns dias, dependendo da complexidade."
    },
    {
      question: "Vocês oferecem demonstrações personalizadas?",
      answer: "Sim! Oferecemos demonstrações personalizadas para mostrar como o RodTicket pode ser adaptado às necessidades específicas do seu negócio. Basta preencher o formulário nesta página selecionando o departamento 'Vendas' e solicitando uma demo no campo de mensagem."
    },
    {
      question: "É possível migrar de outro sistema para o RodTicket?",
      answer: "Sim. Temos ferramentas de migração que facilitam a transferência de dados de outras plataformas para o RodTicket. Nossa equipe de suporte pode auxiliar em todo o processo de migração, garantindo uma transição tranquila."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Contato"
        description="Entre em contato com nossa equipe para obter suporte, tirar dúvidas ou solicitar uma demonstração personalizada do RodTicket."
        keywords="contato rodticket, suporte whatsapp, fale conosco, atendimento, dúvidas, demonstração, contatos"
        structuredData={structuredData}
      />
      <Navbar />
      <main className="flex-grow">
        {/* Contact form section */}
        <section className="section">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Entre em Contato</h2>
                <p className="text-gray-600 mb-8">
                  Preencha o formulário abaixo e nossa equipe entrará em contato o mais breve possível.
                  Você também pode nos contatar pelos canais diretos ao lado.
                </p>
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome completo</Label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</Label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        placeholder="Seu e-mail"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</Label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Assunto</Label>
                    <Select
                      onValueChange={(value) => setFormState(prev => ({ ...prev, subject: value }))}
                      value={formState.subject}
                    >
                      <SelectTrigger className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary">
                        <SelectValue placeholder="Selecione um assunto" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">Selecione um assunto</SelectItem>
                        <SelectItem value="sales">Informações sobre planos</SelectItem>
                        <SelectItem value="support">Suporte técnico</SelectItem>
                        <SelectItem value="billing">Faturamento</SelectItem>
                        <SelectItem value="partnership">Parcerias</SelectItem>
                        <SelectItem value="other">Outro assunto</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formState.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      placeholder="Como podemos ajudar?"
                    ></Textarea>
                  </div>
                  <div className="flex items-center">
                    <Switch
                      id="newsletter"
                      name="newsletter"
                      checked={formState.newsletter}
                      onCheckedChange={handleSwitchChange}
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                    <Label htmlFor="newsletter" className="ml-2 block text-sm text-gray-600">
                      Concordo com a <a href="#" className="text-primary hover:underline">Política de Privacidade</a>
                    </Label>
                  </div>
                  <div>
                    <Button type="submit" className="bg-primary hover:bg-primary-600 w-full md:w-auto" disabled={isSubmitting}>
                      {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                    </Button>
                  </div>
                  {formSuccess && (
                    <div className="flex items-center text-green-600 mt-4">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      <p>Mensagem enviada com sucesso!</p>
                    </div>
                  )}
                  {formError && (
                    <div className="flex items-center text-red-600 mt-4">
                      <AlertCircle className="h-5 w-5 mr-2" />
                      <p>{formError}</p>
                    </div>
                  )}
                </form>
              </div>

              <div>
                <div className="bg-white rounded-xl shadow-soft overflow-hidden mb-8">
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-4">Nosso Escritório</h3>
                    <div className="flex items-start mb-4">
                      <MapPin className="h-5 w-5 text-primary shrink-0 mt-1 mr-3" />
                      <div>
                        <p className="text-gray-700">Rua J. Piedade, 74A</p>
                        <p className="text-gray-500 text-sm">Centro, Maringá - PR</p>
                      </div>
                    </div>
                    <div className="flex items-start mb-4">
                      <Phone className="h-5 w-5 text-primary shrink-0 mt-1 mr-3" />
                      <div>
                        <p className="text-gray-700">+55 44 3142-5856</p>
                        <p className="text-gray-500 text-sm">Seg - Sex, 8h às 18h</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-primary shrink-0 mt-1 mr-3" />
                      <div>
                        <p className="text-gray-700">contato@rodticket.com</p>
                        <p className="text-gray-500 text-sm">Resposta em até 24h</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-100 h-64">
                  
                    <div className="h-full flex items-center justify-center bg-gray-200">
                      <div className="text-center">
                        <MapPin className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-500">Mapa de localização</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-soft p-6">
                  <h3 className="font-semibold text-lg mb-4">Horário de Atendimento</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-primary shrink-0 mt-1 mr-3" />
                      <div>
                        <p className="text-gray-700 font-medium">Segunda a Sexta</p>
                        <p className="text-gray-500">8h às 18h</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-primary shrink-0 mt-1 mr-3" />
                      <div>
                        <p className="text-gray-700 font-medium">Sábado</p>
                        <p className="text-gray-500">9h às 12h</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-gray-300 shrink-0 mt-1 mr-3" />
                      <div>
                        <p className="text-gray-400 font-medium">Domingo</p>
                        <p className="text-gray-400">Fechado</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ section */}
        <section className="section bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-bold mb-4">Perguntas Frequentes</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Encontre respostas rápidas para as perguntas mais comuns sobre o RodTicket.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <Card className="border-0 shadow-soft">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">Como funciona o período de teste gratuito?</h3>
                    <p className="text-gray-600">
                      Oferecemos um período de teste gratuito de 7 dias para todos os nossos planos, sem necessidade de cartão de crédito. 
                      Durante esse período, você tem acesso a todas as funcionalidades do plano escolhido para avaliar se atende às necessidades do seu negócio.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-soft">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">Preciso instalar algum aplicativo para usar o RodTicket?</h3>
                    <p className="text-gray-600">
                      Não, o RodTicket é uma plataforma baseada na web. Você pode acessar através de qualquer navegador, 
                      seja no computador, tablet ou smartphone. Não é necessário instalar nenhum aplicativo.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-soft">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">Como faço para adicionar mais atendentes ou números de WhatsApp?</h3>
                    <p className="text-gray-600">
                      Você pode adicionar mais atendentes ou números de WhatsApp atualizando seu plano. Entre em contato com nosso suporte 
                      ou acesse sua área de cliente para fazer o upgrade para um plano que atenda às suas necessidades.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-soft">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">O RodTicket é compatível com WhatsApp Business?</h3>
                    <p className="text-gray-600">
                      Sim, o RodTicket é totalmente compatível tanto com o WhatsApp normal quanto com o WhatsApp Business. 
                      Nossa plataforma se integra perfeitamente para facilitar o gerenciamento das suas conversas.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-8">
                <Link to="/funcionalidades">
                  <Button variant="outline">
                    Ver Todas as Funcionalidades
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contato;
