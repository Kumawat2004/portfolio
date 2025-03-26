import React from "react";
import { motion } from "framer-motion";
import { FiBriefcase, FiBarChart, FiSun, FiCalendar } from "react-icons/fi";
import { FaBinoculars } from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FiBriefcase className="text-3xl" />,
    title: "Lorem Ipsum",
    description: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.",
  },
  {
    id: 2,
    icon: <FiBarChart className="text-3xl" />,
    title: "Dolor Sitema",
    description: "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  },
  {
    id: 3,
    icon: <FaBinoculars className="text-3xl" />,
    title: "Magni Dolores",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
  },
  {
    id: 4,
    icon: <FiSun className="text-3xl" />,
    title: "Nemo Enim",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus.",
  },
  {
    id: 5,
    icon: <FiBarChart className="text-3xl" />,
    title: "Sed ut perspiciatis",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
  },
  {
    id: 6,
    icon: <FiCalendar className="text-3xl" />,
    title: "Eiusmod Tempor",
    description: "Et harum quidem rerum facilis est et expedita distinctio.",
  },
];

const Services = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 overflow-hidden">
      {/* Title Animation */}
      <motion.div 
        className="mb-10 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-gray-900">Services</h2>
        <div className="w-16 h-1 bg-blue-500 mt-2 mx-auto"></div>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
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
              whileHover={{ rotate: 10 }}
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
