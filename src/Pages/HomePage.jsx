import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const skills = [
  {
    category: "Frontend",
    icon: "◈",
    items: ["Next.js", "React.js", "Vite"],
  },
  {
    category: "Backend",
    icon: "⬡",
    items: ["Express.js", "Node.js", "Django", "Flask", "ORM / Query Models"],
  },
  {
    category: "Database",
    icon: "◎",
    items: ["MySQL", "MongoDB", "PostgreSQL", "pgvector"],
  },
  {
    category: "Designing",
    icon: "◇",
    items: ["Tailwind CSS", "Bootstrap", "Custom CSS"],
  },
  {
    category: "AI / ML",
    icon: "⬢",
    items: [
      "Scikit-learn",
      "PyTorch",
      "YOLO (Ultralytics)",
      "Computer Vision",
      "RAG Pipelines",
      "Embeddings",
      "Pandas",
      "NumPy",
      "Matplotlib",
    ],
  },
  {
    category: "LLM / GenAI",
    icon: "✦",
    items: [
      "LangChain",
      "LangGraph",
      "CrewAI",
      "Hugging Face",
      "Groq",
      "Ollama",
      "LLaMA Models",
      "AI Agents",
      "Tool Calling",
    ],
  },
  {
    category: "Tools",
    icon: "⊕",
    items: [
      "VS Code",
      "Git & GitHub",
      "Postman",
      "Google Colab",
      "Selenium",
      "BeautifulSoup",
    ],
  },
];

