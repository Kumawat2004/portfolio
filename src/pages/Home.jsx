// Fully Responsive Home.jsx with Optimized Background & Typing Effect
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import image from "../assets/3.jpeg";

const words = ["Web Developer", "Frontend Developer", "React Developer", "Web Designer"];

const Home = () => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentWord.length) {
          setText(currentWord.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        if (charIndex > 0) {
          setText(currentWord.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <main
      className="relative w-full h-screen flex flex-col justify-center items-center text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "top center" }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <motion.div
        className="relative w-full max-w-4xl text-center px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
          Prakash Kumawat
        </h1>
        <p className="text-lg sm:text-2xl md:text-3xl mt-4">
          I'm <span className="font-semibold border-r-4 pr-2 text-blue-400">{text}</span>
        </p>
      </motion.div>
    </main>
  );
};

export default Home;