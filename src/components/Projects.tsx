
import { useState, useEffect } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const isMobile = useIsMobile();

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
      githubUrl: "https://github.com/mhadica/Cloud_json",
      liveUrl: ""
    },
    {
      id: 2,
      title: "EasyLancer",
      description: "A seamless communication platform tailored for freelancers and their clients with intelligent prompt assistance and automated project management.",
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=600&auto=format&fit=crop",
      tags: ["React", "Tailwind CSS", "Node.js", "Firebase"],
      githubUrl: "https://github.com/AlthafMuhammad2115/Kraft-Knight",
      liveUrl: ""
    },
    {
      id: 3,
      title: "Line Follower Robot",
      description: "Car which automatically follows a black line on a white background using Arduino programming and sensor integration for precise navigation.",
      image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=600&auto=format&fit=crop",
      tags: ["Arduino", "Robotics", "C++", "Electronics"],
      githubUrl: "https://github.com/mhadica/line-follower",
      liveUrl: ""
    },
    {
      id: 4,
      title: "Hotel Room Booking Website",
      description: "Developed a responsive hotel booking system with user authentication, real-time availability checking and secure payment processing.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "",
      liveUrl: "https://hotel-crystal-park.vercel.app/"
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
      title: "IEI TKMCE Club Website",
      description: "I led a team responsible for designing, developing, and deploying a fully functional website that showcased the club's activities and initiatives. This involved coordinating with team members, assigning tasks, ensuring timely progress, and maintaining high standards of quality throughout the development process. The final website served as a central platform for communicating the club's events, updates, and achievements to a wider audience.",
      image: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=600&auto=format&fit=crop",
      tags: ["React", "OpenWeather API", "CSS3"],
      githubUrl: "https://github.com/mhadica/weather-app",
      liveUrl: "https://ieitkmce.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="section bg-classic-cream/50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Key Projects</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-10 md:mt-16">
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
              <div className="h-36 sm:h-40 md:h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              
              <div className="p-4 md:p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg md:text-xl font-bold text-classic-navy line-clamp-1">
                    {project.title}
                  </h3>
                  
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-classic-navy hover:text-classic-gold transition-colors"
                  >
                    <Github className="h-4 w-4 md:h-5 md:w-5" />
                  </a>
                </div>
                
                <p className="mt-2 md:mt-3 text-gray-600 text-xs md:text-sm line-clamp-3">
                  {project.description}
                </p>
                
                <div className="mt-3 md:mt-4 flex flex-wrap gap-1 md:gap-2">
                  {project.tags.slice(0, isMobile ? 2 : 4).map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 rounded-full bg-classic-navy/10 text-classic-navy"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > (isMobile ? 2 : 4) && (
                    <span className="text-xs px-2 py-1 rounded-full bg-classic-navy/10 text-classic-navy">
                      +{project.tags.length - (isMobile ? 2 : 4)}
                    </span>
                  )}
                </div>
                
                <div className="mt-4 md:mt-6">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="ghost"
                      className="text-classic-navy hover:text-classic-gold hover:bg-transparent p-0 group flex items-center text-sm md:text-base"
                    >
                      View Project
                      <ArrowUpRight className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8 md:mt-12">
          <Button
            variant="outline"
            className="border-classic-navy text-classic-navy hover:bg-classic-navy/5 text-sm md:text-base"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
