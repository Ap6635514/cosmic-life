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

        initial={{
          opacity: 0,
          y: 40
        }}

        animate={{
          opacity: 1,
          y: 0
        }}

        transition={{
          duration: 0.8
        }}

        className="p-10"

      >

        <div className="glass-card p-10 relative overflow-hidden">

          <div className="absolute top-[-120px] left-[-100px] w-[300px] h-[300px] bg-purple-400/20 blur-[120px] rounded-full nebula-glow"></div>

          <p className="section-title">
            ISS Telemetry
          </p>

          <h1 className="hero-title mt-6">
            Live Sky
            <br />
            Tracking
          </h1>

          <p className="hero-subtext mt-6 max-w-2xl">
            Real-time International Space Station
            orbital telemetry and atmospheric data.
          </p>

        </div>

        {/* ISS DATA */}

        {

          issData && (

            <div className="grid md:grid-cols-4 gap-6 mt-10">

              {[

                {
                  label: "Latitude",
                  value: issData.latitude.toFixed(2)
                },

                {
                  label: "Longitude",
                  value: issData.longitude.toFixed(2)
                },

                {
                  label: "Altitude",
                  value: `${issData.altitude.toFixed(0)} km`
                },

                {
                  label: "Velocity",
                  value: `${issData.velocity.toFixed(0)} km/h`
                }

              ].map((item, index) => (

                <motion.div

                  key={index}

                  whileHover={{
                    y: -8,
                    scale: 1.02
                  }}

                  className="info-card p-6"

                >

                  <p className="section-title">
                    {item.label}
                  </p>

                  <h2 className="text-3xl font-light mt-4">
                    {item.value}
                  </h2>

                </motion.div>

              ))}

            </div>

          )

        }

      </motion.div>

    </Layout>

  )

}

export default SkyView