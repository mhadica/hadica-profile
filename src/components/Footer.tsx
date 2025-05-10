
import { Heart } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-classic-navy text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <a href="#" className="text-2xl font-serif font-bold">
              Mohammed Hadi<span className="text-classic-gold">.</span>
            </a>
            <p className="mt-2 text-gray-400">
              Front-end Developer & Web Designer
            </p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <div className="flex space-x-4">
              <a href="https://github.com/mhadica" className="hover:text-classic-gold transition-colors">
                GitHub
              </a>
              <a href="https://linkedin.com/in/mhadica" className="hover:text-classic-gold transition-colors">
                LinkedIn
              </a>
              <a href="mailto:hadumohd@gmail.com" className="hover:text-classic-gold transition-colors">
                Email
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400">
          <p className="flex items-center justify-center">
            © {year} Mohammed Hadi. Made with 
            <Heart className="h-4 w-4 mx-1 text-red-500 animate-pulse-slow" /> 
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
