
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Loader } from "lucide-react";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Add smooth scrolling for all internal links
    const handleInternalLinks = () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          const href = this.getAttribute('href');
          if (href && href !== '#') {
            e.preventDefault();
            const targetElement = document.querySelector(href);
            if (targetElement) {
              targetElement.scrollIntoView({
                behavior: 'smooth'
              });
            }
          }
        });
      });
    };

    // Set a timeout to simulate loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
      handleInternalLinks();
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-classic-cream min-h-screen">
      {/* Background elegant pattern */}
      <div className="absolute inset-0 pattern-bg opacity-5 pointer-events-none"></div>

      {/* Loading Screen */}
      {!isLoaded && (
        <div className="fixed inset-0 bg-classic-cream z-50 flex flex-col items-center justify-center">
          <div className="mb-6 relative">
            <div className="h-20 w-20 rounded-full border-4 border-classic-gold/20 border-t-classic-gold animate-spin"></div>
            <Loader className="h-10 w-10 text-classic-navy absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
          <h2 className="text-2xl font-serif text-classic-navy animate-pulse">Loading Portfolio</h2>
          <div className="mt-2 h-1 w-48 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-classic-gold animate-[loading_1.5s_ease-in-out_infinite]"></div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className={`transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar />
        <main>
          <Hero />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
