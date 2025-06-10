export default function Skills() {
  const skillCategories = [
    {
      name: "Languages Known",
      skills: [
        { name: "JavaScript", logo: "javascript.svg" },
        { name: "Python", logo: "/python.svg" },
        { name: "PHP", logo: "/php.svg" },
        { name: "C++", logo: "/cpp.svg" },
      ]
    },
    {
      name: "Frontend",
      skills: [
        { name: "React", logo: "/react.svg" },
        { name: "Tailwind CSS", logo: "/tailwind.svg" },
      ]
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", logo: "/nodejs.svg" },
        { name: "Express", logo: "/express.svg" },
      ]
    },
    {
      name: "Databases",
      skills: [
        { name: "SQL", logo: "/sql.svg" },
        { name: "MongoDB", logo: "/mongodb.svg" },
      ]
    },
    {
      name: "Tools & More",
      skills: [
        { name: "Git", logo: "/git.svg" },
        { name: "Github", logo: "/github.svg" },
        { name: "Zustand", logo: "/zustand.svg" },
        { name: "Redux Tookit", logo: "/redux.svg" },
        { name: "REST API", logo: "/restapi.svg" },

      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-gray-900 to-purple-900/80">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header matching hero style */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-purple-800">
              My Tech Stack
            </span>
          </h2>
          <p className="text-white max-w-2xl mx-auto">
            Technologies that I have learnt and exploring more and more
          </p>
        </div>

        {/* Skills grid */}
        <div className="space-y-16">
          {skillCategories.map((category) => (
            <div key={category.name}>
              <h3 className="text-xl font-semibold text-purple-300 mb-8 flex items-center justify-center">
                <span className="w-12 h-0.5 bg-gradient-to-r from-purple-500/80 to-purple-600 mr-4"></span>
                {category.name}
                <span className="w-12 h-0.5 bg-gradient-to-r from-purple-600 to-purple-500/80 ml-4"></span>
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name}
                    className="group relative flex flex-col items-center p-6 bg-purple-900/30 rounded-xl border border-purple-800/50 hover:border-transparent transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
                  >
                    {/* Gradient border effect on hover */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                    
                    {/* Skill logo */}
                    <div className="w-20 h-20 mb-4 flex items-center justify-center p-2">
                      {skill.logo ? (
                        <img 
                          src={skill.logo} 
                          alt={skill.name} 
                          className="h-full w-full object-contain group-hover:scale-110 transition-transform duration-300 filter group-hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.5)]"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-900/50 to-gray-800 flex items-center justify-center text-purple-300 text-2xl font-bold">
                          {skill.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    
                    {/* Skill name with gradient hover effect */}
                    <span className="text-purple-200 text-center font-medium group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-purple-500 transition-all duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="mt-20 flex justify-center">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}