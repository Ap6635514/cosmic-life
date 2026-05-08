// src/pages/SkyView.jsx

import Layout from "../components/Layout"

import { motion } from "framer-motion"

import { useEffect, useState } from "react"

import { getISSLocation } from "../services/iss"

function SkyView() {

  const [issData, setIssData] = useState(null)

  useEffect(() => {

    async function loadISS() {

      const data = await getISSLocation()

      if (data) {
        setIssData(data)
      }

    }

    loadISS()

    const interval = setInterval(loadISS, 5000)

    return () => clearInterval(interval)

  }, [])

  return (

    <Layout>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="p-10"
      >

        <div className="bg-white/60 backdrop-blur-xl rounded-[40px] p-10 shadow-xl border border-white/20">

          <p className="uppercase tracking-[0.4em] text-xs text-black/40">
            ISS Telemetry
          </p>

          <h1 className="text-6xl font-light mt-6">
            Sky View
          </h1>

          <div className="flex justify-center mt-10">

            <motion.div
              animate={{
                rotate: 360
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }}
              className="w-56 h-56 rounded-full border-[8px] border-black flex items-center justify-center"
            >

              <span className="text-6xl">
                🛰️
              </span>

            </motion.div>

          </div>

          {issData && (

            <div className="grid md:grid-cols-4 gap-6 mt-12">

              {[
                {
                  title: "Latitude",
                  value: issData.latitude.toFixed(2)
                },

                {
                  title: "Longitude",
                  value: issData.longitude.toFixed(2)
                },

                {
                  title: "Altitude",
                  value: `${issData.altitude.toFixed(0)} km`
                },

                {
                  title: "Velocity",
                  value: `${issData.velocity.toFixed(0)} km/h`
                }

              ].map((item, index) => (

                <motion.div
                  key={index}
                  whileHover={{
                    y: -10
                  }}
                  className="bg-white/60 rounded-3xl p-6 shadow-lg"
                >

                  <p className="uppercase tracking-[0.3em] text-[10px] text-black/40">
                    {item.title}
                  </p>

                  <h2 className="text-3xl mt-3">
                    {item.value}
                  </h2>

                </motion.div>

              ))}

            </div>

          )}

        </div>

      </motion.div>

    </Layout>

  )
}

export default SkyView