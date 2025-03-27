import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar (Header) */}
      <div className={`fixed top-0 left-0 z-50 ${isSidebarOpen ? "w-[300px]" : "w-[0]"} md:w-[300px] transition-all duration-300`}>
        <Header setIsSidebarOpen={setIsSidebarOpen} />
      </div>

      {/* Main Content (Covers Full Screen) */}
      <div className="flex-1 ml-0 md:ml-[300px] transition-all duration-300">
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="resume"><Resume /></section>
        <section id="portfolio"><Portfolio /></section>
        <section id="services"><Service /></section>
        <section id="contact"><Contact /></section>
        <section><Footer /></section>
      </div>
      
    </div>
  );
};

export default App;
