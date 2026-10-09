import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { PRODUCT } from '../types';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  initials: string;
  rating: number;
  outcome: string;
  quote: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Camila Rocha",
    role: "Analista de Recursos Humanos",
    company: "Empresa de Tecnologia (São Paulo)",
    initials: "CR",
    rating: 5,
    outcome: "Aprovada em processo seletivo em 4 semanas",
    quote: "Eu tinha muito pavor de falar em inglês em entrevistas. O Módulo 3 sobre Business English me deu segurança exata no que dizer. Fui aprovada para uma vaga remota ganhando 40% a mais."
  },
  {
    name: "Lucas Mendes",
    role: "Engenheiro de Software",
    company: "Consultoria Global",
    initials: "LM",
    rating: 5,
    outcome: "Participa de reuniões internacionais sem gaguejar",
    quote: "Sempre li bem documentação técnica, mas em reuniões com o time dos EUA eu travava. As técnicas de pronúncia rápida e as frases de abertura do curso mudaram tudo no meu dia a dia."
  },
  {
    name: "Mariana Albuquerque",
    role: "Médica & Pesquisadora",
    company: "Hospital Universitário",
    initials: "MA",
    rating: 5,
    outcome: "Viajou para congresso no exterior sem tradutor",
    quote: "Estudei durante 20 minutos todos os dias antes de ir para o hospital. Consegui apresentar meu trabalho em um congresso em Chicago e fazer contatos sem precisar de ninguém me traduzindo."
  }
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-2">
            Resultados Reais de Alunos
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Quem estuda com o {PRODUCT.name} transforma sua realidade
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Veja como profissionais de diversas áreas destravaram o inglês prático para trabalho e dia a dia.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                {/* Rating stars & verified */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Aluno Verificado</span>
                  </div>
                </div>

                {/* Outcome statement */}
                <div className="text-xs font-bold text-indigo-700 mb-3 uppercase tracking-wide">
                  {t.outcome}
                </div>

                {/* Quote */}
                <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center justify-center shrink-0">
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-none">
                    {t.name}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Aggregate trust bar */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 flex flex-wrap items-center justify-around gap-6 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums">
              +1.850
            </div>
            <div className="text-xs text-slate-500 mt-0.5">Alunos matriculados</div>
          </div>
          <div className="h-8 w-px bg-slate-200 hidden sm:block" />
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums">
              4.9 / 5.0
            </div>
            <div className="text-xs text-slate-500 mt-0.5">Avaliação média de satisfação</div>
          </div>
          <div className="h-8 w-px bg-slate-200 hidden sm:block" />
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums">
              96,4%
            </div>
            <div className="text-xs text-slate-500 mt-0.5">Taxa de aprovação e recomendação</div>
          </div>
        </div>

      </div>
    </section>
  );
}
