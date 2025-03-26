import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", percentage: 100 },
  { name: "CSS", percentage: 90 },
  { name: "BootStrap", percentage: 70 },
  { name: "JavaScript", percentage: 50 },
  { name: "React", percentage: 50 },
  { name: "Tailwind CSS", percentage: 90 },
  { name: "Node JS", percentage: 70 },
  { name: "Express JS", percentage: 80 },
];

const Skills = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      {/* Heading */}
      <motion.h2 
        className="text-4xl font-bold mb-4 text-gray-900"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>
      <div className="w-16 h-1 bg-blue-500 mb-6"></div>
      <motion.p 
        className="text-gray-700 mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        I have expertise in various front-end and back-end technologies, focusing on creating high-performance applications.
      </motion.p>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between">
              <p className="text-lg font-semibold">{skill.name}</p>
              <p className="text-lg font-semibold">{skill.percentage}%</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <motion.div
                className="bg-blue-500 h-3 rounded-full"
                initial={{ width: "0%" }}
                whileInView={{ width: `${skill.percentage}%` }}
                transition={{ duration: 1.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
