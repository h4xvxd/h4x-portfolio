import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="text-white md:pt-2 pt-4 text-[14px]">
          Terms & Conditions
        </div>
        <div className="flex gap-2 flex-row ">
          <a
            href="#" /* TODO: your GitHub */
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 w-10 bg-radial from- from-40% to-[#161A31] backdrop-blur-sm border border-[#272A3C]/50 rounded-xl flex items-center justify-center hover:bg-[#05041F]/90 transition-all duration-300 shadow-lg"
          >
            <FaGithub size={18} color="white" />
          </a>
          <a
            href="#" /* TODO: your Instagram */
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 w-10 bg-radial from- from-40% to-[#161A31] backdrop-blur-sm border border-[#272A3C]/50 rounded-xl flex items-center justify-center hover:bg-[#05041F]/90 transition-all duration-300 shadow-lg"
          >
            <FaInstagram size={18} color="white" />
          </a>
          <a
            href="#" /* TODO: your LinkedIn */
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 w-10 bg-radial from- from-40% to-[#161A31] backdrop-blur-sm border border-[#272A3C]/50 rounded-xl flex items-center justify-center hover:bg-[#05041F]/90 transition-all duration-300 shadow-lg"
          >
            <FaLinkedin size={18} color="white" />
          </a>
          <a
            href="#" /* TODO: your X/Twitter */
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 w-10 bg-radial from- from-40% to-[#161A31] backdrop-blur-sm  rounded-xl flex items-center justify-center hover:bg-[#05041F]/90 transition-all duration-300 shadow-lg"
          >
            <FaTwitter size={18} color="white" />
          </a>
          <a
            href="#" /* TODO: your WhatsApp number */
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 w-10 bg-radial from- from-40% to-[#161A31] backdrop-blur-sm border border-[#272A3C]/50 rounded-xl flex items-center justify-center hover:bg-[#05041F]/90 transition-all duration-300 shadow-lg"
          >
            <FaWhatsapp size={18} color="white" />
          </a>
        </div>
        <div className="text-white md:pt-2 pt-4 text-[14px]">
          Copyright ©2026 H4X
        </div>
      </div>
    </footer>
  );
};

export default Footer;
