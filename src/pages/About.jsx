import React from "react";
import { motion } from "framer-motion";
import { 
  FaBirthdayCake, FaGlobe, FaPhone, FaMapMarkerAlt, 
  FaUserGraduate, FaEnvelope, FaBriefcase 
} from "react-icons/fa";
import profileImage from "../assets/logo.jpg"; // Ensure the correct path

const About = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 overflow-hidden">
      {/* Heading */}
      <motion.h2 
        className="text-4xl font-bold text-gray-900 mb-4"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>
      <div className="w-16 h-1 bg-blue-500 mb-6"></div>

      {/* Intro Text */}
      <motion.p 
        className="text-gray-700 mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        I’m a passionate React Developer with expertise in React.js, JavaScript, Material-UI, Bootstrap, CSS, and HTML. I specialize in building modern, high-performance, and responsive web applications. My goal is to create seamless user experiences through scalable and efficient front-end solutions.
      </motion.p>

      {/* Grid Layout */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Left - Profile Image */}
        <motion.div 
          className="w-full md:w-[350px] flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img src={profileImage} alt="Profile" className="shadow-xl rounded-lg w-72 md:w-80" />
        </motion.div>

        {/* Right - Details */}
        <motion.div 
          className="w-full"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-3 text-gray-900">Web Designer & Web Developer</h3>
          <p className="text-gray-700 italic mb-4">
            I focus on writing clean, maintainable, and reusable code while ensuring optimized performance and smooth functionality. 
          </p>

          {/* Personal Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
            {[
              { icon: FaBirthdayCake, label: "Birthday", value: "1 March 2004" },
              { icon: FaUserGraduate, label: "Age", value: "21" },
              { icon: FaGlobe, label: "Website", value: <a href="https://www.prakash.com" className="text-blue-600 hover:underline">www.prakash.com</a> },
              { icon: FaBriefcase, label: "Degree", value: "Bachelor" },
              { icon: FaPhone, label: "Phone", value: "+91 9166577321" },
              { icon: FaEnvelope, label: "Email", value: <a href="mailto:prakashkmwt04@gmail.com" className="text-blue-600 hover:underline">prakashkmwt04@gmail.com</a> },
              { icon: FaMapMarkerAlt, label: "City", value: "Jaipur" },
              { icon: FaBriefcase, label: "Freelance", value: "Available" },
            ].map((item, index) => (
              <motion.p 
                key={index} 
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <item.icon className="text-blue-500 mr-2" />
                <strong>{item.label}:</strong> {item.value}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Final Paragraph */}
      <motion.p 
        className="text-gray-700 mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        As a Web Designer & Developer, I strive to craft visually appealing, interactive, and user-friendly websites. I keep up with emerging trends and best practices to deliver efficient, scalable, and future-proof solutions. Whether collaborating with teams, solving complex problems, or optimizing applications, I am always eager to push the boundaries of web development.
      </motion.p>
    </section>
  );
};

export default About;
