import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import { NavLink, Link } from "react-router-dom";

const navigation = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Projects", to: "/projects" },
  { name: "Skills", to: "/skills" },
  { name: "Contact", to: "/contact" },
];

// 🔥 GOOGLE DRIVE LINK
const RESUME_LINK =
  "https://drive.google.com/uc?export=view&id=17SPoGYMDAlwkfryvIxdWFBbqiCod7ECE";

export default function Navbar() {
  return (
    <>
      {/* 🔥 Animation CSS */}
      <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(-12px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes jumpIn {
          0% { opacity: 0; transform: translateY(20px) scale(0.95); }
          60% { opacity: 1; transform: translateY(-6px) scale(1.02); }
          100% { transform: translateY(0) scale(1); }
        }

        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes rocketLaunch {
          0% { transform: translateY(0) scale(1); opacity: 1; }
          50% { transform: translateY(-8px) scale(1.1); }
          100% { transform: translateY(-20px) scale(0.9); opacity: 0.9; }
        }

        .animate-navbar { animation: fadeSlide 0.35s ease; }
        .animate-jump { animation: jumpIn 0.5s ease forwards; }

        .animate-spin-slow {
          animation: spinSlow 6s linear infinite;
        }

        .rocket-launch {
          animation: rocketLaunch 0.6s ease forwards;
        }

        .nav-link { position: relative; }

        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 100%;
          height: 2px;
          background: #6ee7b7;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }

        .nav-link:hover::after { transform: scaleX(1); }
        .nav-active::after { transform: scaleX(1); }
      `}</style>

      <Disclosure
        as="nav"
        className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/10 backdrop-blur-lg border-b border-slate-200"
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4">
              <div className="flex h-16 items-center justify-between">

                {/* Mobile button */}
                <div className="sm:hidden">
                  <DisclosureButton className="p-2 text-gray-400 hover:text-[#6ee7b7] transition">
                    {open ? (
                      <XMarkIcon className="h-6 w-6" />
                    ) : (
                      <Bars3Icon className="h-6 w-6" />
                    )}
                  </DisclosureButton>
                </div>

                {/* 🔥 Logo with Sun */}
                <div className="flex items-center gap-2 text-white font-bold text-lg tracking-wider">
                  <SunIcon className="h-6 w-6 text-yellow-400 animate-spin-slow drop-shadow-[0_0_8px_rgba(255,200,0,0.7)]" />

                  <Link to="/">
                    <span>
                      ALOK<span className="text-[#6ee7b7]">.</span>
                    </span>
                  </Link>
                </div>

                {/* Desktop menu */}
                <div className="hidden sm:flex space-x-6">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.to}
                      end={item.to === "/"}
                      className={({ isActive }) =>
                        `nav-link text-sm font-medium transition duration-300 
                        ${
                          isActive
                            ? "text-[#6ee7b7] nav-active"
                            : "text-gray-400 hover:text-white"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>

                {/* 🚀 Resume button with rocket animation */}
                <a
                  href={RESUME_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex items-center gap-2 border border-[#6ee7b7] text-[#6ee7b7] px-4 py-1.5 text-sm tracking-wider transition hover:bg-[#6ee7b7] hover:text-black hover:scale-105 group overflow-hidden"
                >
                  <span>Resume</span>

                  <RocketLaunchIcon className="h-4 w-4 group-hover:rocket-launch" />

               
                </a>

              </div>
            </div>

            {/* 🔥 Mobile menu */}
            <DisclosurePanel className="sm:hidden px-4 pb-4 space-y-2 bg-[#0f172a]/95 backdrop-blur-md border-t border-slate-800 animate-navbar">
              {navigation.map((item, i) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base transition transform duration-300
                    ${
                      isActive
                        ? "text-[#6ee7b7]"
                        : "text-gray-300 hover:text-white hover:translate-x-1 hover:scale-[1.02]"
                    }`
                  }
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <span className="inline-block animate-jump">
                    {item.name}
                  </span>
                </NavLink>
              ))}

              {/* Mobile Resume */}
              <a
                href={RESUME_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-base font-medium text-[#6ee7b7] hover:text-white hover:bg-gray-700 rounded-md transition"
              >
                🚀 Resume
              </a>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    </>
  );
}