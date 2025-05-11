import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Separator } from '@/components/ui/separator';
import { ArrowUp } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import { Button } from '@/components/ui/button';

const Termos = () => {
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
    "name": "Termos de Uso | RodTicket",
    "description": "Termos e condições de uso da plataforma RodTicket. Leia nossos termos para entender seus direitos e responsabilidades ao utilizar nossa plataforma de atendimento via WhatsApp.",
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

  return (
    <>
      <SEO
        title="Termos de Uso | RodTicket"
        description="Termos e condições de uso da plataforma RodTicket. Leia nossos termos para entender seus direitos e responsabilidades ao utilizar nossa plataforma de atendimento via WhatsApp."
        keywords="termos de uso, termos e condições, política de uso, rodticket, whatsapp business, atendimento, lgpd"
        structuredData={structuredData}
      />

      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Navbar />

        <section className="py-12 md:py-16 px-4">
          <div className="container-custom max-w-4xl mx-auto">
            <h1 className="font-bold text-3xl md:text-4xl mb-6 text-center">Termos de Uso</h1>
            <p className="text-gray-600 mb-8 text-center">
              Última atualização: 08 de Maio de 2025
            </p>

            {/* Índice dos termos */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
              <h2 className="font-semibold text-xl mb-4">Índice</h2>
              <ul className="space-y-2">
                {[
                  { id: "introducao", title: "1. Introdução" },
                  { id: "definicoes", title: "2. Definições" },
                  { id: "cadastro", title: "3. Cadastro e Conta" },
                  { id: "servicos", title: "4. Descrição dos Serviços" },
                  { id: "obrigacoes", title: "5. Obrigações do Usuário" },
                  { id: "propriedade", title: "6. Propriedade Intelectual" },
                  { id: "pagamentos", title: "7. Pagamentos e Planos" },
                  { id: "prazo", title: "8. Prazo e Rescisão" },
                  { id: "garantias", title: "9. Garantias e Limitações" },
                  { id: "privacidade", title: "10. Privacidade e Dados" },
                  { id: "modificacoes", title: "11. Modificações dos Termos" },
                  { id: "disposicoes", title: "12. Disposições Gerais" }
                ].map((item) => (
                  <li key={item.id}>
                    <ScrollLink
                      to={item.id}
                      smooth={true}
                      duration={500}
                      offset={-100}
                      className="text-primary hover:underline cursor-pointer"
                    >
                      {item.title}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Conteúdo dos termos de uso */}
            <div className="prose prose-lg max-w-none">
              <section id="introducao" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold mb-4">1. Introdução</h2>
                <p>
                  Este documento ("Termos") estabelece as condições gerais aplicáveis ao uso da plataforma RodTicket, acessível pelo site rodticket.com e aplicativos relacionados.
                  Ao acessar, cadastrar-se ou utilizar nossos serviços, você concorda com estes Termos de Uso e com nossa Política de Privacidade.
                </p>
                <p>
                  Se você não concorda com estes termos, por favor, não utilize nossos serviços. O uso continuado da plataforma após a publicação de quaisquer alterações constitui sua aceitação dessas alterações.
                </p>
              </section>

              <Separator className="my-8" />

              <section id="definicoes" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold mb-4">2. Definições</h2>
                <p>
                  Para os fins destes Termos de Uso, consideram-se:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>RodTicket:</strong> Plataforma de atendimento e gestão de comunicação via WhatsApp Business API;</li>
                  <li><strong>Usuário:</strong> Pessoa física ou jurídica que acessa ou utiliza os serviços da plataforma;</li>
                  <li><strong>Conta:</strong> Credencial de acesso pessoal e intransferível que permite o uso da plataforma;</li>
                  <li><strong>Serviços:</strong> Conjunto de funcionalidades oferecidas pela plataforma RodTicket;</li>
                  <li><strong>Conteúdo:</strong> Textos, imagens, áudios, vídeos e demais materiais inseridos na plataforma pelo Usuário;</li>
                  <li><strong>WhatsApp Business API:</strong> Interface de Programação de Aplicações do WhatsApp Business, gerenciada pela Meta Platforms, Inc.</li>
                </ul>
              </section>

              <Separator className="my-8" />

              <section id="cadastro" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold mb-4">3. Cadastro e Conta</h2>
                <p>
                  Para utilizar os serviços do RodTicket, é necessário criar uma conta fornecendo informações precisas e completas. Você é responsável por manter a confidencialidade de sua senha e por todas as atividades que ocorrem em sua conta.
                </p>
                <p>
                  O RodTicket reserva-se o direito de recusar, suspender ou cancelar contas que violem estes Termos, a legislação aplicável ou as políticas da Meta Platforms relacionadas ao WhatsApp Business.
                </p>
                <p>
                  Você concorda em notificar imediatamente o RodTicket sobre qualquer uso não autorizado de sua conta ou qualquer outra violação de segurança.
                </p>
              </section>

              <Separator className="my-8" />

              <section id="servicos" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold mb-4">4. Descrição dos Serviços</h2>
                <p>
                  O RodTicket oferece uma plataforma para gestão de atendimento via WhatsApp, que pode incluir as seguintes funcionalidades:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Gestão centralizada de atendentes e comunicações;</li>
                  <li>Criação e gerenciamento de setores de atendimento;</li>
                  <li>Sistema de tickets para organização de atendimentos;</li>
                  <li>Chatbots e automação de mensagens;</li>
                  <li>Relatórios e análise de dados de atendimento;</li>
                  <li>Agendamento integrado via WhatsApp;</li>
                  <li>Integração com sistemas externos através de API;</li>
                  <li>Outras funcionalidades conforme disponibilizadas na plataforma.</li>
                </ul>
                <p>
                  O RodTicket se reserva o direito de adicionar, modificar ou remover funcionalidades a qualquer momento, mediante aviso prévio quando aplicável.
                </p>
              </section>

              <Separator className="my-8" />

              <section id="obrigacoes" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold mb-4">5. Obrigações do Usuário</h2>
                <p>
                  Ao usar nossa plataforma, você concorda em:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Cumprir todas as leis aplicáveis, incluindo a Lei Geral de Proteção de Dados (LGPD);</li>
                  <li>Respeitar os termos e políticas do WhatsApp Business para uso de sua API;</li>
                  <li>Não enviar mensagens indesejadas (spam) ou conteúdo abusivo;</li>
                  <li>Não utilizar a plataforma para fins ilegais, fraudulentos ou não autorizados;</li>
                  <li>Manter a segurança de suas credenciais de acesso;</li>
                  <li>Não tentar acessar, modificar ou interferir em áreas restritas da plataforma;</li>
                  <li>Não realizar engenharia reversa ou descompilar qualquer parte do software;</li>
                  <li>Obter consentimento válido dos destinatários antes de enviar mensagens comerciais.</li>
                </ul>
              </section>

              <Separator className="my-8" />

              <section id="propriedade" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold mb-4">6. Propriedade Intelectual</h2>
                <p>
                  A plataforma RodTicket, incluindo seu código-fonte, design, logos, marcas, textos e demais elementos, são protegidos por direitos de propriedade intelectual pertencentes ao RodTicket ou licenciados a ele.
                </p>
                <p>
                  O Usuário mantém a propriedade sobre o conteúdo que inserir na plataforma, concedendo ao RodTicket uma licença não exclusiva, global, gratuita e sublicenciável para usar, reproduzir, adaptar e processar tal conteúdo, na medida necessária para fornecer os serviços.
                </p>
                <p>
                  É proibida a cópia, modificação, distribuição, venda ou engenharia reversa da plataforma sem autorização expressa do RodTicket.
                </p>
              </section>

              <Separator className="my-8" />

              <section id="pagamentos" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold mb-4">7. Pagamentos e Planos</h2>
                <p>
                  O RodTicket oferece diferentes planos de assinatura com funcionalidades e limites específicos. Os valores, formas de pagamento e condições estão disponíveis na página de preços em nosso site.
                </p>
                <p>
                  O pagamento é realizado mediante assinatura recorrente, de acordo com a periodicidade escolhida pelo Usuário. Cancelamentos devem ser solicitados com pelo menos 7 dias de antecedência ao próximo ciclo de faturamento.
                </p>
                <p>
                  O RodTicket reserva-se o direito de alterar os preços e características dos planos, mediante notificação prévia de 30 dias.
                </p>
              </section>

              <Separator className="my-8" />

              <section id="prazo" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold mb-4">8. Prazo e Rescisão</h2>
                <p>
                  Estes Termos permanecerão em vigor enquanto você utilizar a plataforma RodTicket. O Usuário pode encerrar sua conta a qualquer momento, enviando solicitação por escrito para nosso suporte.
                </p>
                <p>
                  O RodTicket pode suspender ou encerrar sua conta por violação destes Termos, uso inadequado da plataforma, falta de pagamento, ou por determinação legal.
                </p>
                <p>
                  Após o encerramento, o RodTicket pode manter dados do Usuário pelo período legal exigido, conforme nossa Política de Privacidade.
                </p>
              </section>

              <Separator className="my-8" />

              <section id="garantias" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold mb-4">9. Garantias e Limitações</h2>
                <p>
                  A plataforma RodTicket é fornecida "no estado em que se encontra", sem garantias de qualquer tipo, expressas ou implícitas.
                </p>
                <p>
                  O RodTicket não garante que a plataforma será ininterrupta, segura ou livre de erros. Não podemos garantir resultados específicos do uso da plataforma.
                </p>
                <p>
                  Em nenhuma circunstância o RodTicket será responsável por danos indiretos, incidentais, especiais ou consequenciais resultantes do uso ou incapacidade de uso da plataforma.
                </p>
                <p>
                  A responsabilidade total do RodTicket por quaisquer reclamações relacionadas a estes Termos não excederá o valor pago pelo Usuário nos últimos 12 meses.
                </p>
              </section>

              <Separator className="my-8" />

              <section id="privacidade" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold mb-4">10. Privacidade e Dados</h2>
                <p>
                  O RodTicket trata os dados pessoais de acordo com sua Política de Privacidade, em conformidade com a Lei Geral de Proteção de Dados (LGPD) e demais legislações aplicáveis.
                </p>
                <p>
                  Ao utilizar nossa plataforma, o Usuário reconhece que é o controlador dos dados pessoais de seus clientes e responsável por obter o consentimento adequado para o tratamento desses dados.
                </p>
                <p>
                  O RodTicket atua como operador desses dados, comprometendo-se a implementar medidas técnicas e administrativas para sua proteção.
                </p>
                <p>
                  Para mais detalhes sobre coleta, uso, armazenamento e compartilhamento de dados, consulte nossa <a href="/privacidade" className="text-primary hover:underline">Política de Privacidade</a>.
                </p>
              </section>

              <Separator className="my-8" />

              <section id="modificacoes" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold mb-4">11. Modificações dos Termos</h2>
                <p>
                  O RodTicket reserva-se o direito de modificar estes Termos a qualquer momento, publicando a versão atualizada em seu site e notificando os Usuários por e-mail ou pela plataforma.
                </p>
                <p>
                  As alterações entrarão em vigor após 30 dias da publicação, exceto quando exigido por lei ou relacionadas a novas funcionalidades.
                </p>
                <p>
                  O uso continuado da plataforma após a entrada em vigor das alterações constitui aceitação dos novos Termos.
                </p>
              </section>

              <Separator className="my-8" />

              <section id="disposicoes" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold mb-4">12. Disposições Gerais</h2>
                <p>
                  Estes Termos constituem o acordo completo entre você e o RodTicket e substituem todos os acordos anteriores relacionados ao objeto destes Termos.
                </p>
                <p>
                  Se qualquer disposição destes Termos for considerada inválida ou inexequível, as demais disposições permanecerão em pleno vigor e efeito.
                </p>
                <p>
                  A falha do RodTicket em fazer valer qualquer direito ou disposição destes Termos não constituirá renúncia a tal direito ou disposição.
                </p>
                <p>
                  Estes Termos são regidos pelas leis da República Federativa do Brasil. Quaisquer disputas serão submetidas ao foro da comarca de Maringá/PR, com exclusão de qualquer outro.
                </p>
                <p className="mt-8">
                  Em caso de dúvidas sobre estes Termos, entre em contato pelo e-mail <a href="mailto:contato@rodticket.com" className="text-primary hover:underline">contato@rodticket.com</a> ou pelo telefone (44) 3142-5856.
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

export default Termos;