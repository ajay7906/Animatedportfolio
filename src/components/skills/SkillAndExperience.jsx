


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Server, 
  Database, 
  Code,           
  Layers, 
  Layout, 
  Wrench, 
  Globe, 
  FileText,
  Users,
  Cloud,
  Shield,
  MessageSquare
} from 'lucide-react';



import { 
  
 
  Github,
  ExternalLink,
  Search,
  ShoppingBag,
  Book,
  Smartphone ,
  Target ,
  Cpu,
  Palette,
  Rocket,


  
  
  
} from 'lucide-react';

// Comprehensive technology icons mapping
const techIcons = {
  // Programming Languages
  javascript: <i className="devicon-javascript-plain colored text-2xl" />,
  java: <i className="devicon-java-plain colored text-2xl" />,
  typescript: <i className="devicon-typescript-plain colored text-2xl" />,
  sql: <i className="devicon-postgresql-plain colored text-2xl" />,
  
  // Web Technologies
  react: <i className="devicon-react-original colored text-2xl" />,
  nodejs: <i className="devicon-nodejs-plain colored text-2xl" />,
  expressjs: <i className="devicon-express-original colored text-2xl" />,
  nestjs: <i className="devicon-nestjs-plain colored text-2xl" />,
  html: <i className="devicon-html5-plain colored text-2xl" />,
  css: <i className="devicon-css3-plain colored text-2xl" />,
  tailwind: <i className="devicon-tailwindcss-plain colored text-2xl" />,
  bootstrap: <i className="devicon-bootstrap-plain colored text-2xl" />,
  
  // Databases
  mongodb: <i className="devicon-mongodb-plain colored text-2xl" />,
  mysql: <i className="devicon-mysql-plain colored text-2xl" />,
  
  // Tools & Platforms
  git: <i clCodeassName="devicon-git-plain colored text-2xl" />,
  github: <i className="devicon-github-original colored text-2xl" />,
  vscode: <i className="devicon-vscode-plain colored text-2xl" />,
  figma: <i className="devicon-figma-plain colored text-2xl" /> ,

  //deployment 
  nginx: <i className="devicon-nginx-original colored text-2xl" />,
  linux: <i className="devicon-linux-plain colored text-2xl" />,
  docker: <i className="devicon-docker-plain colored text-2xl" />,
  aws: <i className="devicon-amazonwebservices-original colored text-2xl" />

  
};
const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-8 h-8 text-indigo-500" />,
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 80 },
        { name: "Java", level: 70 },
        { name: "SQL", level: 75 }
      ]
    },
    {
      title: "Frontend Technologies",
      icon: <Layout className="w-8 h-8 text-indigo-500" />,
      skills: [
        { name: "React.js", level: 90 },
        { name: "HTML", level: 85 },
        { name: "CSS", level: 85 },
        { name: "Tailwind CSS", level: 80 },
        { name: "Bootstrap", level: 75 },
        { name: "Material UI", level: 75 },
        { name: "Redux", level: 80 }
      ]
    },
    {
      title: "Backend Technologies",
      icon: <Server className="w-8 h-8 text-indigo-500" />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "Nest.js", level: 75 },
        { name: "REST API", level: 85 },
        { name: "Socket.io", level: 80 }
      ]
    },
    {
      title: "Databases",
      icon: <Database className="w-8 h-8 text-indigo-500" />,
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "Mongoose", level: 80 },
        { name: "MySQL", level: 80 }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="w-8 h-8 text-indigo-500" />,
      skills: [
        { name: "Git", level: 85 },
        { name: "Github", level: 85 },
        { name: "Jira", level: 75 }
      ]
    },
    {
      title: "DevOps & Deployment",
      icon: <Server className="w-8 h-8 text-indigo-500" />,
      skills: [
        { name: "Nginx", level: 80 },
        { name: "Linux", level: 75 },
        { name: "Deployment", level: 80 },
        { name: "SSL", level: 75 }
      ]
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-8 h-8 text-indigo-500" />,
      skills: [
        { name: "Data Structures & Algorithms", level: 80 },
        { name: "Problem Solving", level: 90 },
        { name: "Team Collaboration", level: 85 }
      ]
    }
  ];

  const filteredSkills = activeCategory === 'All'
    ? skillCategories
    : skillCategories.filter(category => category.title === activeCategory);

  return (
    <section id="skills" className="py-16 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Animated Background Circles */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-extrabold text-gray-900 tracking-tight">
            My Technical Arsenal
          </h2>
          <div className="mt-3 h-1 w-32 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full" />
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            A showcase of my expertise in modern web development, DevOps, and problem-solving skills.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['All', ...skillCategories.map(c => c.title)].map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.1, boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-indigo-100 shadow-md'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              style={{ backdropFilter: 'blur(10px)', background: 'rgba(255, 255, 255, 0.9)' }}
            >
              <div className="flex items-center gap-4 mb-6">
                {category.icon}
                <h3 className="text-2xl font-semibold text-gray-900">{category.title}</h3>
              </div>
              <div className="space-y-6">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: skillIdx * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    {/* Circular Progress Ring */}
                    <div className="relative w-12 h-12">
                      <svg className="w-full h-full" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#e5e7eb"
                          strokeWidth="3"
                        />
                        <motion.path
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="url(#gradient)"
                          strokeWidth="3"
                          strokeDasharray={`${skill.level}, 100`}
                          initial={{ strokeDasharray: '0, 100' }}
                          animate={{ strokeDasharray: `${skill.level}, 100` }}
                          transition={{ duration: 1, delay: skillIdx * 0.1 }}
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#4f46e5" />
                            <stop offset="100%" stopColor="#7c3aed" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-gray-700">
                        {skill.level}%
                      </div>
                    </div>
                    <span className="font-medium text-gray-800">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};









