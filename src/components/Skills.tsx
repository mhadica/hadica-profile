
import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Layout, Server } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Skills = () => {
  const [animateSkills, setAnimateSkills] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimateSkills(true);
        }
      },
      { threshold: 0.3 }
    );
    
    const skillsSection = document.getElementById("skills-section");
    if (skillsSection) {
      observer.observe(skillsSection);
    }
    
    return () => observer.disconnect();
  }, []);
  
  const categories = [
    { id: "all", name: "All Skills", icon: <Code className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2" /> },
    { id: "frontend", name: "Frontend", icon: <Layout className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2" /> },
    { id: "backend", name: "Backend", icon: <Server className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2" /> },
    { id: "tools", name: "Tools", icon: <Database className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2" /> },
  ];
  
  const skills = [
    { name: "JavaScript", level: 90, category: "frontend" },
    { name: "TypeScript", level: 85, category: "frontend" },
    { name: "React", level: 90, category: "frontend" },
    { name: "Tailwind CSS", level: 85, category: "frontend" },
    { name: "Node.js", level: 80, category: "backend" },
    { name: "Express", level: 80, category: "backend" },
    { name: "Django", level: 75, category: "backend" },
    { name: "Firebase", level: 80, category: "backend" },
    { name: "Java", level: 85, category: "backend" },
    { name: "C", level: 75, category: "backend" },
    { name: "Git", level: 85, category: "tools" },
    { name: "AWS", level: 70, category: "tools" },
    { name: "MySQL", level: 75, category: "tools" },
    { name: "JWT", level: 80, category: "tools" },
    { name: "Razorpay", level: 75, category: "tools" },
    { name: "Vercel", level: 80, category: "tools" }
  ];
  
  const filteredSkills = categoryFilter === "all" 
    ? skills 
    : skills.filter(skill => skill.category === categoryFilter);
  
  return (
    <section id="skills" className="section bg-white">
      <div className="container mx-auto px-4" id="skills-section">
        <h2 className="section-heading text-center">Skills</h2>
        
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mt-8 md:mt-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setCategoryFilter(category.id)}
              className={`flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full transition-all duration-300 text-xs md:text-sm ${
                categoryFilter === category.id
                  ? "bg-classic-navy text-white shadow-md"
                  : "bg-classic-cream text-classic-navy hover:bg-classic-gold/20"
              }`}
            >
              {category.icon}
              {isMobile && category.id === "all" ? "All" : category.name}
            </button>
          ))}
        </div>
        
        <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-classic-cream/50 p-4 md:p-5 rounded-lg border border-gray-100 shadow-sm hover-lift"
            >
              <div className="flex justify-between mb-2">
                <h3 className="font-medium text-sm md:text-base text-classic-navy">{skill.name}</h3>
                <span className="text-sm md:text-base text-classic-gold">{skill.level}%</span>
              </div>
              <Progress
                value={animateSkills ? skill.level : 0}
                className="h-1.5 md:h-2 bg-gray-200 transition-all duration-1000 delay-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
