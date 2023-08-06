import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Comments } from "./Comments/Comments"
import { Cockpit } from "../pages/Cockpit/Cockpit"
import MainPage from "../pages/MainPage/MainPage"
import Lobby from "../pages/Lobby/Lobby"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/lobby" element={<Lobby />} />
        <Route path="/cockpit" element={<Cockpit />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
