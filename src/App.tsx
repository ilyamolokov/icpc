import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Lobby from "./pages/Lobby/Lobby"
import Main from "./pages/Main/Main"
import { WorkSpace } from "./pages/WorkSpace/WorkSpace"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/lobby" element={<Lobby />} />
        <Route path="/workspace" element={<WorkSpace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
