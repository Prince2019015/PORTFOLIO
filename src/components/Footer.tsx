import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { Icon: Github, href: "https://github.com/Prince2019015", label: "GitHub" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/prince-kumar-93b86a22a/", label: "LinkedIn" },
    { Icon: Mail, href: "mailto:princekumar27124@gmail.com", label: "Email" }
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="p-3 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-orange-600 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
          
          <div className="text-slate-400 text-sm">
            <p className="flex items-center justify-center gap-1 mb-2">
              Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> by Prince Kumar
            </p>
            <p>&copy; 2025 Portfolio. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;