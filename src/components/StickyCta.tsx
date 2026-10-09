import { useState, useEffect } from 'react';
import { ArrowUpRight, Zap } from 'lucide-react';
import { PRODUCT } from '../types';
import { trackBeginCheckout } from '../utils/analytics';

export default function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 480) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCheckout = () => {
    trackBeginCheckout('sticky_cta');
    window.open(PRODUCT.paymentUrl, '_blank', 'noopener,noreferrer');
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-xl px-4 py-2.5 sm:py-3 transition-transform duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Left Info: Product & Price */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-200 items-center justify-center text-indigo-600">
            <Zap className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs sm:text-sm font-bold text-slate-900 leading-tight truncate max-w-[180px] sm:max-w-none">
              {PRODUCT.name}
            </div>
            <div className="text-[11px] sm:text-xs text-slate-500 flex items-center gap-1.5">
              <span>Oferta por apenas</span>
              <strong className="text-indigo-600 font-extrabold tabular-nums">
                R$ {PRODUCT.price}
              </strong>
            </div>
          </div>
        </div>

        {/* Right CTA Button */}
        <button
          onClick={handleCheckout}
          className="inline-flex items-center gap-1.5 px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-lg transition-colors shadow-xs whitespace-nowrap cursor-pointer shrink-0"
        >
          <span>Garantir Vaga</span>
          <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>

      </div>
    </div>
  );
}
