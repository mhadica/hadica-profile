
import { useState, useEffect } from "react";
import { GraduationCap, Award, Book } from "lucide-react";

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    
    const educationSection = document.getElementById("education-section");
    if (educationSection) {
      observer.observe(educationSection);
    }
    
    return () => observer.disconnect();
  }, []);
  
  const certifications = [
    {
      title: "Website Development",
      organization: "Majors: HTML, CSS, JavaScript and Tailwind",
      icon: <Award className="h-6 w-6 md:h-8 md:w-8 text-classic-gold mb-3 md:mb-4" />
    },
    {
      title: "Hackathon Certification",
      organization: "IEDC Tkmce",
      icon: <Book className="h-6 w-6 md:h-8 md:w-8 text-classic-gold mb-3 md:mb-4" />
    },
    {
      title: "Volunteering Certification",
      organization: "Kerala Startup Mission",
      icon: <Award className="h-6 w-6 md:h-8 md:w-8 text-classic-gold mb-3 md:mb-4" />
    }
  ];

  const courses = [
    "Object Oriented Programming",
    "Data Structures",
    "Operating System",
    "C Programming",
    "Python",
    "IoT",
    "Dbms",
    "Big Data"
  ];

  return (
    <section id="education" className="section bg-classic-cream/50">
      <div className="container mx-auto px-4" id="education-section">
        <h2 className="section-heading text-center">Education & Certifications</h2>
        
        <div className="mt-10 md:mt-16 max-w-4xl mx-auto">
          {/* Education */}
          <div className={`transition-all duration-1000 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}>
            <div className="bg-white p-5 md:p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="flex flex-col md:flex-row items-start md:items-center mb-4 md:mb-6 gap-3 md:gap-0">
                <div className="h-12 w-12 md:h-16 md:w-16 rounded-full bg-classic-navy flex items-center justify-center md:mr-4">
                  <GraduationCap className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-classic-navy">TKM College of Engineering, Kollam</h3>
                  <p className="text-sm md:text-base text-gray-600">Electrical and Computer Engineering, Computer science 2022 - 2026</p>
                </div>
              </div>
              
              <div className="md:ml-20">
                <div className="mb-3 md:mb-4">
                  <span className="text-sm md:text-base font-medium">Secured a Rank of </span>
                  <span className="text-lg md:text-xl font-bold text-classic-navy">4240</span>
                  <span className="text-sm md:text-base font-medium"> in all Kerala Engineering Entrance Examination</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm md:text-base font-medium">Completed higher education with </span>
                  <span className="text-lg md:text-xl font-bold ml-1 md:ml-2 text-classic-gold">96.90%</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Certifications */}
          <div className="mt-8 md:mt-12">
            <h3 className="text-xl md:text-2xl font-bold text-classic-navy mb-4 md:mb-6 text-center">Certifications</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className={`bg-white p-4 md:p-6 rounded-lg shadow-md border border-gray-100 text-center hover-lift transition-all duration-700 delay-${index * 200} ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                >
                  <div className="flex justify-center">
                    {cert.icon}
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-classic-navy">{cert.title}</h4>
                  <p className="text-xs md:text-sm text-gray-600 mt-1 md:mt-2">{cert.organization}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Courses */}
          <div className="mt-8 md:mt-12">
            <h3 className="text-xl md:text-2xl font-bold text-classic-navy mb-4 md:mb-6 text-center">Courses</h3>
            
            <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              {courses.map((course, index) => (
                <div 
                  key={index}
                  className="bg-white p-3 md:p-4 rounded-lg shadow-sm border border-gray-100 text-center hover:bg-classic-navy hover:text-white transition-colors duration-300 text-sm md:text-base"
                >
                  {course}
                </div>
              ))}
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
