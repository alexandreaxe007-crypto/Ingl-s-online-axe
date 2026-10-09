import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { PRODUCT } from '../types';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: `Como recebo o acesso ao ${PRODUCT.name} após o pagamento?`,
    answer: "O envio do acesso é 100% automático e imediato. Assim que o pagamento de R$ 49,99 for confirmado pelo Stripe, você receberá um e-mail com seus dados de login exclusivos para acessar a plataforma de aulas, materiais em PDF e bônus."
  },
  {
    question: "O curso serve para quem está começando do absoluto zero?",
    answer: "Sim! O Módulo 1 foi desenhado especialmente para quem tem bloqueio, vergonha ou nunca estudou inglês antes. Você aprende a pronúncia correta de forma gradual e contextualizada, sem termos técnicos difíceis."
  },
  {
    question: "E se eu já tiver um nível intermediário, o curso ainda me ajuda?",
    answer: "Com certeza. Muitos alunos sabem ler e escrever, mas travam completamente em conversas e reuniões de trabalho. O Módulo 3 (Business English) e o Módulo 4 (Expressões Nativas e Phrasal Verbs) são focados especificamente em destravar a fala rápida e profissional."
  },
  {
    question: "Por quanto tempo terei acesso às aulas?",
    answer: "Você terá acesso completo por 1 ano inteiro, podendo assistir e rever todas as aulas quantas vezes quiser, no computador, tablet ou celular, no seu próprio ritmo."
  },
  {
    question: "Como funciona a garantia incondicional de 7 dias?",
    answer: "Você pode se matricular, assistir às aulas e baixar os materiais. Se durante os primeiros 7 dias você achar que o curso não é o que esperava, basta enviar um e-mail para o suporte e devolveremos 100% do valor pago, sem qualquer complicação."
  },
  {
    question: "O pagamento pelo Stripe é seguro? Quais formas são aceitas?",
    answer: "O Stripe é uma das maiores e mais seguras empresas de processamento de pagamentos do mundo. Você pode pagar com cartão de crédito (com opção de parcelamento) ou outras opções suportadas, com criptografia de ponta a ponta."
  },
  {
    question: "O curso emite certificado de conclusão?",
    answer: "Sim! Ao concluir as aulas práticas do curso, você pode emitir seu certificado digital de conclusão sem nenhum custo adicional para anexar ao seu currículo ou perfil no LinkedIn."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(prev => prev === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Perguntas Frequentes
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Tudo o que você precisa saber antes de iniciar seus estudos.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/70 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
