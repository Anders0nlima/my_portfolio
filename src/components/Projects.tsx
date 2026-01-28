import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
// 'import type' resolve o erro de SyntaxError no Vite ao importar interfaces
import type { Project } from '../types/Project';

interface ProjectsProps {
  onProjectClick: (project: Project) => void;
  projectImages: string[];
}

export function Projects({ onProjectClick, projectImages }: ProjectsProps) {
  const { t } = useLanguage();

  // O fallback '|| []' evita que o app quebre se o JSON de tradução demorar a carregar
  const projectsData = (t('projects.projects') as any[]) || [];

  const projects: Project[] = projectsData.map((proj, index) => ({
    id: index + 1,
    title: proj.title || "Untitled Project",
    description: proj.description || "",
    image: projectImages[index % projectImages.length] || "",
    tags: proj.tags || [],
    problem: proj.problem || "",
    process: proj.process || "",
    result: proj.result || "",
    chartImages: [
      projectImages[(index + 1) % projectImages.length] || "",
      projectImages[(index + 2) % projectImages.length] || ""
    ]
  }));

  return (
    /* Removido o id="projects" para focar no comportamento de página única */
    <section className="py-24 px-6 bg-[#0a0a0a] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {t('projects.title')}
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-[#121212] border border-gray-800 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 cursor-pointer"
              onClick={() => onProjectClick(project)}
            >
              {/* Imagem do Projeto */}
              <div className="relative h-64 overflow-hidden bg-gray-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Conteúdo do Card */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Tags de Tecnologia */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-xl text-cyan-400 text-sm font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* CTA Visual */}
                <div className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium group/btn mt-4">
                  <span>{t('projects.viewCaseStudy')}</span>
                  <ExternalLink 
                    size={18} 
                    className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}