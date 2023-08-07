import React, { useState } from "react"

import { TaskSpaceChatContainer } from "../TaskSpaceChat/TaskSpaceChatContainer"
import { TaskSpaceDescriptionContainer } from "../TaskSpaceDescription/TaskSpaceDescriptionContainer"
import { TaskSpaceEditorContainer } from "../TaskSpaceEditor/TaskSpaceEditorContainer"
import { TaskSpaceListContainer } from "../TaskSpaceList/TaskSpaceListContainer"

import styles from "./TaskSpace.module.css"

export const TaskSpace = () => {
  const [currentTaskId, setCurrentTaskId] = useState(null)
  const [currentTaskAlias, setCurrentTaskAlias] = useState(null)

  const onSelectTask = (taskId: string, alias: string) => {
    setCurrentTaskId(taskId)
    setCurrentTaskAlias(alias)
  }

  return (
    <div className={styles.taskSpace}>
      <TaskSpaceListContainer onSelectTask={onSelectTask} currentTaskId={currentTaskId} />
      <TaskSpaceDescriptionContainer currentTaskAlias={currentTaskAlias} />
      <TaskSpaceChatContainer />
      <TaskSpaceEditorContainer />
    </div>
  )
}
