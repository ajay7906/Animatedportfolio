import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Book, ShoppingBag, Search, Smartphone, Target, Users, Truck, Utensils, GraduationCap } from 'lucide-react';

const ProjectsSectionFile = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: "GNT India & TarotbyDeepa Startup Websites",
      description: "Developed feature-rich startup websites with dual authentication, admin panels, payment integration, Dialogflow chatbot, and OpenAI-powered website creation automation.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80",
      category: "main",
      technologies: ["React.js", "Node.js", "Express.js", "MySQL", "Tailwind CSS", "OpenAI API", "Nginx", "Linux", "Dialogflow"],
      liveLink: "https://www.gntindia.com/",
      githubLink: "#",
      icon: <Code />,
      features: ["Dual Authentication", "Admin Panels", "Payment Integration", "AI Automation"]
    },
    {
      title: "Smart Delivery & Restaurant Management System",
      description: "Full-stack MERN platform supporting Customer, Shop Owner, and Delivery Partner roles with live location tracking, real-time notifications, and OTP verification.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80",
      category: "main",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "Google Maps API", "Payment Gateway"],
      liveLink: "https://delivery-system-l3z3.vercel.app",
      githubLink: "#",
      icon: <Truck />,
      features: ["Three User Roles", "Live Tracking", "Real-time Notifications", "OTP Verification"]
    },
    {
      title: "Story Sharing System",
      description: "Platform for sharing stories using MERN stack with user registration, story creation, content management, and WebSocket-based communication.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80",
      category: "main",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "CSS Modules"],
      liveLink: "https://swip-tory-six.vercel.app/",
      githubLink: "#",
      icon: <Book />,
      features: ["User Registration", "Story Creation", "Live Communication", "Content Management"]
    },
    {
      title: "E-commerce Web Application",
      description: "Full-featured e-commerce app with product listings, cart management, secure checkout process integrated with Stripe payment gateway.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80",
      category: "main",
      technologies: ["React.js", "Node.js", "Firebase", "Stripe", "Bootstrap"],
      liveLink: "https://65dcca3e9b6a8806754a8780--beautiful-pixie-387412.netlify.app/",
      githubLink: "#",
      icon: <ShoppingBag />,
      features: ["Product Listings", "Cart Management", "Secure Checkout", "Stripe Integration"]
    },
    {
      title: "TestSync – Real-Time Exam Platform",
      description: "Full-stack exam platform supporting self-assessment, timed tests, real-time result analytics, and WebSocket-based communication for live testing sessions.",
      image: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80",
      category: "main",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO"],
      liveLink: "https://quizze-nine.vercel.app",
      githubLink: "#",
      icon: <GraduationCap />,
      features: ["Timed Tests", "Real-time Analytics", "Self-assessment", "Live Sessions"]
    },
    {
      title: "Doctor Appointment Booking System",
      description: "Complete healthcare system with doctor planner, booking slots, patient management, prescription creation, and payment integration.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80",
      category: "main",
      technologies: ["Vue.js", "Node.js", "MongoDB", "Socket.io", "Payment Integration"],
      liveLink: "#",
      githubLink: "#",
      icon: <Users />,
      features: ["Appointment Booking", "Doctor Planner", "Patient Management", "Payment System"]
    },
    {
      title: "Medical CRM System",
      description: "Comprehensive CRM for medical professionals with patient management, appointment scheduling, and operational efficiency features.",
      image: "https://images.unsplash.com/photo-1585435557343-3b092031d4ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80",
      category: "main",
      technologies: ["Vue.js", "Node.js", "MongoDB", "REST APIs"],
      liveLink: "#",
      githubLink: "#",
      icon: <Target />,
      features: ["Patient Management", "Appointment Scheduling", "CRM Features", "Medical Analytics"]
    },
    {
      title: "Notes Web App",
      description: "Simple and efficient note-taking application with intuitive user interface and smooth user experience.",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80",
      category: "practice",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://65d0600d5624ed53d961208c--fantastic-baklava-9e22e6.netlify.app/",
      githubLink: "#",
      icon: <Book />,
      features: ["Note Creation", "Intuitive UI", "Easy Management"]
    },
    {
      title: "Fashion E-commerce Web App",
      description: "E-commerce platform specifically designed for fashion products with modern UI and smooth shopping experience.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80",
      category: "practice",
      technologies: ["React.js", "Node.js", "Bootstrap"],
      liveLink: "https://front-ecom-eight.vercel.app/",
      githubLink: "#",
      icon: <ShoppingBag />,
      features: ["Fashion Products", "Modern UI", "Shopping Cart"]
    },
    {
      title: "Quick Search Chrome Extension",
      description: "Chrome extension for efficient searching without opening new tabs, enhancing browsing productivity.",
      image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80",
      category: "practice",
      technologies: ["HTML", "CSS", "JavaScript", "Chrome APIs"],
      liveLink: "#",
      githubLink: "#",
      icon: <Search />,
      features: ["Quick Search", "Tab Management", "Productivity Tool"]
    },
    {
      title: "Rock Scissor Paper Game",
      description: "Classic game implementation with modern UI and smooth gameplay experience.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80",
      category: "practice",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://ajay7906.github.io/rockScissorPaper/",
      githubLink: "#",
      icon: <Smartphone />,
      features: ["Classic Game", "Modern UI", "Interactive Gameplay"]
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
            A showcase of innovative web applications built with cutting-edge technologies, demonstrating full-stack development expertise.
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
              {category === 'all' ? 'All Projects' : 
               category === 'main' ? 'Main Projects' : 'Practice Projects'}
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
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.03, boxShadow: '0 0 25px rgba(34, 211, 238, 0.4)' }}
              className="relative bg-gray-800/80 rounded-2xl overflow-hidden border border-cyan-400/30 shadow-[0_0_15px_rgba(34,211,238,0.2)] backdrop-blur-sm group"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex gap-3">
                    {project.liveLink && project.liveLink !== '#' && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-cyan-400 rounded-full hover:bg-cyan-300 text-gray-900 transition-all duration-300 transform hover:scale-110 shadow-lg"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                    {project.githubLink && project.githubLink !== '#' && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-800 rounded-full hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-110 shadow-lg"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-cyan-400/20 rounded-lg text-cyan-400">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {project.features && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.features.map((feature, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-sm font-medium border border-cyan-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-400 text-lg">No projects found for the selected filter.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSectionFile;