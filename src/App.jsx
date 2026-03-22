import { useState, useEffect, useRef } from "react";
import "./App.css";

/* ── Animated cursor ──────────────────────────────────────────────────────── */
const Cursor = () => {
  const dot = useRef(null);
  const ring = useRef(null);
  useEffect(() => {
    const move = (e) => {
      if (dot.current) dot.current.style.transform = `translate(${e.clientX - 4}px,${e.clientY - 4}px)`;
      if (ring.current) ring.current.style.transform = `translate(${e.clientX - 18}px,${e.clientY - 18}px)`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <>
      <div ref={dot} className="cursor-dot" />
      <div ref={ring} className="cursor-ring" />
    </>
  );
};

/* ── Scroll reveal ────────────────────────────────────────────────────────── */
const Reveal = ({ children, delay = 0, className = "" }) => {
  const el = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (el.current) obs.observe(el.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={el}
      className={`transition-all duration-700 ease-out ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

/* ── Magnetic button ──────────────────────────────────────────────────────── */
const MagBtn = ({ href, children, solid = false, target }) => {
  const el = useRef(null);
  const onMove = (e) => {
    const r = el.current.getBoundingClientRect();
    el.current.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.22}px,${(e.clientY - r.top - r.height / 2) * 0.22}px)`;
  };
  const onLeave = () => { el.current.style.transform = "translate(0,0)"; };
  return (
    <a
      href={href} target={target} ref={el}
      onMouseMove={onMove} onMouseLeave={onLeave}
      style={{ transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1), background 0.2s, border-color 0.2s, color 0.2s" }}
      className={`inline-flex items-center px-7 py-3 rounded-full text-xs font-medium tracking-widest uppercase cursor-none ${
        solid
          ? "bg-lime-400 text-zinc-950 border border-lime-400 hover:bg-lime-300 hover:border-lime-300"
          : "border border-white/15 text-zinc-200 hover:border-white/30 hover:bg-white/5"
      }`}
    >
      {children}
    </a>
  );
};

/* ── Data ─────────────────────────────────────────────────────────────────── */
const projects = [
  { num: "01", title: "WorkTrack",       sub: "Task Management System",  desc: "Full-stack app with JWT auth, REST APIs, and MVC architecture.",                                    tags: ["Node","Express","MongoDB","React"], href: "https://github.com/Arsh-Dhillon1/WorkTrack-Application" },
  { num: "02", title: "RDS Migration",   sub: "Data Migration to AWS",   desc: "Migrated MariaDB from EC2 to RDS with zero data loss and secure VPC connectivity.",               tags: ["AWS VPC","EC2","RDS","Linux"],       href: "https://github.com/Arsh-Dhillon1/AWS-Projects/tree/main/RDS%20Migration/screenshots" },
  { num: "03", title: "VPC Architecture",sub: "Two-Tier AWS Network",    desc: "Designed secure VPC with public/private subnets, NAT Gateway, and Bastion host.",                  tags: ["AWS VPC","EC2","SSH"],               href: "https://github.com/Arsh-Dhillon1/AWS-Projects/tree/main/AWS-Two-Tier-VPC" },
  { num: "04", title: "Cloud Pipeline",  sub: "Serverless Data Pipeline",desc: "Pipeline that processes CSV files from S3 and stores structured data in DynamoDB.",               tags: ["S3","Lambda","DynamoDB"],            href: "https://github.com/Arsh-Dhillon1/AWS-Projects/tree/main/AWS%20Lambda/screenshots" },
];

const skillCards = [
  { icon: "◈", label: "Languages",      items: "C++  ·  JavaScript  ·  HTML  ·  CSS" },
  { icon: "◎", label: "Frameworks",     items: "React  ·  Node.js  ·  Express  ·  Tailwind" },
  { icon: "⬡", label: "Cloud & DevOps", items: "AWS  ·  Docker  ·  Linux  ·  Git" },
  { icon: "⬢", label: "Databases",      items: "MySQL  ·  MongoDB" },
];

const stats        = [{ n:"150+", l:"DSA Problems" },{ n:"50", l:"Day Streak" },{ n:"4", l:"Cloud Projects" },{ n:"8.36", l:"CGPA" }];
const certs        = [
  { name:"Docker Fundamentals",       issuer:"KodeKloud", href:"https://drive.google.com/file/d/1zNO1FpTykPau8bqqVlb_Uj2S7cBEiS8u/view?usp=drive_link" },  // ← replace # with your cert URL
  { name:"OCI Architect Associate",   issuer:"Oracle",    href:"https://drive.google.com/file/d/1cVIircruWv1tWxMR79p2mF11CrQ4ci0I/view?usp=drive_link" },  // ← replace # with your cert URL
  { name:"OCI Foundations Associate", issuer:"Oracle",    href:"https://drive.google.com/file/d/1QcwCJ4-w4lPehPAsaz9dT-7Jsg8xfd1V/view?usp=drive_link" },  // ← replace # with your cert URL
];
const achievements = [{ icon:"🔥", title:"50-Day LeetCode Streak", desc:"Consistent daily algorithmic practice" },{ icon:"💡", title:"150+ Problems Solved", desc:"DSA across multiple platforms" },{ icon:"🏆", title:"2nd — Speak Up 5.0", desc:"Group Discussion Competition" }];
const education    = [{ school:"Lovely Professional University", degree:"B.Tech Computer Science", score:"CGPA 8.36", tag:"Ongoing" },{ school:"Swami Sant Das Public School", degree:"Intermediate — CBSE", score:"71.4%" },{ school:"St. Joseph Convent School", degree:"Matriculation", score:"88.4%" }];

/* ── APP ──────────────────────────────────────────────────────────────────── */
export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen overflow-x-hidden portfolio-root">
      <div className="grain-overlay pointer-events-none" aria-hidden />
      <Cursor />

      {/* ── NAV ─────────────────────────────────────────────────────────────── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-14 py-5 transition-all duration-500 ${scrolled ? "bg-zinc-950/85 backdrop-blur-xl border-b border-white/5" : ""}`}>
        <span className="font-display text-2xl tracking-wider text-lime-400">AD</span>

        <ul className="hidden md:flex gap-10 list-none m-0 p-0">
          {["About","Projects","Skills","Contact"].map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="text-xs tracking-[0.15em] uppercase text-zinc-400 hover:text-zinc-100 transition-colors duration-200 cursor-none no-underline">
                {l}
              </a>
            </li>
          ))}
        </ul>

        <button className="md:hidden flex flex-col gap-1.5 cursor-none bg-transparent border-0 p-1" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`block w-6 bg-zinc-100 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} style={{ height: "1px" }} />
          <span className={`block w-6 bg-zinc-100 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} style={{ height: "1px" }} />
          <span className={`block w-6 bg-zinc-100 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} style={{ height: "1px" }} />
        </button>

        {menuOpen && (
          <div className="fixed inset-0 bg-zinc-950 z-40 flex flex-col items-center justify-center gap-10">
            {["About","Projects","Skills","Contact"].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}
                className="text-2xl tracking-[0.2em] uppercase text-zinc-200 hover:text-lime-400 transition-colors cursor-none no-underline">
                {l}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center px-8 md:px-16 pt-32 pb-20 max-w-7xl mx-auto gap-12">
        <div className="hero-ghost-text absolute left-0 top-1/2 -translate-y-1/2 select-none pointer-events-none" aria-hidden>ARSH</div>

        {/* left */}
        <div className="relative z-10 flex-1 animate-hero">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
            <span className="font-mono text-xs tracking-[0.15em] uppercase text-lime-400">
              Available for opportunities
            </span>
          </div>

          <h1 className="font-display leading-none mb-4" style={{ fontSize: "clamp(5rem,11vw,10rem)", letterSpacing: "-0.01em" }}>
            Arsh<br /><span className="text-lime-400">Dhillon</span>
          </h1>

          <p className="font-mono text-xs tracking-[0.15em] uppercase text-zinc-500 mb-5">
            Cloud &amp; Backend Developer
          </p>

          <p className="text-zinc-400 text-lg leading-relaxed max-w-lg mb-10">
            I architect scalable cloud infrastructure and reliable backend systems —
            turning complex distributed problems into elegant, production-ready solutions.
          </p>

          <div className="flex flex-wrap gap-3">
            <MagBtn href="https://github.com/Arsh-Dhillon1" target="_blank" solid>GitHub ↗</MagBtn>
            <MagBtn href="/resume.pdf" target="_blank">Resume ↗</MagBtn>
          </div>
        </div>

        {/* right */}
        <div className="relative z-10 flex-shrink-0 hidden md:block animate-hero-img">
          <div className="absolute inset-[-18px] rounded-[170px_170px_170px_24px] border border-dashed border-lime-400/25 spin-slow" />
          <img src="/image.jpg" alt="Arsh Dhillon"
            className="w-72 h-80 object-cover relative z-10 transition-all duration-500"
            style={{ borderRadius: "160px 160px 160px 16px", filter: "grayscale(20%)" }}
            onMouseEnter={e => e.target.style.filter = "grayscale(0%)"}
            onMouseLeave={e => e.target.style.filter = "grayscale(20%)"}
          />
          <div className="absolute bottom-[-24px] right-[-24px] w-40 h-40 rounded-full bg-lime-400/8 blur-3xl z-0" />
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[0.65rem] tracking-[0.2em] uppercase text-zinc-600 animate-float">
          scroll ↓
        </div>
      </section>

      {/* ── ABOUT ─────────────────────────────────────────────────────────────── */}
      <section id="about" className="max-w-5xl mx-auto px-8 md:px-12 py-28">
        <Reveal><span className="font-mono text-xs tracking-[0.18em] uppercase text-lime-400">01 — About</span></Reveal>
        <Reveal delay={80}>
          <h2 className="font-display mt-2 mb-14" style={{ fontSize: "clamp(3.5rem,7vw,6rem)", lineHeight: 0.95 }}>My Journey</h2>
        </Reveal>

        <div className="grid md:grid-cols-[1fr_320px] gap-12 items-start">
          <Reveal delay={120}>
            <div className="space-y-5 text-zinc-400 leading-relaxed" style={{ fontSize: "1.05rem" }}>
              <p>I'm a Computer Science student at <span className="text-zinc-100 font-medium">Lovely Professional University</span> with a strong foundation in Data Structures &amp; Algorithms. My curiosity started with competitive problem-solving and grew into building real production systems.</p>
              <p>I've built cloud infrastructure on AWS — VPC architectures, RDS migrations, and serverless data pipelines — and I'm currently deepening my full-stack skills with the MERN stack.</p>
              <p>Outside code: exploring tech, reading, and always chasing the next hard problem.</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-3">
            {stats.map(({ n, l }, i) => (
              <Reveal key={l} delay={i * 60}>
                <div className="bg-zinc-900 rounded-xl p-5 hover:-translate-y-1 transition-all duration-300 border border-white/8 hover:border-lime-400/30">
                  <span className="font-display text-4xl text-lime-400 leading-none block">{n}</span>
                  <span className="font-mono mt-1 block text-zinc-500" style={{ fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>{l}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ──────────────────────────────────────────────────────────────── */}
      <section id="skills" className="max-w-5xl mx-auto px-8 md:px-12 py-20">
        <Reveal><span className="font-mono text-xs tracking-[0.18em] uppercase text-lime-400">02 — Skills</span></Reveal>
        <Reveal delay={80}>
          <h2 className="font-display mt-2 mb-12" style={{ fontSize: "clamp(3.5rem,7vw,6rem)", lineHeight: 0.95 }}>Toolkit</h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillCards.map(({ icon, label, items }, i) => (
            <Reveal key={label} delay={i * 70}>
              <div className="bg-zinc-900 border border-white/8 rounded-xl p-6 hover:border-lime-400/35 hover:-translate-y-1.5 transition-all duration-300">
                <span className="font-mono text-xl text-lime-400 mb-4 block">{icon}</span>
                <h3 className="font-mono font-medium mb-2 text-zinc-200" style={{ fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>{label}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{items}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── PROJECTS ────────────────────────────────────────────────────────────── */}
      <section id="projects" className="max-w-5xl mx-auto px-8 md:px-12 py-20">
        <Reveal><span className="font-mono text-xs tracking-[0.18em] uppercase text-lime-400">03 — Work</span></Reveal>
        <Reveal delay={80}>
          <h2 className="font-display mt-2 mb-12" style={{ fontSize: "clamp(3.5rem,7vw,6rem)", lineHeight: 0.95 }}>Projects</h2>
        </Reveal>

        <div>
          {projects.map((p, i) => (
            <Reveal key={p.num} delay={i * 60}>
              <a href={p.href} target="_blank" className="group no-underline project-row grid items-start py-8 gap-6 rounded-lg transition-all duration-300 cursor-none"
                style={{ gridTemplateColumns: "48px 1fr 32px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <span className="font-mono text-zinc-600 pt-1" style={{ fontSize: "0.68rem" }}>{p.num}</span>
                <div className="space-y-2">
                  <div className="flex items-baseline gap-4 flex-wrap">
                    <span className="font-display text-3xl text-zinc-100 group-hover:text-lime-400 transition-colors duration-200" style={{ letterSpacing: "0.02em" }}>{p.title}</span>
                    <span className="font-mono text-zinc-500" style={{ fontSize: "0.72rem" }}>{p.sub}</span>
                  </div>
                  <p className="text-zinc-500 text-sm max-w-xl">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {p.tags.map(t => (
                      <span key={t} className="font-mono text-zinc-500 px-3 py-1 rounded-full border border-white/8" style={{ fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>{t}</span>
                    ))}
                  </div>
                </div>
                <span className="text-zinc-600 text-xl pt-1 group-hover:text-lime-400 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 inline-block">↗</span>
              </a>
            </Reveal>
          ))}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }} />
        </div>
      </section>

      {/* ── CERTS + ACHIEVEMENTS ─────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-8 md:px-12 py-20">
        <Reveal><span className="font-mono text-xs tracking-[0.18em] uppercase text-lime-400">04 — Recognition</span></Reveal>
        <Reveal delay={80}>
          <h2 className="font-display mt-2 mb-12" style={{ fontSize: "clamp(3.5rem,7vw,6rem)", lineHeight: 0.95 }}>Certs &amp; Wins</h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-14">
          <div>
            <h3 className="font-mono text-zinc-500 mb-5" style={{ fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase" }}>Certifications</h3>
            {certs.map((c, i) => (
              <Reveal key={c.name} delay={i * 55}>
                <a href={c.href} target="_blank" className="no-underline group flex items-center justify-between py-4 cursor-none hover:bg-zinc-900/50 hover:px-3 hover:-mx-3 rounded transition-all duration-200" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                  <span className="text-zinc-200 text-sm group-hover:text-lime-400 transition-colors duration-200">{c.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-zinc-500" style={{ fontSize: "0.68rem" }}>{c.issuer}</span>
                    <span className="text-zinc-600 group-hover:text-lime-400 transition-colors duration-200 text-xs">↗</span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
          <div>
            <h3 className="font-mono text-zinc-500 mb-5" style={{ fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase" }}>Achievements</h3>
            {achievements.map((a, i) => (
              <Reveal key={a.title} delay={i * 55}>
                <div className="flex items-start gap-4 py-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                  <span className="text-xl flex-shrink-0 mt-0.5">{a.icon}</span>
                  <div>
                    <p className="text-zinc-200 text-sm font-medium">{a.title}</p>
                    <p className="text-zinc-500 text-xs mt-0.5">{a.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION ───────────────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-8 md:px-12 py-20">
        <Reveal><span className="font-mono text-xs tracking-[0.18em] uppercase text-lime-400">05 — Education</span></Reveal>
        <Reveal delay={80}>
          <h2 className="font-display mt-2 mb-12" style={{ fontSize: "clamp(3.5rem,7vw,6rem)", lineHeight: 0.95 }}>Academic Path</h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-4">
          {education.map((e, i) => (
            <Reveal key={e.school} delay={i * 70}>
              <div className="bg-zinc-900 border border-white/8 rounded-xl p-6 relative hover:border-lime-400/30 hover:-translate-y-1 transition-all duration-300">
                {e.tag && (
                  <span className="absolute top-4 right-4 font-mono text-lime-400 border border-lime-400/30 px-2.5 py-1 rounded-full" style={{ fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                    {e.tag}
                  </span>
                )}
                <h3 className="text-zinc-100 font-medium text-base leading-snug mb-2 pr-16">{e.school}</h3>
                <p className="text-zinc-500 text-sm mb-3">{e.degree}</p>
                <span className="font-display text-3xl text-lime-400" style={{ letterSpacing: "0.02em" }}>{e.score}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────────────────────────────────── */}
      <section id="contact" className="max-w-5xl mx-auto px-8 md:px-12 py-28 text-center">
        <Reveal>
          <span className="font-mono text-xs tracking-[0.18em] uppercase text-lime-400">06 — Say Hi</span>
          <h2 className="font-display mt-2 mb-5" style={{ fontSize: "clamp(3.5rem,9vw,8rem)", lineHeight: 0.92 }}>
            Let's Build<br />Something.
          </h2>
          <p className="text-zinc-500 text-base max-w-md mx-auto mb-10">
            Open to internships, full-time roles, and interesting collaborations.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <MagBtn href="mailto:arshdhillon2034@gmail.com" solid>Email Me ↗</MagBtn>
            <MagBtn href="https://linkedin.com/in/arsh-dhillon1" target="_blank">LinkedIn ↗</MagBtn>
            <MagBtn href="https://github.com/Arsh-Dhillon1" target="_blank">GitHub ↗</MagBtn>
          </div>
        </Reveal>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────────────── */}
      <footer className="flex flex-col md:flex-row items-center justify-between px-10 py-6 gap-2" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <span className="font-mono text-zinc-600" style={{ fontSize: "0.7rem", letterSpacing: "0.08em" }}>© 2026 Arsh Dhillon</span>
        <span className="font-mono text-zinc-600" style={{ fontSize: "0.7rem", letterSpacing: "0.08em" }}>Designed &amp; built by Arsh</span>
      </footer>
    </div>
  );
}