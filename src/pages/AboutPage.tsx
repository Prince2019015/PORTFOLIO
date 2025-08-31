// import React from 'react';
// import { useState } from 'react';
// import { Eye, Download, X } from 'lucide-react';
// import About from '../components/About';

// const AboutPage = () => {
//   const [selectedCertificate, setSelectedCertificate] = useState<any>(null);

//   const certificates = [
//     {
//       id: 1,
//       title: 'AWS Certified Developer',
//       issuer: 'Amazon Web Services',
//       date: '2022',
//       description: 'Certified in cloud development and deployment practices.',
//       color: 'text-orange-300',
//       image:
//         'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
//     },
//     {
//       id: 2,
//       title: 'React Advanced Certification',
//       issuer: 'Meta',
//       date: '2021',
//       description:
//         'Advanced React patterns, performance optimization, and testing.',
//       color: 'text-blue-300',
//       image:
//         'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
//     },
//     {
//       id: 3,
//       title: 'Google Cloud Professional',
//       issuer: 'Google Cloud',
//       date: '2023',
//       description:
//         'Professional cloud architect certification for scalable solutions.',
//       color: 'text-green-300',
//       image:
//         'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
//     },
//     {
//       id: 4,
//       title: 'Docker Certified Associate',
//       issuer: 'Docker Inc',
//       date: '2022',
//       description: 'Container orchestration and deployment expertise.',
//       color: 'text-cyan-300',
//       image:
//         'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
//     },
//     {
//       id: 5,
//       title: 'Kubernetes Administrator',
//       issuer: 'Cloud Native Computing Foundation',
//       date: '2023',
//       description:
//         'Certified Kubernetes Administrator for container orchestration.',
//       color: 'text-purple-300',
//       image:
//         'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
//     },
//     {
//       id: 6,
//       title: 'MongoDB Developer',
//       issuer: 'MongoDB University',
//       date: '2021',
//       description: 'Database design and optimization for modern applications.',
//       color: 'text-emerald-300',
//       image:
//         'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
//     },
//     {
//       id: 7,
//       title: 'Terraform Associate',
//       issuer: 'HashiCorp',
//       date: '2023',
//       description: 'Infrastructure as Code and cloud automation expertise.',
//       color: 'text-indigo-300',
//       image:
//         'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
//     },
//   ];

//   const handleDownloadCertificate = (certificate: any) => {
//     // Create a temporary link element to trigger download
//     const link = document.createElement('a');
//     link.href = certificate.image;
//     link.download = `${certificate.title.replace(/\s+/g, '_')}_Certificate.jpg`;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <>
//       <div className="pt-20">
//         <About />

//         {/* Additional About Content */}
// <section className="py-20 bg-slate-800">
//   <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//     <div className="grid md:grid-cols-2 gap-12">
//       <div>
//         <h3 className="text-3xl font-bold text-white mb-6">
//           My Education
//         </h3>
//         <div className="space-y-6">
//           <div className="border-l-4 border-purple-500 pl-6">
//             <h4 className="text-xl font-semibold text-white mb-2">
//               B.Tech Computer Science & Engineering
//             </h4>
//             <h4 className="text-xl font-semibold text-white mb-2">
//               2021 - 2025
//             </h4>
//             <h5 className="text-lg text-purple-300 mb-2">
//               GPA: 8.02/10
//             </h5>
//             <p className="text-slate-300">
//               Coursework: Data Structures & Algorithms, Operating
//               Systems, Database Management Systems, Computer Networks,
//               Artificial Intelligence, Web Development, Cyber Security
//             </p>
//           </div>
//           <div className="border-l-4 border-orange-500 pl-6">
//             <h4 className="text-xl font-semibold text-white mb-2">
//               Class XII
//             </h4>
//             <h4 className="text-xl font-semibold text-white mb-2">
//               2018 - 2020
//             </h4>
//             <h5 className="text-lg text-orange-300 mb-2">
//               Science (PCM)
//             </h5>
//             <p className="text-slate-300">
//               Focused on core subjects like Physics, Chemistry,
//               Mathematics. Built a strong foundation in programming and
//               problem-solving.
//             </p>
//           </div>
//           <div className="border-l-4 border-blue-500 pl-6">
//             <h4 className="text-xl font-semibold text-white mb-2">
//               Class X
//             </h4>
//             <h4 className="text-xl font-semibold text-white mb-2">
//               2017 - 2018
//             </h4>
//             <h5 className="text-lg text-blue-300 mb-2">
//               Secondary Education
//             </h5>
//             <p className="text-slate-300">
//               Achieved strong academic performance and developed early
//               interest in technology and coding.
//             </p>
//           </div>
//         </div>
//       </div>

