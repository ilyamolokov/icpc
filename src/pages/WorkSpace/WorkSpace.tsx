import React from "react"

import { Header } from "../../widgets/Header/Header"
import { ProblemSpace } from "../../widgets/ProblemSpace/ProblemSpace"

import styles from "./WorkSpace.module.css"
import { useGetYandexUserQuery } from "../../store/api/user.api"
import { socket } from "../../sockets"

export const WorkSpace = () => {
  const { data: user } = useGetYandexUserQuery()

  if(user) {
    socket.init(user)
  }

  return (
    <main className={styles.workspace}>
      <Header />

      <ProblemSpace />
    </main>
  )
}
