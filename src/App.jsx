// src/App.jsx

import { useEffect, useState } from "react"

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import Missions from "./pages/Missions"
import SkyView from "./pages/SkyView"
import Explorer from "./pages/Explorer"
import Memory from "./pages/Memory"

import LoadingScreen from "./components/LoadingScreen"

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false)

    }, 2500)

    return () => clearTimeout(timer)

  }, [])

  if (loading) {

    return <LoadingScreen />

  }

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Missions />}
        />

        <Route
          path="/skyview"
          element={<SkyView />}
        />

        <Route
          path="/explorer"
          element={<Explorer />}
        />

        <Route
          path="/memory"
          element={<Memory />}
        />

      </Routes>

    </BrowserRouter>

  )

}

export default App