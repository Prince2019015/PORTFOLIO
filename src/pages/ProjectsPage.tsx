import React from 'react';
import Projects from '../components/Projects';

const ProjectsPage = () => {
  return (
    <div className="pt-20">
      <Projects />
      
      {/* Additional Projects Content */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Development Process</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-orange-500 mx-auto mb-6"></div>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              My approach to building exceptional digital experiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understanding your needs, goals, and target audience to create the perfect solution.",
                color: "from-purple-500 to-pink-500"
              },
              {
                step: "02",
                title: "Design",
                description: "Creating wireframes and prototypes that focus on user experience and visual appeal.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                step: "03",
                title: "Development",
                description: "Building robust, scalable applications using modern technologies and best practices.",
                color: "from-green-500 to-emerald-500"
              },
              {
                step: "04",
                title: "Deployment",
                description: "Launching your project with proper testing, optimization, and ongoing support.",
                color: "from-orange-500 to-red-500"
              }
            ].map((process, index) => (
              <div key={process.step} className="text-center group">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${process.color} flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300`}>
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{process.title}</h3>
                <p className="text-slate-300">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;