import React from "react"

import { Header } from "../../widgets/Header/Header"
import { ProblemSpace } from "../../widgets/ProblemSpace/ProblemSpace"

import styles from "./WorkSpace.module.css"

export const WorkSpace = () => {
  return (
    <main className={styles.workspace}>
      <Header />

      <ProblemSpace />
    </main>
  )
}
