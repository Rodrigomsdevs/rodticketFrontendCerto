import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
  structuredData?: Record<string, any>;
}

const SEO = ({
  title,
  description = "Transforme suas conversas do WhatsApp em oportunidades de negócio com chatbots inteligentes, automações e insights avançados.",
  canonical = window.location.href,
  ogImage = "https://rodticket.com/images/rodticket-og-image.png",
  ogType = "website",
  keywords = "rodticket, whatsapp, atendimento, chatbot, automação, tickets, leads, vendas, crm, chat",
  structuredData
}: SEOProps) => {
  // Garantir que a URL canônica seja sempre para o domínio principal
  const canonicalUrl = canonical.replace(/^https?:\/\/(www\.)?/, 'https://');
  const siteUrl = 'https://rodticket.com';
  const fullCanonical = canonicalUrl.startsWith('http') ? canonicalUrl : `${siteUrl}${canonicalUrl}`;
  
  const siteTitle = "RodTicket - Plataforma de Atendimento via WhatsApp";
  const fullTitle = title === "Home" ? siteTitle : `${title} | RodTicket`;
  
  return (
    <Helmet>
      {/* Básico */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonical} />
      
      {/* Segurança e Cache */}
      <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' https://www.googletagmanager.com https://www.google-analytics.com 'unsafe-inline'; style-src 'self' https://fonts.googleapis.com 'unsafe-inline'; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://www.google-analytics.com; connect-src 'self' https://www.google-analytics.com;" />
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Strict-Transport-Security" content="max-age=31536000; includeSubDomains; preload" />
      
      {/* Cache control - aumentar performance */}
      <meta httpEquiv="Cache-Control" content="public, max-age=31536000" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`} />
      <meta property="og:site_name" content="RodTicket" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`} />
      
      {/* Mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="theme-color" content="#25D366" />
      
      {/* Dados estruturados para SEO - Schema.org */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Favicon links */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
    </Helmet>
  );
};

export default SEO;