import { X, Target, Cog, TrendingUp } from 'lucide-react';
import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import type { Project } from '../App';

interface CaseStudyModalProps {
  project: Project;
  onClose: () => void;
}

export function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  const { t } = useLanguage();

  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#121212] border border-gray-800 rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 bg-gray-800 hover:bg-gray-700 rounded-xl transition-colors"
        >
          <X size={24} className="text-gray-400 hover:text-white" />
        </button>

        {/* Header Image */}
        <div className="relative h-80 overflow-hidden rounded-t-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/50 to-transparent"></div>
          
          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <h2 className="text-4xl font-bold text-white mb-3">{project.title}</h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/40 rounded-xl text-cyan-300 text-sm font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-10">
          {/* The Problem */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-red-500/10 border border-red-500/30 rounded-xl">
                <Target className="text-red-400" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-white">{t('caseStudy.problem')}</h3>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed pl-14">
              {project.problem}
            </p>
          </div>

          {/* The Data Process */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-500/10 border border-blue-500/30 rounded-xl">
                <Cog className="text-blue-400" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-white">{t('caseStudy.process')}</h3>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed pl-14">
              {project.process}
            </p>

            {/* Process Images */}
            {project.chartImages && project.chartImages.length > 0 && (
              <div className="grid md:grid-cols-2 gap-4 pl-14 pt-4">
                {project.chartImages.map((chartImage, index) => (
                  <div key={index} className="relative h-64 rounded-xl overflow-hidden border border-gray-800">
                    <img
                      src={chartImage}
                      alt={`Analysis visualization ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* The Result */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-500/10 border border-green-500/30 rounded-xl">
                <TrendingUp className="text-green-400" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-white">{t('caseStudy.result')}</h3>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed pl-14">
              {project.result}
            </p>
            
            {/* Success metrics highlight */}
            <div className="ml-14 mt-6 p-6 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 border border-cyan-500/20 rounded-xl">
              <p className="text-cyan-400 font-medium">
                ✨ {t('caseStudy.impact')}
              </p>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="p-8 pt-0">
          <div className="flex justify-center">
            <button
              onClick={onClose}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg shadow-cyan-500/30"
            >
              {t('caseStudy.close')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
