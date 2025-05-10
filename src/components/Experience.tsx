
import { useEffect, useState } from "react";
import { Calendar, Code, Monitor } from "lucide-react";

const Experience = () => {
  const [activeSection, setActiveSection] = useState(0);
  
  // Observer logic to detect when timeline items are in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-x-0');
            entry.target.classList.remove('opacity-0', 'translate-x-20');
          }
        });
      },
      { threshold: 0.3 }
    );
    
    document.querySelectorAll('.timeline-item').forEach(item => {
      observer.observe(item);
    });
    
    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      role: "Web Head",
      company: "IEI TKMCE",
      period: "Aug 2023 - Present",
      icon: <Monitor className="h-6 w-6" />,
      details: [
        "Managed a team to build a complete website for the club activities",
        "Intelligently utilized the git version controller",
        "The website is currently running @ \"www.ieitkmce.com\""
      ]
    },
    {
      role: "React Front-end Developer",
      company: "Freelancer",
      period: "Apr 2024 - Present",
      icon: <Code className="h-6 w-6" />,
      details: [
        "Collaborated with clients, enhancing user interfaces and delivering responsive web designs"
      ]
    },
    {
      role: "Technical Analyst",
      company: "IEDC TKMCE",
      period: "Feb 2024 - Present",
      icon: <Calendar className="h-6 w-6" />,
      details: [
        "Worked on the technical aspects of each event organized by IEDC TKMCE"
      ]
    }
  ];

  return (
    <section id="experience" className="section bg-white">
      <div className="container mx-auto">
        <h2 className="section-heading text-center">Experience</h2>
        
        <div className="mt-16 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`timeline-item mb-12 transition-all duration-700 opacity-0 translate-x-20 flex gap-6`}
            >
              {/* Icon circle */}
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-classic-navy text-white flex items-center justify-center shadow-lg">
                  {exp.icon}
                </div>
                {index < experiences.length - 1 && (
                  <div className="w-1 h-full bg-gray-200 mx-auto mt-4"></div>
                )}
              </div>
              
              {/* Content */}
              <div className="bg-classic-cream/50 p-6 rounded-lg shadow-md border border-gray-100 hover-lift flex-1">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-classic-navy">{exp.role}</h3>
                    <h4 className="text-classic-gold font-medium">{exp.company}</h4>
                  </div>
                  <span className="bg-classic-navy/10 text-classic-navy px-3 py-1 rounded-full text-sm">
                    {exp.period}
                  </span>
                </div>
                
                <ul className="mt-4 space-y-2">
                  {exp.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-classic-gold mr-2">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
