import { useEffect } from "react";

export default function Hero() {
  // Typewriter effect without external libraries
  useEffect(() => {
    const roles = [
      "Aspiring Full Stack Developer",
      "React Learner",
      "Tech Enthusiast",
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeout;

    const typewriter = () => {
      const currentRole = roles[roleIndex];
      const displayElement = document.getElementById("typewriter");

      if (displayElement) {
        if (isDeleting) {
          displayElement.textContent = currentRole.substring(0, charIndex - 1);
          charIndex--;
        } else {
          displayElement.textContent = currentRole.substring(0, charIndex + 1);
          charIndex++;
        }

        let typeSpeed = 100;

        if (isDeleting) {
          typeSpeed /= 2;
        }

        if (!isDeleting && charIndex === currentRole.length) {
          typeSpeed = 2000; // Pause at end
          isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          typeSpeed = 500;
        }

        timeout = setTimeout(typewriter, typeSpeed);
      }
    };

    timeout = setTimeout(typewriter, 1000);

    return () => clearTimeout(timeout);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const downloadResume = () => {
    // Replace with your actual resume file path
    const resumeUrl = "ManishKumarSingh_Resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "ManishKumarSingh_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-0"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 opacity-95"></div>

        {/* Animated circles */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-blue-500 opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-purple-500 opacity-10 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-28 h-28 rounded-full bg-indigo-500 opacity-10 animate-blob"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-500">
                Manish
              </span>
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-6 h-12">
              <span
                id="typewriter"
                className="inline-block border-r-2 border-gray-500 pr-2"
              ></span>
            </h2>

            <p className="text-gray-400 text-lg sm:text-xl mb-10 max-w-lg mx-auto lg:mx-0">
              I am an aspiring developer, building simple and user-friendly
              websites with clean code. Let's create something great together!
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start items-center">
              {/* <button
                onClick={() => scrollToSection("projects")}
                className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5 text-sm sm:text-base"
              >
                View Projects
              </button> */}

              <button
                onClick={downloadResume}
                className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-1.5 text-sm sm:text-base group"
              >
                <span>Download CV</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 group-hover:translate-y-0.5 transition-transform"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="px-5 py-2.5 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-0.5 text-sm sm:text-base"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Image/illustration */}
          <div className="relative flex justify-center">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>

              {/* Profile image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gray-700 shadow-2xl bg-gray-800 flex items-center justify-center">
                <img
                  src="manish.webp"
                  alt="Profile"
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Tech stack badges */}
              <div className="absolute -bottom-5 -left-5 bg-gray-800 rounded-full p-3 shadow-lg border border-gray-700">
                <div className="text-blue-400 text-sm font-mono">React</div>
              </div>
              <div className="absolute -top-5 -right-5 bg-gray-800 rounded-full p-3 shadow-lg border border-gray-700">
                <div className="text-purple-400 text-sm font-mono">Node.js</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
