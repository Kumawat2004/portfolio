import React from "react";
import { motion } from "framer-motion";
import { FiMonitor, FiFilm, FiCloud, FiCode, FiShield, FiDatabase } from "react-icons/fi";

const services = [
  {
    id: 1,
    icon: <FiMonitor className="text-3xl" />,  // UI/UX Development
    title: "UI/UX Development",
    description: "We create responsive, user-friendly interfaces using React.js and Tailwind CSS.",
},
{
    id: 2,
    icon: <FiFilm className="text-3xl" />,  // Animated Website
    title: "Animated Website",
    description: "We create interactive websites with smooth animations using Framer Motion.",
},
{
    id: 3,
    icon: <FiCloud className="text-3xl" />,  // Deployment
    title: "Deployment",
    description: "Deploy applications on AWS and Vercel with cloud storage integration.",
},
{
    id: 4,
    icon: <FiCode className="text-3xl" />,  // API Development
    title: "API Development",
    description: "We build secure, scalable APIs with Node.js and Express.js.",
},
{
    id: 5,
    icon: <FiShield className="text-3xl" />,  // User Authentication
    title: "User Authentication",
    description: "We implement JWT, OAuth, and RBAC for secure user access.",
},
{
    id: 6,
    icon: <FiDatabase className="text-3xl" />,  // Database Management
    title: "Database Management",
    description: "We optimize and manage MongoDB with Mongoose for fast, efficient CRUD.",
},
];

const Services = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 ">
      {/* Title Animation */}
      <motion.div 
        className="mb-10 "
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Services</h2>
        <div className="w-16 h-1 bg-blue-500 mt-2 "></div>
        <p className="text-gray-600 mt-4 max-w-3xl ">
        We provide full-stack development services, including modern and responsive UI/UX with React.js, efficient state management, and seamless API integration. On the backend, we build secure and scalable RESTful APIs with Node.js and Express, implement authentication, and manage databases using MongoDB for optimal performance.
        </p>
      </motion.div>

      {/* Services Grid with Animation */}
      <motion.div 
        className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className="flex items-start space-x-4 p-5 bg-white shadow-md rounded-lg 
                      hover:shadow-xl transition-all cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Icon with Background Animation */}
            <motion.div 
              className="w-20 h-16 flex items-center justify-center bg-blue-500 text-white rounded-[60px] shadow-md"
            >
              {service.icon}
            </motion.div>

            {/* Text Content */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
