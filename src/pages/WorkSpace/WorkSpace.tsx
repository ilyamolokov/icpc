import React from "react"

import { Header } from "../../widgets/Header/Header"
import { TaskSpace } from "../../widgets/TaskSpace/TaskSpace"

import styles from "./WorkSpace.module.css"

export const WorkSpace = () => {
  return (
    <main className={styles.workspace}>
      <Header />

      <TaskSpace />
    </main>
  )
}
