



















import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, Code, Server, Globe } from 'lucide-react';

// Custom Skill Icon Components
const ReactIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
  </svg>
);

const NodeIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
  </svg>
);

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const skills = [
    { name: 'Frontend Development', icon: <Code size={24} />, color: 'bg-blue-100 text-blue-600' },
    { name: 'Backend Development', icon: <Server size={24} />, color: 'bg-green-100 text-green-600' },
    { name: 'React.js', icon: <ReactIcon />, color: 'bg-purple-100 text-purple-600' },
    { name: 'Node.js', icon: <NodeIcon />, color: 'bg-yellow-100 text-yellow-600' },
    { name: 'Full Stack Development', icon: <Globe size={24} />, color: 'bg-pink-100 text-pink-600' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* About Me Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              About Me
            </h2>
            <div className="mt-2 h-1 w-20 bg-purple-600 mx-auto rounded-full"/>
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-500 rounded-lg transform rotate-6 scale-105"
                animate={{
                  rotate: [6, -6, 6],
                  scale: [1.05, 1.07, 1.05]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <img
                src="/api/placeholder/600/400"
                alt="About Me"
                className="relative z-10 rounded-lg shadow-xl w-full"
              />
            </motion.div>

            {/* Text Content */}
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-gray-800">
                Passionate Full Stack Developer
              </h3>
              <p className="text-gray-600 leading-relaxed">
                With experience in designing and implementing web-based solutions using the MERN stack, 
                I focus on creating efficient, scalable, and user-friendly applications. My journey in 
                software development has equipped me with strong problem-solving skills and a deep 
                understanding of both frontend and backend technologies.
              </p>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className={`flex items-center p-3 rounded-lg ${skill.color}`}
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
      title: "MERN Stack Developer",
      company: "Hannanth Digital India Private Limited",
      location: "Remote",
      duration: "September 2024 - Present",
      description: [
        "Developed an AI-powered website builder",
        "Implemented frontend and backend features",
        "Streamlined website creation process"
      ]
    },
    {
      title: "MERN Stack Developer",
      company: "Cuvette Tech",
      location: "Remote",
      duration: "Nov 2023 - Aug 2024",
      description: [
        "Built web-based story sharing platform",
        "Implemented user authentication",
        "Enhanced platform performance"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Freelance",
      location: "Remote",
      duration: "July 2022 - Nov 2023",
      description: [
        "Created client websites",
        "Improved site performance",
        "Conducted API testing"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3
              }
            }
          }}
        >
          {/* Section Header */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Professional Experience
            </h2>
            <div className="mt-2 h-1 w-20 bg-purple-600 mx-auto rounded-full"/>
          </motion.div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-purple-200 rounded-full"/>

            {/* Experience Items */}
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className={`relative mb-12 md:mb-0 ${
                  index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-auto'
                }`}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? '' : 'md:ml-auto'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white p-6 rounded-lg shadow-lg relative"
                  >
                    {/* Timeline Dot */}
                    <div className="hidden md:block absolute top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-purple-600 
                      ${index % 2 === 0 ? '-right-10' : '-left-10'}"/>

                    <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                    <p className="text-purple-600 font-medium mt-1">{exp.company}</p>
                    
                    <div className="flex items-center gap-4 mt-2 text-gray-600 text-sm">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1"/>
                        {exp.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-1"/>
                        {exp.location}
                      </div>
                    </div>

                    <ul className="mt-4 space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start text-gray-600">
                          <span className="mr-2 mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
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