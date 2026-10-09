import { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Star, Sparkles, BookOpen, Clock, Award } from 'lucide-react';
import { PRODUCT } from '../types';
import AudioPreview from './AudioPreview';

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  const handleCheckout = () => {
    window.open(PRODUCT.paymentUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-200 bg-linear-to-b from-white via-slate-50 to-white">
      {/* Background radial accent glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-100/40 blur-3xl pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTA (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Clean unboxed metadata kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-indigo-700 mb-4">
              <span>{PRODUCT.category}</span>
              <span aria-hidden="true">·</span>
              <span>Metodologia Prática</span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-700">Acesso Imediato</span>
            </div>

            {/* Main Headline with balanced wrap */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-6 text-balance">
              Domine o inglês real para sua rotina e impulsione sua carreira.
            </h1>

            {/* Product description given by user */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mb-8">
              {PRODUCT.description}. Aprenda com situações reais de conversação, sem decoreba e no seu próprio ritmo.
            </p>

            {/* Price & Offer Highlight */}
            <div className="w-full sm:w-auto bg-white border border-slate-200 rounded-2xl p-5 mb-8 shadow-sm">
              <div className="flex flex-wrap items-baseline gap-3 mb-2">
                <span className="text-xs uppercase font-bold tracking-wider text-slate-500">
                  Oferta Especial
                </span>
                <span className="text-sm line-through text-slate-400">
                  De R$ 197,00
                </span>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  75% OFF
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-xs text-slate-500 font-medium">Por apenas</span>
                <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight tabular-nums">
                  R$ {PRODUCT.price}
                </span>
                <span className="text-xs text-slate-500">pagamento único</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <button
                onClick={handleCheckout}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer text-center"
              >
                <span>Quero Começar Agora — R$ {PRODUCT.price}</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#modulos"
                className="inline-flex items-center justify-center px-6 py-4 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl transition-colors cursor-pointer text-center"
              >
                Ver Conteúdo do Curso
              </a>
            </div>

            {/* Trust points */}
            <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-slate-600 font-medium pt-2">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Garantia de 7 dias com reembolso total</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                <span>Pagamento seguro via Stripe</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span>4.9/5 estrelas de satisfação</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Impact Visual Asset & Audio Interactive Preview (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            
            {/* Visual Frame */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl">
              
              {/* Product Badge Header */}
              <div className="bg-slate-900 text-white px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-indigo-400" />
                  <span className="text-xs font-semibold tracking-wide">
                    {PRODUCT.name}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-xs text-emerald-400 font-mono">
                  <span>Vagas Abertas</span>
                </div>
              </div>

              {/* Main Image with fallback */}
              <div className="relative aspect-4/3 bg-slate-100 overflow-hidden">
                {!imageError ? (
                  <img
                    src={PRODUCT.imageUrl}
                    alt={PRODUCT.name}
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-linear-to-br from-indigo-900 via-slate-900 to-slate-950 flex flex-col items-center justify-center p-6 text-center text-white">
                    <BookOpen className="w-12 h-12 text-indigo-400 mb-3" />
                    <h3 className="text-lg font-bold mb-1">{PRODUCT.name}</h3>
                    <p className="text-xs text-slate-300 max-w-xs">{PRODUCT.description}</p>
                  </div>
                )}

                {/* Floating metric indicator inside card */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm rounded-xl p-3 border border-slate-200/80 shadow-md flex items-center justify-between text-xs">
                  <div>
                    <span className="block text-slate-500 text-[11px]">Metodologia</span>
                    <span className="font-bold text-slate-900">Conversação & Prática</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-slate-500 text-[11px]">Investimento</span>
                    <span className="font-extrabold text-indigo-600 tabular-nums">R$ {PRODUCT.price}</span>
                  </div>
                </div>
              </div>

              {/* Quick specs strip */}
              <div className="grid grid-cols-3 divide-x divide-slate-100 bg-slate-50 border-t border-slate-200 py-3 text-center text-xs">
                <div>
                  <span className="block font-bold text-slate-900 tabular-nums">+70</span>
                  <span className="text-slate-500 text-[11px]">Vídeo-aulas</span>
                </div>
                <div>
                  <span className="block font-bold text-slate-900 tabular-nums">100%</span>
                  <span className="text-slate-500 text-[11px]">Online & Móvel</span>
                </div>
                <div>
                  <span className="block font-bold text-slate-900">Certificado</span>
                  <span className="text-slate-500 text-[11px]">Incluso</span>
                </div>
              </div>
            </div>

            {/* Interactive Audio Pronunciation Preview */}
            <AudioPreview />

          </div>

        </div>
      </div>
    </section>
  );
}
