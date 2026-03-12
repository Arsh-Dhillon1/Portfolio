function App() {
  return (
    <div className="bg-gray-950 text-white min-h-screen font-sans">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-10 py-6 sticky top-0 bg-gray-950/80 backdrop-blur-md z-50">
        <h1 className="text-xl font-bold">Arsh Dhillon</h1>

        <div className="flex gap-6 text-gray-300">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
      </nav>


{/* HERO */}
<section className="px-10 py-28 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

  {/* LEFT SIDE */}
  <div>

    <h1 className="text-5xl md:text-6xl font-bold mb-4">
      Hi, I'm <span className="text-blue-400">Arsh</span> 👋
    </h1>

    <h2 className="text-2xl text-gray-300 mb-6">
      Cloud & Backend Developer
    </h2>

    <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-xl">
      I build scalable backend systems and cloud infrastructure.
      Passionate about problem solving, distributed systems,
      and creating reliable applications using modern technologies.
    </p>

    <div className="flex gap-4">

      <a
        href="https://github.com/Arsh-Dhillon1"
        target="_blank"
        className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
      >
        GitHub
      </a>

      <a
        href="/resume.pdf"
        target="_blank"
        className="border border-gray-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
      >
        Resume
      </a>

    </div>

  </div>


  {/* RIGHT SIDE IMAGE */}
  <div className="flex justify-center">

    <div className="relative">

      <img
        src="/image.jpg"
        alt="Arsh Dhillon"
        className="w-72 h-72 object-cover rounded-full border-4 border-gray-700 shadow-2xl"
      />

      {/* subtle glow */}
      <div className="absolute inset-0 rounded-full blur-2xl opacity-30 bg-blue-500 -z-10"></div>

    </div>

  </div>

</section>
{/* ABOUT SECTION */}
<section id="about" className="px-10 py-20 max-w-6xl mx-auto">

<h2 className="text-4xl font-bold text-center mb-14">
About Me
</h2>

<div className="grid md:grid-cols-3 gap-8">

{/* LEFT SIDE CARDS */}

<div className="space-y-6">

{/* QUICK FACTS */}

<div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">

<h3 className="text-xl font-semibold mb-4">
Quick Facts
</h3>

<ul className="space-y-3 text-gray-400">

<li className="flex items-center gap-3">
📍 Punjab, India
</li>

<li className="flex items-center gap-3">
🎓 B.Tech Computer Science
</li>

<li className="flex items-center gap-3">
💻 Focus: Cloud + Backend
</li>

<li className="flex items-center gap-3">
🧠 150+ DSA Problems Solved
</li>

</ul>

</div>


{/* INTERESTS */}

<div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">

<h3 className="text-xl font-semibold mb-4">
When I'm Not Coding
</h3>

<div className="space-y-3 text-gray-400">

<div className="flex items-center gap-3">
🌐 Exploring Tech
</div>

<div className="flex items-center gap-3">
📚 Learning New Concepts
</div>

<div className="flex items-center gap-3">
📖 Reading
</div>

</div>

</div>

</div>


{/* RIGHT SIDE STORY */}

<div className="md:col-span-2 bg-gray-900 border border-gray-800 p-8 rounded-xl">

<h3 className="text-2xl font-semibold mb-4 text-blue-400">
My Journey
</h3>

<p className="text-gray-400 leading-relaxed mb-4">

I'm a Computer Science student at Lovely Professional University with
a strong foundation in Data Structures and Algorithms using C++.
My interest in technology started with problem solving and gradually
expanded into building real systems.

</p>

<p className="text-gray-400 leading-relaxed mb-4">

I have hands-on experience with cloud infrastructure and have built
projects involving AWS VPC architecture, database migration to
AWS RDS, and cloud-based data pipelines.

</p>

<p className="text-gray-400 leading-relaxed">

Currently I am strengthening my skills in full-stack development
using the MERN stack while continuing to improve my algorithmic
problem-solving abilities.

</p>

</div>

</div>

</section>

      {/* SKILLS SECTION (Card Style) */}
      <section id="skills" className="px-10 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h3 className="font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-blue-400">💻</span> Languages
            </h3>
            <p className="text-gray-400">C++, JavaScript, HTML, CSS</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h3 className="font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-green-400">🚀</span> Frameworks
            </h3>
            <p className="text-gray-400">React, Node.js, Express.js, Tailwind</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h3 className="font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-orange-400">🛠️</span> Tools
            </h3>
            <p className="text-gray-400">Git, AWS, Docker, Linux, VS Code</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h3 className="font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-purple-400">📊</span> Databases
            </h3>
            <p className="text-gray-400">MySQL, MongoDB</p>
          </div>

        </div>
      </section>


      {/* PROJECTS SECTION */}
      <section id="projects" className="px-10 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2 text-white">WorkTrack – Task Management</h3>
              <p className="text-gray-400 mb-4">Built a full-stack task management system with JWT authentication, REST APIs, and MVC architecture.</p>
              <p className="text-gray-500 text-sm mb-4">Tech: Node, Express, MongoDB, React</p>
            </div>
            <a href="https://github.com/Arsh-Dhillon1/WorkTrack-Application" className="text-blue-400 hover:underline">View Code →</a>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2 text-white">Data Migration to AWS RDS</h3>
              <p className="text-gray-400 mb-4">Migrated MariaDB from EC2 to AWS RDS ensuring secure connectivity and zero data loss.</p>
              <p className="text-gray-500 text-sm mb-4">Tech: AWS VPC, EC2, RDS, Linux</p>
            </div>
            <a href="https://github.com/Arsh-Dhillon1/AWS-Projects" className="text-blue-400 hover:underline">View Code →</a>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2 text-white">Two-Tier VPC Architecture</h3>
              <p className="text-gray-400 mb-4">Designed secure AWS VPC with public/private subnets, NAT Gateway, and Bastion host.</p>
              <p className="text-gray-500 text-sm mb-4">Tech: AWS VPC, EC2, SSH</p>
            </div>
            <a href="https://github.com/Arsh-Dhillon1/AWS-Two-Tier-VPC" className="text-blue-400 hover:underline">View Code →</a>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2 text-white">Cloud Data Pipeline</h3>
              <p className="text-gray-400 mb-4">Developed pipeline that processes CSV files uploaded to S3 and stores data in MongoDB.</p>
              <p className="text-gray-500 text-sm mb-4">Tech: AWS S3, Lambda, DynamoDB </p>
            </div>
            <a href="https://github.com/Arsh-Dhillon1/AWS-Projects" className="text-blue-400 hover:underline">View Code →</a>
          </div>

        </div>
      </section>


      {/* TRAINING & CERTIFICATIONS */}
      <section className="px-10 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Certifications</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h3 className="font-semibold text-white mb-1">Docker Fundamentals</h3>
            <p className="text-gray-500 text-sm italic">KodeKloud</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h3 className="font-semibold text-white mb-1">Oracle Cloud Architect Associate</h3>
            <p className="text-gray-500 text-sm italic">Oracle</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h3 className="font-semibold text-white mb-1">Oracle Cloud Foundations Associate</h3>
            <p className="text-gray-500 text-sm italic">Oracle</p>
          </div>
        </div>
      </section>


      {/* ACHIEVEMENTS */}
      <section className="px-10 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Achievements</h2>
        <div className="space-y-4">
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl flex items-center gap-6">
            <div className="text-3xl">🔥</div>
            <div>
              <h3 className="text-lg font-semibold">50-Day Streak on LeetCode</h3>
              <p className="text-gray-400">Consistent algorithmic practice and problem-solving.</p>
            </div>
          </div>
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl flex items-center gap-6">
            <div className="text-3xl">💡</div>
            <div>
              <h3 className="text-lg font-semibold">150+ LeetCode Questions Solved</h3>
              <p className="text-gray-400">Strengthening DSA skills across various platforms.</p>
            </div>
          </div>
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl flex items-center gap-6">
            <div className="text-3xl">🏆</div>
            <div>
              <h3 className="text-lg font-semibold text-white flex justify-between">
                2nd Place - Group Discussion Competition
                {/* <span className="text-sm font-normal text-gray-500">Aug 2024</span> */}
              </h3>
              <p className="text-gray-400">Mastering the Art of Group Discussions (Speak Up 5.0).</p>
            </div>
          </div>
        </div>
      </section>


{/* EDUCATION SECTION */}
<section className="px-10 py-16 max-w-5xl mx-auto">
  <h2 className="text-3xl font-bold mb-8">Education</h2>

  <div className="grid md:grid-cols-3 gap-6">

    {/* UNIVERSITY */}
    <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-3 bg-gray-800 text-xs text-blue-400 font-bold uppercase tracking-widest">
        Ongoing
      </div>

      <h3 className="font-bold text-xl text-white mb-2">
        Lovely Professional University
      </h3>

      <p className="text-gray-300">
        B.Tech Computer Science
      </p>

      <p className="text-blue-400 font-semibold mt-2">
        CGPA: 8.36
      </p>
    </div>


    {/* INTERMEDIATE */}
    <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
      <h3 className="font-bold text-xl text-white mb-2">
        Swami Sant Das Public School
      </h3>

      <p className="text-gray-300">
        Intermediate (CBSE)
      </p>

      <p className="text-blue-400 font-semibold mt-2">
        Percentage: 71.4%
      </p>
    </div>


    {/* MATRICULATION */}
    <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
      <h3 className="font-bold text-xl text-white mb-2">
        St. Joseph Convent School
      </h3>

      <p className="text-gray-300">
        Matriculation
      </p>

      <p className="text-blue-400 font-semibold mt-2">
        Percentage: 88.4%
      </p>
    </div>

  </div>
</section>

      {/* CONTACT SECTION */}
      <section id="contact" className="px-10 py-24 text-center">
        <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
        <p className="text-gray-400 mb-10 max-w-xl mx-auto">I'm currently looking for new opportunities. Feel free to reach out via email or LinkedIn!</p>
        <div className="flex justify-center gap-6 flex-wrap">
          <a href="mailto:arshdhillon2034@gmail.com" className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition">Email Me</a>
          <a href="https://github.com/Arsh-Dhillon1" target="_blank" className="bg-gray-800 text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-700 transition">GitHub</a>
          <a href="https://linkedin.com/in/arsh-dhillon1" target="_blank" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-500 transition">LinkedIn</a>
        </div>
      </section>


      {/* FOOTER */}
      <footer className="text-center text-gray-600 pb-12 pt-10 border-t border-gray-900">
        © 2026 Arsh Dhillon
      </footer>

    </div>
  );
}

export default App;