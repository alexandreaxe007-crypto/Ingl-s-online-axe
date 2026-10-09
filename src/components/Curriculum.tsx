import { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Clock, CheckCircle2, Gift } from 'lucide-react';
import { PRODUCT } from '../types';

interface ModuleItem {
  id: string;
  badge: string;
  title: string;
  objective: string;
  duration: string;
  lessons: string[];
}

const MODULES: ModuleItem[] = [
  {
    id: "mod-1",
    badge: "Módulo 1",
    title: "Destrave Imediato & Fonética Prática",
    objective: "Eliminar a vergonha de falar e dominar os sons essenciais da pronúncia americana.",
    duration: "18 aulas · 3h 40min",
    lessons: [
      "Como treinar seu cérebro para pensar diretamente em inglês",
      "Os 10 erros de pronúncia mais comuns de brasileiros e como corrigir",
      "Apresentando-se com autoridade em encontros pessoais e virtuais",
      "Frases-chave para manter o diálogo vivo sem travar",
      "Guia fonético de conexões entre palavras (connected speech)"
    ]
  },
  {
    id: "mod-2",
    badge: "Módulo 2",
    title: "Inglês para o Dia a Dia & Viagens Internacionais",
    objective: "Comunicação fluida em qualquer situação cotidiana no Brasil ou no exterior.",
    duration: "22 aulas · 4h 15min",
    lessons: [
      "Aeroporto, alfândega e imigração: diálogos sem nervosismo",
      "Check-in em hotéis, reservas e resolução de problemas de quarto",
      "Pedindo comida e tirando dúvidas em restaurantes e cafés",
      "Pedindo direções na rua e utilizando transportes (Uber, metrô)",
      "Compras, farmácia, emergências e conversas casuais com nativos"
    ]
  },
  {
    id: "mod-3",
    badge: "Módulo 3",
    title: "Business English: Comunicação Corporativa & Carreira",
    objective: "Desenvolver vocabulário profissional para reuniões, relatórios e negociações.",
    duration: "20 aulas · 4h 50min",
    lessons: [
      "Estrutura padrão de e-mails profissionais claros e objetivos",
      "Participando de reuniões no Teams/Zoom sem ficar mudo",
      "Como apresentar dados, prazos e metas em inglês",
      "Vocabulário de tecnologia, negócios, vendas e gerenciamento",
      "Simulação de pitch e defesa de ideias em apresentações corporativas"
    ]
  },
  {
    id: "mod-4",
    badge: "Módulo 4",
    title: "Expressões Nativas & Fluência Natural",
    objective: "Abandonar o inglês engessado de livro e soar natural e confiante.",
    duration: "16 aulas · 3h 20min",
    lessons: [
      "Os 50 Phrasal Verbs mais usados no mundo real (com exemplos visuais)",
      "Expressões idiomáticas modernas do dia a dia e da internet",
      "Como entender séries, filmes e podcasts sem legenda em português",
      "Técnicas de Shadowing para aceleração de dicção",
      "Plano diário de manutenção da fluência em 15 minutos"
    ]
  }
];

export default function Curriculum() {
  const [expandedModule, setExpandedModule] = useState<string>("mod-1");

  const toggleModule = (id: string) => {
    setExpandedModule(prev => prev === id ? "" : id);
  };

  const handleCheckout = () => {
    window.open(PRODUCT.paymentUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="modulos" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-2">
            Grade Curricular Completa
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            O que você vai aprender passo a passo
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Mais de 70 aulas práticas planejadas para levar você do zero ou básico até a segurança na fala.
          </p>
        </div>

        {/* Modules Accordion */}
        <div className="space-y-4 mb-10">
          {MODULES.map((mod) => {
            const isExpanded = expandedModule === mod.id;
            return (
              <div
                key={mod.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleModule(mod.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-start sm:items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/70 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <span className="text-xs font-bold text-indigo-700 bg-indigo-50 border border-indigo-100 rounded-md px-2.5 py-1 w-fit">
                      {mod.badge}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      {mod.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="hidden sm:inline-block text-xs text-slate-500 font-mono">
                      {mod.duration}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-slate-100 bg-slate-50/40">
                    <p className="text-xs sm:text-sm text-slate-600 font-medium mb-4">
                      {mod.objective}
                    </p>
                    <div className="space-y-2.5">
                      {mod.lessons.map((lesson, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                          <span>{lesson}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bonus Box */}
        <div className="rounded-2xl bg-linear-to-r from-indigo-900 to-slate-900 text-white p-6 sm:p-8 border border-indigo-950 shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-amber-400 shrink-0">
              <Gift className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs uppercase font-bold tracking-wider text-amber-400">
                  Bônus Exclusivo Incluso
                </span>
                <span className="text-xs text-slate-400">· Valor avulso: R$ 97,00</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-1">
                Guia Definitivo: Entrevistas de Emprego em Inglês
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Roteiros prontos para as 25 perguntas mais frequentes de recrutadores globais, com respostas estratégicas e templates de simulação.
              </p>
            </div>
          </div>

          <button
            onClick={handleCheckout}
            className="w-full md:w-auto px-6 py-3.5 bg-white hover:bg-slate-100 text-slate-950 font-bold text-sm rounded-xl transition-colors whitespace-nowrap cursor-pointer shadow-md"
          >
            Acessar com Bônus por R$ {PRODUCT.price}
          </button>
        </div>

      </div>
    </section>
  );
}
