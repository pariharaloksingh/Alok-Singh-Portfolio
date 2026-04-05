import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Geecom ERP – AI Chatbot",
    tag: "LLM / GenAI",
    icon: "✦",
    stack: ["LangGraph", "RAG", "Groq", "LLaMA 3.3", "Node.js", "React", "MySQL"],
    desc: "Multi-node LangGraph pipeline with ReAct agent architecture. Integrates live Mandi Rate API, Weather API, and DateTime tool. Semantic memory via Gemini embeddings with cosine similarity matching across sessions.",
  },
  {
    title: "KhetGuru Platform",
    tag: "Full Stack",
    icon: "⬢",
    stack: ["Node.js", "Express.js", "React", "JWT", "RBAC", "MySQL"],
    desc: "Secure backend REST APIs for managing categories, Q&A, and training content. JWT-based authentication and RBAC for admin workflows. Protected frontend routes with optimized React hooks.",
  },
  {
    title: "Admin Panel",
    tag: "MERN Stack",
    icon: "◈",
    stack: ["Node.js", "Express.js", "React", "Tailwind CSS", "MySQL"],
    desc: "Full-featured admin system with RESTful APIs for user, role, and content management. RBAC with optimized MySQL schemas. Smooth CRUD workflows for non-technical admins.",
  },
  {
    title: "Automatic Poster Generation",
    tag: "AI + Full Stack",
    icon: "◇",
    stack: ["React", "Node.js", "Gemini API", "Social Media API"],
    desc: "Full-stack platform for designing and customizing marketing posters. AI-powered content moderation via Gemini API detects and rejects prohibited content before social media publishing.",
  },
  {
    title: "RAG Pipeline System",
    tag: "AI / ML",
    icon: "⬡",
    stack: ["LangChain", "LangGraph", "pgvector", "PostgreSQL", "Embeddings"],
    desc: "End-to-end Retrieval-Augmented Generation pipeline with vector embeddings stored in PostgreSQL via pgvector. Enables context-aware responses by recalling relevant knowledge chunks at query time.",
  },
  {
    title: "Computer Vision — YOLO",
    tag: "AI / ML",
    icon: "⊕",
    stack: ["YOLO", "Ultralytics", "PyTorch", "OpenCV", "Python"],
    desc: "Object detection system built with YOLO (Ultralytics) for real-time image and video analysis. Trained and fine-tuned custom models for domain-specific detection tasks.",
  },
];

