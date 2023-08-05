import React from "react"

import { Comments } from "../../Comments/Comments"
import { Editor } from "../../Editor/Editor"
import { Header } from "../../Header/Header"
import { TaskDescription } from "../../TaskDescription/TaskDescription"
import { Tasks } from "../../Widgets/Tasks/Tasks"

import styles from "./Cockpit.module.css"

export const Cockpit = () => {
  return (
    <div className={styles.cockpit}>
      <Header />
      <div className={styles.content}>
        <div className={styles.tasks}>
          <Tasks />
        </div>
        <div className={styles.tasksDescription}>
          <TaskDescription />
        </div>
        <div className={styles.comments}>
          <Comments />
        </div>
        <div className={styles.editor}>
          <Editor />
        </div>
      </div>
    </div>
  )
}
