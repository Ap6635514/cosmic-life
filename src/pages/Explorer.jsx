import Layout from "../components/Layout"

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from "react-leaflet"

function Explorer() {

  const darkSkyLocations = [

    {
      name: "Ladakh",
      position: [34.1526, 77.5770],
      bortle: "Class 1",
    },

    {
      name: "Spiti Valley",
      position: [32.2461, 78.0347],
      bortle: "Class 2",
    },

    {
      name: "Hanle Dark Sky Reserve",
      position: [32.7794, 78.9647],
      bortle: "Class 1",
    },
  ]

  return (
    <Layout>

      <section>

        <h1 className="text-6xl font-light tracking-tight">
          Dark Sky Explorer
        </h1>

        <p className="mt-4 text-black/50 max-w-md leading-relaxed">
          Discover ideal stargazing locations and observatory-grade skies.
        </p>

      </section>

      {/* MAP */}
      <section className="mt-10 overflow-hidden rounded-[40px] border border-white/30 shadow-sm">

        <MapContainer
          center={[28.6139, 77.2090]}
          zoom={5}
          className="h-[500px] w-full"
        >

          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {darkSkyLocations.map((location, index) => (

            <Marker
              key={index}
              position={location.position}
            >

              <Popup>

                <div>

                  <h2 className="font-semibold">
                    {location.name}
                  </h2>

                  <p>
                    {location.bortle}
                  </p>

                </div>

              </Popup>

            </Marker>

          ))}

        </MapContainer>

      </section>

      {/* LOCATION CARDS */}
      <section className="mt-10 grid md:grid-cols-3 gap-5 mb-32">

        {darkSkyLocations.map((location, index) => (

          <div
            key={index}
            className="bg-white/60 rounded-[30px] p-6 shadow-sm"
          >

            <p className="text-[10px] tracking-[0.3em] uppercase text-black/40">
              Dark Sky Location
            </p>

            <h2 className="text-3xl font-light mt-4">
              {location.name}
            </h2>

            <p className="mt-4 text-black/50">
              {location.bortle}
            </p>

          </div>

        ))}

      </section>

    </Layout>
  )
}

export default Explorer