function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">

      {/* HERO SECTION */}
      <section className="text-center py-24 px-6">
        <h1 className="text-5xl font-bold mb-4">Arsh Dhillon</h1>
        <p className="text-gray-400 text-xl">
          Computer Science Student | Web Developer
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="https://github.com/YOURUSERNAME"
            className="bg-white text-black px-6 py-2 rounded-lg font-medium hover:bg-gray-200"
          >
            GitHub
          </a>

          <a
            href="/resume.pdf"
            className="border border-gray-500 px-6 py-2 rounded-lg hover:bg-gray-800"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-10">Tech Stack</h2>

        <div className="flex flex-wrap justify-center gap-4">
          <span className="bg-gray-800 px-4 py-2 rounded-lg">React</span>
          <span className="bg-gray-800 px-4 py-2 rounded-lg">Node.js</span>
          <span className="bg-gray-800 px-4 py-2 rounded-lg">MongoDB</span>
          <span className="bg-gray-800 px-4 py-2 rounded-lg">AWS</span>
          <span className="bg-gray-800 px-4 py-2 rounded-lg">JavaScript</span>
          <span className="bg-gray-800 px-4 py-2 rounded-lg">Git</span>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-20 px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-2">
              AWS RDS Migration
            </h3>

            <p className="text-gray-400 mb-4">
              Migrated database infrastructure to AWS RDS
              improving reliability and scalability.
            </p>

            <a
              href="https://github.com/YOURUSERNAME/project"
              className="text-blue-400"
            >
              View Code →
            </a>
          </div>


          <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-2">
              MERN Stack Application
            </h3>

            <p className="text-gray-400 mb-4">
              Full stack application using MongoDB,
              Express, React and Node.js.
            </p>

            <a
              href="https://github.com/YOURUSERNAME/project"
              className="text-blue-400"
            >
              View Code →
            </a>
          </div>


          <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-2">
              DSA Practice
            </h3>

            <p className="text-gray-400 mb-4">
              Solved algorithmic problems and implemented
              core data structures.
            </p>

            <a
              href="https://github.com/YOURUSERNAME/project"
              className="text-blue-400"
            >
              View Code →
            </a>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="text-center py-20">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>

        <p className="text-gray-400 mb-2">
          Email: yourmail@email.com
        </p>

        <p className="text-gray-400">
          GitHub: github.com/YOURUSERNAME
        </p>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-gray-500 pb-8">
        © 2026 Arsh Dhillon
      </footer>

    </div>
  )
}

export default App