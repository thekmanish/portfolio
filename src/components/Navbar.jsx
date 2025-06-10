import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function PortfolioNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/thekmanish" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/manish-kumar-singh-80b4362a4/" },
    { name: "Email", url: "itsksmanish@gmail.com" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Section detection
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/90 backdrop-blur-md py-2 shadow-lg"
          : "bg-gray-900/70 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("home")}
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 hover:from-pink-500 hover:to-yellow-500 transition-all duration-300"
            >
              {"<Manish.dev />"}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-3 py-2 text-sm font-medium relative group transition-all duration-300 ${
                    activeSection === link.id
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 ${
                      activeSection === link.id
                        ? "w-full bg-blue-500"
                        : "w-0 group-hover:w-full bg-blue-400"
                    } transition-all duration-300`}
                  ></span>
                </button>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 ml-6 border-l border-gray-700 pl-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.name === "Email" ? `mailto:${social.url}` : social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-xl"
                  aria-label={social.name}
                >
                  {social.name === "GitHub" && <FaGithub />}
                  {social.name === "LinkedIn" && <FaLinkedin />}
                  {social.name === "Email" && <FaEnvelope />}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none transition duration-300"
              aria-label="Toggle menu"
            >
              <svg
                className={`h-6 w-6 ${isMenuOpen ? "hidden" : "block"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`h-6 w-6 ${isMenuOpen ? "block" : "hidden"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden ${
          isMenuOpen ? "block" : "hidden"
        } transition-all duration-300 ease-in-out`}
      >
        <div className="px-2 pt-2 pb-4 space-y-1 bg-gray-800/95 backdrop-blur-sm">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium ${
                activeSection === link.id
                  ? "bg-gray-700 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              } transition-colors duration-300`}
            >
              {link.label}
            </button>
          ))}

          <div className="flex justify-center space-x-6 pt-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.name === "Email" ? `mailto:${social.url}` : social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300 text-lg"
                aria-label={social.name}
              >
                {social.name === "GitHub" && <FaGithub/>}
                {social.name === "LinkedIn" && <FaLinkedin/>}
                {social.name === "Email" && <FaEnvelope/>}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
