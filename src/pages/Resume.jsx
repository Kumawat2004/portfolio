import React from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Resume = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 ">
      {/* Resume Heading */}
      <motion.h2 
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Resume
      </motion.h2>
      <div className="w-16 h-1 bg-blue-500 mb-6"></div>
      <motion.p 
        className="text-gray-700 mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        A passionate React Developer with experience in building dynamic and user-friendly web applications.
      </motion.p>

      {/* 2 Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Summary Section */}
          <h3 className="text-2xl font-bold mb-3">Summary</h3>
          <div className="border-l-4 border-blue-500 pl-4 mb-6">
            <h4 className="text-xl font-semibold">Prakash Kumawat</h4>
            <p className="italic text-gray-600 mb-2">
              I am a dedicated web developer and dedicated student of information technology.
            </p>
            <ul className="text-gray-700">
              <li><FaMapMarkerAlt className="inline text-blue-500 mr-2" /> Jaipur, India</li>
              <li><FaPhone className="inline text-blue-500 mr-2" /> +91 9166577321</li>
              <li><FaEnvelope className="inline text-blue-500 mr-2" /> prakashkmwt04@gmail.com</li>
            </ul>
          </div>

          {/* Education Section */}
          <h3 className="text-2xl font-bold mb-3">Education</h3>
          <div className="border-l-4 border-blue-500 pl-4 mb-6">
            <h4 className="text-xl font-semibold">Bachelor of Technology (B.Tech)</h4>
            <p className="text-gray-700">Arya College of Engineering & IT | 2021 - 2025</p>
            <p className="text-gray-600">Focused on Web Development, JavaScript, and modern frontend frameworks.</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4 mb-6">
            <h4 className="text-xl font-semibold">Senior Secondary (12th)</h4>
            <p className="text-gray-700">Government Sr.Sec. School | 2020 - 2021</p>
            <p className="text-gray-600">Secured 88.00%, reflecting strong academic performance.</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="text-xl font-semibold">Secondary (10th)</h4>
            <p className="text-gray-700">Saraswati Vidya Vihar Sr. Sec. School | 2018 - 2019</p>
            <p className="text-gray-600">Secured 67.00%, reflecting strong academic performance.</p>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Professional Experience */}
          <h3 className="text-2xl font-bold mb-3">Professional Experience</h3>
          <div className="border-l-4 border-blue-500 pl-4 mb-6">
            <h4 className="text-xl font-semibold">React Developer Intern</h4>
            <p className="text-gray-700">Celebal Technology | June 2024 - August 2024</p>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Developed responsive web applications using React.js and Material-UI.</li>
              <li>Optimized website performance and ensured seamless user experience.</li>
              <li>Collaborated with backend teams for API integration.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
