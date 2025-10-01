import { useEffect, useState } from 'react';
import { HeroSection } from './HeroSection';
import { AboutSection } from './AboutSection';
import { SkillsSection } from './SkillsSection';
import { ProjectsSection } from './ProjectsSection';
import { ContactSection } from './ContactSection';

export const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Parallax effect
      document.documentElement.style.setProperty('--scroll-slow', `${scrollY * 0.1}px`);
      document.documentElement.style.setProperty('--scroll-medium', `${scrollY * 0.3}px`);
      document.documentElement.style.setProperty('--scroll-fast', `${scrollY * 0.5}px`);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  return (
    <div className="relative">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0">
        {/* Animated gradient background */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at ${50 + Math.sin(scrollY * 0.001) * 20}% ${50 + Math.cos(scrollY * 0.001) * 20}%, 
              hsl(280 100% 70% / 0.1) 0%, 
              transparent 50%), 
              radial-gradient(circle at ${30 + Math.cos(scrollY * 0.002) * 15}% ${70 + Math.sin(scrollY * 0.002) * 15}%, 
              hsl(180 100% 70% / 0.1) 0%, 
              transparent 50%)`
          }}
        />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(hsl(280 100% 70% / 0.1) 1px, transparent 1px),
              linear-gradient(90deg, hsl(280 100% 70% / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.1}px)`
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        
        {/* Footer */}
        <footer className="py-8 px-6 border-t border-white/10">
          <div className="max-w-6xl mx-auto text-center">
            <div className="gradient-text text-lg font-semibold mb-2">
              Laravel Developer Portfolio
            </div>
            <p className="text-muted-foreground text-sm">
              Crafted with ❤️ using React, TypeScript & Tailwind CSS
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};