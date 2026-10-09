import { MessageSquare, Zap, Briefcase, Smile, CheckCircle, XCircle } from 'lucide-react';
import { PRODUCT } from '../types';

export default function Methodology() {
  const pillars = [
    {
      number: "01",
      title: "Conversação Aplicada ao Cotidiano",
      description: "Aprenda frases e diálogos que você realmente usa em viagens, restaurantes, aeroportos, compras e encontros sociais, sem listas inúteis de decoreba.",
      icon: MessageSquare,
      highlight: "Foco em comunicação prática instantânea"
    },
    {
      number: "02",
      title: "Microlearning: 15 a 20 Minutos por Dia",
      description: "Conteúdo estruturado para quem não tem horas livres na rotina. Aulas direto ao ponto para você estudar no transporte, no almoço ou antes de dormir.",
      icon: Zap,
      highlight: "Flexibilidade total de horário e local"
    },
    {
      number: "03",
      title: "Business English & Mercado de Trabalho",
      description: "Desenvolva o vocabulário corporativo essencial para responder e-mails, participar de reuniões virtuais em inglês e se destacar em entrevistas.",
      icon: Briefcase,
      highlight: "Preparação direta para promoções e vagas"
    },
    {
      number: "04",
      title: "Técnica de Destrave da Pronúncia",
      description: "Perca o medo e a insegurança de falar. Exercícios de fonética guiada para você soar natural e ser compreendido por nativos com confiança.",
      icon: Smile,
      highlight: "Superação do bloqueio psicológico de falar"
    }
  ];

  return (
    <section id="metodologia" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-2">
            Metodologia Axe · Por que funciona?
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Desenvolvido para quem precisa aprender de verdade sem perder anos da vida
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            A maioria dos cursos tradicionais foca em regras gramaticais cansativas. O método do {PRODUCT.name} coloca você para praticar as frases certas desde o primeiro dia.
          </p>
        </div>

        {/* Comparison: Traditional vs. Axe Online */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Traditional School */}
          <div className="rounded-2xl p-6 sm:p-8 bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-2 mb-4 text-rose-600 font-semibold text-sm">
              <XCircle className="w-5 h-5 shrink-0" />
              <span>Cursos Tradicionais de Idiomas</span>
            </div>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-slate-400 font-bold">·</span>
                <span>4 a 5 anos estudando regras gramaticais abstratas.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-400 font-bold">·</span>
                <span>Mensalidades caras que chegam a R$ 350 a R$ 600 por mês.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-400 font-bold">·</span>
                <span>Horários fixos inflexíveis com penalidade por faltas.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-400 font-bold">·</span>
                <span>O aluno entende o texto, mas trava totalmente na hora de falar.</span>
              </li>
            </ul>
          </div>

          {/* Axe Method */}
          <div className="rounded-2xl p-6 sm:p-8 bg-indigo-50/60 border border-indigo-200">
            <div className="flex items-center gap-2 mb-4 text-indigo-700 font-semibold text-sm">
              <CheckCircle className="w-5 h-5 shrink-0" />
              <span>Com o {PRODUCT.name}</span>
            </div>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 font-bold">·</span>
                <span>Prática orientada a situações reais de trabalho e viagens.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 font-bold">·</span>
                <span>Apenas <strong>R$ {PRODUCT.price}</strong> pagamento único sem mensalidades.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 font-bold">·</span>
                <span>100% no seu ritmo: assista no computador, tablet ou celular.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 font-bold">·</span>
                <span>Foco ativo em destravar a dicção, fala e escuta ativa.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="rounded-2xl p-6 border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-indigo-300 transition-all flex flex-col justify-between shadow-xs hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-indigo-600">
                      {pillar.number}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-700">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200/60 text-xs font-medium text-indigo-600">
                  {pillar.highlight}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
