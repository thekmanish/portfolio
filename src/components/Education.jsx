export default function Education() {
  const degrees = [
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

  const certificates = [
    {
      name: "Meta Frontend Developer Professional Certificate",
      issuer: "Coursera",
      year: "2025",
      link: "https://coursera.org/share/8656254be32e83cfbba3a7b174924664"
    },
    {
      name: "IBM Backend Development with Node.js and Express",
      issuer: "Coursera",
      year: "2025",
      link: "https://coursera.org/share/d3fc6ac463e647a91b03c12abeadf25c"
    }
  ];

  return (
    <section id="education" className="min-h-screen py-16 bg-gray-900 flex items-center">
      <div className="max-w-5xl mx-auto px-6 w-full">
        {/* Main Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
            Education
          </h2>
          <p className="text-purple-100">Formal Learning & Certifications</p>
        </div>

        {/* Degrees Section */}
        <h3 className="text-2xl font-semibold text-pink-300 mb-6">Degrees and Diploma</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {degrees.map((item, index) => (
            <div 
              key={index}
              className="relative p-6 rounded-xl bg-gray-800 border border-purple-900/50 hover:border-pink-500/50 transition duration-300 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <h4 className="text-xl font-bold text-white mb-1">{item.degree}</h4>
              <div className="flex justify-between items-center mb-3">
                <p className="text-purple-200">{item.institution}</p>
                <span className="text-sm px-2 py-1 rounded-full bg-purple-900/70 text-purple-100">
                  {item.year}
                </span>
              </div>
              <ul className="space-y-2">
                {item.highlights.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-pink-300 mr-2">•</span>
                    <span className="text-gray-200">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certificates Section */}
        <h3 className="text-2xl font-semibold text-pink-300 mb-6">Certificates</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((cert, i) => (
            <div 
              key={i} 
              className="p-6 bg-gray-800 rounded-xl border border-purple-900/50 hover:border-pink-500/50 transition duration-300"
            >
              <h4 className="text-lg font-semibold text-white mb-1">{cert.name}</h4>
              <p className="text-purple-200">{cert.issuer}</p>
              <p className="text-sm text-gray-400 mb-3">{cert.year}</p>
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block text-pink-300 hover:underline text-sm"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>

        {/* Decorative line */}
        <div className="mt-12 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-60 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
