export default function Experience() {
  return (
    <section id="experience" className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="max-w-3xl mx-auto px-6 text-center py-16">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
          Experience
        </h2>
        <p className="text-2xl font-bold text-gray-100 mb-6">
          Fresher
        </p>
        <p className="text-gray-300">
          As a student pursuing post graduation, I bring up-to-date knowledge and enthusiasm to every project.
          Currently seeking opportunities to apply my skills in real-world scenarios.
        </p>

        {/* Decorative elements to fill space */}
        <div className="mt-16 flex justify-center space-x-8 opacity-50">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-900/20 to-purple-900/20 blur-xl"></div>
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-900/20 to-blue-900/20 blur-xl"></div>
        </div>
      </div>
    </section>
  );
}