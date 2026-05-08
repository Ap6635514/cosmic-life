// src/pages/Missions.jsx

import Layout from "../components/Layout"

import { motion } from "framer-motion"

import { useEffect, useState } from "react"

import { getWeather } from "../services/weather"
import { getMoonPhase } from "../services/moon"

function Missions() {

  const [temperature, setTemperature] = useState("")
  const [humidity, setHumidity] = useState("")
  const [clouds, setClouds] = useState("")
  const [moonPhase, setMoonPhase] = useState("")

  useEffect(() => {

    async function loadData() {

      const weather = await getWeather()

      if (weather) {

        setTemperature(weather.main.temp)
        setHumidity(weather.main.humidity)
        setClouds(weather.clouds.all)

      }

      const moon = await getMoonPhase()

      if (moon) {

        setMoonPhase(moon.Phase)

      }

    }

    loadData()

  }, [])

  return (

    <Layout>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative p-10"
      >

        {/* STARS */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">

          {[...Array(40)].map((_, i) => (

            <div
              key={i}
              className="absolute w-[2px] h-[2px] bg-white rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />

          ))}

        </div>

        {/* GLOW */}
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-300/20 blur-[120px] rounded-full animate-pulse"></div>

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative bg-white/60 backdrop-blur-xl rounded-[40px] p-10 shadow-xl border border-white/20 overflow-hidden"
        >

          {/* ORBIT */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-black/10 rounded-full slow-spin"></div>

          <p className="uppercase tracking-[0.4em] text-xs text-black/40">
            Difficulty : Intermediate
          </p>

          <h1 className="text-6xl font-light mt-6 leading-tight relative z-10">

            Tonight's Mission:
            <br />

            <span className="font-medium">
              Locate the Pleiades
            </span>

          </h1>

          <p className="mt-6 text-black/50 max-w-xl leading-relaxed relative z-10">

            The Seven Sisters are rising early.
            Perfect conditions for binocular
            observation and astrophotography.

          </p>

          <button className="mt-10 bg-black text-white px-8 py-4 rounded-full tracking-[0.2em] text-sm hover:scale-105 transition-all relative z-10">

            START SKY HUNT

          </button>

        </motion.div>

        {/* SKY QUALITY */}
        <div className="mt-10 bg-white/60 rounded-[40px] p-10 shadow-xl border border-white/20">

          <p className="uppercase tracking-[0.4em] text-xs text-black/40">
            Sky Quality
          </p>

          <div className="flex justify-center mt-10">

            <motion.div
              animate={{
                rotate: 360
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="w-48 h-48 rounded-full border-[8px] border-black flex items-center justify-center flex-col"
            >

              <span className="text-6xl font-light">
                82
              </span>

              <span className="uppercase tracking-[0.3em] text-[10px] text-black/40 mt-2">
                Index
              </span>

            </motion.div>

          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-12">

            {[
              {
                title: "Temperature",
                value: `${temperature}°C`
              },

              {
                title: "Humidity",
                value: `${humidity}%`
              },

              {
                title: "Clouds",
                value: `${clouds}%`
              },

              {
                title: "Moon Phase",
                value: moonPhase
              }

            ].map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.2
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03
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

        </div>

      </motion.div>

    </Layout>

  )
}

export default Missions