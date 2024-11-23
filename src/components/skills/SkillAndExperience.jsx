// import React, { useState } from 'react';
// import { 
//   Code, Globe, Database, Github, ExternalLink, 
//   Monitor, Package, Cpu, Radio, Lock, Users, Search,
//   ShoppingCart, Brain, FileQuestion, BookOpen, Chrome
// } from 'lucide-react';

// const SkillAndExperience = () => {
//   const [activeFilter, setActiveFilter] = useState('all');

//   const skills = {
//     frontend: [
//       { name: 'HTML5', icon: <Monitor className="w-6 h-6" />, level: 90 },
//       { name: 'CSS3', icon: <Package className="w-6 h-6" />, level: 85 },
//       { name: 'JavaScript', icon: <Code className="w-6 h-6" />, level: 88 },
//       { name: 'React.js', icon: <Globe className="w-6 h-6" />, level: 92 },
//       { name: 'TypeScript', icon: <Code className="w-6 h-6" />, level: 80 },
//       { name: 'Redux', icon: <Radio className="w-6 h-6" />, level: 85 },
//     ],
//     backend: [
//       { name: 'Node.js', icon: <Cpu className="w-6 h-6" />, level: 85 },
//       { name: 'Express.js', icon: <Cpu className="w-6 h-6" />, level: 82 },
//       { name: 'MongoDB', icon: <Database className="w-6 h-6" />, level: 80 },
//       { name: 'MySQL', icon: <Database className="w-6 h-6" />, level: 78 },
//       { name: 'REST API', icon: <Globe className="w-6 h-6" />, level: 88 },
//       { name: 'Socket.io', icon: <Radio className="w-6 h-6" />, level: 75 },
//     ],
//     tools: [
//       { name: 'Git', icon: <Github className="w-6 h-6" />, level: 85 },
//       { name: 'VS Code', icon: <Code className="w-6 h-6" />, level: 90 },
//       { name: 'Postman', icon: <Radio className="w-6 h-6" />, level: 85 },
//       { name: 'Figma', icon: <Monitor className="w-6 h-6" />, level: 75 },
//     ]
//   };

//   const projects = [
//     {
//       category: 'main',
//       items: [
//         {
//           title: 'AI Website Builder Platform',
//           description: 'Built a platform for creating websites using MERN stack and Cloud AI API',
//           tech: ['React', 'Node.js', 'MySQL', 'OpenAI API'],
//           icon: <Brain className="w-6 h-6" />,
//           link: '#',
//           github: '#'
//         },
//         {
//           title: 'Story Sharing Web App',
//           description: 'Platform for sharing stories with user registration and content management',
//           tech: ['React', 'Node.js', 'MongoDB', 'Framer Motion'],
//           icon: <Users className="w-6 h-6" />,
//           link: 'https://swip-tory-six.vercel.app/',
//           github: '#'
//         },
//         {
//           title: 'Job Listing Web App',
//           description: 'Dynamic job listing platform with real-time updates',
//           tech: ['React', 'Node.js', 'MongoDB', 'CSS Modules'],
//           icon: <Search className="w-6 h-6" />,
//           link: 'https://660e47a68d457fa29bba3ddc--meek-starburst-dc1ff netlify.app/',
//           github: '#'
//         },
//         {
//           title: 'E-commerce Web App',
//           description: 'Full-featured e-commerce platform with Stripe payment integration',
//           tech: ['React', 'Firebase', 'Stripe', 'Bootstrap'],
//           icon: <ShoppingCart className="w-6 h-6" />,
//           link: 'https://65dcca3e9b6a8806754a8780--beautiful-pixie-3874 netlify.app/',
//           github: '#'
//         }
//       ]
//     },
//     {
//       category: 'practice',
//       items: [
//         {
//           title: 'Notes Web App',
//           description: 'Simple note-taking application',
//           tech: ['React', 'LocalStorage'],
//           icon: <BookOpen className="w-6 h-6" />,
//           link: 'https://sunny-meerkat-f42a14.netlify.app/',
//           github: '#'
//         },
//         {
//           title: 'Rock Scissor Paper Game',
//           description: 'Interactive game implementation',
//           tech: ['HTML', 'CSS', 'JavaScript'],
//           icon: <Globe className="w-6 h-6" />,
//           link: 'https://ajay7906.github.io/rockScissorPaper/',
//           github: '#'
//         },
//         {
//           title: 'Dark Mode Chrome Extension',
//           description: 'Browser extension for dark mode toggle',
//           tech: ['HTML', 'CSS', 'JavaScript'],
//           icon: <Monitor className="w-6 h-6" />,
//           link: '#',
//           github: 'https://github.com/ajay7906/darkwebexten'
//         }
//       ]
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
//       {/* Skills Section */}
//       <div
//         className="mb-16 opacity-0 translate-y-4 animate-[fadeIn_1s_ease-out_forwards]"
//       >
//         <h2 className="text-4xl font-bold mb-8 text-center">Skills & Expertise</h2>
        
//         {Object.entries(skills).map(([category, skillList]) => (
//           <div key={category} className="mb-8">
//             <h3 className="text-2xl font-semibold mb-4 capitalize">{category}</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//               {skillList.map((skill) => (
//                 <div
//                   key={skill.name}
//                   className="bg-gray-800 p-4 rounded-lg transform transition-transform hover:scale-105"
//                 >
//                   <div className="flex items-center mb-2">
//                     {skill.icon}
//                     <span className="ml-2 font-medium">{skill.name}</span>
//                   </div>
//                   <div className="w-full bg-gray-700 rounded-full h-2">
//                     <div
//                       style={{ width: `${skill.level}%` }}
//                       className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Projects Section */}
//       <div
//         className="mb-16 opacity-0 translate-y-4 animate-[fadeIn_1s_ease-out_forwards]"
//       >
//         <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
        
