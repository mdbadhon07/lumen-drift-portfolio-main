import { useState, useEffect, useRef } from 'react';
import { Code, Rocket, Heart, Zap } from 'lucide-react';

const timelineEvents = [
  {
    year: '2020',
    title: 'Started Web Development Journey',
    description: 'Discovered the power of Laravel and fell in love with elegant code architecture.',
    icon: Code,
    color: 'primary'
  },
  {
    year: '2021',
    title: 'First Professional Project',
    description: 'Built my first enterprise-level application, serving thousands of users.',
    icon: Rocket,
    color: 'accent'
  },
  {
    year: '2022',
    title: 'Specialized in Laravel Ecosystem',
    description: 'Deep-dived into advanced Laravel features, APIs, and modern PHP practices.',
    icon: Heart,
    color: 'secondary'
  },
  {
    year: '2024',
    title: 'Full-Stack Innovation',
    description: 'Mastering cutting-edge technologies and creating futuristic web experiences.',
    icon: Zap,
    color: 'highlight'
  }
];

export const AboutSection = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...prev, index].filter((v, i, arr) => arr.indexOf(v) === i));
          }
        });
      },
      { threshold: 0.1 }
    );

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Laravel developer who believes in creating 
            <span className="text-primary"> beautiful</span>, 
            <span className="text-accent"> functional</span>, and 
            <span className="text-highlight"> innovative</span> web applications 
            that push the boundaries of what's possible.
          </p>
        </div>

        {/* Story Section */}
        <div className="glass-card p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">My Story</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Every line of code I write is crafted with purpose and passion. I started my journey 
                in web development with a simple goal: to create digital experiences that not only 
                work flawlessly but also inspire and delight users.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Laravel became my framework of choice because of its elegant syntax and powerful 
                features. I love how it allows me to build robust applications while maintaining 
                clean, readable code that stands the test of time.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-6 text-center neon-glow-primary">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="glass-card p-6 text-center neon-glow-accent">
                <div className="text-3xl font-bold text-accent mb-2">4+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="glass-card p-6 text-center neon-glow-secondary">
                <div className="text-3xl font-bold text-secondary mb-2">∞</div>
                <div className="text-sm text-muted-foreground">Lines of Code</div>
              </div>
              <div className="glass-card p-6 text-center neon-glow-highlight">
                <div className="text-3xl font-bold text-highlight mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Passion Level</div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-accent to-highlight opacity-50"></div>
          
          {timelineEvents.map((event, index) => {
            const Icon = event.icon;
            const isVisible = visibleItems.includes(index);
            const isLeft = index % 2 === 0;
            
            return (
              <div
                key={index}
                data-index={index}
                className={`timeline-item relative flex items-center mb-12 ${
                  isLeft ? 'flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full transition-all duration-700 ${
                  isVisible ? `bg-${event.color} neon-glow-${event.color} scale-100` : 'bg-muted scale-0'
                }`}></div>
                
                {/* Content Card */}
                <div className={`w-5/12 transition-all duration-700 delay-200 ${
                  isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${isLeft ? 'translate-x-8' : '-translate-x-8'}`
                }`}>
                  <div className="glass-card p-6 hover:neon-glow-primary transition-all duration-300">
                    <div className="flex items-center mb-3">
                      <div className={`p-2 rounded-full bg-${event.color}/20 mr-3`}>
                        <Icon className={`w-5 h-5 text-${event.color}`} />
                      </div>
                      <div className={`text-sm font-semibold text-${event.color}`}>
                        {event.year}
                      </div>
                    </div>
                    
                    <h4 className="text-lg font-bold mb-2 text-foreground">
                      {event.title}
                    </h4>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
                
                {/* Spacer */}
                <div className="w-5/12"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};