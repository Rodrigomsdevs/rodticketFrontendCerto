import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Cookie from "./components/Cookie";
import InstallPWA from "./components/InstallPWA";
import Index from "./pages/Index";
import Funcionalidades from "./pages/Funcionalidades";
import Agendamento from "./pages/Agendamento";
import Precos from "./pages/Precos";
import Contato from "./pages/Contato";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import SystemStatus from "./pages/SystemStatus";
import Changelog from "./pages/Changelog";
import Tutoriais from "./pages/Tutoriais";
import Documentacao from "./pages/Documentacao";
import BlogIndex from "./pages/blog/Index";
import BlogPost from "./pages/blog/Post";
import Termos from "./pages/Termos";
import Privacidade from "./pages/Privacidade";
import { useEffect } from "react";
import ReactGA from "react-ga4";

// Inicializar Google Analytics
ReactGA.initialize("G-XXXXXXXXXX"); // Substitua pelo ID real do GA4

// Componente para rastreamento de páginas
const RouteTracker = () => {
  useEffect(() => {
    // Envia visualização de página quando a rota muda
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, [window.location.pathname]);
  
  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange={false}
      >
        <HelmetProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <RouteTracker />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/funcionalidades" element={<Funcionalidades />} />
              <Route path="/agendamento" element={<Agendamento />} />
              <Route path="/precos" element={<Precos />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/status" element={<SystemStatus />} />
              <Route path="/changelog" element={<Changelog />} />
              <Route path="/tutoriais" element={<Tutoriais />} />
              <Route path="/documentacao" element={<Documentacao />} />
              <Route path="/termos" element={<Termos />} />
              <Route path="/privacidade" element={<Privacidade />} />
              {/* Rotas do Blog */}
              <Route path="/blog" element={<BlogIndex />} />
              <Route path="/blog/post/:slug" element={<BlogPost />} />
              {/* <Route path="/login" element={<Login />} />*/}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Cookie />
            <InstallPWA />
          </BrowserRouter>
        </HelmetProvider>
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
