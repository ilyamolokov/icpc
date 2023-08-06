import * as React from "react"
import { FC } from "react"

import styles from "./TaskSpaceListInfo.module.css"

export const TaskSpaceListInfo: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.place}>{"Место: 4"}</div>
      <div className={styles.doneCount}>{"Решено: 1"}</div>
      <div className={styles.fine}>{"Штраф: 234"}</div>
    </div>
  )
}
