import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Sparkles } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

export const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 opacity-80"
        style={{ background: 'var(--gradient-hero)' }}
      />
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-primary rounded-full animate-particle-float opacity-60 ${
              i % 4 === 0 ? 'bg-accent' : 
              i % 4 === 1 ? 'bg-secondary' : 
              i % 4 === 2 ? 'bg-highlight' : 'bg-primary'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className={`relative z-10 text-center max-w-4xl mx-auto px-6 transition-all duration-1000 ${
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        
        {/* Name */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
          Next-Gen Developer
        </h1>
        
        {/* Tagline */}
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground font-light">
          Crafting <span className="text-primary font-semibold">next-generation</span> web experiences 
          with <span className="text-accent font-semibold">elegant code</span> and 
          <span className="text-highlight font-semibold"> futuristic design</span>
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            size="lg" 
            className="glass-button px-8 py-4 text-lg font-semibold group"
          >
            <Sparkles className="w-5 h-5 mr-2 group-hover:animate-spin transition-transform" />
            View My Work
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="glass-button border-accent/50 text-accent hover:bg-accent/10 px-8 py-4 text-lg font-semibold"
          >
            Get In Touch
          </Button>
        </div>
        
        {/* Scroll Indicator */}
        <div className="animate-float">
          <ChevronDown className="w-8 h-8 text-primary mx-auto neon-glow-primary" />
          <p className="text-sm text-muted-foreground mt-2">Scroll to explore</p>
        </div>
      </div>
    </section>
  );
};
