import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const timeline = [
  {
    period: "June 2025 – Present",
    role: "Junior Full Stack Developer + AI/ML",
    company: "GeeCom India Services Pvt. Ltd.",
    location: "Indore, MP",
    highlights: [
      "Built multi-node LangGraph RAG pipeline with ReAct agent — live Mandi rates, weather & datetime tools",
      "Semantic memory via Gemini embeddings in MySQL with cosine similarity for context-aware ERP chatbot",
      "Auto-curation engine scoring LLM responses (Groq / LLaMA 3.3 70B) to reduce redundant API calls",
      "Multilingual voice interface using Web Speech API — speech-to-text & text-to-speech in React",
      "RBAC + JWT auth systems across Admin Panel & KhetGuru platform (MERN stack)",
      "AI poster moderation with Gemini API — detects & rejects prohibited content before publishing",
    ],
  },
];


const stats = [
  { value: "1+", label: "Years Experience" },
  { value: "10+", label: "Projects Shipped" },
  { value: "5+", label: "AI/ML Integrations" },
  { value: "MCA", label: "Post Graduate" },
];

const traits = [
  { icon: "⬢", title: "Full Stack Depth", desc: "From MySQL schemas and REST APIs to React hooks and Tailwind layouts — I own the entire stack." },
  { icon: "✦", title: "AI / LLM Engineering", desc: "LangGraph agents, RAG pipelines, vector embeddings, semantic memory, Groq & LLaMA integrations." },
  { icon: "◈", title: "Production Mindset", desc: "JWT auth, RBAC, rate limiting, input validation, error fallback — I ship things that don't break." },
  { icon: "◎", title: "Fast Learner", desc: "Constantly exploring new stacks. From YOLO object detection to CrewAI agents — curiosity drives me." },
];