const ProjectsPage = () => {
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

        .pp { font-family:'DM Mono',monospace; color:#e2e8f0; padding-bottom:6rem; }

        .pp-hero {
          display:flex; flex-direction:column;
          justify-content:center; padding: 4rem 6vw 0; position:relative;
        }
        .pp-eyebrow {
           font-size: 15px; letter-spacing:0.25em; color:#4ccd9a;
          text-transform:uppercase; margin-bottom:1.5rem;
          opacity:0; transform:translateY(16px);
          animation:fadeUp 0.6s ease forwards 0.2s;
        }
        .pp-title {
          font-family:'Poppins',sans-serif;
          font-size:clamp(2.8rem,7vw,6.5rem);
          font-weight:800; line-height:1.0;
          letter-spacing:-0.02em; color:#f8fafc;
          margin:0 0 1.5rem;
          opacity:0; transform:translateY(20px);
          animation:fadeUp 0.7s ease forwards 0.4s;
        }
        .pp-title span { color:#4ccd9a; }
        .pp-sub {
          font-size:clamp(0.85rem,1.6vw,1.05rem);
          font-weight:300; color:#ebf1fb;
          max-width:520px; line-height:1.75;
          opacity:0; transform:translateY(16px);
          animation:fadeUp 0.7s ease forwards 0.6s;
        }
        .pp-line {
          position:absolute; right:6vw; top:85%;
          transform:translateY(-80%);
          display:flex; flex-direction:column; align-items:center; gap:6px;
          opacity:0; animation:fadeIn 1s ease forwards 1.2s;
        }
        .pp-line-bar { width:2px; height:215px; background:linear-gradient(to bottom,transparent,#4ccd9a,transparent); }
        .pp-line-dot { width:5px; height:5px; border-radius:50%; background:#4ccd9a; }

        .pp-section { padding:4rem 6vw; }

        .section-divider { display:flex; align-items:center; gap:16px; margin-bottom:3rem; }
        .section-divider-label { font-size:15px; letter-spacing:0.3em; color:#4ccd9a; text-transform:uppercase; white-space:nowrap; }
        .section-divider-line { flex:1; height:3px; background:linear-gradient(to right,#8c9095,transparent); }

        .pp-grid {
          display:grid;
          grid-template-columns:repeat(auto-fill, minmax(300px,1fr));
          gap:1px; border:1px solid #1e293b;
        }
        .pp-card {
          padding:1.75rem; border:1px solid #1e293b;
          background:rgba(15,23,42,0.4);
          opacity:0; transform:translateY(20px);
          transition:opacity 0.5s ease, transform 0.5s ease, background 0.2s;
          display:flex; flex-direction:column; gap:1rem;
        }
        .pp-card:hover { background:rgba(110,231,183,0.04); }
        .pp-card.visible { opacity:1; transform:translateY(0); }

        .pp-card-top { display:flex; align-items:flex-start; justify-content:space-between; gap:8px; }
        .pp-card-icon { font-size:18px; color:#4ccd9a; }
        .pp-card-tag {
          font-size:10px; padding:3px 10px;
          border:1px solid #334155; color:#ebf1fb;
          letter-spacing:0.08em; white-space:nowrap;
          transition:border-color 0.2s, color 0.2s;
        }
        .pp-card:hover .pp-card-tag { border-color:#4ccd9a; color:#e2e8f0; }

        .pp-card-title {
          font-family:'Syne',sans-serif; font-size:15px;
          font-weight:700; color:#f1f5f9;
          letter-spacing:0.04em;
        }
        .pp-card-desc { font-size:11.5px; color:#64748b; line-height:1.75; font-weight:300; flex:1; }
        .pp-card-stack { display:flex; flex-wrap:wrap; gap:6px; margin-top:auto; }
        .pp-stack-tag {
          font-size:10px; padding:3px 9px;
          border:1px solid #1e293b; color:#64748b;
          letter-spacing:0.04em;
          transition:border-color 0.2s, color 0.2s;
        }
        .pp-card:hover .pp-stack-tag { border-color:#334155; color:#ebf1fb; }

        .pp-contact { padding:2rem 6vw 6rem; }
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

      <div className="pp" ref={ref}>

        <section className="pp-hero">
          <p className="pp-eyebrow  py-2">My Work</p>
          <h1 className="pp-title">Things I've<br /><span>built.</span></h1>
          <p className="pp-sub">
            A selection of projects spanning full stack engineering, AI/ML systems,
            LLM pipelines, and production-grade applications.
          </p>
          <div className="pp-line">
            <div className="pp-line-dot" />
            <div className="pp-line-bar" />
            <div className="pp-line-dot" />
          </div>
        </section>

        <section className="pp-section">
          <div className="section-divider reveal">
            <span className="section-divider-label">Projects</span>
            <div className="section-divider-line" />
          </div>
          <div className="pp-grid">
            {projects.map((p, i) => (
              <div key={p.title} className="pp-card reveal" style={{ transitionDelay: `${i * 0.07}s` }}>
                <div className="pp-card-top">
                  <span className="pp-card-icon">{p.icon}</span>
                  <span className="pp-card-tag">{p.tag}</span>
                </div>
                <div className="pp-card-title">{p.title}</div>
                <div className="pp-card-desc">{p.desc}</div>
                <div className="pp-card-stack">
                  {p.stack.map((s) => <span key={s} className="pp-stack-tag">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="pp-contact">
          <div className="section-divider reveal">
            <span className="section-divider-label">Contact</span>
            <div className="section-divider-line" />
          </div>
          <div className="contact-box reveal">
            <div className="contact-text">Interested in<br /><span>working together?</span></div>
            <Link to="/contact" className="hero-cta">Get In Touch ↗</Link>
          </div>
        </section>

      </div>
    </>
  );
};

export default ProjectsPage;