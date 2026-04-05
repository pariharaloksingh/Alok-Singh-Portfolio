import Navbar from "./common/Navbar";
import { Outlet } from "react-router-dom";
import Galaxy3D from "./common/Galaxy3D";
import { useRef, useEffect, useMemo } from "react";

const generateStars = (num) => {
  return Array.from({ length: num }).map((_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 3 + 2,
  }));
};

// 🔥 Enhanced 3D Waves
function SpaceWaves() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-60">
      <svg
        className="w-full h-full"
        viewBox="0 85 1440 1000"
        preserveAspectRatio="none"
      >
        {[...Array(8)].map((_, i) => (
          <path
            key={i}
            d={`M0 ${200 + i * 35} 
                Q 360 ${140 + i * 35}, 720 ${200 + i * 35} 
                T 1440 ${200 + i * 35}`}
            fill="transparent"
            stroke="rgba(110,231,183,0.35)"
            strokeWidth={i % 2 === 0 ? "1.5" : "1"}
            className="wave-line"
            style={{
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </svg>
    </div>
  );
}

const FLEE_RADIUS = 70;
const FLEE_STRENGTH = 50;

function Layout() {
  const stars = useMemo(() => generateStars(700), []);
  const containerRef = useRef(null);
  const starRefs = useRef([]);
  const animFrameRef = useRef(null);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes twinkle {
        0%, 100% { opacity: 0.2; }
        50% { opacity: 1; }
      }

      .star {
        position: absolute;
        background: white;
        border-radius: 50%;
        will-change: transform;
        transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }

      /* 🔥 3D Wave Animation */
      @keyframes waveMove {
        0% {
          transform: translateY(0px) scaleX(1);
        }
        50% {
          transform: translateY(-25px) scaleX(1.08);
        }
        100% {
          transform: translateY(0px) scaleX(1);
        }
      }

      .wave-line {
        animation: waveMove 6s ease-in-out infinite;
        filter: drop-shadow(0 0 6px rgba(110,231,183,0.6));
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const handleMouseMove = (e) => {
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    animFrameRef.current = requestAnimationFrame(() => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      const cursorX = e.clientX - rect.left;
      const cursorY = e.clientY - rect.top;

      stars.forEach((star, i) => {
        const el = starRefs.current[i];
        if (!el) return;

        const starPx = (star.x / 100) * rect.width;
        const starPy = (star.y / 100) * rect.height;
        const dx = starPx - cursorX;
        const dy = starPy - cursorY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < FLEE_RADIUS && dist > 0) {
          const force = (1 - dist / FLEE_RADIUS) * FLEE_STRENGTH;
          const ox = (dx / dist) * force;
          const oy = (dy / dist) * force;
          el.style.transform = `translate(${ox}px, ${oy}px)`;
        } else {
          el.style.transform = "translate(0px, 0px)";
        }
      });
    });
  };

  const handleMouseLeave = () => {
    starRefs.current.forEach((el) => {
      if (el) el.style.transform = "translate(0px, 0px)";
    });
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-gray-950 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* 🌌 Galaxies */}
      <Galaxy3D position="top-[-120px] left-[-120px]" />
      
      <Galaxy3D position="bottom-[-120px] right-[-120px]" />

      {/* 🌊 Waves (behind stars) */}
      <SpaceWaves />

      {/* ⭐ Stars */}
      {stars.map((star, i) => (
        <div
          key={star.id}
          ref={(el) => (starRefs.current[i] = el)}
          className="star"
          style={{
            width: star.size,
            height: star.size,
            top: `${star.y}%`,
            left: `${star.x}%`,
            animation: `twinkle ${star.duration}s ease-in-out infinite`,
          }}
        />
      ))}

      {/* 🔥 Glow Circle */}
      <div className="absolute w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-30 mix-blend-screen" />

      {/* 🔥 Content */}
      <div className="relative z-10">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;