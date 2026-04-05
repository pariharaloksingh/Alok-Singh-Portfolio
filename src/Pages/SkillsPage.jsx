import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const skillGroups = [
  {
    category: "Frontend",
    icon: "◈",
    items: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 80 },
      { name: "Vite", level: 85 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Bootstrap", level: 80 },
    ],
  },
  {
    category: "Backend",
    icon: "⬡",
    items: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 88 },
      { name: "Django", level: 75 },
      { name: "Flask", level: 72 },
      { name: "REST APIs", level: 90 },
      { name: "JWT / RBAC", level: 85 },
    ],
  },
  {
    category: "Database",
    icon: "◎",
    items: [
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 75 },
      { name: "PostgreSQL", level: 72 },
      { name: "pgvector", level: 68 },
    ],
  },
  {
    category: "AI / ML",
    icon: "⬢",
    items: [
      { name: "LangChain", level: 82 },
      { name: "LangGraph", level: 80 },
      { name: "RAG Pipelines", level: 82 },
      { name: "Scikit-learn", level: 70 },
      { name: "PyTorch", level: 60 },
      { name: "YOLO Ultralytics", level: 72 },
      { name: "Embeddings", level: 78 },
    ],
  },
  {
    category: "LLM / GenAI",
    icon: "✦",
    items: [
      { name: "Groq / LLaMA", level: 82 },
      { name: "Gemini API", level: 78 },
      { name: "Hugging Face", level: 68 },
      { name: "Ollama", level: 72 },
      { name: "CrewAI", level: 65 },
      { name: "AI Agents", level: 78 },
    ],
  },
  {
    category: "Languages & Tools",
    icon: "⊕",
    items: [
      { name: "JavaScript", level: 90 },
      { name: "Python", level: 82 },
      { name: "SQL", level: 85 },
      { name: "Git & GitHub", level: 88 },
      { name: "Postman", level: 85 },
      { name: "Selenium", level: 70 },
    ],
  },
];

