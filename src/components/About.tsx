import { Code2, Database, BarChart3, Layout, Brain, TableProperties, Briefcase, GraduationCap, Heart } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

type ExperienceTab = 'professional' | 'academic' | 'volunteer';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
}

export function About() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<ExperienceTab>('professional');

  const techStack = [
    { name: 'Python', icon: Code2, color: 'text-cyan-400' },
    { name: 'SQL', icon: Database, color: 'text-blue-400' },
    { name: 'React', icon: Layout, color: 'text-cyan-400' },
    { name: 'Power BI', icon: BarChart3, color: 'text-blue-400' },
    { name: 'Pandas', icon: TableProperties, color: 'text-cyan-400' },
    { name: 'Machine Learning', icon: Brain, color: 'text-blue-400' }
  ];

  const tabs = [
    { key: 'professional' as ExperienceTab, icon: Briefcase, label: t('about.experience.professional') },
    { key: 'academic' as ExperienceTab, icon: GraduationCap, label: t('about.experience.academic') },
    { key: 'volunteer' as ExperienceTab, icon: Heart, label: t('about.experience.volunteer') }
  ];

  const getExperiences = (tab: ExperienceTab): ExperienceItem[] => {
    return t(`about.experience.${tab}Exp`) as any;
  };

  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-b from-[#121212] to-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {t('about.title')}
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Bio Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              {t('about.bio.p1')}
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              {t('about.bio.p2')}
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              {t('about.bio.p3')}
            </p>

            <div className="flex flex-wrap gap-4 pt-4 justify-center">
              <div className="flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-cyan-400">{t('about.bio.available')}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                <span className="text-sm text-blue-400">{t('about.bio.experience')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Timeline Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold mb-8 text-center text-gray-200">
            {t('about.experience.title')}
          </h3>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${
                  activeTab === tab.key
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30'
                    : 'bg-[#1a1a1a] border border-gray-800 text-gray-400 hover:border-cyan-500/50 hover:text-gray-200'
                }`}
              >
                <tab.icon size={20} />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Experience Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {getExperiences(activeTab).map((exp, index) => (
                <div
                  key={index}
                  className="group relative bg-[#1a1a1a] border border-gray-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-3 top-8 w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full border-4 border-[#0a0a0a] group-hover:scale-110 transition-transform"></div>

                  <div className="ml-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <h4 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {exp.title}
                      </h4>
                      <span className="text-sm text-cyan-400 font-medium px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-lg w-fit">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-blue-400 font-medium mb-3">{exp.company}</p>
                    <p className="text-gray-400 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack Grid */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center text-gray-200">
            {t('about.techStack')}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="group flex items-center gap-4 p-5 bg-[#1a1a1a] border border-gray-800 rounded-xl hover:border-cyan-500/50 hover:bg-[#1f1f1f] transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className={`${tech.color} group-hover:scale-110 transition-transform`}>
                  <tech.icon size={32} />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors font-medium">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

          {/* Additional skills badges */}
          <div className="mt-6 flex flex-wrap gap-2 justify-center">
            {['Tableau', 'NumPy', 'Scikit-learn', 'Node.js', 'Git', 'Excel'].map((skill, index) => (
              <span 
                key={index}
                className="px-3 py-1.5 bg-gray-800/50 border border-gray-700 rounded-xl text-sm text-gray-400 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
