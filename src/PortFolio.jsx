

import React from "react";
import { motion } from "framer-motion";

const About = () => (
  <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">About Me</h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl mx-auto"
      >
        <p className="text-gray-700 dark:text-gray-300">
          I'm a web developer with a passion for creating beautiful, responsive, and interactive web applications. My expertise lies in React.js, Tailwind CSS, and animation libraries like Framer Motion.
        </p>
      </motion.div>
    </div>
  </section>
);

export default About;
