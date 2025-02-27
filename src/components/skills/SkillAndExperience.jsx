


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
  Target 
  
  
  
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
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "JavaScript", icon: "javascript", level: 90 },
        { name: "TypeScript", icon: "typescript", level: 80 },
        { name: "Java", icon: "java", level: 70 },
        { name: "SQL", icon: "sql", level: 75 }
      ]
    },
    {
      title: "Frontend Technologies",
      icon: <Layout className="w-6 h-6" />,
      skills: [
        { name: "React.js", icon: "react", level: 90 },
        { name: "HTML5", icon: "html", level: 85 },
        { name: "CSS3", icon: "css", level: 85 },
        { name: "Tailwind CSS", icon: "tailwind", level: 80 },
        { name: "Bootstrap", icon: "bootstrap", level: 75 }
      ]
    },
    {
      title: "Backend Technologies",
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: "Node.js", icon: "nodejs", level: 85 },
        { name: "Express.js", icon: "expressjs", level: 80 },
        { name: "Nest.js", icon: "nestjs", level: 75 }
      ]
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "MongoDB", icon: "mongodb", level: 85 },
        { name: "MySQL", icon: "mysql", level: 80 }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        { name: "Git", icon: "git", level: 85 },
        { name: "GitHub", icon: "github", level: 85 },
        { name: "VS Code", icon: "vscode", level: 90 },
        { name: "Figma", icon: "figma", level: 75 }
      ]
    },
    {
      title: "State Management",
      icon: <Layers className="w-6 h-6" />,
      skills: [
        { name: "Redux", icon: null, level: 80 },
        { name: "Context API", icon: null, level: 85 }
      ]
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-6 h-6" />,
      skills: [
        { name: "Problem Solving", icon: null, level: 90 },
        { name: "Team Collaboration", icon: null, level: 85 },
        { name: "Data Structures & Algorithms", icon: null, level: 80 }
      ]
    } ,
    
    

    {
      title: "Deployment & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: "Nginx Server", icon: "nginx", level: 80 },
        { name: "Linux Administration", icon: "linux", level: 75 },
        { name: "Docker Containerization", icon: "docker", level: 70 },
        { name: "AWS Services", icon: "aws", level: 65 },
        { name: "SSL/TLS Certificates", icon: null, level: 75 },
        { name: "VPS Management", icon: null, level: 70 },
        { name: "CI/CD Pipelines", icon: null, level: 65 },
        { name: "Server Security", icon: null, level: 75 }
      ]
    },
    {
      title: "Infrastructure Security",
      icon: <Shield className="w-6 h-6" />,
      skills: [
        { name: "SSH & Key Management", icon: null, level: 80 },
        { name: "Firewall Configuration", icon: null, level: 75 },
        { name: "Domain Management", icon: null, level: 85 },
        { name: "Load Balancing", icon: null, level: 70 }
      ]
    }





  ];

  const filteredSkills = activeCategory === 'All' 
    ? skillCategories 
    : skillCategories.filter(category => category.title === activeCategory);

  return (
    <div className="w-full max-w-6xl mx-auto p-6 relative" id='skills'>
      {/* Animated Background */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        className="absolute inset-0 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 opacity-30"
        style={{ 
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 80%, 0% 100%)',
          zIndex: -1 
        }}
      />

      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-12 text-center text-gray-800"
      >
        My Skills Landscape
      </motion.h2>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {['All', ...skillCategories.map(c => c.title)].map((category) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeCategory === category 
                ? 'bg-blue-500 text-white shadow-lg' 
                : 'bg-gray-200 text-gray-700 hover:bg-blue-100'
            }`}
          >
            {category}
          </motion.button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredSkills.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.2 }}
            className="bg-white rounded-2xl shadow-2xl p-6 hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              {category.icon}
              <h3 className="text-2xl font-semibold text-gray-800">{category.title}</h3>
            </div>
            
            <div className="space-y-4">
              {category.skills.map((skill, skillIdx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: skillIdx * 0.1 }}
                  className="relative"
                >
                  <div className="flex items-center gap-3 mb-2">
                    {skill.icon && techIcons[skill.icon]}
                    <span className="font-medium text-gray-700">{skill.name}</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: skillIdx * 0.1 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
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