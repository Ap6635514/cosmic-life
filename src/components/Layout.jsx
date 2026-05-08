// src/components/Layout.jsx

import { useState } from "react"
import { NavLink } from "react-router-dom"

import {
  Telescope,
  Stars,
  Brain,
  Globe
} from "lucide-react"

import CosmicBackground from "./CosmicBackground"

function Layout({ children }) {

  const [darkMode, setDarkMode] = useState(true)

  return (

    <div

      className={`

        min-h-screen
        relative
        overflow-hidden
        transition-all
        duration-500

        ${darkMode

          ? "bg-gradient-to-b from-[#020617] via-[#071126] to-[#0f172a] text-white"

          : "bg-gradient-to-b from-[#f8fbff] via-[#edf6ff] to-[#dcefff] text-black"

        }

      `}
    >

      {/* COSMIC BACKGROUND */}

      <CosmicBackground />

      {/* HEADER */}

      <header className="relative z-10 flex items-center justify-between px-8 py-6">

        <h1 className="tracking-[0.5em] text-sm font-light">

          COSMIC LIFE COMPANION

        </h1>

        <div className="flex items-center gap-3">

          {/* THEME BUTTON */}

          <button

            onClick={() => setDarkMode(!darkMode)}

            className={`

              px-4 py-2 rounded-full backdrop-blur-md transition-all

              ${darkMode

                ? "bg-white/10 border border-white/20 hover:bg-white/20"

                : "bg-black/10 border border-black/10 hover:bg-black/20"

              }

            `}
          >

            {darkMode ? "☀️" : "🌙"}

          </button>

          {/* LOGOUT */}

          <button

            className={`

              px-5 py-2 rounded-full backdrop-blur-md transition-all

              ${darkMode

                ? "bg-white/10 border border-white/20 hover:bg-white/20"

                : "bg-black/10 border border-black/10 hover:bg-black/20"

              }

            `}
          >

            Logout

          </button>

        </div>

      </header>

      {/* MAIN CONTENT */}

      <main className="relative z-10 px-6 md:px-10 pb-40">

        {children}

      </main>

      {/* FLOATING NAVIGATION */}

      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">

        <div

          className={`

            flex items-center gap-6 px-6 py-4 rounded-full
            backdrop-blur-xl shadow-2xl transition-all

            ${darkMode

              ? "bg-white/10 border border-white/10"

              : "bg-white/70 border border-white/40"

            }

          `}
        >

          {/* MISSIONS */}

          <NavLink

            to="/"

            className="flex flex-col items-center text-xs hover:scale-110 transition"

          >

            <Telescope size={18} />

            <span>Missions</span>

          </NavLink>

          {/* SKY MAP */}

          <NavLink

            to="/skyview"

            className="flex flex-col items-center text-xs hover:scale-110 transition"

          >

            <Stars size={18} />

            <span>Sky Map</span>

          </NavLink>

          {/* MEMORY */}

          <NavLink

            to="/memory"

            className="flex flex-col items-center text-xs hover:scale-110 transition"

          >

            <Brain size={18} />

            <span>Memory</span>

          </NavLink>

          {/* EXPLORER */}

          <NavLink

            to="/explorer"

            className="flex flex-col items-center text-xs hover:scale-110 transition"

          >

            <Globe size={18} />

            <span>Explorer</span>

          </NavLink>

        </div>

      </nav>

    </div>

  )

}

export default Layout