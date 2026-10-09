import { useState } from 'react';
import { HelpCircle, CheckCircle, ArrowRight, RotateCcw } from 'lucide-react';
import { PRODUCT } from '../types';

interface Question {
  id: number;
  question: string;
  options: {
    label: string;
    description: string;
    profile: string;
  }[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    question: "Qual é o seu maior objetivo com o inglês agora?",
    options: [
      {
        label: "Destravar para o trabalho e reuniões",
        description: "Preciso falar sem gaguejar em calls e responder e-mails em inglês",
        profile: "Profissional"
      },
      {
        label: "Viajar pelo mundo com independência",
        description: "Quero me virar em aeroportos, hotéis e restaurantes sem medo",
        profile: "Viagens"
      },
      {
        label: "Aprender do zero com calma e praticidade",
        description: "Nunca aprendi direito na escola e quero começar pelo jeito certo",
        profile: "Iniciante"
      }
    ]
  },
  {
    id: 2,
    question: "O que mais te atrapalha na hora de se comunicar?",
    options: [
      {
        label: "Trava na hora de falar em público ou com nativos",
        description: "Entendo o que dizem, mas na hora de responder dá branco",
        profile: "Destrave"
      },
      {
        label: "Falta de tempo para estudar horas seguidas",
        description: "Minha rotina é corrida e preciso de aulas curtas e diretas",
        profile: "Microlearning"
      },
      {
        label: "Medo de cometer erros na pronúncia",
        description: "Fico inseguro com meu sotaque e travo",
        profile: "Fonética"
      }
    ]
  },
  {
    id: 3,
    question: "Quanto tempo por dia você consegue dedicar aos estudos?",
    options: [
      {
        label: "15 a 20 minutos por dia",
        description: "Perfeito para o método microlearning do curso",
        profile: "Ideal"
      },
      {
        label: "30 minutos diários",
        description: "Ritmo acelerado para resultados em semanas",
        profile: "Acelerado"
      },
      {
        label: "Nos fins de semana em blocos maiores",
        description: "Flexibilidade total para maratonar os módulos",
        profile: "Flexível"
      }
    ]
  }
];

export default function LevelQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [finished, setFinished] = useState(false);

  const handleSelectOption = (profile: string) => {
    const nextAnswers = [...answers, profile];
    setAnswers(nextAnswers);

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setFinished(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setFinished(false);
  };

  const handleCheckout = () => {
    window.open(PRODUCT.paymentUrl, '_blank', 'noopener,noreferrer');
  };

  const currentQ = QUESTIONS[currentStep];

  return (
    <section className="py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>Diagnóstico Rápido de Aprendizado</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            Descubra como o {PRODUCT.name} se adapta à sua rotina
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Responda 3 perguntas em menos de 1 minuto para ver seu plano de estudo recomendado.
          </p>
        </div>

        <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl backdrop-blur-xs">
          {!finished ? (
            <div>
              {/* Progress Bar */}
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-4">
                <span>Pergunta {currentStep + 1} de {QUESTIONS.length}</span>
                <span>{Math.round(((currentStep + 1) / QUESTIONS.length) * 100)}%</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full mb-8 overflow-hidden">
                <div
                  className="bg-indigo-500 h-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / QUESTIONS.length) * 100}%` }}
                />
              </div>

              {/* Question */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
                {currentQ.question}
              </h3>

              {/* Options */}
              <div className="space-y-3.5">
                {currentQ.options.map((opt, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectOption(opt.profile)}
                    className="w-full text-left p-4 sm:p-5 rounded-xl border border-slate-800 bg-slate-900/80 hover:bg-slate-800/90 hover:border-indigo-500 transition-all cursor-pointer flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-sm sm:text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {opt.label}
                      </div>
                      <div className="text-xs text-slate-400 mt-1">
                        {opt.description}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 shrink-0 ml-3 transition-transform group-hover:translate-x-1" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-4">
              <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-2">
                Perfil Mapeado com Sucesso!
              </h3>
              <p className="text-slate-300 text-sm max-w-lg mx-auto mb-6 leading-relaxed">
                Você tem o perfil ideal para o formato prático de 15 minutos do <strong>{PRODUCT.name}</strong>. Nosso Módulo de Destrave Imediato e Business English vai focar exatamente onde você mais precisa de resultados rápidos.
              </p>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 max-w-md mx-auto mb-8 text-left">
                <div className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-2">
                  Seu Plano Recomendado
                </div>
                <div className="text-sm font-bold text-white mb-1">
                  Trilha Prática: Conversação + Destrave Profissional
                </div>
                <div className="text-xs text-slate-400">
                  Acesso completo a todos os 4 módulos + Bônus de Entrevistas de Emprego por apenas <strong>R$ {PRODUCT.price}</strong>.
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={handleCheckout}
                  className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-bold text-sm rounded-xl transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Matricular Agora por R$ {PRODUCT.price}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-4 py-3 text-slate-400 hover:text-slate-200 text-xs font-medium transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Refazer teste</span>
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
