// import React, { useState, useEffect, useRef } from 'react';
// import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';

// const Contact = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const sectionRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Simulate form submission
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setIsSubmitted(true);
//       setFormData({ name: '', email: '', message: '' });

//       setTimeout(() => setIsSubmitted(false), 3000);
//     }, 2000);
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const contactInfo = [
//     {
//       icon: Mail,
//       title: 'Email',
//       content: 'princekumar27124@gmail.com',
//       href: 'mailto:princekumar27124@gmail.com',
//     },
//     {
//       icon: Phone,
//       title: 'Phone',
//       content: '+91 7319974523',
//       href: 'tel:+91 7319974523',
//     },
//     {
//       icon: MapPin,
//       title: 'Location',
//       content: 'Dehradun, India',
//       href: '#',
//     },
//   ];

//   return (
//     <section id="contact" ref={sectionRef} className="py-20 bg-slate-800">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div
//           className={`text-center mb-16 transition-all duration-1000 ${
//             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//           }`}
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             Let's Work Together
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-orange-500 mx-auto mb-6"></div>
//           <p className="text-slate-300 text-lg max-w-2xl mx-auto">
//             Have a project in mind? I'd love to hear about it. Let's discuss how
//             we can bring your ideas to life.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Contact Information */}
//           <div
//             className={`transition-all duration-1000 delay-200 ${
//               isVisible
//                 ? 'opacity-100 translate-x-0'
//                 : 'opacity-0 -translate-x-10'
//             }`}
//           >
//             <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>
//             <div className="space-y-6">
//               {contactInfo.map((info, index) => (
//                 <a
//                   key={info.title}
//                   href={info.href}
//                   className="flex items-center p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-all duration-300 hover:scale-105 group"
//                 >
//                   <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-orange-500 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
//                     <info.icon className="w-6 h-6 text-white" />
//                   </div>
//                   <div className="ml-4">
//                     <h4 className="text-lg font-semibold text-white">
//                       {info.title}
//                     </h4>
//                     <p className="text-slate-300">{info.content}</p>
//                   </div>
//                 </a>
//               ))}
//             </div>

//             <div className="mt-12">
//               <h4 className="text-lg font-semibold text-white mb-4">
//                 Why work with me?
//               </h4>
//               <ul className="space-y-3 text-slate-300">
//                 <li className="flex items-center">
//                   <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
//                   Fast response time within 24 hours
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
//                   Quality-focused development approach
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
//                   Collaborative and transparent process
//                 </li>
//                 <li className="flex items-center">
//                   <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
//                   Ongoing support and maintenance
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div
//             className={`transition-all duration-1000 delay-400 ${
//               isVisible
//                 ? 'opacity-100 translate-x-0'
//                 : 'opacity-0 translate-x-10'
//             }`}
//           >
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium text-slate-300 mb-2"
//                 >
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
//                   placeholder="Your Name"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-slate-300 mb-2"
//                 >
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
//                   placeholder="your.email@example.com"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-medium text-slate-300 mb-2"
//                 >
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   rows={6}
//                   className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 resize-none"
//                   placeholder="Tell me about your project..."
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={isSubmitting || isSubmitted}
//                 className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-orange-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-purple-500/25 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
//               >
//                 {isSubmitting ? (
//                   <>
//                     <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
//                     Sending...
//                   </>
//                 ) : isSubmitted ? (
//                   <>
//                     <CheckCircle className="w-5 h-5" />
//                     Message Sent!
//                   </>
//                 ) : (
//                   <>
//                     <Send className="w-5 h-5" />
//                     Send Message
//                   </>
//                 )}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React, { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';
import { sendContactMessage } from '../services/emailService';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form data
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      alert('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);

    try {
      // Send actual email using Web3Forms
      const success = await sendContactMessage(formData);

      setIsSubmitting(false);

      if (success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });

        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        alert(
          'Failed to send message. Please try again or contact me directly at princekumar27124@gmail.com'
        );
      }
    } catch (error) {
      setIsSubmitting(false);
      console.error('Error submitting form:', error);
      alert(
        'Failed to send message. Please try again or contact me directly at princekumar27124@gmail.com'
      );
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'princekumar27124@gmail.com',
      href: 'mailto:princekumar27124@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'San Francisco, CA',
      href: '#',
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-orange-500 mx-auto mb-6"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's discuss how
            we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-10'
            }`}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={info.title}
                  href={info.href}
                  className="flex items-center p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-orange-500 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-white">
                      {info.title}
                    </h4>
                    <p className="text-slate-300">{info.content}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-12">
              <h4 className="text-lg font-semibold text-white mb-4">
                Why work with me?
              </h4>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Fast response time within 24 hours
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Quality-focused development approach
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Collaborative and transparent process
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Ongoing support and maintenance
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-10'
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-orange-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-purple-500/25 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
