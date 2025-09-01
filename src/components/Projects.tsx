import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 5,
      title: 'Government Exam Portal',
      description:
        'A **Full Stack EdTech platform** for UPSC/SSC exam preparation with mock tests, CBT system, and structured question banks.',
      image: 'government.png',
      technologies: [
        'HTML',
        'CSS',
        'javascript',
        'Typescript',
        'Supabase(Database)',
      ],
      github:
        'https://github.com/Prince2019015/Government-Exam-Portal---PrinceKumar',
      live: 'https://government-exam-portal-prince-kumar.vercel.app/',
      category: 'Full Stack Development',
    },
    {
      id: 1,
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce solution with React, Node.js, Express.js and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
      image: 'e-commerce.png',
      technologies: [
        'HTML',
        'CSS',
        'javascript',
        'React',
        'Node.js',
        'MongoDB',
        'Paypal',
        'Tailwind CSS',
      ],
      github: 'https://github.com/Prince2019015/amazonax',
      live: 'https://amazonax.vercel.app/',
      category: 'Full Stack',
    },
    {
      id: 2,
      title: 'Smartpath : Learning Management System ',
      description:
        'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'smartpath.png',
      technologies: [
        'HTML',
        'CSS',
        'javascript',
        'Typescript',
        'Supabase(Database)',
        'KNN - Machine Learning Algorithm',
      ],
      github:
        'https://github.com/Prince2019015/SmartPath-Learning-Management-System',
      live: 'https://smartpathlms.vercel.app/',
      category: 'Machine Learning Based Full Stack',
    },
    {
      id: 3,
      title: 'Forecast-daily-bike-rental-demand-using-time-series-models ',
      description:
        'A comprehensive analytics dashboard with data visualization, real-time charts, and customizable reporting features for business insights.',
      image: 'dataanalysis.png',
      technologies: ['R programming'],
      github:
        'https://github.com/Prince2019015/Forecast-daily-bike-rental-demand-using-time-series-models',
      live: 'https://github.com/Prince2019015/Forecast-daily-bike-rental-demand-using-time-series-models',
      category: 'Data Visualization, Data Analysis',
    },
    {
      id: 4,
      title: 'Quiz Application',
      description:
        'A RESTful API for a social media platform with authentication, post management, real-time messaging, and content moderation.',
      image: 'quizapp.png',
      technologies: [
        'HTML',
        'CSS',
        'javascript',
        'react.js',
        'opentrivia Database API',
      ],
      github: 'https://github.com/Prince2019015/Quiz-Application',
      live: 'https://quiz-application-two-sage.vercel.app/',
      category: 'Frontend',
    },

    {
      id: 6,
      title: 'Food Ordering Application Prototype',
      description:
        'A cross-platform mobile app for fitness tracking with workout plans, progress analytics, and social features for motivation.',
      image: 'foodapp.jpeg',
      technologies: ['Adobe XD'],
      github:
        'https://xd.adobe.com/view/80a37684-42d0-4a83-a427-65206b91ac2a-d5f0/',
      live: 'https://xd.adobe.com/view/80a37684-42d0-4a83-a427-65206b91ac2a-d5f0/',
      category: 'Mobile',
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-orange-500 mx-auto mb-6"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for
            creating innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-slate-800 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:scale-105 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <a
                      href={project.github}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                      aria-label="View GitHub"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.live}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                      aria-label="View Live Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                    <button
                      onClick={() => setSelectedProject(project.id)}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                      aria-label="View Details"
                    >
                      <Eye size={18} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-2">
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-slate-700 text-slate-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-slate-700 text-slate-300 rounded text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {(() => {
              const project = projects.find((p) => p.id === selectedProject);
              if (!project) return null;

              return (
                <div>
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover"
                    />
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors duration-200"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 mb-6">{project.description}</p>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-2">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors duration-200"
                      >
                        <Github size={18} />
                        GitHub
                      </a>
                      <a
                        href={project.live}
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-orange-600 text-white rounded-lg hover:shadow-lg transition-all duration-200"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
