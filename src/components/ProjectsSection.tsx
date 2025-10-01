import { useState, useRef } from 'react';
import { ExternalLink, Github, Zap, Database, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack Laravel e-commerce solution with real-time inventory, payment integration, and advanced analytics dashboard.',
    tags: ['Laravel', 'Vue.js', 'MySQL', 'Stripe API', 'Redis'],
    image: '/api/placeholder/600/400',
    color: 'primary',
    features: ['Real-time Analytics', 'Multi-vendor Support', 'Mobile App', 'AI Recommendations'],
    status: 'Live'
  },
  {
    title: 'SaaS Management Tool',
    description: 'Multi-tenant SaaS application for project management with team collaboration, time tracking, and automated reporting.',
    tags: ['Laravel', 'React', 'PostgreSQL', 'WebSockets', 'Docker'],
    image: '/api/placeholder/600/400',
    color: 'accent',
    features: ['Multi-tenant Architecture', 'Real-time Collaboration', 'Custom Reports', 'API Integration'],
    status: 'In Development'
  },
  {
    title: 'Learning Management System',
    description: 'Educational platform with video streaming, interactive quizzes, progress tracking, and certification management.',
    tags: ['Laravel', 'Alpine.js', 'MySQL', 'AWS S3', 'FFmpeg'],
    image: '/api/placeholder/600/400',
    color: 'secondary',
    features: ['Video Streaming', 'Interactive Quizzes', 'Progress Tracking', 'Certificates'],
    status: 'Live'
  },
  {
    title: 'API Gateway Service',
    description: 'Microservices architecture with API gateway, rate limiting, authentication, and comprehensive monitoring.',
    tags: ['Laravel', 'Redis', 'Docker', 'Kubernetes', 'Prometheus'],
    image: '/api/placeholder/600/400',
    color: 'highlight',
    features: ['Microservices', 'Rate Limiting', 'Auto-scaling', 'Monitoring'],
    status: 'Live'
  }
];

export const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing innovative solutions built with modern technologies and creative problem-solving
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => setActiveProject(activeProject === index ? null : index)}
            >
              {/* Project Card */}
              <div className={`glass-card p-6 h-full transition-all duration-500 ${
                hoveredProject === index ? `neon-glow-${project.color} scale-105` : ''
              } ${
                activeProject === index ? 'ring-2 ring-primary/50' : ''
              }`}>
                
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h3 className={`text-xl font-bold transition-colors duration-300 ${
                        hoveredProject === index ? `text-${project.color}` : 'text-foreground'
                      }`}>
                        {project.title}
                      </h3>
                      
                      <span className={`ml-3 px-2 py-1 text-xs rounded-full ${
                        project.status === 'Live' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Action Icons */}
                  <div className={`flex gap-2 ml-4 transition-all duration-300 ${
                    hoveredProject === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <Button size="sm" variant="ghost" className="p-2 h-8 w-8">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="p-2 h-8 w-8">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-2 py-1 text-xs rounded-full bg-${project.color}/10 text-${project.color} border border-${project.color}/20 transition-all duration-300 ${
                        hoveredProject === index ? 'scale-105' : ''
                      }`}
                      style={{ animationDelay: `${tagIndex * 50}ms` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Features Grid */}
                <div className={`grid grid-cols-2 gap-3 transition-all duration-300 ${
                  activeProject === index ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'
                }`}>
                  {project.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className={`flex items-center text-xs text-muted-foreground transition-all duration-300`}
                      style={{ 
                        transitionDelay: activeProject === index ? `${featureIndex * 100}ms` : '0ms' 
                      }}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full bg-${project.color} mr-2 animate-pulse`}></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Expand Indicator */}
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className={`text-center text-xs text-muted-foreground transition-all duration-300 ${
                    hoveredProject === index ? `text-${project.color}` : ''
                  }`}>
                    {activeProject === index ? 'Click to collapse' : 'Click to expand'}
                  </div>
                </div>

                {/* Animated Border */}
                <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
                  hoveredProject === index 
                    ? `bg-gradient-to-r from-${project.color}/20 via-transparent to-${project.color}/20` 
                    : ''
                }`} style={{ 
                  background: hoveredProject === index 
                    ? `conic-gradient(from 0deg, hsl(var(--${project.color})) 0%, transparent 50%, hsl(var(--${project.color})) 100%)` 
                    : 'transparent',
                  padding: '2px',
                  borderRadius: '1rem'
                }}>
                  <div className="bg-card rounded-2xl h-full"></div>
                </div>
              </div>

              {/* Holographic Effect */}
              {hoveredProject === index && (
                <div className={`absolute -inset-1 bg-gradient-to-r from-${project.color}/20 to-transparent rounded-2xl blur-xl animate-pulse`}></div>
              )}
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="glass-button px-8 py-4 text-lg font-semibold group"
          >
            <Github className="w-5 h-5 mr-2 group-hover:animate-spin" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};