const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [ 





    {
      title: "Startup Website Platform",
      description: "Feature-rich startup website with dual authentication, admin panels, payment integration, chatbot support using Dialogflow, and OpenAI-powered website creation",
      image: "/api/placeholder/400/250",
      category: "main",
      technologies: ["React.js", "Node.js", "Express.js", "MySQL", "Tailwind CSS", "OpenAI", "Nginx", "Linux", "Dialogflow"],
      liveLink: "#",
      githubLink: "#",
      icon: <MessageSquare />
    },






    {
      title: "AI Website Builder",
      description: "AI-powered platform for creating and deploying one-page websites with a single click",
      image: "/api/placeholder/400/250",
      category: "main",
      technologies: ["React", "Node.js", "MySQL", "OpenAI API", "Tailwind"],
      liveLink: "#",
      githubLink: "#",
      icon: <Globe />
    },
    {
      title: "AI Code Editor Platform",
      description: "Interactive code editor with AI integration, enabling real-time code execution for HTML/JavaScript",
      image: "/api/placeholder/400/250",
      category: "main",
      technologies: ["React", "Node.js", "Express", "Gemini AI", "Monaco Editor"],
      liveLink: "#",
      githubLink: "#",
      icon: <Code />
    },
    {
      title: "Story Sharing Web App",
      description: "Platform for creating and sharing stories with user authentication and content management",
      image: "/api/placeholder/400/250",
      category: "main",
      technologies: ["React", "Node.js", "MongoDB", "CSS Modules", "Framer Motion"],
      liveLink: "https://swip-tory-six.vercel.app/",
      githubLink: "#",
      icon: <Book />
    },
    {
      title: "Job Listing Web App",
      description: "Real-time job postings application with dynamic user interface",
      image: "/api/placeholder/400/250",
      category: "main",
      technologies: ["React", "Node.js", "Express", "MongoDB", "CSS Modules"],
      liveLink: "https://660e47a68d457fa29bba3ddc--meek-starburst-dc1ffa.netlify.app/",
      githubLink: "#",
      icon: <Target />
    },
    {
      title: "E-commerce Web App",
      description: "Full-featured e-commerce application with product listings, cart management, and Stripe payment integration",
      image: "/api/placeholder/400/250",
      category: "main",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Firebase"],
      liveLink: "https://65dcca3e9b6a8806754a8780--beautiful-pixie-387412.netlify.app/",
      githubLink: "#",
      icon: <ShoppingBag />
    },
    {
      title: "Quizzes Web App",
      description: "Interactive quiz platform for creating and managing quizzes",
      image: "/api/placeholder/400/250",
      category: "main",
      technologies: ["React", "Node.js", "Express", "MongoDB", "CSS Modules"],
      liveLink: "https://quizze-nine.vercel.app/",
      githubLink: "#",
      icon: <Smartphone />
    },
    {
      title: "Quick Search Chrome Extension",
      description: "Chrome extension for efficient searching without opening new tabs",
      image: "/api/placeholder/400/250",
      category: "practice",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubLink: "#",
      icon: <Search />
    },
    {
      title: "Notes Web App",
      description: "Simple note-taking application",
      image: "/api/placeholder/400/250",
      category: "practice",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://sunny-meerkat-f42a14.netlify.app/",
      githubLink: "#",
      icon: <Book />
    },
    {
      title: "Rock Scissor Paper Game",
      description: "Classic game implementation",
      image: "/api/placeholder/400/250",
      category: "practice",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://ajay7906.github.io/rockScissorPaper/",
      githubLink: "#",
      icon: <Smartphone />
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="w-full max-w-6xl mx-auto p-6" id='projects'>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8 text-center"
      >
        My Projects
      </motion.h2>

      <div className="flex justify-center gap-4 mb-8">
        {['all', 'main', 'practice'].map((category) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-full ${
              filter === category 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </motion.button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -10 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative group">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-blue-500 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-blue-500 hover:text-white transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                )}
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                {project.icon}
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};



const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <SkillsSection />
      <div className="my-16" />
      <ProjectsSection />
    </div>
  );
};

export default Portfolio;