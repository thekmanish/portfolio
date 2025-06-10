export default function Projects() {
  const projects = [
    {
      title: "ShopMate",
      description:
        "An E Commerce platform with user authentication, Product Management, Order Management through Admin Panel.",
      tags: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Zustand",
        "REST API",
        "JWT",
        "React-Router",
      ],
      image: "Shopmate.png",
      githubUrl: "https://github.com/thekmanish/ShopMate",
      liveUrl: "https://shop-mate-qgsj.vercel.app/",
      dimensions: { width: 1920, height: 920 }, // Added dimensions
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-purple-900/80 via-gray-900 to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
              Featured Project
            </span>
          </h2>
          <p className="text-purple-200/80 max-w-2xl mx-auto">
            Here's what I've been building recently
          </p>
        </div>

        {/* Project card with proper dimensions and borders */}
        <div className="flex justify-center">
          <div className="w-full max-w-[1800px] group">
            {" "}
            {/* Adjusted max-width */}
            <div className="relative overflow-hidden rounded-xl border-2 border-purple-800/50 hover:border-purple-500/70 transition-all duration-500 bg-gray-900/50 p-4">
              {" "}
              {/* Added padding and border */}
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              {/* Project image container with proper aspect ratio */}
              <div
                className="relative overflow-hidden bg-gray-900 rounded-lg border border-gray-700"
                style={{
                  aspectRatio: `${projects[0].dimensions.width}/${projects[0].dimensions.height}`,
                  maxHeight: "80vh", // Limits height while maintaining aspect ratio
                }}
              >
                <img
                  src={projects[0].image}
                  alt={projects[0].title}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              {/* Project details */}
              <div className="p-8 bg-gray-800/70 backdrop-blur-sm mt-4 rounded-lg border border-gray-700 relative z-20">
                <h3 className="text-3xl font-bold text-white mb-3">
                  {projects[0].title}
                </h3>
                <p className="text-purple-100/80 mb-6 text-lg">
                  {projects[0].description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {projects[0].tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 text-sm rounded-full bg-purple-900/50 text-purple-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-6">
                  <a
                    href={projects[0].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white transition-colors text-lg"
                  >
                    <GitHubIcon className="w-6 h-6" />
                    Code
                  </a>
                  {projects[0].liveUrl && (
                    <a
                      href={projects[0].liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-lg border border-purple-500 text-purple-100 hover:bg-purple-500/20 transition-colors text-lg"
                    >
                      <ExternalLinkIcon className="w-6 h-6" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Future projects note */}
        <div className="mt-16 text-center text-purple-200/60 italic">
          More projects coming soon...
        </div>

        {/* Decorative divider */}
        <div className="mt-20 flex justify-center">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

// Icon components remain the same
function GitHubIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function ExternalLinkIcon({ className }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}
