import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const contactLinks = [
  { icon: "◈", label: "Email", value: "pariharaloksingh4@gmail.com", href: "mailto:pariharaloksingh4@gmail.com" },
  { icon: "⬡", label: "Phone", value: "+91-9179192651", href: "tel:+919179192651" },
  { icon: "✦", label: "GitHub", value: "github.com/pariharaloksingh", href: "https://github.com/pariharaloksingh" },
  { icon: "◎", label: "LinkedIn", value: "linkedin.com/in/alok-singh-parihar", href: "https://linkedin.com/in/alok-singh-parihar" },
  { icon: "⊕", label: "Portfolio", value: "pariharaloksingh.github.io/my-portfolio", href: "https://pariharaloksingh.github.io/my-portfolio" },
];

const ContactPage = () => {
  const ref = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

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

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

const submit = (e) => {
  e.preventDefault();

  emailjs.send(
    "service_028m0h6",
    "template_fjinllm",
    {
      name: form.name,
      email: form.email,
      subject: form.subject,
      message: form.message,
    },
    "FPn--44vphFzsCT-K"
  )
  .then(() => {
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 3000);
  })
  .catch((err) => {
    console.log("FAILED...", err);
    alert("Error sending message ❌");
  });
};

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&display=swap');

        .cp { font-family:'DM Mono',monospace; color:#e2e8f0; padding-bottom:6rem; }

        .cp-hero {
         display:flex;  flex-direction:column;
          justify-content:center;   padding: 4rem 6vw 0;  position:relative;
        }
        .cp-eyebrow {
          font-size: 15px; letter-spacing:0.25em; color:#4ccd9a;
          text-transform:uppercase; margin-bottom:1.5rem;
          opacity:0; transform:translateY(16px);
          animation:fadeUp 0.6s ease forwards 0.2s;
        }
        .cp-title {
          font-family:'Poppins',sans-serif;
          font-size:clamp(2.8rem,7vw,6.5rem);
          font-weight:800; line-height:1.0;
          letter-spacing:-0.02em; color:#f8fafc;
          margin:0 0 1.5rem;
          opacity:0; transform:translateY(20px);
          animation:fadeUp 0.7s ease forwards 0.4s;
        }
        .cp-title span { color:#4ccd9a; }
        .cp-sub {
          font-size:clamp(0.85rem,1.6vw,1.05rem);
          font-weight:300; color:#ebf1fb;
          max-width:520px; line-height:1.75;
          opacity:0; transform:translateY(16px);
          animation:fadeUp 0.7s ease forwards 0.6s;
        }
        .cp-line {
          position:absolute; right:6vw; top:85%;
          transform:translateY(-80%);
          display:flex; flex-direction:column; align-items:center; gap:6px;
          opacity:0; animation:fadeIn 1s ease forwards 1.2s;
        }
        .cp-line-bar { width:2px; height:215px; background:linear-gradient(to bottom,transparent,#4ccd9a,transparent); }
        .cp-line-dot { width:5px; height:5px; border-radius:50%; background:#4ccd9a; }

        .cp-section { padding:4rem 6vw; }
        .section-divider { display:flex; align-items:center; gap:16px; margin-bottom:3rem; }
        .section-divider-label { font-size:15px; letter-spacing:0.3em; color:#4ccd9a; text-transform:uppercase; white-space:nowrap; }
        .section-divider-line { flex:1; height:3px; background:linear-gradient(to right,#8c9095,transparent); }

        /* two-col layout */
        .cp-body {
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:1px; border:1px solid #1e293b;
          align-items:start;
        }
        @media(max-width:768px){ .cp-body { grid-template-columns:1fr; } }

        /* Left — contact links */
        .cp-links { padding:2rem; border-right:1px solid #1e293b; display:flex; flex-direction:column; gap:0; }
        @media(max-width:768px){ .cp-links { border-right:none; border-bottom:1px solid #1e293b; } }

        .cp-link-item {
          display:flex; align-items:flex-start; gap:14px;
          padding:1.25rem 0; border-bottom:1px solid #1e293b;
          text-decoration:none;
          opacity:0; transform:translateY(16px);
          transition:opacity 0.5s ease, transform 0.5s ease, background 0.2s;
        }
        .cp-link-item:last-child { border-bottom:none; }
        .cp-link-item:hover .cp-link-val { color:#4ccd9a; }
        .cp-link-item.visible { opacity:1; transform:none; }

        .cp-link-icon { font-size:16px; color:#4ccd9a; margin-top:2px; flex-shrink:0; }
        .cp-link-label { font-size:10px; letter-spacing:0.18em; color:#ebf1fb; text-transform:uppercase; margin-bottom:4px; }
        .cp-link-val { font-size:12px; color:#ebf1fb; transition:color 0.2s; word-break:break-all; }

        /* Right — form */
        .cp-form { padding:2rem; display:flex; flex-direction:column; gap:1.25rem; }

        .cp-field { display:flex; flex-direction:column; gap:6px; }
        .cp-label { font-size:10px; letter-spacing:0.18em; color:#ebf1fb; text-transform:uppercase; }
        .cp-input, .cp-textarea {
          background:rgba(15,23,42,0.6);
          border:1px solid #1e293b;
          color:#e2e8f0;
          font-family:'DM Mono',monospace;
          font-size:12px;
          padding:12px 14px;
          outline:none;
          transition:border-color 0.2s;
          resize:none;
        }
        .cp-input:focus, .cp-textarea:focus { border-color:#4ccd9a; }
        .cp-textarea { min-height:120px; }

        .cp-submit {
          display:inline-flex; align-items:center; gap:10px;
          background:transparent; border:1px solid #4ccd9a;
          color:#4ccd9a; font-family:'DM Mono',monospace;
          font-size:13px; letter-spacing:0.1em; padding:14px 32px;
          cursor:pointer; transition:background 0.2s, color 0.2s;
          align-self:flex-start; margin-top:0.5rem;
        }
        .cp-submit:hover { background:#4ccd9a; color:#0f172a; }
        .cp-submit.sent { background:#4ccd9a; color:#0f172a; }

        @keyframes fadeUp { to { opacity:1; transform:translateY(0); } }
        @keyframes fadeIn { to { opacity:1; } }
        .reveal { opacity:0; transform:translateY(20px); transition:opacity 0.55s ease, transform 0.55s ease; }
        .reveal.visible { opacity:1; transform:none; }
      `}</style>

      <div className="cp" ref={ref}>

        <section className="cp-hero">
          <p className="cp-eyebrow  py-2">Get In Touch</p>
          <h1 className="cp-title">Let's build<br /><span>together.</span></h1>
          <p className="cp-sub">
            Open to freelance projects, full-time roles, and interesting collaborations.
            Drop a message — I respond fast.
          </p>
          <div className="cp-line">
            <div className="cp-line-dot" />
            <div className="cp-line-bar" />
            <div className="cp-line-dot" />
          </div>
        </section>

        <section className="cp-section">
          <div className="section-divider reveal">
            <span className="section-divider-label">Contact</span>
            <div className="section-divider-line" />
          </div>

          <div className="cp-body">

            {/* ── Left: links ── */}
            <div className="cp-links">
              {contactLinks.map((c, i) => (
                <a
                
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="cp-link-item reveal"
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <span className="cp-link-icon">{c.icon}</span>
                  <div>
                    <div className="cp-link-label">{c.label}</div>
                    <div className="cp-link-val">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* ── Right: form ── */}
            <form className="cp-form reveal" onSubmit={submit}>
              <div className="cp-field">
                <label className="cp-label">Name</label>
                <input className="cp-input" name="name" value={form.name} onChange={handle} placeholder="Your name" required />
              </div>
              <div className="cp-field">
                <label className="cp-label">Email</label>
                <input className="cp-input" type="email" name="email" value={form.email} onChange={handle} placeholder="your@email.com" required />
              </div>
              <div className="cp-field">
                <label className="cp-label">Subject</label>
                <input className="cp-input" name="subject" value={form.subject} onChange={handle} placeholder="What's this about?" required />
              </div>
              <div className="cp-field">
                <label className="cp-label">Message</label>
                <textarea className="cp-textarea" name="message" value={form.message} onChange={handle} placeholder="Tell me about your project..." required />
              </div>
              <button type="submit" className={`cp-submit ${sent ? "sent" : ""}`}>
                {sent ? "Message Sent ✓" : "Send Message →"}
              </button>
            </form>

          </div>
        </section>

      </div>
    </>
  );
};

export default ContactPage;