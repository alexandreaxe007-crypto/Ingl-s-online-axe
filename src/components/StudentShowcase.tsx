import { Smartphone, Laptop, Download, Headphones, Check } from 'lucide-react';
import { PRODUCT } from '../types';

export default function StudentShowcase() {
  const handleCheckout = () => {
    window.open(PRODUCT.paymentUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Image Showcase */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 group">
              <img
                src="/src/assets/images/ingles_estudo_pratico_1791570291239.jpg"
                alt="Estudando inglês online de forma prática e flexível"
                className="w-full h-full object-cover aspect-16/10 transition-transform duration-500 group-hover:scale-102"
              />
              {/* Floating feature pill */}
              <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg border border-slate-800 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Plataforma 100% Responsiva</span>
              </div>
            </div>
          </div>

          {/* Text and Benefits */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start">
            <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-2">
              Flexibilidade Absoluta
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug mb-6 text-balance">
              Estude no seu ritmo, quando e onde você quiser.
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              Chega de perder tempo no trânsito para chegar a uma escola física. Com o <strong>{PRODUCT.name}</strong>, você acessa as aulas e exercícios no seu smartphone, tablet ou computador, no conforto de casa ou durante seus deslocamentos.
            </p>

            {/* Checklist of learning features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <Laptop className="w-5 h-5 text-indigo-600 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Acesso Multiplataforma</h4>
                  <p className="text-xs text-slate-500">Computador, tablet ou celular sem travar.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <Download className="w-5 h-5 text-indigo-600 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Materiais em PDF</h4>
                  <p className="text-xs text-slate-500">Resumos visuais para revisão rápida.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <Headphones className="w-5 h-5 text-indigo-600 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Áudios Nativos</h4>
                  <p className="text-xs text-slate-500">Treinamento auditivo com falantes reais.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <Smartphone className="w-5 h-5 text-indigo-600 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Aulas Rápidas</h4>
                  <p className="text-xs text-slate-500">15 a 20 minutos focados em retenção.</p>
                </div>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              className="px-6 py-3.5 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-xl transition-all shadow-sm cursor-pointer"
            >
              Garantir Minha Vaga por R$ {PRODUCT.price}
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
