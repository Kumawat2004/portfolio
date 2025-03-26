import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiZoomIn, FiLink, FiX, FiRefreshCw } from "react-icons/fi";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";
import project5 from "../assets/project5.jpg";
import project6 from "../assets/project6.jpg";
import project7 from "../assets/project7.jpg";
import project8 from "../assets/project8.jpg";
import project9 from "../assets/project9.jpg";

const portfolioItems = [
  { id: 1, title: "App 1", image: project1 },
  { id: 2, title: "Product 1", image: project2 },
  { id: 3, title: "Branding 1", image: project3 },
  { id: 4, title: "Book 1", image: project4 },
  { id: 5, title: "App 2", image: project5 },
  { id: 6, title: "Product 2", image: project6 },
  { id: 7, title: "Product 3", image: project7 },
  { id: 8, title: "Product 4", image: project8 },
  { id: 9, title: "Product 5", image: project9 },
];

const Portfolio = () => {
  const [modalImage, setModalImage] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});
  const [errorImages, setErrorImages] = useState({});

  // Function to retry loading image
  const retryImageLoad = (id) => {
    setErrorImages((prev) => ({ ...prev, [id]: false })); // Reset error state
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 overflow-hidden">
      {/* Heading Animation */}
      <motion.h2
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Portfolio
      </motion.h2>
      <div className="w-16 h-1 bg-blue-500 mb-6"></div>
      <motion.p
        className="text-gray-700 mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Showcasing my work in various domains.
      </motion.p>

      {/* Portfolio Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {portfolioItems.map((item) => (
          <div
            key={item.id}
            className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
          >
            {/* Check if Image Load Failed */}
            {errorImages[item.id] ? (
              <div className="w-full h-56 flex flex-col items-center justify-center bg-gray-200">
                <p className="text-gray-600 mb-2">Image failed to load</p>
                <button
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition"
                  onClick={() => retryImageLoad(item.id)}
                >
                  <FiRefreshCw /> Retry
                </button>
              </div>
            ) : (
              // Lazy Loaded Image with Blur Effect
              <img
  src={item.image}
  alt={item.title}
  loading="lazy"
  className={`w-full h-56 object-cover transition-opacity duration-500 
    ${loadedImages[item.id] ? "opacity-100" : "opacity-0"}`}
  onLoad={() => setLoadedImages((prev) => ({ ...prev, [item.id]: true }))}
  onError={() => setErrorImages((prev) => ({ ...prev, [item.id]: true }))}
/>
            )}

            {/* Hover Overlay */}
            {!errorImages[item.id] && (
              <div className="absolute inset-0 bg-opacity-30 backdrop-blur-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out">
                <div className="flex gap-4">
                  <FiZoomIn
                    className="text-white text-2xl cursor-pointer hover:scale-110 transition"
                    onClick={() => setModalImage(item.image)}
                  />
                  <FiLink className="text-white text-2xl cursor-pointer hover:scale-110 transition" />
                </div>
              </div>
            )}
          </div>
        ))}
      </motion.div>

      {/* Modal for Zoomed Image */}
      {modalImage && (
        <div
          className="fixed inset-0 backdrop-blur-xl flex items-center justify-center z-50"
          onClick={() => setModalImage(null)}
        >
          <button
            className="absolute top-5 right-5 text-white text-3xl bg-gray-800 bg-opacity-50 p-2 rounded-full hover:bg-opacity-100 transition"
            onClick={() => setModalImage(null)}
          >
            <FiX />
          </button>
          <img src={modalImage} alt="Zoomed" className="max-w-3xl max-h-[90vh] rounded-lg shadow-lg" />
        </div>
      )}
    </section>
  );
};

export default Portfolio;
