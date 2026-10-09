import { Shield, Lock, Mail } from 'lucide-react';
import { PRODUCT } from '../types';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 py-14 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Brand & Mission */}
          <div className="md:col-span-5">
            <span className="text-xl font-bold text-white tracking-tight block mb-3">
              {PRODUCT.name}
            </span>
            <p className="text-slate-400 text-xs sm:text-sm max-w-sm leading-relaxed mb-4">
              {PRODUCT.description}. Transforme seu aprendizado com uma metodologia rápida, prática e flexível para acelerar sua carreira.
            </p>
            <div className="flex items-center gap-2 text-slate-300">
              <Mail className="w-4 h-4 text-indigo-400" />
              <span>suporte@inglesaxe.com.br</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
              Navegação Rápida
            </h4>
            <ul className="space-y-2">
              <li><a href="#metodologia" className="hover:text-white transition-colors">Metodologia</a></li>
              <li><a href="#modulos" className="hover:text-white transition-colors">Grade Curricular</a></li>
              <li><a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a></li>
              <li><a href="#preco" className="hover:text-white transition-colors">Matrícula (R$ {PRODUCT.price})</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Dúvidas Frequentes</a></li>
            </ul>
          </div>

          {/* Security & Guarantee Note */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
              Segurança & Pagamentos
            </h4>
            <p className="text-slate-400 leading-relaxed mb-4">
              Processamento protegido com criptografia de ponta a ponta através do Stripe. Seus dados financeiros não ficam armazenados.
            </p>
            <div className="flex items-center gap-4 text-slate-300">
              <div className="flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-emerald-400" />
                <span>Stripe Verified</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-indigo-400" />
                <span>Garantia 7 Dias</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-xs">
          <div>
            © {currentYear} {PRODUCT.name}. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-200 cursor-pointer transition-colors">Termos de Uso</span>
            <span className="hover:text-slate-200 cursor-pointer transition-colors">Política de Privacidade</span>
            <span className="hover:text-slate-200 cursor-pointer transition-colors">Aviso Legal</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