//               <div>
//                 <h3 className="text-3xl font-bold text-white mb-6">
//                   Internship & Certifications
//                 </h3>
//                 <div className="space-y-6">
//                   {/* Certifications */}
//                   {certificates.map((cert) => (
//                     <div
//                       key={cert.id}
//                       className="bg-slate-700/50 p-6 rounded-lg border border-slate-600/50 hover:bg-slate-700/70 transition-all duration-300"
//                     >
//                       <div className="flex justify-between items-start">
//                         <div className="flex-1">
//                           <h4 className="text-xl font-semibold text-white mb-2">
//                             {cert.title}
//                           </h4>
//                           <p className={`${cert.color} mb-2`}>
//                             {cert.issuer} • {cert.date}
//                           </p>
//                           <p className="text-slate-300 mb-4">
//                             {cert.description}
//                           </p>
//                         </div>
//                         <button
//                           onClick={() =>
//                             setSelectedCertificate(
//                               'https://drive.google.com/file/d/1OvvviE4uTdAMm25WWxAjID0i2h7Td00I/view?usp=drivesdk'
//                             )
//                           }
//                           className="ml-4 flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-orange-600 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
//                         >
//                           <Eye size={16} />
//                           View Certificate
//                         </button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>

//       {/* Certificate Modal */}
//       {selectedCertificate && (
//         <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
//             {/* Modal Header */}
//             <div className="bg-slate-800 p-4 flex justify-between items-center">
//               <h3 className="text-xl font-semibold text-white">
//                 {selectedCertificate.title}
//               </h3>
//               <button
//                 onClick={() => setSelectedCertificate(null)}
//                 className="p-2 hover:bg-slate-700 rounded-full text-slate-300 hover:text-white transition-colors duration-200"
//               >
//                 <X size={20} />
//               </button>
//             </div>

//             {/* Certificate Display */}
//             <div className="p-8 bg-gray-50">
//               <div className="bg-white border-2 border-gray-200 rounded-lg p-8 shadow-lg">
//                 {/* Certificate Header */}
//                 <div className="text-center mb-8">
//                   <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-orange-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
//                     <span className="text-white font-bold text-xl">
//                       {selectedCertificate.issuer
//                         .split(' ')
//                         .map((word) => word[0])
//                         .join('')
//                         .slice(0, 2)}
//                     </span>
//                   </div>
//                   <h2 className="text-3xl font-bold text-gray-800 mb-2">
//                     PROJECT CERTIFICATE
//                   </h2>
//                   <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-orange-500 mx-auto"></div>
//                 </div>

//                 {/* Certificate Content */}
//                 <div className="text-center space-y-6">
//                   <p className="text-gray-600 text-lg">
//                     This is to certify that
//                   </p>

//                   <h1 className="text-4xl font-bold text-gray-800 mb-4">
//                     Prince Kumar
//                   </h1>

//                   <p className="text-gray-600 text-lg">
//                     has successfully completed
//                   </p>

//                   <h2 className="text-2xl font-semibold text-gray-800 mb-6">
//                     {selectedCertificate.title}
//                   </h2>

//                   <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
//                     {selectedCertificate.description}
//                   </p>

//                   <div className="flex justify-between items-end mt-12 pt-8 border-t border-gray-200">
//                     <div className="text-left">
//                       <p className="text-gray-500 text-sm mb-1">
//                         Date of Completion
//                       </p>
//                       <p className="font-semibold text-gray-800">
//                         {selectedCertificate.date}
//                       </p>
//                     </div>

//                     <div className="text-center">
//                       <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full mx-auto mb-2 flex items-center justify-center">
//                         <span className="text-white font-bold text-sm">
//                           VERIFIED
//                         </span>
//                       </div>
//                       <p className="text-gray-600 text-sm">Certificate Seal</p>
//                     </div>

//                     <div className="text-right">
//                       <p className="text-gray-500 text-sm mb-1">Issued by</p>
//                       <p className="font-semibold text-gray-800">
//                         {selectedCertificate.issuer}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Modal Footer */}
//             <div className="bg-slate-800 p-4 flex justify-center">
//               <button
//                 onClick={() => handleDownloadCertificate(selectedCertificate)}
//                 className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-orange-600 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
//               >
//                 <Download size={18} />
//                 Download Certificate
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default AboutPage;

import React from 'react';
import { useState } from 'react';
import { Eye, Download, X } from 'lucide-react';
import About from '../components/About';

