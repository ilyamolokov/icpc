import React from "react"

import { socket } from "../../sockets"
import { useGetYandexUserQuery } from "../../store/api/user.api"
import { HeaderContainer } from "../../widgets/Header/HeaderContainer"
import { ProblemSpace } from "../../widgets/ProblemSpace/ProblemSpace"

import styles from "./WorkSpace.module.css"

export const WorkSpace = () => {
  const { data: user } = useGetYandexUserQuery()

  if (user) {
    socket.init(user)
  }

  return (
    <main className={styles.workspace}>
      <HeaderContainer />

      <ProblemSpace />
    </main>
  )
}
