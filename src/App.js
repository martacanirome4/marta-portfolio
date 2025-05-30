import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Award, Telescope, Brain, Database, Cpu, ArrowRight, Download } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => setScrollY(window.scrollY);
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const projects = [
    {
      title: "Dark Matter Detection ML",
      description: "Bachelor's Thesis exploring the cosmic unknown through machine learning. Identifying unclassified sources as potential dark matter candidates using NASA Fermi-LAT telescope data.",
      tech: ["Python", "Machine Learning", "Astrophysics", "Data Science"],
      link: "https://github.com/martacanirome4/DarkMatter_ML_TFG",
      icon: <Telescope className="w-5 h-5" />,
      featured: true,
      year: "2025"
    },
    {
      title: "Inditex Talent-Match",
      description: "Winner of Inditex Tech Challenge 2025. An intelligent matching engine that bridges talent with opportunity using sophisticated NLP and TF-IDF algorithms.",
      tech: ["Python", "NLP", "TF-IDF", "Machine Learning"],
      link: "https://github.com/martacanirome4/talent-match-refined",
      icon: <Award className="w-5 h-5" />,
      featured: true,
      year: "2025"
    },
    {
      title: "MusicHub API",
      description: "A symphonic blend of technology and artistry. Integrating Spotify, OpenAI, and MongoDB to create intelligent music recommendations.",
      tech: ["Node.js", "MongoDB", "Spotify API", "OpenAI"],
      link: "https://github.com/martacanirome4/MusicHub",
      featured: false,
      year: "2024"
    },
    {
      title: "DistributedDevHub",
      description: "Architecting the future of collaborative development. A distributed systems implementation using IPC, Sockets, and TDD-based communication patterns.",
      tech: ["Distributed Systems", "IPC", "Sockets", "TDD"],
      link: "https://github.com/martacanirome4/DistributedDevHub",
      featured: false,
      year: "2024"
    }
  ];

  const skills = {
    "Machine Learning & AI": ["Python", "Scikit-learn", "Data Science", "Anomaly Detection", "NLP"],
    "Backend Development": ["Node.js", "Python", "REST APIs", "SQL", "MongoDB"],
    "Data & Analytics": ["Data Visualization", "Pandas", "NASA Fermi-LAT", "Statistical Analysis"],
    "Infrastructure": ["Git", "Docker", "Linux", "Distributed Systems", "TDD"]
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      {/* Subtle grid background */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-stone-50/90 backdrop-blur-sm z-40 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="text-lg tracking-widest font-light uppercase">
              Marta Canino Romero
            </div>
            <div className="hidden md:flex space-x-12">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'work', label: 'Work' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm uppercase tracking-wider transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'text-stone-900' 
                      : 'text-stone-500 hover:text-stone-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-stone-200/20 rounded-full blur-3xl" />
        </div>
        
        <div className="text-center z-10 px-8 max-w-5xl">
          <h1 className="text-6xl md:text-8xl font-extralight tracking-tight mb-8">
            <span className="block">Marta</span>
            <span className="block text-5xl md:text-7xl italic font-serif text-stone-600">Canino Romero</span>
          </h1>
          
          <div className="w-32 h-px bg-stone-300 mx-auto mb-8" />
          
          <p className="text-xl md:text-2xl font-light text-stone-700 mb-4 tracking-wide">
            Computer Engineering · Machine Learning Research
          </p>
          
          <p className="text-base md:text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed font-light mb-12">
            Currently pursuing my thesis in dark matter detection through machine learning, 
            applying computational intelligence to NASA Fermi-LAT data. Winner of the Inditex Tech Challenge 2025.
          </p>
          
          <div className="flex justify-center items-center space-x-8">
            <a href="https://github.com/martacanirome4" 
               className="text-stone-600 hover:text-stone-900 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/martacaninoromero/" 
               className="text-stone-600 hover:text-stone-900 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:martacaninoromero@gmail.com" 
               className="text-stone-600 hover:text-stone-900 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a href="/Marta_Canino_Romero_CV.pdf"
               download="Marta_Canino_Romero_CV.pdf"
               className="text-stone-600 hover:text-stone-900 transition-colors">
              <Download className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-24 items-start">
            <div>
              <h2 className="text-4xl font-extralight mb-12 tracking-wide">About</h2>
              <div className="space-y-6 text-stone-700 leading-relaxed">
                <p className="text-lg font-light">
                  Final-year Computer Engineering student in Madrid, where rigorous engineering meets 
                  exploratory research. Currently immersed in my Bachelor's Thesis, applying machine 
                  learning techniques to NASA Fermi-LAT observations to hunt for dark matter signatures.
                </p>
                <p>
                  Recently won the Inditex Tech Challenge 2025 with an innovative talent-matching solution, 
                  demonstrating the practical application of cutting-edge technology to real-world challenges.
                </p>
                <p>
                  My work spans from astrophysics research to distributed systems architecture, always 
                  pursuing elegant solutions to complex problems.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-sm uppercase tracking-widest text-stone-500 mb-4">Recognition</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-3 border-b border-stone-200">
                    <span className="font-light">Inditex Tech Challenge Winner</span>
                    <span className="text-sm text-stone-500">2025</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-stone-200">
                    <span className="font-light">NASA Fermi-LAT Research</span>
                    <span className="text-sm text-stone-500">Current</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm uppercase tracking-widest text-stone-500 mb-4">Location</h3>
                <p className="font-light">Madrid, Spain</p>
                <p className="text-sm text-stone-500 mt-1">Open to opportunities across Europe</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-32 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extralight mb-16 tracking-wide">Selected Work</h2>
          
          <div className="space-y-8">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className={`py-12 ${index !== projects.length - 1 ? 'border-b border-stone-200' : ''}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-3">
                        <h3 className="text-2xl font-light">{project.title}</h3>
                        {project.featured && (
                          <span className="text-xs uppercase tracking-wider text-amber-600">Featured</span>
                        )}
                      </div>
                      <p className="text-stone-600 leading-relaxed max-w-3xl mb-6">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {project.tech.map((tech, techIndex) => (
                          <span key={techIndex} className="text-sm text-stone-500">
                            {tech}{techIndex < project.tech.length - 1 && ' ·'}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-stone-400">
                      <span className="text-sm">{project.year}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extralight mb-16 tracking-wide">Technical Expertise</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {Object.entries(skills).map(([category, items], index) => (
              <div key={index}>
                <h3 className="text-sm uppercase tracking-widest text-stone-500 mb-6">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {items.map((skill, skillIndex) => (
                    <li key={skillIndex} className="font-light text-stone-700">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-8 bg-stone-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extralight mb-8 tracking-wide">Contact</h2>
          <p className="text-lg text-stone-600 mb-12 max-w-2xl mx-auto font-light">
            Open to opportunities in machine learning research, software engineering, and innovative technology projects.
          </p>
          
          <div className="flex justify-center items-center space-x-12 text-sm uppercase tracking-wider">
            <a href="https://github.com/martacanirome4" 
               className="text-stone-600 hover:text-stone-900 transition-colors">
              Github
            </a>
            <a href="https://www.linkedin.com/in/martacaninoromero/" 
               className="text-stone-600 hover:text-stone-900 transition-colors">
              LinkedIn
            </a>
            <a href="mailto:martacaninoromero@gmail.com" 
               className="text-stone-600 hover:text-stone-900 transition-colors">
              Email
            </a>
            <a href="/Marta_Canino_Romero_CV.pdf"
               download="Marta_Canino_Romero_CV.pdf"
               className="text-stone-600 hover:text-stone-900 transition-colors">
              CV
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 border-t border-stone-200">
        <div className="max-w-6xl mx-auto flex justify-between items-center text-sm text-stone-500">
          <span>© 2025 Marta Canino Romero</span>
          <span>Madrid</span>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;