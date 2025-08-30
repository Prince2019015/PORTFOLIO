import React from 'react';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <div className="pt-20">
      <Contact />
      
      {/* Additional Contact Content */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-orange-500 mx-auto mb-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "What's your typical project timeline?",
                answer: "Project timelines vary based on complexity, but most websites take 2-6 weeks from start to finish. I'll provide a detailed timeline during our initial consultation."
              },
              {
                question: "Do you provide ongoing maintenance?",
                answer: "Yes! I offer ongoing maintenance packages to keep your website updated, secure, and performing optimally. This includes regular backups, security updates, and content updates."
              },
              {
                question: "What technologies do you specialize in?",
                answer: "I specialize in React, TypeScript, Node.js, and modern web technologies. I also work with various databases, cloud platforms, and deployment solutions."
              },
              {
                question: "Can you help with existing projects?",
                answer: "Absolutely! I can help improve existing websites, add new features, fix bugs, or completely redesign your current solution."
              },
              {
                question: "Do you work with international clients?",
                answer: "Yes, I work with clients worldwide. I'm comfortable with remote collaboration and can adapt to different time zones for meetings and communication."
              },
              {
                question: "What's included in your development process?",
                answer: "My process includes discovery, design mockups, development, testing, deployment, and post-launch support. You'll be involved throughout the entire process."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors duration-300">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-slate-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;