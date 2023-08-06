import React, { useState } from "react"

import { TaskSpaceChatContainer } from "../TaskSpaceChat/TaskSpaceChatContainer"
import { TaskSpaceDescriptionContainer } from "../TaskSpaceDescription/TaskSpaceDescriptionContainer"
import { TaskSpaceEditorContainer } from "../TaskSpaceEditor/TaskSpaceEditorContainer"
import { TaskSpaceListContainer } from "../TaskSpaceList/TaskSpaceListContainer"

import styles from "./TaskSpace.module.css"

export const TaskSpace = () => {
  const [currentTask, setCurrentTask] = useState(null)

  return (
    <div className={styles.taskSpace}>
      <TaskSpaceDescriptionContainer />
      <TaskSpaceChatContainer />
      <TaskSpaceListContainer />
      <TaskSpaceEditorContainer />
    </div>
  )
}
