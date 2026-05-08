import Layout from "../components/Layout"
import { db } from "../firebase"

import {
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore"

import { useEffect, useState } from "react"

import { useAuth } from "../context/AuthContext"

function Memory() {

  const { user } = useAuth()

  const [observations, setObservations] = useState([])

  useEffect(() => {

    if (!user) return

    const fetchObservations = async () => {

      const q = query(
        collection(db, "observations"),
        where("uid", "==", user.uid),
        orderBy("createdAt", "desc")
      )

      const querySnapshot = await getDocs(q)

      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))

      setObservations(data)
    }

    fetchObservations()

  }, [user])

  return (
    <Layout>

      <section className="mb-32">

        <h1 className="text-6xl font-light tracking-tight">
          Sky Memory
        </h1>

        <p className="mt-4 text-black/50 max-w-md leading-relaxed">
          Your personal archive of celestial observations.
        </p>

        {!user && (

          <div className="mt-10 bg-white/60 rounded-[30px] p-8">
            <p>Please sign in to view your observations 🌌</p>
          </div>

        )}

        <div className="mt-10 space-y-6">

          {observations.map((obs) => (

            <div
              key={obs.id}
              className="bg-white/60 rounded-[30px] p-6 shadow-sm border border-white/20"
            >

              <div className="flex justify-between items-start">

                <div>

                  <p className="text-[10px] tracking-[0.3em] uppercase text-black/40">
                    Observation
                  </p>

                  <h2 className="text-3xl font-light mt-3">
                    {obs.object}
                  </h2>

                </div>

                <div className="text-right">

                  <p className="text-sm text-black/40">
                    Sky Quality
                  </p>

                  <p className="text-2xl">
                    {obs.skyQuality}
                  </p>

                </div>

              </div>

              <p className="mt-6 text-black/60 leading-relaxed italic">
                {obs.notes}
              </p>

              <div className="flex gap-3 mt-6 flex-wrap">

                <span className="bg-black text-white text-xs px-3 py-2 rounded-full">
                  {obs.visibility}
                </span>

                <span className="bg-white text-black text-xs px-3 py-2 rounded-full">
                  {obs.bortle}
                </span>

                <span className="bg-white text-black text-xs px-3 py-2 rounded-full">
                  {obs.moon}
                </span>

              </div>

            </div>

          ))}

        </div>

      </section>

    </Layout>
  )
}

export default Memory