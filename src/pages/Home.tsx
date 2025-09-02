import React from 'react';
import { Link } from 'react-router-dom';
import { useCVDownloadTracking } from '../hooks/useCVDownloadTracking';
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Mouse,
} from 'lucide-react';

const Home = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = React.useState(0);
  const { trackCVDownload } = useCVDownloadTracking();
  const jobTitles = [
    'Software Engineer',
    'Full Stack Developer',
    'DevOps Engineer',
    'Web Developer',
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % jobTitles.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const handleCVDownload = async () => {
    // Track the download for email notification
    await trackCVDownload('Home Page');
    // The actual download will be handled by the Google Drive link
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-left space-y-8 animate-fadeInUp">
          <div className="space-y-4">
            <p className="text-purple-400 text-lg font-medium tracking-wide uppercase">
              Hello, I'm
            </p>
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Prince
              <span className="block text-transparent bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text">
                Kumar
              </span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-slate-300 font-light h-12 flex items-center">
              <span key={currentTitleIndex} className="animate-fadeInUp">
                {jobTitles[currentTitleIndex]}
              </span>
            </h2>
          </div>

          <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
            I create beautiful, functional, and user-centered digital
            experiences. Passionate about turning complex problems into simple,
            elegant solutions.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/projects"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-orange-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
            >
              View My Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <a
              href="https://drive.google.com/file/d/1f4bB1DLV4HHcAvUiw8QVy5bo0_OK1aEn/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCVDownload}
              className="inline-flex items-center px-8 py-4 border-2 border-slate-600 text-slate-300 font-semibold rounded-full hover:border-purple-500 hover:text-white transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2 w-5 h-5" />
              Download CV
            </a>
          </div>
          {/* Social Links */}
          <div className="flex space-x-6">
            {[
              {
                Icon: Github,
                href: 'https://github.com/Prince2019015',
                label: 'GitHub',
              },
              {
                Icon: Linkedin,
                href: 'https://www.linkedin.com/in/prince-kumar-93b86a22a/',
                label: 'LinkedIn',
              },
              {
                Icon: Mail,
                href: 'mailto:princekumar27124@gmail.com',
                label: 'Email',
              },
            ].map(({ Icon, href, label }) => (
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
        </div>

        {/* Right Content - Profile Image */}
        <div className="flex justify-center lg:justify-end animate-fadeInUp delay-200">
          <div className="relative">
            {/* Main Profile Image */}
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full p-1">
                <div className="w-full h-full bg-slate-900 rounded-full overflow-hidden">
                  <img
                    src="https://i.ibb.co/0jscs0mR/mypic3.jpg"
                    alt="Prince Kumar - Full Stack Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-r from-orange-500/30 to-red-500/30 rounded-full blur-xl animate-pulse delay-1000"></div>

              {/* Decorative Cards */}
              <div className="absolute -top-4 -left-4 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-lg p-3 animate-bounce delay-500">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-slate-300 text-sm font-medium">
                    Available for work
                  </span>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-lg p-3 animate-bounce delay-1000">
                <div className="flex items-center space-x-2">
                  <span className="text-slate-300 text-sm font-medium">
                    Ex-Intern @ ONGC
                  </span>
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mouse Click Indicator */}
      <Link
        to="/about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 group cursor-pointer"
      >
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <div className="relative">
            <Mouse className="w-8 h-8 text-slate-400 group-hover:text-purple-400 transition-colors duration-300" />
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-gradient-to-b from-purple-400 to-orange-400 rounded-full animate-pulse"></div>
          </div>
          <span className="text-slate-400 text-sm group-hover:text-purple-400 transition-colors duration-300">
            Click to explore
          </span>
        </div>
      </Link>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-20 w-1 h-1 bg-orange-400 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping delay-500"></div>
        <div className="absolute top-1/2 right-10 w-2 h-2 bg-pink-400 rounded-full animate-ping delay-1500"></div>
      </div>
    </div>
  );
};

export default Home;
