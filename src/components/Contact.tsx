
import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+91 9562439603",
      link: "tel:+919562439603"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "hadumohd@gmail.com",
      link: "mailto:hadumohd@gmail.com"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Location",
      value: "Malappuram, Kerala, India",
      link: "https://maps.google.com/?q=Malappuram,Kerala,India"
    }
  ];

  return (
    <section id="contact" className="section bg-white">
      <div className="container mx-auto">
        <h2 className="section-heading text-center">Get In Touch</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {/* Contact details */}
          <div className="md:col-span-1 space-y-8">
            {contactInfo.map((item, index) => (
              <div 
                key={index}
                className="flex items-start p-5 bg-classic-cream/50 rounded-lg hover-lift"
              >
                <div className="h-12 w-12 rounded-full bg-classic-navy text-white flex items-center justify-center mr-4">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-medium text-classic-navy">{item.label}</h3>
                  <a 
                    href={item.link}
                    className="text-gray-600 hover:text-classic-gold transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.value}
                  </a>
                </div>
              </div>
            ))}
            
            {/* Social links */}
            <div className="flex space-x-4 mt-6">
              <a href="https://github.com/mhadica" className="h-10 w-10 rounded-full bg-classic-navy text-white flex items-center justify-center hover:bg-classic-gold transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/in/mhadica" className="h-10 w-10 rounded-full bg-classic-navy text-white flex items-center justify-center hover:bg-classic-gold transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Contact form */}
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="bg-classic-cream/50 p-6 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-classic-navy">
                    Your Name
                  </label>
                  <Input 
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-white border-gray-200 focus-visible:ring-classic-gold"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-classic-navy">
                    Your Email
                  </label>
                  <Input 
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="bg-white border-gray-200 focus-visible:ring-classic-gold"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-classic-navy">
                  Subject
                </label>
                <Input 
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  required
                  className="bg-white border-gray-200 focus-visible:ring-classic-gold"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-classic-navy">
                  Your Message
                </label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows={6}
                  required
                  className="bg-white border-gray-200 focus-visible:ring-classic-gold"
                />
              </div>
              
              <Button 
                type="submit" 
                className="bg-classic-navy hover:bg-classic-navy/90 w-full sm:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
