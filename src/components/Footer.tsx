import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, ArrowRight, MapPin, Phone, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-12 pb-6">
      <div className="container-custom px-4 md:px-6">
        {/* Main Footer Content - mais clean e organizado */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Column 1 - About */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <img src="/logo-rodticket.svg" alt="RodTicket" className="h-7" />
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Plataforma completa para integração e gerenciamento de comunicação via WhatsApp.
            </p>
            <div className="flex space-x-3">
              <a href="https://facebook.com/rodticket" className="text-gray-500 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={16} />
              </a>
              <a href="https://twitter.com/rodticket" className="text-gray-500 hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={16} />
              </a>
              <a href="https://instagram.com/rodticket" className="text-gray-500 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="https://linkedin.com/company/rodticket" className="text-gray-500 hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Column 2 - Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-600 hover:text-primary transition-colors">Início</Link></li>
              <li><Link to="/funcionalidades" className="text-gray-600 hover:text-primary transition-colors">Funcionalidades</Link></li>
              <li><Link to="/precos" className="text-gray-600 hover:text-primary transition-colors">Preços</Link></li>
              <li><Link to="/agendamento" className="text-gray-600 hover:text-primary transition-colors">Agendamento</Link></li>
            </ul>
          </div>

          {/* Column 3 - Resources */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Recursos</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contato" className="text-gray-600 hover:text-primary transition-colors">Central de Ajuda</Link></li>
              <li><Link to="/tutoriais" className="text-gray-600 hover:text-primary transition-colors">Tutoriais</Link></li>
              <li><Link to="/changelog" className="text-gray-600 hover:text-primary transition-colors">Novidades</Link></li>
            </ul>
          </div>

          {/* Column 4 - Contact with Newsletter */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Contato</h4>
            
            {/* Newsletter - versão super clean */}
            <div className="mb-4">
              <p className="text-xs text-gray-500 mb-2">Receba atualizações e novidades</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="bg-white border border-gray-200 rounded-l-md px-3 py-1.5 text-xs w-full focus:outline-none focus:ring-1 focus:ring-primary"
                  aria-label="Seu endereço de e-mail"
                />
                <Button type="submit" size="sm" className="bg-primary hover:bg-primary-600 text-white rounded-l-none py-1 h-auto">
                  <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </form>
            </div>
            
            {/* Contact info */}
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <MapPin size={14} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Rua J. Piedade, 74A<br />Centro, Maringá - PR</span>
              </li>
              <li className="flex items-center">
                <Phone size={14} className="text-primary mr-2 flex-shrink-0" />
                <a href="tel:+5511431425856" className="text-gray-600 hover:text-primary transition-colors">
                  (44) 3142-5856
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={14} className="text-primary mr-2 flex-shrink-0" />
                <a href="mailto:contato@rodticket.com" className="text-gray-600 hover:text-primary transition-colors">
                  contato@rodticket.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - simplificado */}
        <div className="pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-xs mb-4 md:mb-0">
            &copy; {currentYear} RodTicket. Todos os direitos reservados.
          </div>
          <div className="flex flex-wrap gap-4 text-xs">
            <Link to="/termos" className="text-gray-500 hover:text-primary transition-colors">Termos de Uso</Link>
            <Link to="/privacidade" className="text-gray-500 hover:text-primary transition-colors">Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;