import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PRODUCT } from '../types';
import { trackBeginCheckout } from '../utils/analytics';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCheckout = () => {
    trackBeginCheckout('navbar');
    window.open(PRODUCT.paymentUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand wordmark as single clean text element */}
          <a
            href="#"
            className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 hover:text-indigo-600 transition-colors"
          >
            {PRODUCT.name}
          </a>

          {/* Zone 2: Concise single-line text nav links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#metodologia" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              Metodologia
            </a>
            <a href="#modulos" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              Módulos do Curso
            </a>
            <a href="#depoimentos" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              Depoimentos
            </a>
            <a href="#garantia" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              Garantia 7 Dias
            </a>
            <a href="#faq" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              Perguntas Frequentes
            </a>
          </nav>

          {/* Zone 3: Single primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleCheckout}
              className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-lg transition-colors shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Matricular por R$ {PRODUCT.price}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 rounded-lg"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 shadow-xl">
          <nav className="flex flex-col gap-4 text-base font-medium text-slate-700 mb-6">
            <a
              href="#metodologia"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-indigo-600 transition-colors"
            >
              Metodologia
            </a>
            <a
              href="#modulos"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-indigo-600 transition-colors"
            >
              Módulos do Curso
            </a>
            <a
              href="#depoimentos"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-indigo-600 transition-colors"
            >
              Depoimentos
            </a>
            <a
              href="#garantia"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-indigo-600 transition-colors"
            >
              Garantia 7 Dias
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-indigo-600 transition-colors"
            >
              Perguntas Frequentes
            </a>
          </nav>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              handleCheckout();
            }}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors cursor-pointer"
          >
            <span>Matricular por R$ {PRODUCT.price}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
}
