export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center bg-gray-900"
    >
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-12">
          Experience
        </h2>

        {/* Experience Card */}
        <div className="bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
            <h3 className="text-2xl font-bold text-white">
              Full Stack Developer
            </h3>
            <span className="text-sm text-gray-400">Sep 2025 – Present</span>
          </div>

          <p className="text-blue-400 font-semibold mb-4">OPSKUBE</p>

          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>
              Worked in an agile team environment and handled API integration
              with frontend.
            </li>
            <li>
              Coordinated with frontend and backend developers to ensure smooth
              API integration and feature delivery.
            </li>
            <li>
              Developed modular REST APIs using NestJS with DTO validation.
            </li>
            <li>
              Integrated PostgreSQL with TypeORM for relational data handling.
            </li>
            <li>
              Designed and built full admin dashboard UI using Refine.js and Ant
              Design.
            </li>

            <li>
              Used GitLab for version control, branching, and collaborative
              development.
            </li>
          </ul>

          <p className="mt-6 text-sm text-gray-400">
            Tech Stack: NestJS, PostgreSQL, TypeORM, Refine.js, Ant Design, JWT,
            REST APIs, Git, GitLab
          </p>
        </div>
      </div>
    </section>
  );
}
