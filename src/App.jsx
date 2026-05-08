import { BrowserRouter, Routes, Route } from "react-router-dom"

import Missions from "./pages/Missions"
import SkyView from "./pages/SkyView"
import Memory from "./pages/Memory"
import Explorer from "./pages/Explorer"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Missions />} />
        <Route path="/skyview" element={<SkyView />} />
        <Route path="/memory" element={<Memory />} />
        <Route path="/explorer" element={<Explorer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App