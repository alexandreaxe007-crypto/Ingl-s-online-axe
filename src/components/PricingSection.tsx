import { Check, ShieldCheck, Lock, Zap, ArrowRight, Star } from 'lucide-react';
import { PRODUCT } from '../types';
import { trackBeginCheckout } from '../utils/analytics';

export default function PricingSection() {
  const handleCheckout = () => {
    trackBeginCheckout('pricing_card');
    window.open(PRODUCT.paymentUrl, '_blank', 'noopener,noreferrer');
  };

  const benefits = [
    "Acesso completo ao curso Inglês online-Axe",
    "Mais de 70 aulas práticas em vídeo com metodologia direta",
    "Módulos para Dia a Dia, Viagens e Business English",
    "Exercícios de fonética guiada e destrave de pronúncia",
    "Material de apoio em PDF para download",
    "Bônus: Guia de Entrevistas de Emprego em Inglês",
    "Certificado oficial de conclusão incluso",
    "Acesso liberado no celular, tablet e computador",
    "Garantia incondicional de 7 dias com devolução total"
  ];

  return (
    <section id="preco" className="py-20 bg-linear-to-b from-white via-indigo-50/30 to-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-2">
            Investimento Acessível · Sem Mensalidades
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
            Comece hoje mesmo a falar inglês com segurança
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            {PRODUCT.description}.
          </p>
        </div>

        {/* Master Pricing Card */}
        <div className="relative bg-white rounded-3xl border-2 border-indigo-600 shadow-2xl p-6 sm:p-12 overflow-hidden">
          
          {/* Top highlight ribbon */}
          <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-6 py-1.5 rounded-bl-xl tracking-wider uppercase">
            Oferta Promocional
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info (7 cols) */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md">
                  {PRODUCT.category}
                </span>
                <span className="text-xs text-slate-500">· Vagas limitadas no valor promocional</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
                {PRODUCT.name}
              </h3>
              
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Acesso imediato à plataforma de estudos para você desenvolver fluência no trabalho e na vida pessoal sem mensalidades recorrentes.
              </p>

              {/* Benefits Checklist */}
              <div className="space-y-3 mb-6">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-3" />
                    </div>
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Checkout Box (5 cols) */}
            <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 flex flex-col justify-between">
              
              <div>
                <div className="text-center pb-6 border-b border-slate-200">
                  <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block mb-1">
                    De R$ 197,00 por apenas
                  </span>
                  
                  <div className="flex items-baseline justify-center gap-1.5 my-2">
                    <span className="text-lg font-bold text-slate-700">R$</span>
                    <span className="text-5xl sm:text-6xl font-black text-slate-900 tracking-tight tabular-nums">
                      {PRODUCT.price}
                    </span>
                  </div>

                  <span className="inline-block text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-full">
                    Pagamento Único · Sem Mensalidade
                  </span>
                </div>

                {/* Features list */}
                <div className="py-5 space-y-2.5 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>Liberação imediata no seu e-mail</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>Ambiente de pagamento seguro Stripe</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Garantia total de 7 dias ou seu dinheiro de volta</span>
                  </div>
                </div>
              </div>

              {/* Stripe Checkout Button */}
              <div>
                <button
                  onClick={handleCheckout}
                  className="w-full py-4 px-6 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-extrabold text-base rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Matricular Agora</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <p className="text-[11px] text-center text-slate-400 mt-3 flex items-center justify-center gap-1.5">
                  <Lock className="w-3 h-3" />
                  <span>Transação criptografada de 256 bits via Stripe</span>
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