const HomePage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const els = containerRef.current?.querySelectorAll(".reveal");
    if (!els) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&display=swap');

        .hp-root {
          font-family: 'DM Mono', monospace;
          color: #e2e8f0;
          min-height: 100vh;
          padding: 0;
        }

        /* Hero */
        .hero {
             display:flex; flex-direction:column;
          justify-content:center;   padding: 4rem 6vw 0;  position:relative;
        }

        .hero-eyebrow {
          font-family: 'DM Mono', monospace;
          font-size: 15px;
          letter-spacing: 0.25em;
          color: #4ccd9a;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
          opacity: 0;
          transform: translateY(16px);
          animation: fadeUp 0.6s ease forwards 0.2s;
        }

        .hero-name {
         font-family: 'Poppins', sans-serif;
          font-size: clamp(2.8rem, 7vw, 6.5rem);
          font-weight: 800;
          line-height: 1.0;
          letter-spacing: -0.02em;
          color: #f8fafc;
          margin: 0 0 1.5rem;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 0.7s ease forwards 0.4s;
        }

        .hero-name span {
          color: #4ccd9a;
        }

        .hero-role {
          font-family: 'DM Mono', monospace;
          font-size: clamp(0.85rem, 1.6vw, 1.05rem);
          font-weight: 300;
          color: #ebf1fb;
          max-width: 560px;
          line-height: 1.75;
          margin-bottom: 3rem;
          opacity: 0;
          transform: translateY(16px);
          animation: fadeUp 0.7s ease forwards 0.6s;
        }

        .hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: transparent;
          border: 1px solid #4ccd9a;
          color: #4ccd9a;
          font-family: 'DM Mono', monospace;
          font-size: 13px;
          letter-spacing: 0.1em;
          padding: 14px 32px;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.2s, color 0.2s;
          opacity: 0;
          animation: fadeUp 0.7s ease forwards 0.85s;
        }
        .hero-cta:hover {
          background: #4ccd9a;
          color: #0f172a;
        }

        .hero-line {
          position: absolute;
          right: 6vw;
          top: 69%;
          transform: translateY(-80%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          opacity: 0;
          animation: fadeIn 1s ease forwards 1.2s;
        }
        .hero-line-bar {
          width: 2px;
          height: 215px;
          background: linear-gradient(to bottom, transparent, #4ccd9a, transparent);
        }
        .hero-line-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #4ccd9a;
        }

        /* Divider */
        .section-divider {
          display: flex;
          align-items: center;
          gap: 16px;
         
          margin-bottom: 3rem;
        }
        .section-divider-label {
          font-family: 'DM Mono', monospace;
          font-size: 15px;
          letter-spacing: 0.3em;
          color: #4ccd9a;
          text-transform: uppercase;
          white-space: nowrap;
        }
        .section-divider-line {
          flex: 1;
          height: 3px;
          background: linear-gradient(to right, #8c9095, transparent);
        }

        /* Skills section */
        .skills-section {
          padding: 4rem 8vw 6rem;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1px;
          border: 1px solid #1e293b;
        }

        .skill-card {
          padding: 1.75rem;
          border: 1px solid #1e293b;
          background: rgba(15, 23, 42, 0.4);
          transition: background 0.2s;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease, background 0.2s;
        }
        .skill-card:hover {
          background: rgba(110, 231, 183, 0.04);
        }
        .skill-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .skill-icon {
          font-size: 18px;
          color: #4ccd9a;
          margin-bottom: 0.75rem;
          display: block;
        }
        .skill-category {
          font-family: 'Syne', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #f1f5f9;
          margin-bottom: 1rem;
        }
        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .skill-tag {
          font-size: 10.5px;
          padding: 4px 10px;
          border: 1px solid #334155;
          color: #ebf1fb;
          letter-spacing: 0.04em;
          transition: border-color 0.2s, color 0.2s;
        }
        .skill-card:hover .skill-tag {
          border-color: #4ccd9a;
          color: #e2e8f0;
        }

        /* Contact */
        .contact-section {
          padding: 2rem 8vw 6rem;
        }
        .contact-box {
          border: 1px solid #1e293b;
          padding: 3rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
          background: rgba(15, 23, 42, 0.5);
        }
        .contact-text {
            font-family: 'Poppins', sans-serif;
          font-size: clamp(1.77rem, 3vw, 2.2rem);
          font-weight: 700;
          color: #f8fafc;
        }
        .contact-text span { color: #4ccd9a; }

        .contact-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #4ccd9a;
          color: #0f172a;
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 14px 32px;
          cursor: pointer;
          border: none;
          text-decoration: none;
          transition: opacity 0.2s, transform 0.15s;
          white-space: nowrap;
        }
        .contact-btn:hover {
          opacity: 0.85;
          transform: translateY(-1px);
        }

        /* Animations */
        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          to { opacity: 1; }
        }

        .reveal {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.55s ease, transform 0.55s ease;
        }
        .reveal.visible {
          opacity: 1;
          transform: none;
        }
      `}</style>

      <div className="hp-root" ref={containerRef}>
        {/* ── Hero ── */}
        <section className="hero">
          <p className="hero-eyebrow py-2">Portfolio · Full Stack Developer</p>
          <h1 className="hero-name">
            Alok Singh
            <br />
            <span>Parihar</span>
          </h1>
          <p className="hero-role">
            Full Stack Developer specializing in web &amp; mobile application
            development — Django, Flask, React, Node.js and beyond.
          </p>
          <Link to="/contact" className="hero-cta">
            Get In Touch →
          </Link>
          <div className="hero-line">
            <div className="hero-line-dot" />
            <div className="hero-line-bar" />
            <div className="hero-line-dot" />
          </div>
        </section>

        {/* ── Skills ── */}
        <section className="skills-section">
          <div className="section-divider reveal">
            <span className="section-divider-label">Tech Stack</span>
            <div className="section-divider-line" />
          </div>

          <div className="skills-grid">
            {skills.map((s, i) => (
              <div
                key={s.category}
                className="skill-card reveal"
                style={{ transitionDelay: `${i * 0.07}s` }}
              >
                <span className="skill-icon">{s.icon}</span>
                <div className="skill-category">{s.category}</div>
                <div className="skill-tags">
                  {s.items.map((item) => (
                    <span key={item} className="skill-tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Contact ── */}
        <section className="contact-section">
          <div className="section-divider reveal">
            <span className="section-divider-label">Contact</span>
            <div className="section-divider-line" />
          </div>
          <div className="contact-box reveal">
            <div className="contact-text">
              Let's build something
              <br />
              <span>remarkable.</span>
            </div>
           <Link to="/contact" className="hero-cta">
              Get In Touch ↗
           </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
