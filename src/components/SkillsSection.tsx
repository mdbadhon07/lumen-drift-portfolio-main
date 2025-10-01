import { useState, useEffect, useRef } from 'react';
import { 
  Code2, 
  Database, 
  Server, 
  Palette, 
  Smartphone, 
  Shield,
  Zap,
  Globe
} from 'lucide-react';

const skills = [
  {
    category: 'Backend Development',
    icon: Server,
    skills: ['Laravel', 'PHP 8+', 'MySQL', 'PostgreSQL', 'Redis', 'API Design']
  },
  {
    category: 'Frontend Magic',
    icon: Code2,
    skills: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Alpine.js', 'Livewire']
  },
  {
    category: 'Database Mastery',
    icon: Database,
    skills: ['Eloquent ORM', 'Query Optimization', 'Database Design', 'Migrations', 'Seeding']
  },
  {
    category: 'UI/UX Design',
    icon: Palette,
    skills: ['Figma', 'Adobe XD', 'Responsive Design', 'User Experience', 'Prototyping']
  },
  {
    category: 'Mobile Ready',
    icon: Smartphone,
    skills: ['Progressive Web Apps', 'React Native', 'Mobile-First Design', 'Cross-Platform']
  },
  {
    category: 'Security & Performance',
    icon: Shield,
    skills: ['Authentication', 'Authorization', 'Performance Optimization', 'Caching', 'Security']
  },
  {
    category: 'Modern Tools',
    icon: Zap,
    skills: ['Docker', 'Git', 'Composer', 'NPM', 'Vite', 'Laravel Forge']
  },
  {
    category: 'Cloud & DevOps',
    icon: Globe,
    skills: ['AWS', 'Digital Ocean', 'CI/CD', 'Server Management', 'Monitoring']
  }
];

export const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const [visibleSkills, setVisibleSkills] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setTimeout(() => {
              setVisibleSkills(prev => [...prev, index].filter((v, i, arr) => arr.indexOf(v) === i));
            }, index * 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  // Get color theme based on index
  const getColorTheme = (index: number) => {
    const themes = ['primary', 'accent', 'secondary', 'highlight'];
    return themes[index % 4];
  };

  return (
    <section ref={sectionRef} className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Powered by cutting-edge technologies and years of hands-on experience
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const isVisible = visibleSkills.includes(index);
            const isHovered = hoveredSkill === index;
            const theme = getColorTheme(index);
            
            return (
              <div
                key={index}
                data-index={index}
                className={`skill-card relative group cursor-pointer transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className={`glass-card h-full p-6 transition-all duration-300 ${
                  isHovered ? 'scale-105' : ''
                } ${
                  theme === 'primary' && isHovered ? 'neon-glow-primary' :
                  theme === 'accent' && isHovered ? 'neon-glow-accent' :
                  theme === 'secondary' && isHovered ? 'neon-glow-secondary' :
                  theme === 'highlight' && isHovered ? 'neon-glow-highlight' : ''
                }`}>
                  
                  {/* Icon */}
                  <div className={`mb-4 relative ${isHovered ? 'floating' : ''}`}>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      theme === 'primary' ? 'bg-primary/20' :
                      theme === 'accent' ? 'bg-accent/20' :
                      theme === 'secondary' ? 'bg-secondary/20' :
                      'bg-highlight/20'
                    } ${
                      isHovered && theme === 'primary' ? 'bg-primary/30' :
                      isHovered && theme === 'accent' ? 'bg-accent/30' :
                      isHovered && theme === 'secondary' ? 'bg-secondary/30' :
                      isHovered && theme === 'highlight' ? 'bg-highlight/30' : ''
                    }`}>
                      <Icon className={`w-6 h-6 transition-all duration-300 ${
                        isHovered ? 'scale-110' : ''
                      } ${
                        theme === 'primary' ? 'text-primary' :
                        theme === 'accent' ? 'text-accent' :
                        theme === 'secondary' ? 'text-secondary' :
                        'text-highlight'
                      }`} />
                    </div>
                    
                    {/* Holographic Ring */}
                    {isHovered && (
                      <div className={`absolute inset-0 rounded-full border-2 animate-ping opacity-75 ${
                        theme === 'primary' ? 'border-primary' :
                        theme === 'accent' ? 'border-accent' :
                        theme === 'secondary' ? 'border-secondary' :
                        'border-highlight'
                      }`}></div>
                    )}
                  </div>
                  
                  {/* Category Title */}
                  <h3 className={`text-lg font-bold mb-4 transition-all duration-300 ${
                    isHovered ? 
                      theme === 'primary' ? 'text-primary' :
                      theme === 'accent' ? 'text-accent' :
                      theme === 'secondary' ? 'text-secondary' :
                      'text-highlight'
                    : 'text-foreground'
                  }`}>
                    {skill.category}
                  </h3>
                  
                  {/* Skills List */}
                  <div className="space-y-2">
                    {skill.skills.map((skillName, skillIndex) => (
                      <div
                        key={skillIndex}
                        className={`text-sm transition-all duration-300 ${
                          isHovered ? 
                            `transform translate-x-1 ${
                              theme === 'primary' ? 'text-primary' :
                              theme === 'accent' ? 'text-accent' :
                              theme === 'secondary' ? 'text-secondary' :
                              'text-highlight'
                            }` 
                          : 'text-muted-foreground'
                        }`}
                        style={{ 
                          transitionDelay: isHovered ? `${skillIndex * 50}ms` : '0ms' 
                        }}
                      >
                        • {skillName}
                      </div>
                    ))}
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mt-4">
                    <div className="h-1 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-1000 ${
                          isVisible ? 'w-full' : 'w-0'
                        } ${
                          theme === 'primary' ? 'bg-gradient-to-r from-primary to-primary/60' :
                          theme === 'accent' ? 'bg-gradient-to-r from-accent to-accent/60' :
                          theme === 'secondary' ? 'bg-gradient-to-r from-secondary to-secondary/60' :
                          'bg-gradient-to-r from-highlight to-highlight/60'
                        }`}
                        style={{ transitionDelay: `${index * 100 + 300}ms` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Stack Showcase */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-8 gradient-text">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Laravel', 'PHP', 'React', 'Vue.js', 'TypeScript', 'MySQL', 'Redis', 'Docker', 'AWS'].map((tech, index) => (
              <div 
                key={tech}
                className="glass-button px-4 py-2 text-sm font-medium hover:neon-glow-primary transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};