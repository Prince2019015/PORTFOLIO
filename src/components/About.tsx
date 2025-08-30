import React, { useState, useEffect, useRef } from 'react';
import { Code, Palette, Globe, Database } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const skills = [
    { name: 'Frontend Development', level: 90, icon: Code, color: 'from-blue-500 to-cyan-500' },
    { name: 'UI/UX Design', level: 85, icon: Palette, color: 'from-purple-500 to-pink-500' },
    { name: 'Backend Development', level: 80, icon: Database, color: 'from-green-500 to-emerald-500' },
    { name: 'Full Stack Projects', level: 88, icon: Globe, color: 'from-orange-500 to-red-500' }
  ];

  const technologies = [
    'React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB',
    'Tailwind CSS', 'Next.js', 'Express.js', 'GraphQL', 'AWS', 'Docker'
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-orange-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Photo */}
          <div className={`md:order-2 flex justify-center transition-all duration-1000 delay-100 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-gradient-to-r from-purple-500 to-orange-500 p-1 bg-gradient-to-r from-purple-500 to-orange-500">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-800 flex items-center justify-center">
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-orange-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className={`md:order-1 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <h3 className="text-2xl font-semibold text-white mb-6">
              Passionate about creating amazing digital experiences
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              With over 5 years of experience in web development, I specialize in building 
              scalable, user-friendly applications. I love turning complex problems into 
              simple, beautiful, and intuitive solutions.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              When I'm not coding, you can find me exploring new technologies, contributing 
              to open source projects, or sharing knowledge with the developer community.
            </p>

            {/* Technologies */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-white mb-4">Technologies I work with:</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm transition-all duration-300 hover:bg-slate-600 hover:scale-105 ${
                      isVisible ? 'animate-fadeIn' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className={`md:order-3 md:col-span-2 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <h4 className="text-xl font-semibold text-white mb-6">Skills & Expertise</h4>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex items-center mb-2">
                    <skill.icon className="w-5 h-5 text-slate-400 mr-2" />
                    <span className="text-slate-300 font-medium">{skill.name}</span>
                    <span className="ml-auto text-slate-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out ${
                        isVisible ? 'translate-x-0' : '-translate-x-full'
                      }`}
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${600 + index * 200}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;