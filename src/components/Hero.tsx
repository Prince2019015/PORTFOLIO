import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "I'm a Full Stack Developer";
  
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    
    return () => clearInterval(typingInterval);
  }, []);


  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="text-center z-10 px-4">
        <div className="mb-8 transform animate-fadeInUp">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 animate-slideInFromTop">
            Hello
          </h1>
          <div className="h-16 flex items-center justify-center">
            <h2 className="text-2xl md:text-4xl text-slate-300 font-light">
              {displayedText}
              <span className="animate-pulse">|</span>
            </h2>
          </div>
        </div>

        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 animate-slideInFromBottom">
          Crafting beautiful, functional, and user-centered digital experiences with modern technologies.
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12 animate-slideInFromBottom delay-200">
          {[
            { Icon: Github, href: "https://github.com/Prince2019015", label: "GitHub" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/prince-kumar-93b86a22a/", label: "LinkedIn" },
            { Icon: Mail, href: "mailto:princekumar27124@gmail.com", label: "Email" }
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/25"
              aria-label={label}
            >
              <Icon size={24} />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          to="/projects"
          className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-orange-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 animate-slideInFromBottom delay-300"
        >
          View My Work
          <ChevronDown className="inline ml-2 group-hover:translate-y-1 transition-transform duration-300" size={20} />
        </Link>
      </div>

      {/* Scroll indicator */}
      <Link 
        to="/about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:text-purple-400 transition-colors duration-300"
      >
        <ChevronDown className="text-white/60" size={32} />
      </Link>
    </section>
  );
};

export default Hero;