// src/components/LoadingScreen.jsx

import { motion } from "framer-motion"

function LoadingScreen() {

  return (

    <motion.div

      initial={{
        opacity: 1
      }}

      animate={{
        opacity: 1
      }}

      className="fixed inset-0 z-[999] flex items-center justify-center bg-[#020617] overflow-hidden"

    >

      {/* BIG GLOW */}

      <div className="absolute w-[500px] h-[500px] bg-cyan-400/20 blur-[140px] rounded-full nebula-glow"></div>

      {/* STARS */}

      {

        [...Array(80)].map((_, i) => (

          <div

            key={i}

            className="absolute bg-white rounded-full twinkle-star"

            style={{

              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,

              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,

              opacity: Math.random()

            }}

          />

        ))

      }

      {/* CONTENT */}

      <div className="relative z-10 flex flex-col items-center">

        {/* ORBIT */}

        <div className="relative flex items-center justify-center">

          <div className="w-[180px] h-[180px] border border-cyan-300/20 rounded-full slow-spin"></div>

          <div className="absolute w-[110px] h-[110px] border border-cyan-300/30 rounded-full slow-spin"></div>

          <motion.div

            animate={{
              scale: [1, 1.08, 1]
            }}

            transition={{
              duration: 2,
              repeat: Infinity
            }}

            className="absolute text-5xl"

          >

            🌌

          </motion.div>

        </div>

        {/* TITLE */}

        <motion.h1

          initial={{
            opacity: 0,
            y: 20
          }}

          animate={{
            opacity: 1,
            y: 0
          }}

          transition={{
            duration: 1
          }}

          className="mt-10 text-3xl tracking-[0.4em] font-light"

        >

          COSMIC LIFE

        </motion.h1>

        {/* SUBTEXT */}

        <motion.p

          initial={{
            opacity: 0
          }}

          animate={{
            opacity: 1
          }}

          transition={{
            delay: 0.5
          }}

          className="mt-4 text-white/40 tracking-[0.3em] uppercase text-xs"

        >

          Initializing Observatory Systems

        </motion.p>

      </div>

    </motion.div>

  )

}

export default LoadingScreen