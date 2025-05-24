import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Layout, Server, Database, Wrench, Users, Search } from 'lucide-react';

const SkillsSection = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-8 h-8 text-cyan-400" />,
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 80 },
        { name: "Java", level: 70 },
        { name: "SQL", level: 75 }
      ]
    },
    {
      title: "Frontend Technologies",
      icon: <Layout className="w-8 h-8 text-cyan-400" />,
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
      icon: <Server className="w-8 h-8 text-cyan-400" />,
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
      icon: <Database className="w-8 h-8 text-cyan-400" />,
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "Mongoose", level: 80 },
        { name: "MySQL", level: 80 }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="w-8 h-8 text-cyan-400" />,
      skills: [
        { name: "Git", level: 85 },
        { name: "Github", level: 85 },
        { name: "Jira", level: 75 }
      ]
    },
    {
      title: "DevOps & Deployment",
      icon: <Server className="w-8 h-8 text-cyan-400" />,
      skills: [
        { name: "Nginx", level: 80 },
        { name: "Linux", level: 75 },
        { name: "Deployment", level: 80 },
        { name: "SSL", level: 75 }
      ]
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      skills: [
        { name: "Data Structures & Algorithms", level: 80 },
        { name: "Problem Solving", level: 90 },
        { name: "Team Collaboration", level: 85 }
      ]
    }
  ];

  // Filter skills based on search query
  const filteredCategories = skillCategories
    .map(category => ({
      ...category,
      skills: category.skills.filter(skill =>
        skill.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }))
    .filter(category => category.skills.length > 0);

  return (
    <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Animated Particle Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-40"
          animate={{ x: [0, 120, 0], y: [0, 180, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          style={{ top: '15%', left: '25%' }}
        />
        <motion.div
          className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-40"
          animate={{ x: [0, -100, 0], y: [0, -150, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          style={{ top: '70%', right: '20%' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold text-white tracking-tight drop-shadow-lg">
            Holographic Skill Matrix
          </h2>
          <div className="mt-3 h-1 w-48 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full" />
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Explore my expertise in a 3D holographic interface, showcasing cutting-edge web development skills.
          </p>
        </motion.div>

        {/* Search Input */}
        <div className="mb-12 max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search skills..."
              className="w-full px-6 py-3 rounded-lg bg-gray-800 border-2 border-cyan-400/50 focus:outline-none focus:border-cyan-400 text-white placeholder-gray-400 transition-all duration-300 shadow-[0_0_10px_rgba(34,211,238,0.3)]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute right-3 top-3.5 h-5 w-5 text-cyan-400" />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ scale: 1.05, rotateX: 10, rotateY: 10, boxShadow: '0 0 30px rgba(34, 211, 238, 0.5)' }}
              className="relative bg-gray-800/80 rounded-2xl p-6 border border-cyan-400/30 shadow-[0_0_15px_rgba(34,211,238,0.2)] backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                {category.icon}
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>
              <div className="space-y-6">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: skillIdx * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    {/* Neon Progress Circle */}
                    <div className="relative w-12 h-12">
                      <svg className="w-full h-full" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#374151"
                          strokeWidth="3"
                        />
                        <motion.path
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="url(#neonGradient)"
                          strokeWidth="3"
                          strokeDasharray={`${skill.level}, 100`}
                          initial={{ strokeDasharray: '0, 100' }}
                          animate={{ strokeDasharray: `${skill.level}, 100` }}
                          transition={{ duration: 1, delay: skillIdx * 0.1 }}
                        />
                        <defs>
                          <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#22d3ee" />
                            <stop offset="100%" stopColor="#d946ef" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-white">
                        {skill.level}%
                      </div>
                    </div>
                    <span className="font-medium text-gray-200">{skill.name}</span>
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

export default SkillsSection;