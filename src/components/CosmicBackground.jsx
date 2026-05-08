// src/components/CosmicBackground.jsx

function CosmicBackground() {

  return (

    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[1]">

      {/* BLUE GLOW */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-400/30 blur-[150px] rounded-full animate-pulse"></div>

      {/* PURPLE GLOW */}
      <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-purple-400/30 blur-[140px] rounded-full animate-pulse"></div>

      {/* STARS */}

      {

        [...Array(120)].map((_, i) => (

          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{

              width: `${Math.random() * 4}px`,
              height: `${Math.random() * 4}px`,

              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,

              opacity: Math.random(),

              animationDuration: `${2 + Math.random() * 5}s`

            }}
          />

        ))

      }

    </div>

  )

}

export default CosmicBackground