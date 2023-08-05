import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Comments } from "./Comments/Comments"
import { Cockpit } from "./pages/Cockpit/Cockpit"
import MainPage from "./pages/MainPage/MainPage"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cockpit" element={<Cockpit />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
