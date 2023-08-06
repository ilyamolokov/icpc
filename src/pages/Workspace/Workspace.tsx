import React from "react"

import { Header } from "../../components/Header/Header"
import { TaskSpace } from "../../widgets/TaskSpace/TaskSpace"

import styles from "./Workspace.module.css"

export const Workspace = () => {
  return (
    <main className={styles.workspace}>
      <Header />

      <TaskSpace />
    </main>
  )
}
