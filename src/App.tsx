import React from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Lobby from "./pages/Lobby/Lobby"
import Main from "./pages/Main/Main"
import { WorkSpace } from "./pages/WorkSpace/WorkSpace"
import { useGetYandexUserQuery } from "./store/api/api"

const queryClient = new QueryClient()

const App = () => {
  const { data } = useGetYandexUserQuery()

  if (!data) return null

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
