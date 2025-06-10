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

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
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
              websites with clean code. Let’s create something great together!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection("projects")}
                className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                View My Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-6 py-3 sm:px-8 sm:py-4 border border-gray-600 text-white font-medium rounded-lg hover:bg-gray-800/50 transition-all duration-300"
              >
                Get In Touch
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
                {/* Replace this div with your actual image */}
                {/* <div className="text-4xl text-gray-500">Your Image</div> */}
                <img
                  src="/manish.webp"
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

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <a href="#projects" className="animate-bounce block">
          <div className="w-8 h-14 border-4 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
          </div>
          <span className="text-gray-400 text-xs mt-2 block text-center">
            Scroll Down
          </span>
        </a>
      </div> */}
    </section>
  );
}