const AboutPage = () => {
  const ref = useRef(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal");
    if (!els) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&display=swap');

        .ab { font-family: 'DM Mono', monospace; color: #e2e8f0; padding-bottom: 6rem; }

        .ab-hero {    display:flex; flex-direction:column;
          justify-content:center;   padding: 4rem 6vw 0;  position:relative; }
        .ab-eyebrow { font-size: 15px; letter-spacing: 0.25em; color: #4ccd9a; text-transform: uppercase; margin-bottom: 1.5rem; opacity: 0; transform: translateY(16px); animation: fadeUp 0.6s ease forwards 0.2s; }
        .ab-hero-title { font-family: 'Poppins', sans-serif; font-size: clamp(2.8rem, 7vw, 6.5rem); font-weight: 800; line-height: 1.0; letter-spacing: -0.02em; color: #f8fafc; margin: 0 0 1.5rem; opacity: 0; transform: translateY(20px); animation: fadeUp 0.7s ease forwards 0.4s; }
        .ab-hero-title span { color: #4ccd9a; }
        .ab-hero-bio { font-size: clamp(0.85rem, 1.6vw, 1.05rem); font-weight: 300; color: #ebf1fb; max-width: 480px; line-height: 1.75; margin-bottom: 2rem; opacity: 0; transform: translateY(16px); animation: fadeUp 0.7s ease forwards 0.6s; }
        .ab-hero-bio strong { color: #e2e8f0; font-weight: 500; }
        .ab-hero-contact { display: flex; flex-wrap: wrap; gap: 1.5rem; opacity: 0; animation: fadeUp 0.7s ease forwards 0.8s; }
        .ab-contact-item { display: flex; align-items: center; gap: 8px; font-size: 11px; color: #64748b; letter-spacing: 0.05em; text-decoration: none; transition: color 0.2s; }
        .ab-contact-item:hover { color: #4ccd9a; }
        .ab-contact-dot { width: 4px; height: 4px; border-radius: 50%; background: #4ccd9a; flex-shrink: 0; }
        .ab-hero-line {  position: absolute;
          right: 6vw;
          top: 69%;
          transform: translateY(-80%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          opacity: 0;
          animation: fadeIn 1s ease forwards 1.2s;}
        .ab-hero-line-bar { width: 2px; height: 215px; background: linear-gradient(to bottom, transparent, #4ccd9a, transparent); }
        .ab-hero-line-dot { width: 5px; height: 5px; border-radius: 50%; background: #4ccd9a; }

        .ab-stats { display: grid; grid-template-columns: repeat(4, 1fr); border-top: 1px solid #1e293b; border-bottom: 1px solid #1e293b; margin: 2rem 0; }
        @media(max-width: 640px) { .ab-stats { grid-template-columns: repeat(2, 1fr); } }
        .ab-stat { padding: 2rem 6vw; border-right: 1px solid #1e293b; }
        .ab-stat:last-child { border-right: none; }
        .ab-stat-val { font-family: 'Poppins', sans-serif; font-size: 2.2rem; font-weight: 800; color: #4ccd9a; line-height: 1; margin-bottom: 6px; }
        .ab-stat-label { font-size: 10px; letter-spacing: 0.18em; color: #ebf1fb; text-transform: uppercase; }

        .section-divider { display: flex; align-items: center; gap: 16px; margin-bottom: 3rem; }
        .section-divider-label { font-size: 15px; letter-spacing: 0.3em; color: #4ccd9a; text-transform: uppercase; white-space: nowrap; }
        .section-divider-line { flex: 1; height: 3px; background: linear-gradient(to right, #8c9095, transparent); }

        .ab-section { padding: 1rem 6vw; }

        .ab-traits { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 1px; border: 1px solid #1e293b; }
        .ab-trait { padding: 1.75rem; border: 1px solid #1e293b; background: rgba(15, 23, 42, 0.4); opacity: 0; transform: translateY(20px); transition: opacity 0.5s ease, transform 0.5s ease, background 0.2s; }
        .ab-trait:hover { background: rgba(110, 231, 183, 0.04); }
        .ab-trait.visible { opacity: 1; transform: translateY(0); }
        .ab-trait-icon { font-size: 18px; color: #4ccd9a; margin-bottom: 0.75rem; display: block; }
        .ab-trait-title { font-family: 'Syne', sans-serif; font-size: 13px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #f1f5f9; margin-bottom: 0.75rem; }
        .ab-trait-desc { font-size: 11px; color: #ebf1fb; line-height: 1.7; font-weight: 300; margin: 0; }

        .ab-timeline { display: flex; flex-direction: column; gap: 0; }
        .ab-tl-item { display: grid; grid-template-columns: 220px 1fr; gap: 2rem; padding: 2rem 0; border-top: 1px solid #1e293b; opacity: 0; transform: translateY(20px); transition: opacity 0.55s ease, transform 0.55s ease; }
        .ab-tl-item.visible { opacity: 1; transform: none; }
        @media(max-width: 700px) { .ab-tl-item { grid-template-columns: 1fr; gap: 0.75rem; } }
        .ab-tl-period { font-size: 10px; letter-spacing: 0.12em; color: #4ccd9a; text-transform: uppercase; margin-bottom: 6px; }
        .ab-tl-company { font-family: 'Syne', sans-serif; font-size: 13px; font-weight: 700; color: #e2e8f0; margin-bottom: 3px; }
        .ab-tl-loc { font-size: 10px; color: #ebf1fb; letter-spacing: 0.08em; }
        .ab-tl-role { font-family: 'Poppins', sans-serif; font-size: 1.05rem; font-weight: 700; color: #f1f5f9; margin-bottom: 1rem; }
        .ab-tl-highlights { display: flex; flex-direction: column; gap: 8px; }
        .ab-tl-hl { display: flex; gap: 10px; font-size: 11.5px; line-height: 1.65; color: #64748b; font-weight: 300; }
        .ab-tl-hl::before { content: '→'; color: #4ccd9a; flex-shrink: 0; margin-top: 1px; }

        .ab-edu-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1px; border: 1px solid #1e293b; }
        .ab-edu-card { padding: 1.75rem; border: 1px solid #1e293b; background: rgba(15, 23, 42, 0.4); opacity: 0; transform: translateY(20px); transition: opacity 0.5s ease, transform 0.5s ease, background 0.2s; }
        .ab-edu-card:hover { background: rgba(110, 231, 183, 0.04); }
        .ab-edu-card.visible { opacity: 1; transform: translateY(0); }
        .ab-edu-degree { font-family: 'Syne', sans-serif; font-size: 14px; font-weight: 700; color: #f1f5f9; margin-bottom: 0.5rem; line-height: 1.4; }
        .ab-edu-inst { font-size: 11px; color: #ebf1fb; margin-bottom: 1rem; line-height: 1.5; }
        .ab-edu-meta { display: flex; gap: 8px; flex-wrap: wrap; }
        .ab-edu-pill { font-size: 10.5px; padding: 4px 10px; border: 1px solid #334155; color: #ebf1fb; letter-spacing: 0.04em; transition: border-color 0.2s, color 0.2s; }
        .ab-edu-card:hover .ab-edu-pill { border-color: #4ccd9a; color: #e2e8f0; }

        .ab-contact-section { padding: 1rem 6vw 6rem; }
        .contact-box { border: 1px solid #1e293b; padding: 3rem; display: flex; align-items: center; justify-content: space-between; gap: 2rem; flex-wrap: wrap; background: rgba(15, 23, 42, 0.5); }
        .contact-text { font-family: 'Poppins', sans-serif; font-size: clamp(1.77rem, 3vw, 2.2rem); font-weight: 700; color: #f8fafc; }
        .contact-text span { color: #4ccd9a; }
        .hero-cta { display: inline-flex; align-items: center; gap: 10px; background: transparent; border: 1px solid #4ccd9a; color: #4ccd9a; font-family: 'DM Mono', monospace; font-size: 13px; letter-spacing: 0.1em; padding: 14px 32px; cursor: pointer; text-decoration: none; transition: background 0.2s, color 0.2s; }
        .hero-cta:hover { background: #4ccd9a; color: #0f172a; }

        @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { to { opacity: 1; } }
        .reveal { opacity: 0; transform: translateY(20px); transition: opacity 0.55s ease, transform 0.55s ease; }
        .reveal.visible { opacity: 1; transform: none; }
      `}</style>

      <div className="ab" ref={ref}>

        {/* ── Hero ── */}
        <section className="ab-hero">
          <p className="ab-eyebrow  py-2">About Me</p>
          <h1 className="ab-hero-title">
            Building things<br />that <span>matter.</span>
          </h1>
          <p className="ab-hero-bio">
            Full Stack Developer & AI/ML engineer from Indore —
            building everything from <strong>React frontends</strong> to{" "}
            <strong>LangGraph RAG pipelines</strong>.
          </p>
          <div className="ab-hero-contact">
            <a href="mailto:pariharaloksingh4@gmail.com" className="ab-contact-item"><span className="ab-contact-dot" />pariharaloksingh4@gmail.com</a>
            <a href="https://github.com/pariharaloksingh" target="_blank" rel="noreferrer" className="ab-contact-item"><span className="ab-contact-dot" />GitHub</a>
            <a href="https://linkedin.com/in/alok-singh-parihar" target="_blank" rel="noreferrer" className="ab-contact-item"><span className="ab-contact-dot" />LinkedIn</a>
          </div>
          <div className="ab-hero-line">
            <div className="ab-hero-line-dot" />
            <div className="ab-hero-line-bar" />
            <div className="ab-hero-line-dot" />
          </div>
        </section>

        {/* ── Stats ── */}
        <div className="ab-stats">
          {stats.map((s, i) => (
            <div key={s.label} className="ab-stat reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="ab-stat-val">{s.value}</div>
              <div className="ab-stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* ── What I Bring ── */}
        <section className="ab-section">
          <div className="section-divider reveal">
            <span className="section-divider-label">What I Bring</span>
            <div className="section-divider-line" />
          </div>
          <div className="ab-traits">
            {traits.map((t, i) => (
              <div key={t.title} className="ab-trait reveal" style={{ transitionDelay: `${i * 0.07}s` }}>
                <span className="ab-trait-icon">{t.icon}</span>
                <div className="ab-trait-title">{t.title}</div>
                <p className="ab-trait-desc">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Experience ── */}
        <section className="ab-section">
          <div className="section-divider reveal">
            <span className="section-divider-label">Experience</span>
            <div className="section-divider-line" />
          </div>
          <div className="ab-timeline">
            {timeline.map((item, i) => (
              <div key={i} className="ab-tl-item reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div>
                  <div className="ab-tl-period">{item.period}</div>
                  <div className="ab-tl-company">{item.company}</div>
                  <div className="ab-tl-loc">{item.location}</div>
                </div>
                <div>
                  <div className="ab-tl-role">{item.role}</div>
                  <div className="ab-tl-highlights">
                    {item.highlights.map((h, j) => (
                      <div key={j} className="ab-tl-hl">{h}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Education ── */}
      

        {/* ── Contact ── */}
        <section className="ab-contact-section">
          <div className="section-divider reveal">
            <span className="section-divider-label">Contact</span>
            <div className="section-divider-line" />
          </div>
          <div className="contact-box reveal">
            <div className="contact-text">
              Let's build something<br /><span>remarkable.</span>
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

export default AboutPage;