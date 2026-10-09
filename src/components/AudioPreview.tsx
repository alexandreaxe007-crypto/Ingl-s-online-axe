import { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';

interface AudioExample {
  title: string;
  context: string;
  phrase: string;
  translation: string;
}

const EXAMPLES: AudioExample[] = [
  {
    title: "Reunião de Trabalho (Business)",
    context: "Iniciando uma conferência internacional",
    phrase: "Good morning everyone. Thank you for joining. Let's go over our weekly milestones and ensure we are aligned.",
    translation: "Bom dia a todos. Obrigado por entrarem. Vamos repassar nossos marcos semanais e garantir que estejamos alinhados."
  },
  {
    title: "Situação de Viagem (Travel)",
    context: "Check-in no aeroporto e hotel",
    phrase: "Excuse me, could you please confirm if this gate is for flight 482 to London? Here is my passport and boarding pass.",
    translation: "Com licença, você poderia confirmar se este portão é para o voo 482 para Londres? Aqui está meu passaporte e cartão de embarque."
  },
  {
    title: "Dia a Dia & Networking",
    context: "Conversa casual e novos contatos",
    phrase: "It was really great meeting you! Let's stay in touch and connect on LinkedIn later this week.",
    translation: "Foi ótimo te conhecer! Vamos manter contato e nos conectar no LinkedIn ainda esta semana."
  }
];

export default function AudioPreview() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      setSpeechSupported(false);
    }
  }, []);

  const activeExample = EXAMPLES[selectedIndex];

  const handlePlayAudio = () => {
    if (!speechSupported) return;

    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(activeExample.phrase);
    utterance.lang = 'en-US';
    utterance.rate = 0.9; // natural, clear cadence for learners

    // Try to pick an en-US voice
    const voices = window.speechSynthesis.getVoices();
    const enVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Daniel')));
    if (enVoice) {
      utterance.voice = enVoice;
    }

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    window.speechSynthesis.speak(utterance);
  };

  const handleStop = () => {
    if (speechSupported) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
  };

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Amostra Prática de Pronúncia
          </span>
        </div>
        <span className="text-xs text-slate-400">
          Metodologia Axe
        </span>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-4">
        {EXAMPLES.map((ex, idx) => (
          <button
            key={ex.title}
            onClick={() => {
              handleStop();
              setSelectedIndex(idx);
            }}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              selectedIndex === idx
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            {ex.title}
          </button>
        ))}
      </div>

      {/* Context & Text */}
      <div className="bg-slate-950/60 rounded-xl p-4 border border-slate-800/80 mb-4">
        <div className="text-xs text-indigo-400 font-medium mb-1">
          Contexto: {activeExample.context}
        </div>
        <p className="text-base text-slate-100 font-medium leading-relaxed mb-2">
          &ldquo;{activeExample.phrase}&rdquo;
        </p>
        <p className="text-xs text-slate-400 italic">
          Tradução: {activeExample.translation}
        </p>
      </div>

      {/* Audio Button */}
      <div className="flex items-center justify-between gap-3 pt-1">
        <button
          onClick={handlePlayAudio}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
            isPlaying
              ? 'bg-rose-600 text-white hover:bg-rose-700'
              : 'bg-emerald-500 hover:bg-emerald-600 text-slate-950'
          }`}
        >
          {isPlaying ? (
            <>
              <VolumeX className="w-4 h-4" />
              <span>Pausar pronúncia</span>
            </>
          ) : (
            <>
              <Volume2 className="w-4 h-4" />
              <span>Ouvir pronúncia nativa (15s)</span>
            </>
          )}
        </button>

        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Foco em fonética e naturalidade</span>
        </div>
      </div>
    </div>
  );
}