const SkillsPage = () => {
  const ref = useRef(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal");
    if (!els) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          e.target.querySelectorAll(".sp-bar-fill").forEach((bar) => {
            bar.style.width = bar.dataset.level + "%";
          });
        }
      }),
      { threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&display=swap');

        .sp { font-family:'DM Mono',monospace; color:#e2e8f0; padding-bottom:6rem; }

        .sp-hero {
           display:flex; flex-direction:column;
          justify-content:center; padding: 4rem 6vw 0; position:relative;
        }
        .sp-eyebrow {
         font-size: 15px; letter-spacing:0.25em; color:#4ccd9a;
          text-transform:uppercase; margin-bottom:1.5rem;
          opacity:0; transform:translateY(16px);
          animation:fadeUp 0.6s ease forwards 0.2s;
        }
        .sp-title {
          font-family:'Poppins',sans-serif;
          font-size:clamp(2.8rem,7vw,6.5rem);
          font-weight:800; line-height:1.0;
          letter-spacing:-0.02em; color:#f8fafc;
          margin:0 0 1.5rem;
          opacity:0; transform:translateY(20px);
          animation:fadeUp 0.7s ease forwards 0.4s;
        }
        .sp-title span { color:#4ccd9a; }
        .sp-sub {
          font-size:clamp(0.85rem,1.6vw,1.05rem);
          font-weight:300; color:#ebf1fb;
          max-width:520px; line-height:1.75;
          opacity:0; transform:translateY(16px);
          animation:fadeUp 0.7s ease forwards 0.6s;
        }
        .sp-line {
          position:absolute; right:6vw; top:85%;
          transform:translateY(-80%);
          display:flex; flex-direction:column; align-items:center; gap:6px;
          opacity:0; animation:fadeIn 1s ease forwards 1.2s;
        }
        .sp-line-bar { width:2px; height:215px; background:linear-gradient(to bottom,transparent,#4ccd9a,transparent); }
        .sp-line-dot { width:5px; height:5px; border-radius:50%; background:#4ccd9a; }

        .sp-section { padding:4rem 6vw; }

        .section-divider { display:flex; align-items:center; gap:16px; margin-bottom:3rem; }
        .section-divider-label { font-size:15px; letter-spacing:0.3em; color:#4ccd9a; text-transform:uppercase; white-space:nowrap; }
        .section-divider-line { flex:1; height:3px; background:linear-gradient(to right,#8c9095,transparent); }

        .sp-grid {
          display:grid;
          grid-template-columns:repeat(auto-fill,minmax(300px,1fr));
          gap:1px; border:1px solid #1e293b;
        }
        .sp-card {
          padding:1.75rem; border:1px solid #1e293b;
          background:rgba(15,23,42,0.4);
          opacity:0; transform:translateY(20px);
          transition:opacity 0.5s ease, transform 0.5s ease, background 0.2s;
        }
        .sp-card:hover { background:rgba(110,231,183,0.04); }
        .sp-card.visible { opacity:1; transform:translateY(0); }

        .sp-card-head { display:flex; align-items:center; gap:10px; margin-bottom:1.5rem; }
        .sp-card-icon { font-size:18px; color:#4ccd9a; }
        .sp-card-cat {
          font-family:'Syne',sans-serif; font-size:13px;
          font-weight:700; letter-spacing:0.12em;
          text-transform:uppercase; color:#f1f5f9;
        }

        .sp-skill-row { margin-bottom:1rem; }
        .sp-skill-row:last-child { margin-bottom:0; }
        .sp-skill-meta { display:flex; justify-content:space-between; margin-bottom:5px; }
        .sp-skill-name { font-size:11px; color:#ebf1fb; letter-spacing:0.04em; }
        .sp-skill-pct { font-size:10px; color:#ebf1fb; }
        .sp-bar-track {
          height:2px; background:#1e293b; overflow:hidden;
        }
        .sp-bar-fill {
          height:100%; width:0%;
          background:linear-gradient(to right,#059669,#4ccd9a);
          transition:width 1s cubic-bezier(0.4,0,0.2,1);
        }

        .sp-contact { padding:2rem 6vw 6rem; }
        .contact-box {
          border:1px solid #1e293b; padding:3rem;
          display:flex; align-items:center; justify-content:space-between;
          gap:2rem; flex-wrap:wrap; background:rgba(15,23,42,0.5);
        }
        .contact-text { font-family:'Poppins',sans-serif; font-size:clamp(1.77rem,3vw,2.2rem); font-weight:700; color:#f8fafc; }
        .contact-text span { color:#4ccd9a; }
        .hero-cta {
          display:inline-flex; align-items:center; gap:10px;
          background:transparent; border:1px solid #4ccd9a;
          color:#4ccd9a; font-family:'DM Mono',monospace;
          font-size:13px; letter-spacing:0.1em; padding:14px 32px;
          cursor:pointer; text-decoration:none;
          transition:background 0.2s, color 0.2s;
        }
        .hero-cta:hover { background:#4ccd9a; color:#0f172a; }

        @keyframes fadeUp { to { opacity:1; transform:translateY(0); } }
        @keyframes fadeIn { to { opacity:1; } }
        .reveal { opacity:0; transform:translateY(20px); transition:opacity 0.55s ease, transform 0.55s ease; }
        .reveal.visible { opacity:1; transform:none; }
      `}</style>

      <div className="sp" ref={ref}>

        <section className="sp-hero">
          <p className="sp-eyebrow  py-2">My Arsenal</p>
          <h1 className="sp-title">Tools I<br /><span>master.</span></h1>
          <p className="sp-sub">
            Technologies and frameworks I work with daily —
            from React frontends to LangGraph AI pipelines.
          </p>
          <div className="sp-line">
            <div className="sp-line-dot" />
            <div className="sp-line-bar" />
            <div className="sp-line-dot" />
          </div>
        </section>

        <section className="sp-section">
          <div className="section-divider reveal">
            <span className="section-divider-label">Tech Stack</span>
            <div className="section-divider-line" />
          </div>
          <div className="sp-grid">
            {skillGroups.map((g, i) => (
              <div key={g.category} className="sp-card reveal" style={{ transitionDelay: `${i * 0.07}s` }}>
                <div className="sp-card-head">
                  <span className="sp-card-icon">{g.icon}</span>
                  <span className="sp-card-cat">{g.category}</span>
                </div>
                {g.items.map((item) => (
                  <div key={item.name} className="sp-skill-row">
                    <div className="sp-skill-meta">
                      <span className="sp-skill-name">{item.name}</span>
                      <span className="sp-skill-pct">{item.level}%</span>
                    </div>
                    <div className="sp-bar-track">
                      <div className="sp-bar-fill" data-level={item.level} />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="sp-contact">
          <div className="section-divider reveal">
            <span className="section-divider-label">Contact</span>
            <div className="section-divider-line" />
          </div>
          <div className="contact-box reveal">
            <div className="contact-text">Like what<br /><span>you see?</span></div>
            <Link to="/contact" className="hero-cta">Get In Touch ↗</Link>
          </div>
        </section>

      </div>
    </>
  );
};

export default SkillsPage;