const AboutPage = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null);

  const certificates = [
    {
      id: 1,
      title: 'KPMG AU - Data	Analytics	Consulting	Virtual	Internship',
      issuer: 'Forage',
      date: '06/2024',
      description:
        'Completed a virtual job simulation with KPMG Australia’s Data, Analytics & Modelling team, focusing on data quality assessment, customer segmentation, and dashboard creation to deliver actionable insights',
      color: 'text-blue-300',
      image:
        'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/KPMG%20AU/m7W4GMqeT3bh9Nb2c_KPMG%20AU_NKMsmXaNyodYNnmXP_1718307708994_completion_certificate.pdf',
      certificateUrl:
        'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/KPMG%20AU/m7W4GMqeT3bh9Nb2c_KPMG%20AU_NKMsmXaNyodYNnmXP_1718307708994_completion_certificate.pdf',
    },
    {
      id: 2,
      title: 'Google Data Analytics Professional Certificate',
      issuer: 'Coursera',
      date: '2024',
      description:
        'Completed an 8-course program covering data collection, cleaning, analysis, visualization, and R programming with a capstone case study.',
      color: 'text-orange-300',
      image:
        'https://drive.google.com/file/d/1Me70Lqzm8RTAmP2n06JagrOnMuIJP_U6/view?usp=drivesdk',
      certificateUrl:
        'https://drive.google.com/file/d/1Me70Lqzm8RTAmP2n06JagrOnMuIJP_U6/view?usp=drivesdk',
    },

    {
      id: 3,
      title: 'AWS - Solutions Architecture Job Simulation',
      issuer: 'Forage',
      date: '08/2025',
      description:
        'Completed AWS APAC Solutions Architecture virtual experience program on Forage, where I designed a scalable hosting architecture using Elastic Beanstalk for a high-growth client and communicated the solution with clear cost analysis.',
      color: 'text-green-300',
      image:
        'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_NKMsmXaNyodYNnmXP_1756211829527_completion_certificate.pdf',
      certificateUrl:
        'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_NKMsmXaNyodYNnmXP_1756211829527_completion_certificate.pdf',
    },
    {
      id: 4,
      title: 'Mastercard - Cybersecurity Job Simulation',
      issuer: 'Forage',
      date: '2025',
      description:
        'Worked as a Security Analyst to detect phishing threats, assess security vulnerabilities across business units, and design targeted awareness training programs to strengthen cyber defense',
      color: 'text-purple-300',
      image:
        'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/mfxGwGDp6WkQmtmTf/vcKAB5yYAgvemepGQ_mfxGwGDp6WkQmtmTf_NKMsmXaNyodYNnmXP_1756149868176_completion_certificate.pdf',
      certificateUrl:
        'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/mfxGwGDp6WkQmtmTf/vcKAB5yYAgvemepGQ_mfxGwGDp6WkQmtmTf_NKMsmXaNyodYNnmXP_1756149868176_completion_certificate.pdf',
    },
    {
      id: 5,
      title:
        'Hewlett Packard Enterprise  - Software Engineering Job Simulation',
      issuer: 'Forage',
      date: '2025',
      description:
        'Developed a RESTful web service using Java Spring Boot for employee management, integrated JSON data handling and implemented unit testing to ensure high performance and reliability',
      color: 'text-emerald-300',
      image:
        'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/fgHAi6dLhpRsGKyyN/da2T3WZCbMAJD7bNB_fgHAi6dLhpRsGKyyN_NKMsmXaNyodYNnmXP_1748024554235_completion_certificate.pdf',
      certificateUrl:
        'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/fgHAi6dLhpRsGKyyN/da2T3WZCbMAJD7bNB_fgHAi6dLhpRsGKyyN_NKMsmXaNyodYNnmXP_1748024554235_completion_certificate.pdf',
    },
    {
      id: 6,
      title: 'British Airways - Data Science Job Simulation',
      issuer: 'Forage',
      date: '2025',
      description:
        'Performed customer review scraping and analysis and built a predictive model to identify key factors influencing buying behavior, demonstrating data-driven decision-making skills.',
      color: 'text-indigo-300',
      image:
        'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/tMjbs76F526fF5v3G/NjynCWzGSaWXQCxSX_tMjbs76F526fF5v3G_NKMsmXaNyodYNnmXP_1748023944160_completion_certificate.pdf',
      certificateUrl:
        'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/tMjbs76F526fF5v3G/NjynCWzGSaWXQCxSX_tMjbs76F526fF5v3G_NKMsmXaNyodYNnmXP_1748023944160_completion_certificate.pdf',
    },
    {
      id: 7,
      title: 'Walmart USA - Advanced Software Engineering Job Simulation',
      issuer: 'Forage',
      date: '11/2023',
      description:
        'Gained hands-on experience in advanced software engineering by solving real-world Walmart case studies — optimized shipping operations with a custom heap data structure in Java, and improved system design through UML class and ER diagrams for complex departmental requirements',
      color: 'text-cyan-300',
      image:
        'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Walmart%20USA/oX6f9BbCL9kJDJzfg_Walmart%20USA_NKMsmXaNyodYNnmXP_1699640339116_completion_certificate.pdf',
      certificateUrl:
        'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Walmart%20USA/oX6f9BbCL9kJDJzfg_Walmart%20USA_NKMsmXaNyodYNnmXP_1699640339116_completion_certificate.pdf',
    },
  ];

  const handleDownloadCertificate = (certificate: any) => {
    const link = document.createElement('a');
    link.href = certificate.image;
    link.download = `${certificate.title.replace(/\s+/g, '_')}_Certificate.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // convert Google Drive link to embed link
  const getEmbedUrl = (url: string) => {
    const match = url.match(/\/d\/(.*?)\//);
    if (match && match[1]) {
      return `https://drive.google.com/file/d/${match[1]}/preview`;
    }
    return url;
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
                <h3 className="text-3xl font-bold text-white mb-6">
                  My Education
                </h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h4 className="text-xl font-semibold text-white mb-2">
                      B.Tech Computer Science & Engineering
                    </h4>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      2021 - 2025
                    </h4>
                    <h5 className="text-lg text-purple-300 mb-2">
                      GPA: 8.02/10
                    </h5>
                    <p className="text-slate-300">
                      Coursework: Data Structures & Algorithms, Operating
                      Systems, Database Management Systems, Computer Networks,
                      Artificial Intelligence, Web Development, Cyber Security
                    </p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-6">
                    <h4 className="text-xl font-semibold text-white mb-2">
                      Class XII
                    </h4>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      2018 - 2020
                    </h4>
                    <h5 className="text-lg text-orange-300 mb-2">
                      Science (PCM)
                    </h5>
                    <p className="text-slate-300">
                      Focused on core subjects like Physics, Chemistry,
                      Mathematics. Built a strong foundation in programming and
                      problem-solving.
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="text-xl font-semibold text-white mb-2">
                      Class X
                    </h4>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      2017 - 2018
                    </h4>
                    <h5 className="text-lg text-blue-300 mb-2">
                      Secondary Education
                    </h5>
                    <p className="text-slate-300">
                      Achieved strong academic performance and developed early
                      interest in technology and coding.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  Internship & Certifications
                </h3>
                <div className="space-y-6">
                  <div className="bg-slate-700/50 p-6 rounded-lg border border-slate-600/50">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-white mb-2">
                          Software Development Intern
                        </h4>
                        <p className="text-purple-300 mb-2">ONGC • 2024</p>
                        <p className="text-slate-300 mb-4">
                          Contributed to Stirling PDF by developing new features
                          and deploying it on ONGC’s internal systems and
                          network using Docker and Windows environments, while
                          creating installation workflows and technical
                          documentation to improve operational efficiency.
                        </p>
                      </div>
                      <button
                        onClick={() =>
                          setSelectedCertificate({
                            title: 'Bachelor of Computer Science',
                            issuer: 'University Name',
                            date: '2019',
                            description:
                              'Graduated with honors, specializing in software engineering and web technologies.',
                            certificateUrl:
                              'https://drive.google.com/file/d/1OvvviE4uTdAMm25WWxAjID0i2h7Td00I/view?usp=drivesdk',
                            image: '',
                          })
                        }
                        className="ml-4 flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-orange-600 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
                      >
                        <Eye size={16} />
                        View Certificate
                      </button>
                    </div>
                  </div>

                  {/* Certifications */}
                  {certificates.map((cert) => (
                    <div
                      key={cert.id}
                      className="bg-slate-700/50 p-6 rounded-lg border border-slate-600/50 hover:bg-slate-700/70 transition-all duration-300"
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-white mb-2">
                            {cert.title}
                          </h4>
                          <p className={`${cert.color} mb-2`}>
                            {cert.issuer} • {cert.date}
                          </p>
                          <p className="text-slate-300 mb-4">
                            {cert.description}
                          </p>
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
              <h3 className="text-xl font-semibold text-white">
                {selectedCertificate.title}
              </h3>
              <button
                onClick={() => setSelectedCertificate(null)}
                className="p-2 hover:bg-slate-700 rounded-full text-slate-300 hover:text-white transition-colors duration-200"
              >
                <X size={20} />
              </button>
            </div>

            {/* Certificate Display */}
            <div className="p-4 bg-gray-50 h-[75vh]">
              <iframe
                src={getEmbedUrl(selectedCertificate.certificateUrl)}
                title="Certificate"
                className="w-full h-full rounded-lg border border-gray-300"
                allow="autoplay"
              />
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
