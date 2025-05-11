const fs = require('fs');
const path = require('path');
const prettier = require('prettier');

// URL base do site
const SITE_URL = 'https://rodticket.com';

// Data atual formatada para o lastmod
const today = new Date().toISOString().split('T')[0] + 'T10:00:00+00:00';

// Lista de rotas estáticas
const STATIC_ROUTES = [
  { url: '/', priority: '1.00', changefreq: 'weekly' },
  { url: '/funcionalidades', priority: '0.90', changefreq: 'monthly' },
  { url: '/precos', priority: '0.90', changefreq: 'monthly' },
  { url: '/agendamento', priority: '0.80', changefreq: 'monthly' },
  { url: '/contato', priority: '0.80', changefreq: 'monthly' },
 /* { url: '/blog', priority: '0.80', changefreq: 'weekly' },*/
 /* { url: '/documentacao', priority: '0.70', changefreq: 'monthly' },*/
  { url: '/tutoriais', priority: '0.70', changefreq: 'monthly' },
 /* { url: '/status', priority: '0.60', changefreq: 'daily' },*/
  { url: '/changelog', priority: '0.60', changefreq: 'monthly' },
  { url: '/termos', priority: '0.50', changefreq: 'yearly' },
  { url: '/privacidade', priority: '0.50', changefreq: 'yearly' }
];

// Função para buscar posts do blog (mock - idealmente seria integrada com seu CMS ou BD)
async function getBlogPosts() {
  // Aqui você poderia buscar posts do seu CMS ou banco de dados
  // Retornando um mock por enquanto
  return [
    { slug: 'como-melhorar-atendimento-whatsapp', lastmod: today },
    { slug: 'inteligencia-artificial-no-atendimento', lastmod: today },
    { slug: 'automatize-respostas-whatsapp', lastmod: today },
    { slug: 'metricas-importantes-atendimento', lastmod: today }
  ];
}

// Gera o conteúdo do sitemap
async function generateSitemap() {
  try {
    // Buscar posts do blog

    // Criar URLs para rotas estáticas
    const staticPages = STATIC_ROUTES.map((route) => `
      <url>
        <loc>${SITE_URL}${route.url}</loc>
        <lastmod>${today}</lastmod>
        <priority>${route.priority}</priority>
        <changefreq>${route.changefreq}</changefreq>
      </url>
    `);
    

    // Combinar todas as rotas
    const allPages = [...staticPages].join('');
    
    // Criar XML completo
    const sitemap = `
      <?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
              xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
              xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
              http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
        ${allPages}
      </urlset>
    `;
    
    // Formatar o XML para melhor legibilidade (opcional)
    const formattedSitemap = await prettier.format(sitemap, {
      parser: 'html',
      printWidth: 120
    });
    
    // Escrever o arquivo
    const outputPath = path.join(__dirname, '../public/sitemap.xml');
    fs.writeFileSync(outputPath, formattedSitemap);
    
    console.log(`✅ Sitemap gerado com sucesso em ${outputPath}`);
  } catch (error) {
    console.error('❌ Erro ao gerar sitemap:', error);
  }
}

// Executar a função
generateSitemap();