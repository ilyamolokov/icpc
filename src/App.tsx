import React from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"

import Lobby from "./pages/Lobby/Lobby"
import Main from "./pages/Main/Main"
import { WorkSpace } from "./pages/WorkSpace/WorkSpace"

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/lobby" element={<Lobby />} />
          <Route path="/workspace" element={<WorkSpace />}>
            <Route path="/workspace/:id/:alias" element={<WorkSpace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
