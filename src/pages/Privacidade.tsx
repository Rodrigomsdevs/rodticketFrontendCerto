import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Separator } from '@/components/ui/separator';
import { ArrowUp, Shield, Lock, Eye, Database, FileLock, Users, Bell, AlertTriangle } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import { Button } from '@/components/ui/button';

const Privacidade = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Mostrar/esconder botão de scroll baseado na posição da página
  React.useEffect(() => {
    const checkScroll = () => {
      setShowScrollButton(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Dados estruturados para SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Política de Privacidade | RodTicket",
    "description": "Política de Privacidade da plataforma RodTicket. Entenda como coletamos, usamos e protegemos seus dados pessoais em conformidade com a LGPD.",
    "publisher": {
      "@type": "Organization",
      "name": "RodTicket",
      "logo": {
        "@type": "ImageObject",
        "url": "https://rodticket.com/favicon.ico"
      }
    },
    "dateModified": "2025-05-08"
  };

  const sections = [
    { 
      id: "introducao", 
      title: "1. Introdução",
      icon: <Shield className="h-6 w-6 text-primary" />
    },
    { 
      id: "coleta", 
      title: "2. Dados coletados",
      icon: <Database className="h-6 w-6 text-blue-500" />
    },
    { 
      id: "uso", 
      title: "3. Como usamos seus dados",
      icon: <Eye className="h-6 w-6 text-teal-500" />
    },
    { 
      id: "armazenamento", 
      title: "4. Armazenamento e segurança",
      icon: <Lock className="h-6 w-6 text-amber-500" /> 
    },
    { 
      id: "compartilhamento", 
      title: "5. Compartilhamento de dados",
      icon: <Users className="h-6 w-6 text-indigo-500" />
    },
    { 
      id: "direitos", 
      title: "6. Seus direitos",
      icon: <FileLock className="h-6 w-6 text-green-500" />
    },
    { 
      id: "cookies", 
      title: "7. Cookies e tecnologias",
      icon: <Bell className="h-6 w-6 text-violet-500" />
    },
    { 
      id: "alteracoes", 
      title: "8. Alterações na política",
      icon: <AlertTriangle className="h-6 w-6 text-rose-500" />
    }
  ];

  return (
    <>
      <SEO
        title="Política de Privacidade | RodTicket"
        description="Política de Privacidade da plataforma RodTicket. Entenda como coletamos, usamos e protegemos seus dados pessoais em conformidade com a LGPD."
        keywords="política de privacidade, LGPD, proteção de dados, rodticket, whatsapp business, cookies"
        structuredData={structuredData}
      />

      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Navbar />

        <section className="py-12 md:py-16 px-4">
          <div className="container-custom max-w-4xl mx-auto">
            <h1 className="font-bold text-3xl md:text-4xl mb-6 text-center">Política de Privacidade</h1>
            <p className="text-gray-600 mb-8 text-center">
              Última atualização: 08 de Maio de 2025
            </p>

            {/* Índice/navegação */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
              <h2 className="font-semibold text-xl mb-4">Índice</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {sections.map((section) => (
                  <div key={section.id}>
                    <ScrollLink
                      to={section.id}
                      smooth={true}
                      duration={500}
                      offset={-100}
                      className="flex items-center p-2 rounded-lg hover:bg-gray-50 text-primary hover:text-primary-600 cursor-pointer transition-colors"
                    >
                      <div className="mr-3">
                        {section.icon}
                      </div>
                      <span>{section.title}</span>
                    </ScrollLink>
                  </div>
                ))}
              </div>
            </div>

            {/* Conteúdo da política de privacidade */}
            <div className="prose prose-lg max-w-none">
              <section id="introducao" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                  <Shield className="h-6 w-6 text-primary" />
                  1. Introdução
                </h2>
                <p>
                  A RodTicket ("nós", "nosso" ou "nossa") está comprometida em proteger a sua privacidade. Esta Política de Privacidade explica como coletamos, usamos e protegemos suas informações pessoais quando você utiliza nossa plataforma, aplicativos e serviços relacionados ao RodTicket.
                </p>
                <p>
                  Esta política foi elaborada em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018), o Marco Civil da Internet (Lei nº 12.965/2014) e demais normas sobre proteção de dados no Brasil.
                </p>
                <p>
                  Ao utilizar nossos serviços, você concorda com as práticas descritas nesta Política de Privacidade. Se você não concordar com esta política, por favor, não utilize nossos serviços.
                </p>
              </section>

              <Separator className="my-8" />

              <section id="coleta" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                  <Database className="h-6 w-6 text-blue-500" />
                  2. Dados que coletamos
                </h2>
                <p>
                  Podemos coletar diferentes tipos de informações pessoais dependendo de como você interage com nossa plataforma:
                </p>
                <h3 className="text-xl font-medium mt-6 mb-3">2.1. Dados fornecidos diretamente por você:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Informações de cadastro: nome, e-mail, telefone, endereço, CNPJ/CPF;</li>
                  <li>Credenciais de acesso: nome de usuário e senha (armazenada de forma criptografada);</li>
                  <li>Informações de pagamento: dados bancários, cartão de crédito (processados por gateways de pagamento seguros);</li>
                  <li>Comunicações: mensagens trocadas com nosso suporte, feedback e avaliações;</li>
                  <li>Conteúdo da conversa: quando você utiliza nossa plataforma para se comunicar com seus próprios clientes.</li>
                </ul>

                <h3 className="text-xl font-medium mt-6 mb-3">2.2. Dados coletados automaticamente:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Dados de uso: páginas visitadas, recursos utilizados, tempo gasto na plataforma;</li>
                  <li>Informações de dispositivo: tipo de dispositivo, sistema operacional, navegador, idioma;</li>
                  <li>Dados de localização: país, estado, cidade;</li>
                  <li>Endereço IP e identificadores online;</li>
                  <li>Cookies e tecnologias similares (detalhados na seção 7).</li>
                </ul>

                <h3 className="text-xl font-medium mt-6 mb-3">2.3. Dados de terceiros:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Dados da API do WhatsApp Business quando você conecta sua conta;</li>
                  <li>Informações de parceiros de negócios com os quais temos acordos de compartilhamento de dados;</li>
                  <li>Dados de redes sociais, se você optar por se conectar através delas.</li>
                </ul>
              </section>

              <Separator className="my-8" />

              <section id="uso" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                  <Eye className="h-6 w-6 text-teal-500" />
                  3. Como usamos seus dados
                </h2>
                <p>
                  Utilizamos seus dados pessoais para as seguintes finalidades:
                </p>
                <h3 className="text-xl font-medium mt-6 mb-3">3.1. Execução do contrato e prestação de serviços:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Criar e gerenciar sua conta na plataforma RodTicket;</li>
                  <li>Processar pagamentos e fornecer suporte ao cliente;</li>
                  <li>Fornecer os serviços contratados de atendimento via WhatsApp;</li>
                  <li>Conectar sua conta ao WhatsApp Business API;</li>
                  <li>Manter registros precisos de suas interações e transações conosco.</li>
                </ul>

                <h3 className="text-xl font-medium mt-6 mb-3">3.2. Interesses legítimos:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Melhorar e personalizar nossos serviços e experiência do usuário;</li>
                  <li>Desenvolver novos produtos e recursos;</li>
                  <li>Realizar análises de mercado e pesquisas;</li>
                  <li>Detectar e prevenir fraudes, abusos e problemas de segurança;</li>
                  <li>Administrar, proteger e melhorar nossa plataforma, incluindo solução de problemas.</li>
                </ul>

                <h3 className="text-xl font-medium mt-6 mb-3">3.3. Com seu consentimento:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Enviar comunicações de marketing, novidades e atualizações;</li>
                  <li>Realizar pesquisas e solicitar feedback;</li>
                  <li>Uso de cookies não essenciais;</li>
                  <li>Compartilhamento de dados com terceiros para fins específicos.</li>
                </ul>

                <h3 className="text-xl font-medium mt-6 mb-3">3.4. Cumprimento de obrigações legais:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Cumprir exigências fiscais e contábeis;</li>
                  <li>Responder a solicitações legais e ordens judiciais;</li>
                  <li>Cumprir obrigações regulatórias;</li>
                  <li>Exercer e defender direitos legais.</li>
                </ul>
              </section>

              <Separator className="my-8" />

              <section id="armazenamento" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                  <Lock className="h-6 w-6 text-amber-500" />
                  4. Armazenamento e segurança
                </h2>
                <p>
                  Levamos a segurança de seus dados muito a sério e implementamos medidas técnicas e administrativas para proteger suas informações contra acesso não autorizado, perda ou alteração.
                </p>

                <h3 className="text-xl font-medium mt-6 mb-3">4.1. Onde armazenamos seus dados:</h3>
                <p>
                  Seus dados são armazenados em servidores localizados no Brasil e nos Estados Unidos, em provedores de serviços em nuvem que seguem padrões rigorosos de segurança e proteção de dados.
                </p>

                <h3 className="text-xl font-medium mt-6 mb-3">4.2. Por quanto tempo mantemos seus dados:</h3>
                <p>
                  Mantemos seus dados pessoais pelo tempo necessário para cumprir as finalidades para as quais foram coletados, incluindo:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Durante todo o período em que você mantiver uma conta ativa em nossa plataforma;</li>
                  <li>Pelo período exigido por obrigações legais, fiscais ou regulatórias (geralmente 5 anos para registros financeiros e fiscais);</li>
                  <li>Pelo período necessário para resolver disputas ou fazer cumprir nossos acordos;</li>
                  <li>Para fins de backup e recuperação de desastres.</li>
                </ul>
                <p>
                  Após o término da finalidade de tratamento, seus dados serão excluídos ou anonimizados, salvo quando necessária sua conservação para outras finalidades previstas em lei.
                </p>

                <h3 className="text-xl font-medium mt-6 mb-3">4.3. Medidas de segurança:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Criptografia de dados em trânsito (SSL/TLS) e em repouso;</li>
                  <li>Autenticação de dois fatores (2FA);</li>
                  <li>Monitoramento constante e testes de vulnerabilidade;</li>
                  <li>Controle de acesso baseado em funções;</li>
                  <li>Treinamento regular de segurança para nossa equipe;</li>
                  <li>Backup regular de dados com procedimentos seguros de recuperação.</li>
                </ul>
              </section>

              <Separator className="my-8" />

              <section id="compartilhamento" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                  <Users className="h-6 w-6 text-indigo-500" />
                  5. Compartilhamento de dados
                </h2>
                <p>
                  Podemos compartilhar suas informações nas seguintes circunstâncias:
                </p>

                <h3 className="text-xl font-medium mt-6 mb-3">5.1. Com fornecedores de serviços:</h3>
                <p>
                  Compartilhamos dados com empresas que nos ajudam a fornecer nossos serviços, incluindo:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provedores de serviços em nuvem e hospedagem;</li>
                  <li>Processadores de pagamento;</li>
                  <li>Serviços de análise e medição de desempenho;</li>
                  <li>Serviços de suporte ao cliente;</li>
                  <li>Meta Platforms (para integração com WhatsApp Business API).</li>
                </ul>
                <p>
                  Todos os fornecedores estão sujeitos a obrigações contratuais de confidencialidade e são proibidos de usar seus dados para outros fins.
                </p>

                <h3 className="text-xl font-medium mt-6 mb-3">5.2. Por obrigações legais:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Para cumprir leis, regulamentos ou ordens judiciais;</li>
                  <li>Para proteger direitos, propriedade ou segurança do RodTicket, nossos usuários ou o público;</li>
                  <li>Para detectar, investigar e prevenir fraudes ou atividades ilegais;</li>
                  <li>Em resposta a solicitações de autoridades públicas.</li>
                </ul>

                <h3 className="text-xl font-medium mt-6 mb-3">5.3. Em transações corporativas:</h3>
                <p>
                  Se o RodTicket estiver envolvido em uma fusão, aquisição, venda de ativos ou falência, seus dados podem ser transferidos como parte desse processo. Você será notificado por e-mail ou por um aviso em nosso site se houver mudança no controle ou uso de suas informações pessoais.
                </p>

                <h3 className="text-xl font-medium mt-6 mb-3">5.4. Com seu consentimento:</h3>
                <p>
                  Podemos compartilhar suas informações em outras circunstâncias não listadas acima com seu consentimento prévio e específico.
                </p>

                <h3 className="text-xl font-medium mt-6 mb-3">5.5. Transferência internacional de dados:</h3>
                <p>
                  Alguns de nossos fornecedores estão localizados fora do Brasil. Quando transferimos seus dados pessoais para outros países, garantimos que eles recebam um nível adequado de proteção, através de cláusulas contratuais específicas e em conformidade com a legislação brasileira de proteção de dados.
                </p>
              </section>

              <Separator className="my-8" />

              <section id="direitos" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                  <FileLock className="h-6 w-6 text-green-500" />
                  6. Seus direitos
                </h2>
                <p>
                  De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem os seguintes direitos em relação aos seus dados pessoais:
                </p>

                <h3 className="text-xl font-medium mt-6 mb-3">6.1. Direitos do titular de dados:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Acesso:</strong> Você pode solicitar confirmação da existência de tratamento e acesso aos seus dados pessoais;</li>
                  <li><strong>Correção:</strong> Você pode corrigir dados incompletos, inexatos ou desatualizados;</li>
                  <li><strong>Anonimização, bloqueio ou eliminação:</strong> Você pode solicitar a anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a lei;</li>
                  <li><strong>Portabilidade:</strong> Você pode solicitar a portabilidade de seus dados para outro fornecedor de serviço;</li>
                  <li><strong>Eliminação:</strong> Você pode solicitar a eliminação dos dados pessoais tratados com seu consentimento;</li>
                  <li><strong>Informações sobre compartilhamento:</strong> Você pode solicitar informações sobre com quais entidades públicas e privadas compartilhamos seus dados;</li>
                  <li><strong>Revogação do consentimento:</strong> Você pode revogar o consentimento a qualquer momento;</li>
                  <li><strong>Revisão de decisões automatizadas:</strong> Você pode solicitar a revisão de decisões tomadas unicamente com base em tratamento automatizado de dados pessoais.</li>
                </ul>

                <h3 className="text-xl font-medium mt-6 mb-3">6.2. Como exercer seus direitos:</h3>
                <p>
                  Para exercer qualquer um destes direitos, entre em contato conosco através do e-mail <a href="mailto:privacidade@rodticket.com" className="text-primary hover:underline">privacidade@rodticket.com</a> ou através do formulário disponível em nossa <a href="/contato" className="text-primary hover:underline">página de contato</a>.
                </p>
                <p>
                  Responderemos à sua solicitação dentro de 15 dias. Em alguns casos, podemos precisar de informações adicionais para verificar sua identidade antes de processar sua solicitação.
                </p>

                <h3 className="text-xl font-medium mt-6 mb-3">6.3. Limitações:</h3>
                <p>
                  Em determinadas circunstâncias, podemos não ser capazes de atender completamente à sua solicitação, como quando:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>O cumprimento da solicitação prejudicaria a privacidade de outros usuários;</li>
                  <li>A solicitação viola uma obrigação legal ou ordem judicial;</li>
                  <li>A solicitação é manifestamente infundada ou excessiva;</li>
                  <li>Os dados são necessários para a execução de contrato;</li>
                  <li>Os dados são necessários para o cumprimento de obrigação legal.</li>
                </ul>
                <p>
                  Caso não possamos atender integralmente à sua solicitação, explicaremos as razões para essa decisão.
                </p>
              </section>

              <Separator className="my-8" />

              <section id="cookies" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                  <Bell className="h-6 w-6 text-violet-500" />
                  7. Cookies e tecnologias similares
                </h2>
                <p>
                  Utilizamos cookies e tecnologias semelhantes para melhorar sua experiência em nossa plataforma, entender como você a utiliza e personalizar nossos serviços.
                </p>

                <h3 className="text-xl font-medium mt-6 mb-3">7.1. O que são cookies:</h3>
                <p>
                  Cookies são pequenos arquivos de texto armazenados em seu dispositivo quando você visita um site. Eles são utilizados para lembrar suas preferências, entender como você interage com nosso serviço e melhorar sua experiência.
                </p>

                <h3 className="text-xl font-medium mt-6 mb-3">7.2. Tipos de cookies que utilizamos:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Cookies essenciais:</strong> Necessários para o funcionamento básico da plataforma, permitindo recursos como autenticação, segurança e memorização de suas preferências de sessão;</li>
                  <li><strong>Cookies analíticos:</strong> Utilizados para coletar informações sobre como os visitantes usam nosso site. Usamos essas informações para melhorar nossos serviços;</li>
                  <li><strong>Cookies de funcionalidade:</strong> Permitem que o site se lembre de escolhas que você faz para fornecer uma experiência mais personalizada;</li>
                  <li><strong>Cookies de marketing:</strong> Utilizados para rastrear visitantes entre sites para permitir a exibição de anúncios mais relevantes.</li>
                </ul>

                <h3 className="text-xl font-medium mt-6 mb-3">7.3. Outras tecnologias:</h3>
                <p>
                  Além de cookies, também podemos utilizar:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Web beacons:</strong> Pequenas imagens transparentes que nos ajudam a entender como você interage com nossos e-mails;</li>
                  <li><strong>Pixels de rastreamento:</strong> Tecnologias semelhantes que coletam informações sobre seu comportamento online;</li>
                  <li><strong>Armazenamento local:</strong> Como localStorage e sessionStorage para melhorar o desempenho do site.</li>
                </ul>

                <h3 className="text-xl font-medium mt-6 mb-3">7.4. Suas opções:</h3>
                <p>
                  Você pode gerenciar suas preferências de cookies através do banner que aparece quando você acessa nossa plataforma pela primeira vez. Além disso, a maioria dos navegadores permite que você controle cookies através de suas configurações. Para saber mais sobre como gerenciar cookies, visite a página de ajuda do seu navegador.
                </p>
                <p>
                  Lembre-se de que bloquear todos os cookies pode impactar o funcionamento adequado de algumas partes de nossa plataforma.
                </p>
              </section>

              <Separator className="my-8" />

              <section id="alteracoes" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                  <AlertTriangle className="h-6 w-6 text-rose-500" />
                  8. Alterações na política de privacidade
                </h2>
                <p>
                  Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas, em nossa plataforma ou por outros motivos operacionais, legais ou regulatórios.
                </p>
                <p>
                  Quando realizarmos alterações significativas, notificaremos você através de um aviso na plataforma ou por e-mail antes que as alterações entrem em vigor. Recomendamos que você revise esta política periodicamente para estar ciente de como protegemos suas informações.
                </p>
                <p>
                  A data da última atualização está sempre indicada no início desta política. O uso continuado de nossos serviços após a publicação de alterações constitui sua aceitação dessas alterações.
                </p>

                <h3 className="text-xl font-medium mt-6 mb-3">8.1. Contato:</h3>
                <p>
                  Se você tiver dúvidas, preocupações ou comentários sobre esta Política de Privacidade ou nossas práticas de tratamento de dados, entre em contato com nosso Encarregado de Proteção de Dados (DPO) através do e-mail <a href="mailto:dpo@rodticket.com" className="text-primary hover:underline">dpo@rodticket.com</a>.
                </p>
                <p className="mt-4">
                  RodTicket Tecnologia Ltda.<br />
                  CNPJ: XX.XXX.XXX/0001-XX<br />
                  Rua J. Piedade, 74A<br />
                  Centro, Maringá - PR, 87020-320
                </p>
              </section>
            </div>
          </div>
        </section>

        <Footer />
      </main>

      {/* Botão para rolar para o topo */}
      {showScrollButton && (
        <Button
          className="fixed bottom-6 right-6 bg-primary/90 hover:bg-primary shadow-md z-50 h-12 w-12 rounded-full"
          onClick={scrollToTop}
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="h-5 w-5 text-white" />
        </Button>
      )}
    </>
  );
};

export default Privacidade;