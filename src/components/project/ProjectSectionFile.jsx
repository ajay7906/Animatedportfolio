import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Book, ShoppingBag, Search, Smartphone, Target } from 'lucide-react';

const ProjectsSectionFile = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: "Startup Website Platform",
      description: "Feature-rich startup website with dual authentication, admin panels, payment integration, chatbot support using Dialogflow, and OpenAI-powered website creation.",
      image: "https://via.placeholder.com/400/250",
      category: "main",
      technologies: ["React.js", "Node.js", "Express.js", "MySQL", "Tailwind CSS", "OpenAI", "Nginx", "Linux", "Dialogflow"],
      liveLink: "#",
      githubLink: "#",
      icon: <Code />
    },
    {
      title: "AI Website Builder",
      description: "AI-powered platform for creating and deploying one-page websites with a single click.",
      image: "https://via.placeholder.com/400/250",
      category: "main",
      technologies: ["React.js", "Node.js", "MySQL", "OpenAI", "Tailwind CSS"],
      liveLink: "#",
      githubLink: "#",
      icon: <Code />
    },
    {
      title: "AI Code Editor Platform",
      description: "Interactive code editor with AI integration, enabling real-time code execution for HTML/JavaScript.",
      image: "https://via.placeholder.com/400/250",
      category: "main",
      technologies: ["React.js", "Node.js", "Express.js", "OpenAI", "Monaco Editor"],
      liveLink: "#",
      githubLink: "#",
      icon: <Code />
    },
    {
      title: "Story Sharing Web App",
      description: "Platform for creating and sharing stories with user authentication and content management.",
      image: "https://via.placeholder.com/400/250",
      category: "main",
      technologies: ["React.js", "Node.js", "MongoDB", "CSS Modules", "Framer Motion"],
      liveLink: "https://swip-tory-six.vercel.app/",
      githubLink: "#",
      icon: <Book />
    },
    {
      title: "Job Listing Web App",
      description: "Real-time job postings application with dynamic user interface.",
      image: "https://via.placeholder.com/400/250",
      category: "main",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "CSS Modules"],
      liveLink: "https://660e47a68d457fa29bba3ddc--meek-starburst-dc1ffa.netlify.app/",
      githubLink: "#",
      icon: <Target />
    },
    {
      title: "E-commerce Web App",
      description: "Full-featured e-commerce application with product listings, cart management, and Stripe payment integration.",
      image: "https://via.placeholder.com/400/250",
      category: "main",
      technologies: ["React.js", "Node.js", "MongoDB", "Stripe", "Firebase"],
      liveLink: "https://65dcca3e9b6a8806754a8780--beautiful-pixie-387412.netlify.app/",
      githubLink: "#",
      icon: <ShoppingBag />
    },
    {
      title: "Quizzes Web App",
      description: "Interactive quiz platform for creating and managing quizzes.",
      image: "https://via.placeholder.com/400/250",
      category: "main",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "CSS Modules"],
      liveLink: "https://quizze-nine.vercel.app/",
      githubLink: "#",
      icon: <Smartphone />
    },
    {
      title: "Quick Search Chrome Extension",
      description: "Chrome extension for efficient searching without opening new tabs.",
      image: "https://via.placeholder.com/400/250",
      category: "practice",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "#",
      githubLink: "#",
      icon: <Search />
    },
    {
      title: "Notes Web App",
      description: "Simple note-taking application.",
      image: "https://via.placeholder.com/400/250",
      category: "practice",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://sunny-meerkat-f42a14.netlify.app/",
      githubLink: "#",
      icon: <Book />
    },
    {
      title: "Rock Scissor Paper Game",
      description: "Classic game implementation.",
      image: "https://via.placeholder.com/400/250",
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
    <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Animated Particle Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-40"
          animate={{ x: [0, 100, 0], y: [0, 150, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          style={{ top: '20%', left: '30%' }}
        />
        <motion.div
          className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-40"
          animate={{ x: [0, -120, 0], y: [0, -100, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          style={{ top: '60%', right: '25%' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow-lg">
            My Projects
          </h2>
          <div className="mt-3 h-1 w-32 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full" />
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            A showcase of innovative web applications built with cutting-edge technologies.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'main', 'practice'].map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.1, boxShadow: '0 0 15px rgba(34, 211, 238, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 border-2 ${
                filter === category
                  ? 'bg-gradient-to-r from-cyan-400 to-purple-600 text-white border-transparent shadow-[0_0_20px_rgba(34,211,238,0.7)]'
                  : 'bg-gray-800 text-gray-300 border-cyan-400/50 hover:bg-gray-700'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5, boxShadow: '0 0 20px rgba(34, 211, 238, 0.5)' }}
              className="relative bg-gray-800/80 rounded-2xl overflow-hidden border border-cyan-400/30 shadow-[0_0_15px_rgba(34,211,238,0.2)] backdrop-blur-sm"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.liveLink !== '#' && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-800 rounded-full hover:bg-cyan-400 hover:text-gray-900 transition-colors"
                    >
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  )}
                  {project.githubLink !== '#' && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-800 rounded-full hover:bg-cyan-400 hover:text-gray-900 transition-colors"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  {project.icon}
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-sm"
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
    </section>
  );
};

export default ProjectsSectionFile;