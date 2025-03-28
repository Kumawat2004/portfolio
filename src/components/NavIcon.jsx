import {FaFacebook, FaInstagram } from "react-icons/fa";
import { FaLinkedin, FaSquareThreads } from "react-icons/fa6";


const NavIcon = () => {
  return (
    <div className="nav-icon flex gap-5 text-2xl">
      <div className="w-12 h-12 flex items-center justify-center bg-gray-300/25 rounded-full hover:bg-[#0d6efd] hover:scale-110 cursor-pointer transition duration-500" onClick={() => window.open("https://www.linkedin.com/in/prakash-kumawat-a11844232", "_blank")}>
        <FaLinkedin />
      </div>
      <div className="w-12 h-12 flex items-center justify-center bg-gray-300/25 rounded-full hover:bg-[#0d6efd] hover:scale-110 cursor-pointer transition duration-500" onClick={() => window.open("https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=m2lnbwk", "_blank")}>
        <FaInstagram />
      </div>
      <div className="w-12 h-12 flex items-center justify-center bg-gray-300/25 rounded-full hover:bg-[#0d6efd] hover:scale-110 cursor-pointer transition duration-500" onClick={() => window.open("https://www.threads.net/@kumawat_prakash2004?invite=0", "_blank")}>
        <FaSquareThreads />
      </div>
      <div className="w-12 h-12 flex items-center justify-center bg-gray-300/25 rounded-full hover:bg-[#0d6efd] hover:scale-110 cursor-pointer transition duration-500" onClick={() => window.open("https://www.facebook.com/share/152ebMiZ9pn/", "_blank")}>
        <FaFacebook />
      </div>
    </div>
  );
};

export default NavIcon;
