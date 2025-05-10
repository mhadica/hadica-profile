
import { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-[90vh] flex items-center relative overflow-hidden py-16 md:py-0">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 md:right-32 w-32 md:w-64 h-32 md:h-64 bg-classic-gold/5 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-10 md:bottom-20 left-10 md:left-40 w-40 md:w-80 h-40 md:h-80 bg-classic-gold/5 rounded-full animate-pulse-slow animation-delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 py-10 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Text Content */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} order-2 md:order-1`}>
          <h4 className="font-medium text-classic-gold mb-2">Hello, I'm</h4>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-classic-navy mb-4">Mohammed Hadi</h1>
          <div className="accent-divider ml-0"></div>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-classic-navy mb-4 md:mb-6">React Front-End Developer & Web Designer</h2>
          <p className="text-gray-600 mb-6 md:mb-8 max-w-lg">
            Experienced web developer with a passion for creating responsive, 
            user-friendly interfaces. Specialized in React development and front-end 
            technologies. Based in Malappuram, Kerala, India.
          </p>
          
          <div className="flex flex-wrap gap-3 md:gap-4">
            <Button 
              className="bg-classic-navy hover:bg-classic-navy/90 group text-white text-sm md:text-base" 
              onClick={scrollToProjects}
            >
              View My Work 
              <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              className="border-classic-gold text-classic-gold hover:bg-classic-gold/5 hover:text-classic-gold hover:border-classic-gold text-sm md:text-base"
            >
              Download CV
            </Button>
          </div>
          
          <div className="mt-6 md:mt-8 flex space-x-3 md:space-x-4">
            <a href="https://github.com/mhadica" 
               className="p-2 md:p-3 border border-gray-300 rounded-full text-classic-navy hover:text-classic-gold hover:border-classic-gold transition-colors duration-300"
               target="_blank"
               rel="noopener noreferrer">
              <Github className="h-4 w-4 md:h-5 md:w-5" />
            </a>
            <a href="https://linkedin.com/in/mhadica" 
               className="p-2 md:p-3 border border-gray-300 rounded-full text-classic-navy hover:text-classic-gold hover:border-classic-gold transition-colors duration-300"
               target="_blank"
               rel="noopener noreferrer">
              <Linkedin className="h-4 w-4 md:h-5 md:w-5" />
            </a>
            <a href="mailto:hadumohd@gmail.com" 
               className="p-2 md:p-3 border border-gray-300 rounded-full text-classic-navy hover:text-classic-gold hover:border-classic-gold transition-colors duration-300">
              <Mail className="h-4 w-4 md:h-5 md:w-5" />
            </a>
          </div>
        </div>
        
        {/* Image - Reduced size */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} order-1 md:order-2 flex justify-center`}>
          <div className="relative w-full max-w-[280px] md:max-w-md mx-auto md:mx-0">
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-classic-gold/10 rounded-tl-[60px] md:rounded-tl-[100px] rounded-br-[60px] md:rounded-br-[100px] transform rotate-3 scale-105"></div>
            
            {/* Main image - optimized size */}
            <div className="relative overflow-hidden rounded-tl-[50px] md:rounded-tl-[80px] rounded-br-[50px] md:rounded-br-[80px] shadow-xl border-4 md:border-8 border-white">
              <img 
                src="/lovable-uploads/3d2fbf04-2074-49b2-88de-2e1dc460fdce.png" 
                alt="Mohammed Hadi" 
                className="w-full h-auto object-cover aspect-[4/5]"
                loading="eager"
                width="400"
                height="500"
              />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 md:-bottom-5 md:-left-5 bg-white py-2 px-3 md:py-3 md:px-5 rounded-full shadow-lg animate-float">
              <span className="text-sm md:text-base text-classic-navy font-bold">React Developer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
