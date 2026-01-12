import { ArrowRight, BarChart3, Database, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // 1. Importe o useNavigate
import { useLanguage } from '../context/LanguageContext';

export function Hero() {
  const { t } = useLanguage();
  const navigate = useNavigate(); // 2. Inicialize o hook de navegação

  // 3. Troque as funções de scroll por navegação de rota
  const handleViewProjects = () => {
    navigate('/projects'); // Vai para a página de projetos
  };

  const handleGetInTouch = () => {
    navigate('/contact'); // Vai para a página de contato
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background e Visualizações (Mantidos pois são o charme da Landing Page) */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 border border-cyan-500 rounded-xl rotate-12"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 border border-blue-500 rounded-xl -rotate-6"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 border border-cyan-400 rounded-full"></div>
        
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 0.3 }} />
              <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0.3 }} />
            </linearGradient>
          </defs>
          <polyline
            points="100,400 200,350 300,380 400,300 500,320 600,280"
            fill="none"
            stroke="url(#grad1)"
            strokeWidth="2"
          />
          <polyline
            points="200,500 300,480 400,520 500,460 600,490 700,440"
            fill="none"
            stroke="url(#grad1)"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Floating icons */}
      <div className="absolute top-1/4 right-1/4 text-cyan-500/10 animate-pulse">
        <BarChart3 size={80} />
      </div>
      <div className="absolute bottom-1/3 left-1/4 text-blue-500/10 animate-pulse delay-75">
        <Database size={60} />
      </div>
      <div className="absolute top-1/3 left-1/3 text-cyan-400/10 animate-pulse delay-150">
        <TrendingUp size={70} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-block mb-4 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm">
          {t('hero.badge')}
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
            {t('hero.headline1')}
          </span>
          <br />
          <span className="text-white">{t('hero.headline2')}</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          {t('hero.subheadline')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={handleViewProjects} // Função de navegação
            className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105"
          >
            <span className="font-semibold">{t('hero.viewProjects')}</span>
            <ArrowRight size={20} />
          </button>
          
          <button 
            onClick={handleGetInTouch} // Função de navegação
            className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 rounded-xl hover:bg-cyan-500/10 transition-all hover:border-cyan-500"
          >
            {t('hero.getInTouch')}
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
            <div className="text-gray-500 text-sm">{t('hero.stats.projects')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">1M+</div>
            <div className="text-gray-500 text-sm">{t('hero.stats.dataPoints')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">15+</div>
            <div className="text-gray-500 text-sm">{t('hero.stats.techTools')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}