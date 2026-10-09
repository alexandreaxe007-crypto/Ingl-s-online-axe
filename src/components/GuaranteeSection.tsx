import { ShieldCheck, ArrowRight } from 'lucide-react';
import { PRODUCT } from '../types';
import { trackBeginCheckout } from '../utils/analytics';

export default function GuaranteeSection() {
  const handleCheckout = () => {
    trackBeginCheckout('guarantee_section');
    window.open(PRODUCT.paymentUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="garantia" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center gap-8">
          
          {/* Shield Badge */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-indigo-50 border-2 border-indigo-200 flex flex-col items-center justify-center text-indigo-700 shrink-0">
            <ShieldCheck className="w-12 h-12 stroke-[1.5]" />
            <span className="text-[11px] font-extrabold uppercase tracking-wider mt-1">7 Dias</span>
          </div>

          {/* Copy & Assurance */}
          <div className="flex-1 text-center md:text-left">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1">
              Risco Zero · Satisfação Garantida
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Garantia Incondicional de 7 Dias
            </h3>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
              Experimente as aulas, assista aos módulos de conversação e aplique o método no seu dia a dia. Se você não notar evolução na sua compreensão ou não gostar da didática por qualquer razão, devolvemos 100% do valor pago.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={handleCheckout}
                className="w-full sm:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Testar por 7 Dias sem Risco</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <span className="text-xs text-slate-500">
                Sem burocracia ou perguntas chatas.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
