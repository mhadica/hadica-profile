
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
      icon: <Award className="h-8 w-8 text-classic-gold mb-4" />
    },
    {
      title: "Hackathon Certification",
      organization: "IEDC Tkmce",
      icon: <Book className="h-8 w-8 text-classic-gold mb-4" />
    },
    {
      title: "Volunteering Certification",
      organization: "Kerala Startup Mission",
      icon: <Award className="h-8 w-8 text-classic-gold mb-4" />
    }
  ];

  const courses = [
    "Object Oriented Programming",
    "Data Structures",
    "Operating System",
    "C Programming",
    "Python",
    "IoT",
    "Dbms"
  ];

  return (
    <section id="education" className="section bg-classic-cream/50">
      <div className="container mx-auto" id="education-section">
        <h2 className="section-heading text-center">Education & Certifications</h2>
        
        <div className="mt-16 max-w-4xl mx-auto">
          {/* Education */}
          <div className={`transition-all duration-1000 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="h-16 w-16 rounded-full bg-classic-navy flex items-center justify-center mr-4">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-classic-navy">TKM College of Engineering, Kollam</h3>
                  <p className="text-gray-600">Electrical and Computer Engineering, Computer science 2022 - 2026</p>
                </div>
              </div>
              
              <div className="ml-20">
                <div className="mb-4">
                  <span className="font-medium">Secured a Rank of </span>
                  <span className="text-xl font-bold text-classic-navy">4240</span>
                  <span className="font-medium"> in all Kerala Engineering Entrance Examination</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium">Completed higher education with </span>
                  <span className="text-xl font-bold ml-2 text-classic-gold">96.90%</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Certifications */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-classic-navy mb-6 text-center">Certifications</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className={`bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center hover-lift transition-all duration-700 delay-${index * 200} ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                >
                  <div className="flex justify-center">
                    {cert.icon}
                  </div>
                  <h4 className="text-xl font-bold text-classic-navy">{cert.title}</h4>
                  <p className="text-gray-600 mt-2">{cert.organization}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Courses */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-classic-navy mb-6 text-center">Courses</h3>
            
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              {courses.map((course, index) => (
                <div 
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center hover:bg-classic-navy hover:text-white transition-colors duration-300"
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
