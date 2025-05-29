/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Award, Telescope, Brain, Database, Cpu } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [setIsVisible] = useState({});

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

  const projects = [
    {
      title: "Dark Matter Detection ML",
      description: "Bachelor's Thesis on identifying unclassified sources as potential dark matter candidates using supervised ML and anomaly detection on NASA Fermi-LAT telescope data.",
      tech: ["Python", "Machine Learning", "Astrophysics", "Data Science"],
      link: "https://github.com/martacanirome4/DarkMatter_ML_TFG",
      icon: <Telescope className="w-6 h-6" />,
      featured: true,
      color: "from-purple-600 to-blue-600"
    },
    {
      title: "Inditex Talent-Match",
      description: "🏆 Winner of Inditex Tech Challenge 2025! Vacancy-employee matching and ranking engine using keyword analysis and TF-IDF algorithms.",
      tech: ["Python", "NLP", "TF-IDF", "Machine Learning"],
      link: "https://github.com/martacanirome4/talent-match-refined",
      icon: <Award className="w-6 h-6" />,
      featured: true,
      color: "from-green-500 to-teal-500"
    },
    {
      title: "MusicHub API",
      description: "Comprehensive music API integrating Spotify, OpenAI, and MongoDB for intelligent music recommendations and data management.",
      tech: ["Node.js", "MongoDB", "Spotify API", "OpenAI", "REST API"],
      link: "https://github.com/martacanirome4/MusicHub",
      icon: <Database className="w-6 h-6" />,
      featured: false,
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "DistributedDevHub",
      description: "Distributed systems project implementing IPC, Sockets, and TDD-based communication patterns for scalable development environments.",
      tech: ["Distributed Systems", "IPC", "Sockets", "TDD", "Python"],
      link: "https://github.com/martacanirome4/DistributedDevHub",
      icon: <Cpu className="w-6 h-6" />,
      featured: false,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Mushroom Predictor",
      description: "Machine learning model for predicting mushroom edibility with high accuracy using feature engineering and classification algorithms.",
      tech: ["Python", "Scikit-learn", "Data Analysis", "Classification"],
      link: "https://github.com/martacanirome4/MushroomEdibilityPredictor",
      icon: <Brain className="w-6 h-6" />,
      featured: false,
      color: "from-amber-500 to-yellow-500"
    }
  ];

  const skills = [
    { category: "Machine Learning", items: ["Python", "Scikit-learn", "TensorFlow", "Data Science", "Anomaly Detection"] },
    { category: "Backend Development", items: ["Node.js", "Python", "REST APIs", "MongoDB", "Distributed Systems"] },
    { category: "Data & Analytics", items: ["NASA Fermi-LAT", "TF-IDF", "NLP", "Data Visualization", "Statistical Analysis"] },
    { category: "Tools & Technologies", items: ["Git", "Docker", "Linux", "IPC/Sockets", "TDD"] }
  ];

  const ScrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-lg z-50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Marta Canino
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => ScrollToSection(section)}
                  className={`capitalize transition-colors ${activeSection === section ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="text-center z-10 px-6">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Marta Canino Romero
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6">
              Computer Engineering Student & ML Researcher
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
              Passionate about machine learning, astrophysics, and building innovative solutions. 
              Currently exploring dark matter detection through advanced ML techniques.
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com/martacanirome4" className="bg-gray-800 hover:bg-gray-700 p-4 rounded-full transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/martacaninoromero/" className="bg-blue-600 hover:bg-blue-500 p-4 rounded-full transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:martacaninoromero@gmail.com" className="bg-purple-600 hover:bg-purple-500 p-4 rounded-full transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <button 
            onClick={() => ScrollToSection('projects')}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105"
          >
            View My Work
          </button>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-6">
                I'm a final-year Computer Engineering student based in Spain with a deep passion for machine learning, 
                astrophysics, and innovative software development. Currently working on my Bachelor's Thesis focusing 
                on dark matter detection using advanced ML techniques.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Recently won the <span className="text-green-400 font-semibold">Inditex Tech Challenge 2025</span> with 
                an innovative talent-matching solution, demonstrating my ability to apply cutting-edge technology to 
                real-world business problems.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full">ML Research</span>
                <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full">Astrophysics</span>
                <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full">Full-Stack Dev</span>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-8 rounded-2xl border border-white/10">
                <div className="text-center">
                  <div className="text-3xl mb-4">🌠</div>
                  <p className="text-gray-300 italic">
                    "Somewhere, something incredible is waiting to be known."
                  </p>
                  <p className="text-gray-400 mt-2">— Carl Sagan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            A showcase of my recent work spanning machine learning research, full-stack development, and innovative solutions.
          </p>
          
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-r ${project.color} p-[1px] rounded-2xl transition-all duration-300 hover:scale-[1.02] ${
                  project.featured ? 'md:col-span-2' : ''
                }`}
              >
                <div className="bg-gray-900/90 backdrop-blur-sm p-8 rounded-2xl h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className={`bg-gradient-to-r ${project.color} p-3 rounded-xl`}>
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                        {project.featured && (
                          <span className="inline-block bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm mt-1">
                            Featured
                          </span>
                        )}
                      </div>
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                <h3 className="text-xl font-semibold mb-4 text-blue-300">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-gray-200 px-3 py-2 rounded-lg text-sm border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always excited to discuss new opportunities, innovative projects, or collaborate on cutting-edge research.
          </p>
          
          <div className="flex justify-center space-x-8 mb-12">
            <a
              href="https://github.com/martacanirome4"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-gray-800 hover:bg-gray-700 px-6 py-4 rounded-xl transition-colors"
            >
              <Github className="w-6 h-6" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/martacaninoromero/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-blue-600 hover:bg-blue-500 px-6 py-4 rounded-xl transition-colors"
            >
              <Linkedin className="w-6 h-6" />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:martacaninoromero@gmailg.com"
              className="flex items-center space-x-3 bg-purple-600 hover:bg-purple-500 px-6 py-4 rounded-xl transition-colors"
            >
              <Mail className="w-6 h-6" />
              <span>Email</span>
            </a>
          </div>

          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8 rounded-2xl border border-white/10">
            <p className="text-gray-300 mb-4">
              📍 Based in Spain | Open to opportunities across Europe and beyond
            </p>
            <p className="text-gray-400">
              Available for internships, graduate positions, and exciting projects in ML, astrophysics, and software development.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Marta Canino Romero. Built with React and passion for innovation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;