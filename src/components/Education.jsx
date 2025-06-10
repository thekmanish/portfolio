export default function Education() {
  const education = [
    {
      degree: "Master of Computer Applications",
      institution: "Manipal University",
      year: "2023-25",
      highlights: [
        "Mastery in different Languages",
        "Full Stack Development" 
      ]
    },
    {
      degree: "CCC, O Level, IT A Level",
      institution: "NIELIT",
      year: "2022-24",
      highlights: [
        "Foundations of Language",
        "Specialization in Full Stack Development"
      ]
    },
    {
      degree: "Bachelor of Commerce",
      institution: "University of Delhi",
      year: "2018-21",
      highlights: [
        "Accounting",
        "Financial Management"
      ]
    }
  ];

  return (
    <section id="education" className="min-h-screen py-16 bg-gradient-to-b from-gray-900 to-gray-950 flex items-center">
      <div className="max-w-4xl mx-auto px-6 w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
            Education
          </h2>
          <p className="text-purple-100">
            Formal learning and Certifications
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((item, index) => (
            <div 
              key={index}
              className="relative p-6 rounded-xl bg-gray-800 border border-purple-900/50 hover:border-pink-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
            >
              {/* Degree */}
              <h3 className="text-xl font-bold text-white mb-1">
                {item.degree}
              </h3>
              
              {/* Institution + Year */}
              <div className="flex justify-between items-center mb-3">
                <p className="text-purple-200">{item.institution}</p>
                <span className="text-sm px-2 py-1 rounded-full bg-purple-900/70 text-purple-100">
                  {item.year}
                </span>
              </div>
              
              {/* Highlights */}
              <ul className="space-y-2">
                {item.highlights.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-pink-300 mr-2">•</span>
                    <span className="text-gray-200">{point}</span>
                  </li>
                ))}
              </ul>
              
              {/* Animated corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-pink-500/30 to-purple-500/30 rounded-full group-hover:opacity-100 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Simple decorative element - moved to bottom */}
        <div className="mt-12 flex justify-center absolute bottom-8 left-0 right-0">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-60 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}