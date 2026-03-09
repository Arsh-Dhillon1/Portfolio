function App() {
  return (
    <div className="bg-gray-950 text-white min-h-screen">


      <nav className="flex justify-between items-center px-10 py-6">
        <h1 className="text-xl font-bold">Portfolio</h1>

        <div className="flex gap-6 text-gray-300">
          <a href="#projects">Projects</a>
          <a href="#tech">Tech</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>



      <section className="px-10 py-24 max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold mb-6">
          Hi, I'm Arsh Dhillon 👋
        </h1>

        <p className="text-gray-400 text-xl mb-8">
          Computer Science student focused on building
          scalable applications and solving real problems.
        </p>

        <div className="flex gap-4">

          <a
            href="https://github.com/Arsh-Dhillon1"
            className="bg-white text-black px-6 py-2 rounded-lg"
          >
            GitHub
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            className="border border-gray-500 px-6 py-2 rounded-lg"
          >
            Resume
          </a>

        </div>

      </section>



      <section id="tech" className="px-10 py-16 max-w-5xl mx-auto">

        <h2 className="text-3xl font-bold mb-8">
          Tech Stack
        </h2>

        <div className="flex flex-wrap gap-4">

          <span className="bg-gray-800 px-4 py-2 rounded-lg">C++</span>
          <span className="bg-gray-800 px-4 py-2 rounded-lg">React</span>
          <span className="bg-gray-800 px-4 py-2 rounded-lg">Node.js</span>
          <span className="bg-gray-800 px-4 py-2 rounded-lg">MongoDB</span>
          <span className="bg-gray-800 px-4 py-2 rounded-lg">AWS</span>
          <span className="bg-gray-800 px-4 py-2 rounded-lg">JavaScript</span>
          <span className="bg-gray-800 px-4 py-2 rounded-lg">Docker</span>
          <span className="bg-gray-800 px-4 py-2 rounded-lg">Git</span>

        </div>

      </section>



      <section id="projects" className="px-10 py-16 max-w-5xl mx-auto">

<h2 className="text-3xl font-bold mb-10">
Projects
</h2>

<div className="grid md:grid-cols-2 gap-6">

{/* AWS VPC */}

<div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
<h3 className="text-xl font-bold mb-2">
AWS Two-Tier VPC Architecture
</h3>

<p className="text-gray-400 mb-3">
Designed a secure two-tier cloud architecture with
public and private subnets using AWS VPC.
</p>

<p className="text-gray-500 text-sm mb-4">
Tech: AWS VPC, EC2, NAT Gateway
</p>

<a
href="https://github.com/Arsh-Dhillon1/AWS-Projects/tree/main/AWS-Two-Tier-VPC"
className="text-blue-400"
>
View Code →
</a>

</div>


{/* DATA PIPELINE */}

<div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
<h3 className="text-xl font-bold mb-2">
Cloud Data Ingestion Pipeline
</h3>

<p className="text-gray-400 mb-3">
Built a pipeline that uploads CSV data to AWS S3 and
processes it into MongoDB for structured storage.
</p>

<p className="text-gray-500 text-sm mb-4">
Tech: AWS S3, Node.js, MongoDB
</p>

<a
href="https://github.com/Arsh-Dhillon1/AWS-Projects/tree/main/AWS%20Lambda"
className="text-blue-400"
>
View Code →
</a>

</div>


{/* RDS MIGRATION */}

<div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
<h3 className="text-xl font-bold mb-2">
Data Migration to AWS RDS
</h3>

<p className="text-gray-400 mb-3">
Migrated relational database from local environment
to AWS RDS improving scalability and availability.
</p>

<p className="text-gray-500 text-sm mb-4">
Tech: AWS RDS, MySQL
</p>

<a
href="https://github.com/Arsh-Dhillon1/AWS-Projects/tree/main/RDS%20Migration/screenshots"
className="text-blue-400"
>
View Code →
</a>

</div>


{/* MERN */}

<div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
<h3 className="text-xl font-bold mb-2">
WorkTrack
</h3>

<p className="text-gray-400 mb-3">
Full stack web application built using MongoDB,
Express, React and Node.js.
</p>

<p className="text-gray-500 text-sm mb-4">
Tech: MongoDB, Express, React, Node.js
</p>

<a
href="https://github.com/Arsh-Dhillon1/WorkTrack-Application"
className="text-blue-400"
>
View Code →
</a>

</div>

</div>

</section>
<section id="contact" className="px-10 py-24 text-center">

<h2 className="text-3xl font-bold mb-10">
Get In Touch
</h2>

<p className="text-gray-400 mb-10">
Feel free to reach out if you want to collaborate
or discuss opportunities.
</p>

<div className="flex justify-center gap-6 flex-wrap">

<a
href="mailto:arshdhillon2034@gmail.com"
className="bg-gray-800 px-6 py-3 rounded-lg hover:bg-gray-700 transition"
>
Email
</a>

<a
href="https://github.com/Arsh-Dhillon1"
target="_blank"
className="bg-gray-800 px-6 py-3 rounded-lg hover:bg-gray-700 transition"
>
GitHub
</a>

<a
href="https://www.linkedin.com/in/arsh-dhillon1/"
target="_blank"
className="bg-gray-800 px-6 py-3 rounded-lg hover:bg-gray-700 transition"
>
LinkedIn
</a>

</div>

</section>

    </div>
  )
}

export default App