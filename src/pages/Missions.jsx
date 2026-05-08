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

          <div className="absolute top-[-120px] right-[-120px] w-[300px] h-[300px] bg-cyan-400/20 blur-[120px] rounded-full nebula-glow"></div>

          <p className="section-title">
            Tonight's Mission
          </p>

          <h1 className="hero-title mt-6">
            Observe The
            <br />
            Pleiades Cluster
          </h1>

          <p className="hero-subtext mt-6 max-w-2xl">
            The Seven Sisters are rising early tonight.
            Conditions are favorable for binocular
            observation and wide-field astrophotography.
          </p>

          <button className="cosmic-button mt-10">
            START OBSERVATION
          </button>

        </div>

        {/* SKY DATA */}

        <div className="grid md:grid-cols-4 gap-6 mt-10">

          <motion.div
            whileHover={{
              y: -8,
              scale: 1.02
            }}
            className="info-card p-6"
          >

            <p className="section-title">
              Temperature
            </p>

            <h2 className="text-4xl font-light mt-4">
              {temperature}°
            </h2>

          </motion.div>

          <motion.div
            whileHover={{
              y: -8,
              scale: 1.02
            }}
            className="info-card p-6"
          >

            <p className="section-title">
              Humidity
            </p>

            <h2 className="text-4xl font-light mt-4">
              {humidity}%
            </h2>

          </motion.div>

          <motion.div
            whileHover={{
              y: -8,
              scale: 1.02
            }}
            className="info-card p-6"
          >

            <p className="section-title">
              Clouds
            </p>

            <h2 className="text-4xl font-light mt-4">
              {clouds}%
            </h2>

          </motion.div>

          <motion.div
            whileHover={{
              y: -8,
              scale: 1.02
            }}
            className="info-card p-6"
          >

            <p className="section-title">
              Moon Phase
            </p>

            <h2 className="text-2xl font-light mt-4">
              {moonPhase}
            </h2>

          </motion.div>

        </div>

      </motion.div>

    </Layout>

  )

}

export default Missions