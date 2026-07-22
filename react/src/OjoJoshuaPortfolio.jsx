import { useState, useEffect } from "react";
import Project from "./project";
// import PROJECTIMAGES from './assets/project-images/'

// ── DATA ──────────────────────────────────────────────────────────────────────

const skills = {
  "Languages & Frameworks": ["HTML", "CSS", "JavaScript", "React", "React Native", "Python", "Bootstrap", "C#"],
  "Tools & Platforms": ["Git", "GitHub", "n8n", "Netlify", "VS Code", "Gemini API", "Flask"],
  "Specialisations": ["Responsive Design", "Workflow Automation", "AI Integration", "IoT Systems", "CSS Debugging"],
};

const experience = [
  { role: "Frontend Dev & IT Instructor (Intern)", company: "Proxynet Communications", period: "Aug 2022 – Jan 2023" },
  { role: "Freelance Frontend Developer", company: "Self-Employed", period: "Jan 2022 – Present" },
  { role: "AI & Workflow Automation Developer", company: "Self-Employed", period: "Jan 2024 – Present" },
];



// ── COMPONENTS ────────────────────────────────────────────────────────────────

function Nav({ scrolled }) {
  const scroll = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <nav className={`pf-nav${scrolled ? " scrolled" : ""}`}>
      <span className="pf-logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        ojo<span>.</span>josh
      </span>
      <ul className="pf-nav-links">
        {["about", "projects", "contact"].map(id => (
          <li key={id}><a href={`#${id}`} onClick={e => { e.preventDefault(); scroll(id); }}>{id.charAt(0).toUpperCase() + id.slice(1)}</a></li>
        ))}
        <li><a href="/joshresume.pdf" target="_blank" rel="noreferrer">Resume</a></li>
      </ul>
    </nav>
  );
}

function Hero() {
  return (
    <div className="pf-hero">
      <div style={{ width: "100%" }}>
        <div className="pf-available-tag">
          <span className="pf-available-dot" />
          Available for work
        </div>
        <h1>Hi, I'm <span>Ojo Joshua</span>.<br />I build for the web.</h1>
        <p className="pf-hero-sub">
          Front-End Developer based in Lagos, Nigeria — specialising in responsive web applications, AI integration, and workflow automation.
        </p>
        <div className="pf-btns">
          <a href="#projects" className="pf-btn-primary" onClick={e => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}>
            View my work
          </a>
          <a href="#contact" className="pf-btn-outline" onClick={e => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}>
            Get in touch
          </a>
        </div>
        <div className="pf-stats">
          {[["3+", "Years building"], ["10+", "Projects shipped"], ["20%", "Efficiency improved at Proxynet"]].map(([num, label]) => (
            <div key={label}>
              <div className="pf-stat-num">{num}</div>
              <div className="pf-stat-label">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <section className="pf-section" id="about">
      <div className="pf-eyebrow">// about me</div>
      <div className="pf-section-title">Who I am</div>
      <p className="pf-section-sub">Developer. Problem solver. Automation enthusiast.</p>
      <div className="pf-about-grid">
        <div className="pf-about-text">
          <p>I'm a Front-End Developer with a B.Sc. in Computer Science from the Federal University of Agriculture, Abeokuta (2024). I build responsive, accessible web applications with a focus on clean code and great user experience.</p>
          <p>During my internship at Proxynet Communications, I developed scalable educational platforms and mentored students in Web Development and IoT — improving operational efficiency by 20%.</p>
          <p>Beyond the browser, I build AI-powered workflows and automation systems that connect tools and eliminate repetitive processes. I'm actively growing into full-stack development.</p>
        </div>
        <div>
          {Object.entries(skills).map(([label, tags]) => (
            <div className="pf-skill-group" key={label}>
              <div className="pf-skill-label">{label}</div>
              <div className="pf-skill-list">
                {tags.map(t => <span className="pf-skill-tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
          <div className="pf-skill-label" style={{ marginTop: "1.2rem" }}>Experience</div>
          {experience.map(e => (
            <div className="pf-exp-item" key={e.role}>
              <div className="pf-exp-dot" />
              <div>
                <div className="pf-exp-role">{e.role}</div>
                <div className="pf-exp-co">{e.company} · {e.period}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



function Contact() {
  return (
    <section className="pf-section" id="contact">
      <div className="pf-contact-box">
        <h2>Let's build something together.</h2>
        <p>Open to frontend developer roles, internships, and freelance projects in Lagos and remotely.</p>
        <div className="pf-contact-links">
          <a href="mailto:ojojosh123@gmail.com" className="pf-contact-link">✉️ ojojosh123@gmail.com</a>
          <a href="https://linkedin.com/in/ojo-josh" target="_blank" rel="noreferrer" className="pf-contact-link">LinkedIn</a>
          <a href="https://github.com/Ojoscreate" target="_blank" rel="noreferrer" className="pf-contact-link">GitHub</a>
          <a href="/joshresume.pdf" target="_blank" rel="noreferrer" className="pf-contact-link">Download CV</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="pf-footer">
      Designed &amp; built by   <a
        href="https://github.com/Ojoscreate"
        target="_blank"
        class="pf-proj-link foot-link"
        type="button"
      >
        Ojoscreate
      </a> © {new Date().getFullYear()} · Lagos, Nigeria
    </footer>
  );
}

// ── APP ───────────────────────────────────────────────────────────────────────

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // useEffect(() => {
  //   const style = document.createElement("style");
  //   style.textContent = globalStyles;
  //   document.head.appendChild(style);
  //   return () => document.head.removeChild(style);
  // }, []);

  return (
    <>
      <Nav scrolled={scrolled} />
      <main>
        <Hero />
        <hr className="pf-divider" />
        <About />
        <hr className="pf-divider" />
        <Project />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
