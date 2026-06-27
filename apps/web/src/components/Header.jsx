import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Programs', path: '/programs' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'How to Help', path: '/help' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex header-nav-area items-center justify-between">
          
          {/* Re-designed Prominent Logo Area */}
          <Link 
            to="/" 
            className="flex items-center gap-4 transition-transform duration-300 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xl"
            aria-label="Go to Home"
          >
            <img 
              src="https://horizons-cdn.hostinger.com/e981952e-6e26-4893-9aa9-b1dde5133395/266f65db5cf714454eac71688c85b8ec.png" 
              alt="Gokul Ashram Shala Logo" 
              className="brand-logo-img"
            />
            <div className="hidden sm:flex flex-col">
              <span className="brand-logo-text">
                Gokul <span className="brand-logo-accent">Ashram</span>
              </span>
              <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-muted-foreground uppercase mt-0.5">
                Shala
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-[15px] font-semibold rounded-lg transition-all duration-200 ${
                  isActive(link.path)
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-xl hover:bg-muted transition-all duration-200 ml-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile Navigation Area */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t animate-in slide-in-from-top-4 fade-in duration-200">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3.5 text-base font-semibold rounded-xl transition-all duration-200 ${
                    isActive(link.path)
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;