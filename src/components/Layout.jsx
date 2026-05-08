// src/components/Layout.jsx

import { NavLink } from "react-router-dom"
import { Telescope, Stars, Brain, Globe } from "lucide-react"
import CosmicBackground from "./CosmicBackground"

function Layout({ children }) {

  return (

    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#f8fbff] via-[#edf6ff] to-[#dcefff] text-black">

      {/* COSMIC BACKGROUND */}
      <CosmicBackground />

      {/* TOP BAR */}

      <header className="relative z-10 flex items-center justify-between px-8 py-6">

        <h1 className="tracking-[0.5em] text-sm font-light">
          COSMIC LIFE COMPANION
        </h1>

        <button className="px-5 py-2 rounded-full border border-black/30 bg-white/50 backdrop-blur-md hover:bg-white transition">
          Logout
        </button>

      </header>

      {/* MAIN CONTENT */}

      <main className="relative z-10 px-10 pb-40">

        {children}

      </main>

      {/* FLOATING NAVIGATION */}

      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">

        <div className="flex items-center gap-4 px-6 py-4 rounded-full bg-white/70 backdrop-blur-xl border border-white/40 shadow-2xl">

          <NavLink
            to="/"
            className="flex flex-col items-center text-xs text-black/70 hover:text-black transition"
          >
            <Telescope size={18} />
            <span>Mission</span>
          </NavLink>

          <NavLink
            to="/skyview"
            className="flex flex-col items-center text-xs text-black/70 hover:text-black transition"
          >
            <Stars size={18} />
            <span>Sky Map</span>
          </NavLink>

          <NavLink
            to="/memory"
            className="flex flex-col items-center text-xs text-black/70 hover:text-black transition"
          >
            <Brain size={18} />
            <span>Memory</span>
          </NavLink>

          <NavLink
            to="/explorer"
            className="flex flex-col items-center text-xs text-black/70 hover:text-black transition"
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