//         <div className="flex justify-center gap-4 mb-8">
//           <button
//             onClick={() => setActiveFilter('all')}
//             className={`px-4 py-2 rounded-full ${
//               activeFilter === 'all' ? 'bg-blue-500' : 'bg-gray-700'
//             } transition-colors duration-300`}
//           >
//             All Projects
//           </button>
//           <button
//             onClick={() => setActiveFilter('main')}
//             className={`px-4 py-2 rounded-full ${
//               activeFilter === 'main' ? 'bg-blue-500' : 'bg-gray-700'
//             } transition-colors duration-300`}
//           >
//             Main Projects
//           </button>
//           <button
//             onClick={() => setActiveFilter('practice')}
//             className={`px-4 py-2 rounded-full ${
//               activeFilter === 'practice' ? 'bg-blue-500' : 'bg-gray-700'
//             } transition-colors duration-300`}
//           >
//             Practice Projects
//           </button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {projects.map(category => 
//             category.items.map((project, index) => (
//               (activeFilter === 'all' || activeFilter === category.category) && (
//                 <div
//                   key={project.title}
//                   className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2"
//                   style={{
//                     opacity: 0,
//                     animation: `fadeIn 0.5s ease-out ${index * 0.1}s forwards`
//                   }}
//                 >
//                   <div className="p-6">
//                     <div className="flex items-center mb-4">
//                       {project.icon}
//                       <h3 className="text-xl font-semibold ml-2">{project.title}</h3>
//                     </div>
//                     <p className="text-gray-300 mb-4">{project.description}</p>
//                     <div className="flex flex-wrap gap-2 mb-4">
//                       {project.tech.map(tech => (
//                         <span
//                           key={tech}
//                           className="px-3 py-1 bg-blue-500 bg-opacity-20 rounded-full text-sm"
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                     <div className="flex gap-4">
//                       {project.link && (
//                         <a
//                           href={project.link}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
//                         >
//                           <ExternalLink className="w-4 h-4 mr-1" />
//                           Live Demo
//                         </a>
//                       )}
//                       {project.github && (
//                         <a
//                           href={project.github}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
//                         >
//                           <Github className="w-4 h-4 mr-1" />
//                           Code
//                         </a>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               )
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SkillAndExperience;

































































import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Layout, 
  Server,
  Github,
  ExternalLink,
  Search,
  ShoppingBag,
  Book,
  Code,
  Monitor,
  Globe
} from 'lucide-react';

// Icons mapping for technologies
const techIcons = {
  react: <i className="devicon-react-original colored text-2xl" />,
  node: <i className="devicon-nodejs-plain colored text-2xl" />,
  mongodb: <i className="devicon-mongodb-plain colored text-2xl" />,
  javascript: <i className="devicon-javascript-plain colored text-2xl" />,
  typescript: <i className="devicon-typescript-plain colored text-2xl" />,
  html: <i className="devicon-html5-plain colored text-2xl" />,
  css: <i className="devicon-css3-plain colored text-2xl" />,
  tailwind: <i className="devicon-tailwindcss-plain colored text-2xl" />,
  firebase: <i className="devicon-firebase-plain colored text-2xl" />,
  mysql: <i className="devicon-mysql-plain colored text-2xl" />
};

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Monitor className="w-6 h-6" />,
      skills: [
        { name: "React.js", icon: "react", level: 90 },
        { name: "JavaScript", icon: "javascript", level: 85 },
        { name: "TypeScript", icon: "typescript", level: 75 },
        { name: "HTML5", icon: "html", level: 90 },
        { name: "CSS3", icon: "css", level: 85 },
        { name: "Tailwind", icon: "tailwind", level: 80 }
      ]
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: "Node.js", icon: "node", level: 85 },
        { name: "Express.js", icon: "node", level: 80 },
        { name: "MongoDB", icon: "mongodb", level: 75 },
        { name: "MySQL", icon: "mysql", level: 70 }
      ]
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8 text-center"
      >
        My Skills
      </motion.h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.2 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              {category.icon}
              <h3 className="text-xl font-semibold">{category.title}</h3>
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
                  <div className="flex items-center gap-2 mb-2">
                    {techIcons[skill.icon]}
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: skillIdx * 0.1 }}
                      className="h-full bg-blue-500 rounded-full"
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
      title: "AI Website Builder",
      description: "Platform for creating websites using MERN stack and Cloud AI API",
      image: "/api/placeholder/400/250",
      category: "main",
      technologies: ["React", "Node.js", "MySQL", "OpenAI API"],
      liveLink: "#",
      githubLink: "#",
      icon: <Globe />
    },
    {
      title: "Story Sharing Web App",
      description: "Platform for sharing stories with user registration and content management",
      image: "/api/placeholder/400/250",
      category: "main",
      technologies: ["React", "Node.js", "MongoDB", "CSS Modules"],
      liveLink: "https://swip-tory-six.vercel.app/",
      githubLink: "#",
      icon: <Book />
    },
    {
      title: "E-commerce Web App",
      description: "Full-featured e-commerce application with Stripe payment integration",
      image: "/api/placeholder/400/250",
      category: "main",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveLink: "https://65dcca3e9b6a8806754a8780--beautiful-pixie-3874.netlify.app/",
      githubLink: "#",
      icon: <ShoppingBag />
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
    // Add more projects here...
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
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