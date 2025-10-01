import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  Github, 
  Linkedin, 
  Twitter,
  MessageCircle,
  Zap
} from 'lucide-react';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isHovering, setIsHovering] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@developer.com',
      color: 'primary'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      color: 'accent'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      color: 'secondary'
    }
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', color: 'primary', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', color: 'accent', href: '#' },
    { icon: Twitter, label: 'Twitter', color: 'secondary', href: '#' },
    { icon: MessageCircle, label: 'Discord', color: 'highlight', href: '#' }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your next project to life? Let's discuss how we can create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div 
            className="glass-card p-8 relative group"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">Send a Message</h3>
              <p className="text-muted-foreground">
                Fill out the form below and I'll get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className={`glass-button border-0 bg-muted/20 transition-all duration-300 ${
                      focusedField === 'name' ? 'neon-glow-primary' : ''
                    }`}
                    required
                  />
                  {focusedField === 'name' && (
                    <div className="absolute -top-2 left-3 px-2 bg-background text-xs text-primary">
                      Name
                    </div>
                  )}
                </div>
                
                <div className="relative">
                  <Input
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className={`glass-button border-0 bg-muted/20 transition-all duration-300 ${
                      focusedField === 'email' ? 'neon-glow-accent' : ''
                    }`}
                    required
                  />
                  {focusedField === 'email' && (
                    <div className="absolute -top-2 left-3 px-2 bg-background text-xs text-accent">
                      Email
                    </div>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="relative">
                <Input
                  name="subject"
                  placeholder="Project Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField(null)}
                  className={`glass-button border-0 bg-muted/20 transition-all duration-300 ${
                    focusedField === 'subject' ? 'neon-glow-secondary' : ''
                  }`}
                  required
                />
                {focusedField === 'subject' && (
                  <div className="absolute -top-2 left-3 px-2 bg-background text-xs text-secondary">
                    Subject
                  </div>
                )}
              </div>

              {/* Message */}
              <div className="relative">
                <Textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  className={`glass-button border-0 bg-muted/20 min-h-32 transition-all duration-300 ${
                    focusedField === 'message' ? 'neon-glow-highlight' : ''
                  }`}
                  required
                />
                {focusedField === 'message' && (
                  <div className="absolute -top-2 left-3 px-2 bg-background text-xs text-highlight">
                    Message
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <Button 
                type="submit"
                size="lg"
                className={`w-full glass-button py-4 text-lg font-semibold group transition-all duration-300 ${
                  isHovering ? 'neon-glow-primary scale-105' : ''
                }`}
              >
                <Send className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Send Message
                <Zap className="w-5 h-5 ml-2 group-hover:animate-pulse" />
              </Button>
            </form>

            {/* Animated Border */}
            {isHovering && (
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-accent/20 to-highlight/20 blur-xl animate-pulse"></div>
            )}
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            
            {/* Contact Information */}
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 text-accent">Get in Touch</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div 
                      key={index}
                      className="flex items-center group hover:scale-105 transition-all duration-300 cursor-pointer"
                    >
                      <div className={`p-3 rounded-full bg-${info.color}/20 mr-4 group-hover:bg-${info.color}/30 transition-all duration-300`}>
                        <Icon className={`w-5 h-5 text-${info.color}`} />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{info.label}</div>
                        <div className={`font-medium text-${info.color} group-hover:text-foreground transition-colors`}>
                          {info.value}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 text-secondary">Follow Me</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className={`flex items-center p-4 rounded-xl bg-${social.color}/10 border border-${social.color}/20 hover:bg-${social.color}/20 hover:neon-glow-${social.color} transition-all duration-300 group`}
                    >
                      <Icon className={`w-5 h-5 text-${social.color} mr-3 group-hover:animate-pulse`} />
                      <span className={`text-${social.color} font-medium`}>
                        {social.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability Status */}
            <div className="glass-card p-6 text-center">
              <div className="flex items-center justify-center mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse mr-2"></div>
                <span className="text-green-400 font-semibold">Available for new projects</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Currently accepting new client projects for Q2 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};