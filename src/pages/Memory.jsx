import Layout from "../components/Layout"

import { motion } from "framer-motion"

function Memory() {

  const observations = [

    {
      title: "Pleiades Cluster",
      date: "May 8, 2026",
      note: "Clear skies with excellent visibility."
    },

    {
      title: "Moon Observation",
      date: "May 5, 2026",
      note: "Captured waxing crescent details."
    },

    {
      title: "ISS Flyover",
      date: "May 2, 2026",
      note: "Observed bright ISS pass above horizon."
    }

  ]

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

        {/* HERO */}

        <div className="glass-card p-10 relative overflow-hidden">

          <div className="absolute top-[-120px] right-[-100px] w-[300px] h-[300px] bg-purple-400/20 blur-[120px] rounded-full nebula-glow"></div>

          <p className="section-title">
            Observation Archive
          </p>

          <h1 className="hero-title mt-6">
            Sky
            <br />
            Memory
          </h1>

          <p className="hero-subtext mt-6 max-w-2xl">
            Your personal archive of celestial
            observations and astronomy sessions.
          </p>

        </div>

        {/* MEMORY CARDS */}

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          {

            observations.map((item, index) => (

              <motion.div

                key={index}

                whileHover={{
                  y: -8,
                  scale: 1.02
                }}

                className="info-card p-6"

              >

                <p className="section-title">
                  {item.date}
                </p>

                <h2 className="text-3xl font-light mt-4">
                  {item.title}
                </h2>

                <p className="hero-subtext mt-4">
                  {item.note}
                </p>

              </motion.div>

            ))

          }

        </div>

      </motion.div>

    </Layout>

  )

}

export default Memory