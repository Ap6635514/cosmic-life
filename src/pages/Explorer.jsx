// src/pages/Explorer.jsx

import Layout from "../components/Layout"

import { motion } from "framer-motion"

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from "react-leaflet"

function Explorer() {

  const locations = [

    {
      name: "Hanle Dark Sky Reserve",
      position: [32.7794, 78.9647],
      bortle: "Class 1"
    },

    {
      name: "Spiti Valley",
      position: [32.2461, 78.0347],
      bortle: "Class 2"
    },

    {
      name: "Ladakh",
      position: [34.1526, 77.5770],
      bortle: "Class 1"
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

          <div className="absolute bottom-[-150px] right-[-100px] w-[300px] h-[300px] bg-cyan-400/20 blur-[120px] rounded-full nebula-glow"></div>

          <p className="section-title">
            Observatory Explorer
          </p>

          <h1 className="hero-title mt-6">
            Dark Sky
            <br />
            Explorer
          </h1>

          <p className="hero-subtext mt-6 max-w-2xl">
            Explore observatory-grade locations
            with minimal light pollution and
            extraordinary night sky visibility.
          </p>

        </div>

        {/* MAP */}

        <div className="glass-card mt-10 overflow-hidden p-3">

          <MapContainer
            center={[28.6139, 77.2090]}
            zoom={5}
            className="h-[500px] w-full rounded-[2rem]"
          >

            <TileLayer
              attribution='&copy; OpenStreetMap contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {

              locations.map((location, index) => (

                <Marker
                  key={index}
                  position={location.position}
                >

                  <Popup>

                    <div>

                      <h2>
                        {location.name}
                      </h2>

                      <p>
                        {location.bortle}
                      </p>

                    </div>

                  </Popup>

                </Marker>

              ))

            }

          </MapContainer>

        </div>

        {/* LOCATION CARDS */}

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          {

            locations.map((location, index) => (

              <motion.div

                key={index}

                whileHover={{
                  y: -8,
                  scale: 1.02
                }}

                className="info-card p-6"

              >

                <p className="section-title">
                  Dark Sky Site
                </p>

                <h2 className="text-3xl font-light mt-4">
                  {location.name}
                </h2>

                <p className="hero-subtext mt-4">
                  {location.bortle}
                </p>

              </motion.div>

            ))

          }

        </div>

      </motion.div>

    </Layout>

  )

}

export default Explorer