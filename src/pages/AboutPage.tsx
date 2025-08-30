import React from 'react';
import { useState } from 'react';
import { Eye, Download, X } from 'lucide-react';
import About from '../components/About';

const AboutPage = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null);

  const certificates = [
    {
      id: 1,
      title: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2022",
      description: "Certified in cloud development and deployment practices.",
      color: "text-orange-300",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      title: "React Advanced Certification",
      issuer: "Meta",
      date: "2021",
      description: "Advanced React patterns, performance optimization, and testing.",
      color: "text-blue-300",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      title: "Google Cloud Professional",
      issuer: "Google Cloud",
      date: "2023",
      description: "Professional cloud architect certification for scalable solutions.",
      color: "text-green-300",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 4,
      title: "Docker Certified Associate",
      issuer: "Docker Inc",
      date: "2022",
      description: "Container orchestration and deployment expertise.",
      color: "text-cyan-300",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 5,
      title: "Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "2023",
      description: "Certified Kubernetes Administrator for container orchestration.",
      color: "text-purple-300",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 6,
      title: "MongoDB Developer",
      issuer: "MongoDB University",
      date: "2021",
      description: "Database design and optimization for modern applications.",
      color: "text-emerald-300",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 7,
      title: "Terraform Associate",
      issuer: "HashiCorp",
      date: "2023",
      description: "Infrastructure as Code and cloud automation expertise.",
      color: "text-indigo-300",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const handleDownloadCertificate = (certificate: any) => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = certificate.image;
    link.download = `${certificate.title.replace(/\s+/g, '_')}_Certificate.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="pt-20">
      <About />
      
      {/* Additional About Content */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">My Journey</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="text-xl font-semibold text-white mb-2">2023 - Present</h4>
                  <h5 className="text-lg text-purple-300 mb-2">Senior Full Stack Developer</h5>
                  <p className="text-slate-300">Leading development of scalable web applications using modern technologies and best practices.</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-6">
                  <h4 className="text-xl font-semibold text-white mb-2">2021 - 2023</h4>
                  <h5 className="text-lg text-orange-300 mb-2">Full Stack Developer</h5>
                  <p className="text-slate-300">Developed and maintained multiple client projects, focusing on user experience and performance optimization.</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="text-xl font-semibold text-white mb-2">2019 - 2021</h4>
                  <h5 className="text-lg text-blue-300 mb-2">Frontend Developer</h5>
                  <p className="text-slate-300">Started my journey in web development, specializing in React and modern frontend technologies.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Education & Certifications</h3>
              <div className="space-y-6">
                <div className="bg-slate-700/50 p-6 rounded-lg border border-slate-600/50">
                  <h4 className="text-xl font-semibold text-white mb-2">Bachelor of Computer Science</h4>
                  <p className="text-purple-300 mb-2">University Name • 2015-2019</p>
                  <p className="text-slate-300">Graduated with honors, specializing in software engineering and web technologies.</p>
                </div>
                
                {/* Certifications */}
                {certificates.map((cert) => (
                  <div key={cert.id} className="bg-slate-700/50 p-6 rounded-lg border border-slate-600/50 hover:bg-slate-700/70 transition-all duration-300">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-white mb-2">{cert.title}</h4>
                        <p className={`${cert.color} mb-2`}>{cert.issuer} • {cert.date}</p>
                        <p className="text-slate-300 mb-4">{cert.description}</p>
                      </div>
                      <button
                        onClick={() => setSelectedCertificate(cert)}
                        className="ml-4 flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-orange-600 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
                      >
                        <Eye size={16} />
                        View Certificate
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="bg-slate-800 p-4 flex justify-between items-center">
              <h3 className="text-xl font-semibold text-white">{selectedCertificate.title}</h3>
              <button
                onClick={() => setSelectedCertificate(null)}
                className="p-2 hover:bg-slate-700 rounded-full text-slate-300 hover:text-white transition-colors duration-200"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Certificate Display */}
            <div className="p-8 bg-gray-50">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-8 shadow-lg">
                {/* Certificate Header */}
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-orange-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">
                      {selectedCertificate.issuer.split(' ').map(word => word[0]).join('').slice(0, 2)}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">PROJECT CERTIFICATE</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-orange-500 mx-auto"></div>
                </div>

                {/* Certificate Content */}
                <div className="text-center space-y-6">
                  <p className="text-gray-600 text-lg">This is to certify that</p>
                  
                  <h1 className="text-4xl font-bold text-gray-800 mb-4">Prince Kumar</h1>
                  
                  <p className="text-gray-600 text-lg">has successfully completed</p>
                  
                  <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                    {selectedCertificate.title}
                  </h2>
                  
                  <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    {selectedCertificate.description}
                  </p>
                  
                  <div className="flex justify-between items-end mt-12 pt-8 border-t border-gray-200">
                    <div className="text-left">
                      <p className="text-gray-500 text-sm mb-1">Date of Completion</p>
                      <p className="font-semibold text-gray-800">{selectedCertificate.date}</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <span className="text-white font-bold text-sm">VERIFIED</span>
                      </div>
                      <p className="text-gray-600 text-sm">Certificate Seal</p>
                    </div>
                    
                    <div className="text-right">
                      <p className="text-gray-500 text-sm mb-1">Issued by</p>
                      <p className="font-semibold text-gray-800">{selectedCertificate.issuer}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Modal Footer */}
            <div className="bg-slate-800 p-4 flex justify-center">
              <button
                onClick={() => handleDownloadCertificate(selectedCertificate)}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-orange-600 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <Download size={18} />
                Download Certificate
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutPage;