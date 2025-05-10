
import { useState, useEffect } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const projectId = parseInt(
            entry.target.getAttribute("data-project-id") || "0"
          );
          
          if (entry.isIntersecting) {
            setVisibleProjects((prev) => 
              prev.includes(projectId) ? prev : [...prev, projectId]
            );
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll("[data-project-id]").forEach((item) => {
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "UPI Based Service Automation",
      description: "Django framework used for the integration of Razorpay with web automation. Payment and service request systems for local business operations.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop",
      tags: ["Django", "Razorpay", "Web Automation", "Git"],
      githubUrl: "https://github.com/mhadica/service-automation",
      liveUrl: "https://mhadica.github.io/service-automation/"
    },
    {
      id: 2,
      title: "EasyLancer",
      description: "A seamless communication platform tailored for freelancers and their clients with intelligent prompt assistance and automated project management.",
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=600&auto=format&fit=crop",
      tags: ["React", "Tailwind CSS", "Node.js", "Firebase"],
      githubUrl: "https://github.com/mhadica/easylancer",
      liveUrl: "https://mhadica.github.io/easylancer/"
    },
    {
      id: 3,
      title: "Line Follower Robot",
      description: "Car which automatically follows a black line on a white background using Arduino programming and sensor integration for precise navigation.",
      image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=600&auto=format&fit=crop",
      tags: ["Arduino", "Robotics", "C++", "Electronics"],
      githubUrl: "https://github.com/mhadica/line-follower",
      liveUrl: "#"
    },
    {
      id: 4,
      title: "Hotel Room Booking Website",
      description: "Developed a responsive hotel booking system with user authentication, real-time availability checking and secure payment processing.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com/mhadica/hotel-booking",
      liveUrl: "https://mhadica.github.io/hotel-booking/"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing my skills, experience and projects with a responsive design and interactive elements.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop",
      tags: ["React", "Tailwind CSS", "Responsive Design"],
      githubUrl: "https://github.com/mhadica/mhadica.github.io",
      liveUrl: "https://mhadica.github.io/mhadica/"
    },
    {
      id: 6,
      title: "React Weather App",
      description: "Weather application built with React that provides real-time weather updates and forecasts using external API integration.",
      image: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=600&auto=format&fit=crop",
      tags: ["React", "OpenWeather API", "CSS3"],
      githubUrl: "https://github.com/mhadica/weather-app",
      liveUrl: "https://mhadica.github.io/weather-app/"
    }
  ];

  return (
    <section id="projects" className="section bg-classic-cream/50">
      <div className="container mx-auto">
        <h2 className="section-heading text-center">Key Projects</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-16">
          {projects.map((project) => (
            <div
              key={project.id}
              data-project-id={project.id}
              className={`group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-700 ${
                visibleProjects.includes(project.id)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-classic-navy line-clamp-1">
                    {project.title}
                  </h3>
                  
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-classic-navy hover:text-classic-gold transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
                
                <p className="mt-3 text-gray-600 text-sm line-clamp-3">
                  {project.description}
                </p>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 rounded-full bg-classic-navy/10 text-classic-navy"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="mt-6">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="ghost"
                      className="text-classic-navy hover:text-classic-gold hover:bg-transparent p-0 group flex items-center"
                    >
                      View Project
                      <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-classic-navy text-classic-navy hover:bg-classic-navy/5"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
