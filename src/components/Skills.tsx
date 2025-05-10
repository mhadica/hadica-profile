
import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Layout, Server } from "lucide-react";

const Skills = () => {
  const [animateSkills, setAnimateSkills] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState("all");
  
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
    { id: "all", name: "All Skills", icon: <Code className="h-5 w-5 mr-2" /> },
    { id: "frontend", name: "Frontend", icon: <Layout className="h-5 w-5 mr-2" /> },
    { id: "backend", name: "Backend", icon: <Server className="h-5 w-5 mr-2" /> },
    { id: "database", name: "Database", icon: <Database className="h-5 w-5 mr-2" /> },
  ];
  
  const skills = [
    { name: "HTML", level: 90, category: "frontend" },
    { name: "CSS", level: 85, category: "frontend" },
    { name: "JavaScript", level: 80, category: "frontend" },
    { name: "React", level: 85, category: "frontend" },
    { name: "Tailwind CSS", level: 80, category: "frontend" },
    { name: "Django", level: 75, category: "backend" },
    { name: "Python", level: 70, category: "backend" },
    { name: "C Programming", level: 75, category: "backend" },
    { name: "IoT", level: 65, category: "backend" },
    { name: "DBms", level: 70, category: "database" }
  ];
  
  const filteredSkills = categoryFilter === "all" 
    ? skills 
    : skills.filter(skill => skill.category === categoryFilter);
  
  return (
    <section id="skills" className="section bg-white">
      <div className="container mx-auto" id="skills-section">
        <h2 className="section-heading text-center">Skills</h2>
        
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setCategoryFilter(category.id)}
              className={`flex items-center px-4 py-2 rounded-full transition-all duration-300 ${
                categoryFilter === category.id
                  ? "bg-classic-navy text-white shadow-md"
                  : "bg-classic-cream text-classic-navy hover:bg-classic-gold/20"
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-classic-cream/50 p-5 rounded-lg border border-gray-100 shadow-sm hover-lift"
            >
              <div className="flex justify-between mb-2">
                <h3 className="font-medium text-classic-navy">{skill.name}</h3>
                <span className="text-classic-gold">{skill.level}%</span>
              </div>
              <Progress
                value={animateSkills ? skill.level : 0}
                className="h-2 bg-gray-200 transition-all duration-1000 delay-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
