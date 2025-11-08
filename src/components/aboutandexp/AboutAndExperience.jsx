

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Layout, Wrench, Users, Calendar, MapPin } from 'lucide-react';

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const skills = [
    { name: 'JavaScript', icon: <Code size={24} />, color: 'bg-cyan-400/20 text-cyan-400' },
    { name: 'TypeScript', icon: <Code size={24} />, color: 'bg-purple-400/20 text-purple-400' },
    { name: 'React.js', icon: <Layout size={24} />, color: 'bg-cyan-400/20 text-cyan-400' },
    { name: 'Node.js', icon: <Server size={24} />, color: 'bg-purple-400/20 text-purple-400' },
    { name: 'MongoDB', icon: <Database size={24} />, color: 'bg-cyan-400/20 text-cyan-400' },
    { name: 'Vue.js', icon: <Layout size={24} />, color: 'bg-purple-400/20 text-purple-400' },
    { name: 'Tailwind CSS', icon: <Layout size={24} />, color: 'bg-cyan-400/20 text-cyan-400' },
    { name: 'Socket.io', icon: <Wrench size={24} />, color: 'bg-purple-400/20 text-purple-400' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Animated Particle Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-40"
          animate={{ x: [0, 80, 0], y: [0, 120, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          style={{ top: '15%', left: '20%' }}
        />
        <motion.div
          className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-40"
          animate={{ x: [0, -100, 0], y: [0, -80, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          style={{ top: '65%', right: '25%' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* About Me Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow-lg">
              About Me
            </h2>
            <div className="mt-2 h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full" />
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <motion.div
              variants={itemVariants}
              className="relative"
              whileHover={{ scale: 1.05, rotateX: 10, rotateY: 10 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 rounded-lg blur-2xl"
                animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
              />
              <img
                src="https://via.placeholder.com/600/400"
                alt="About Me"
                className="relative z-10 rounded-lg shadow-[0_0_20px_rgba(34,211,238,0.3)] w-full"
              />
            </motion.div>

            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">
                Versatile Full Stack Developer
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I’m a passionate developer with expertise in the MERN stack and Vue.js, dedicated to building scalable web applications. My experience spans creating efficient, user-friendly solutions with modern technologies, leveraging strong problem-solving skills and a commitment to continuous learning.
              </p>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className={`flex items-center p-3 rounded-lg ${skill.color} border border-cyan-400/30 hover:shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-all`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="mr-3">{skill.icon}</span>
                    <span className="font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "Lifelayer Health Solutions Pvt. Ltd.",
      location: "Gurgaon, Haryana",
      duration: "November 2024 - Present",
      achievements: [
        `Engineered a complete doctor appointment booking system
with doctor planner, booking slots, patient booking lists, and
prescription creation with payment integration, reducing codebase by 30% and improving system speed by 20%.`,
`Developed a comprehensive CRM system for medical professionals using Vue.js, Node.js, and MongoDB, improving operational efficiency by 25% through streamlined patient management and appointment scheduling`,
`Built a real-time notification system (Socket.io + Vue.js), cutting communication latency by 40% across app modules`,
       `Designed and implemented advanced MongoDB aggregation
pipelines for complex data analysis, improving report generation speed by 30% while maintaining clean, maintainable code`,
`Contributed to the GNR analytics module, creating efficient
data aggregation pipelines from multiple sources (purchase orders, consignments) to extract actionable business insights.`
      ],
      tech: ["Vue.js", "Node.js", "MongoDB", "Socket.io", "REST API"]
    },
    {
      title: "Full Stack Web Developer",
      company: "Hamanth Digital India Private Limited",
      location: "Bikaner",
      duration: "April 2024 - October 2024",
      achievements: [
        "Delivered 10+ web applications across domains like finance, tarot, and startups.",
        "Reduced page load time from 2s to 0.8s through optimization techniques.",
        "Implemented 20+ feature enhancements and bug fixes for improved functionality.",
        "Achieved 20% faster response times via code optimization."
      ],
      tech: ["React.js", "Node.js", "MySQL", "Tailwind CSS", "Nginx"]
    },
    {
      title: "MERN Stack Developer (Intern)",
      company: "Cuvette Tech",
      location: "Remote",
      duration: "August 2023 - March 2024",
      achievements: [
        "Developed a story-sharing platform with real-time sharing and blog publishing.",
        "Implemented user authentication, dynamic content rendering, and CRUD operations.",
        "Optimized UI/UX through team collaboration.",
        "Integrated WhatsApp-like status updates and newsletter functionality."
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Animated Particle Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-40"
          animate={{ x: [0, 90, 0], y: [0, 130, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          style={{ top: '20%', left: '25%' }}
        />
        <motion.div
          className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-40"
          animate={{ x: [0, -110, 0], y: [0, -90, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          style={{ top: '70%', right: '20%' }}
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
            Professional Journey
          </h2>
          <div className="mt-3 h-1 w-32 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full" />
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-4">
            My career path through innovative projects and impactful roles.
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5, boxShadow: '0 0 20px rgba(34, 211, 238, 0.5)' }}
              className="relative p-8 bg-gray-800/80 rounded-2xl border border-cyan-400/30 shadow-[0_0_15px_rgba(34,211,238,0.2)] backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-cyan-400/20 flex items-center justify-center">
                  <Server className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                  <p className="text-cyan-400 font-medium">{exp.company}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {exp.tech.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="space-y-4 text-gray-300">
                {exp.achievements.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1 mr-3">•</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <Calendar className="w-5 h-5" />
                  {exp.duration}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-5 h-5" />
                  {exp.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutAndExperience = () => {
  return (
    <div>
      <AboutSection />
      <ExperienceSection />
    </div>
  );
};

export default AboutAndExperience;