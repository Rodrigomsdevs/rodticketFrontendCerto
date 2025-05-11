import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';

// Navbar component with mobile responsiveness and PWA optimizations
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Effect to handle scroll events with performance optimization
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    // Use passive listener for better performance on touch devices
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // After mounting, we can safely show the theme toggle
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Use Safe Area insets for better PWA support on notched devices
  const navbarClasses = cn(
    'fixed top-0 left-0 right-0 w-full transition-all duration-300 z-40 h-16 md:h-20 px-4 md:px-6',
    {
      'bg-white/95 dark:bg-[#054640]/95 backdrop-blur-md shadow-sm': scrolled,
      'bg-transparent': !scrolled
    }
  );

  return (
    <header>
      <nav className={navbarClasses}>
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
          {/* Logo - optimized for touch */}
          <Link to="/" className="flex items-center h-full">
            <span className="text-xl md:text-2xl font-bold text-primary select-none dark:text-[#25D366]">
              Rod<span className="text-teal-dark dark:text-[#06625f]">Ticket</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 h-full">
            <NavLinks scrolled={scrolled} />
            <div className="flex items-center space-x-4">
              {/* Theme toggle button */}
              {mounted && (
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={toggleTheme}
                  aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                  className="h-9 w-9"
                >
                  {theme === 'dark' ? (
                    <Sun className="h-4 w-4 text-yellow-300" />
                  ) : (
                    <Moon className="h-4 w-4" />
                  )}
                </Button>
              )}
              <Button variant="outline" className="font-medium h-9 dark:border-[#aaaaaa] dark:text-[#bbbbbb]">
                <Link to="/login" className="flex h-full items-center">Login</Link>
              </Button>
              <Button className="bg-primary hover:bg-primary/90 dark:bg-[#005d4b] dark:hover:bg-[#054640] h-9">
                <Link to="/precos" className="text-white flex h-full items-center">Experimente Grátis</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button - enlarged touch target */}
          <div className="md:hidden flex items-center gap-2">
            {/* Theme toggle button for mobile */}
            {mounted && (
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                className="h-8 w-8"
              >
                {theme === 'dark' ? (
                  <Sun className="h-4 w-4 text-yellow-300" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>
            )}
            <button
              className="p-2 text-gray-500 dark:text-[#bbbbbb] hover:text-primary dark:hover:text-[#25D366] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - with smooth animation */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 z-40 bg-black/25 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        >
          <div 
            className="absolute right-0 top-0 h-full w-[75%] max-w-sm bg-white dark:bg-[#054640] shadow-xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex flex-col h-full">
              <div className="p-4 border-b border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-primary dark:text-[#25D366]">Rod<span className="text-teal-dark dark:text-[#06625f]">Ticket</span></span>
                  <button
                    className="p-2 text-gray-500 dark:text-[#bbbbbb] hover:text-primary dark:hover:text-[#25D366]"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Fechar menu"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto p-4">
                <MobileNavLinks closeMenu={() => setIsMenuOpen(false)} />
              </div>
              <div className="p-4 border-t border-gray-100 dark:border-gray-700">
                <div className="flex flex-col space-y-3">
                  <Link to="https://app.rodticket.com/login" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="outline" className="font-medium w-full dark:border-[#aaaaaa] dark:text-[#bbbbbb]">Entrar</Button>
                  </Link>
                  <Link to="https://app.rodticket.com/signup" onClick={() => setIsMenuOpen(false)}>
                    <Button className="bg-primary hover:bg-primary/90 dark:bg-[#005d4b] dark:hover:bg-[#054640] w-full">Experimente Grátis</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Spacer to prevent content from being hidden under fixed navbar */}
      <div className="h-16 md:h-20" aria-hidden="true"></div>
    </header>
  );
};

// Navigation links component with improved accessibility
const NavLinks = ({ scrolled }: { scrolled?: boolean }) => {
  // Adjusted for better contrast and accessibility
  const linkClasses = cn(
    "relative py-1 text-base font-medium transition-colors", 
    "hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
    {
      "text-gray-800 dark:text-[#bbbbbb]": scrolled,
      "text-gray-700 dark:text-[#aaaaaa]": !scrolled
    }
  );

  // Links with active indicator
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/funcionalidades", label: "Funcionalidades" },
    { to: "/agendamento", label: "Agendamento" },
    { to: "/precos", label: "Preços" },
    { to: "/contato", label: "Contato" },
  ];

  return (
    <>
      {navItems.map((item) => (
        <Link key={item.to} to={item.to} className={linkClasses}>
          {item.label}
        </Link>
      ))}
    </>
  );
};

// Mobile navigation links component with improved touch targets
const MobileNavLinks = ({ closeMenu }: { closeMenu: () => void }) => {
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/funcionalidades", label: "Funcionalidades" },
    { to: "/agendamento", label: "Agendamento" },
    { to: "/precos", label: "Preços" },
    { to: "/contato", label: "Contato" },
  ];

  return (
    <div className="space-y-1">
      {navItems.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className="block py-3 px-2 text-gray-700 dark:text-[#bbbbbb] hover:bg-gray-50 dark:hover:bg-[#06625f]/30 hover:text-primary dark:hover:text-[#25D366] rounded-md font-medium transition-colors"
          onClick={closeMenu}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
