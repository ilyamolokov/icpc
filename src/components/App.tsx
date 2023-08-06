import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import MainPage from "../pages/MainPage/MainPage"
import { Workspace } from "../pages/Workspace/Workspace"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cockpit" element={<Workspace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
