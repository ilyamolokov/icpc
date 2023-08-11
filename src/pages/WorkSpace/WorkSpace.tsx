import React from "react"

import { ProblemSpace } from "../../widgets/ProblemSpace/ProblemSpace"

import styles from "./WorkSpace.module.css"
import { useGetYandexUserQuery } from "../../store/api/user.api"
import { socket } from "../../sockets"
import { HeaderContainer } from "../../widgets/Header/HeaderContainer"

export const WorkSpace = () => {
  const { data: user } = useGetYandexUserQuery()

  if(user) {
    socket.init(user)
  }

  return (
    <main className={styles.workspace}>
      <HeaderContainer />

      <ProblemSpace />
    </main>
  )
}
