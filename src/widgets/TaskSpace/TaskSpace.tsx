import React, { useMemo, useState } from "react"

import { TaskSpaceChatContainer } from "../TaskSpaceChat/TaskSpaceChatContainer"
import { TaskSpaceDescriptionContainer } from "../TaskSpaceDescription/TaskSpaceDescriptionContainer"
import { TaskSpaceEditorContainer } from "../TaskSpaceEditor/TaskSpaceEditorContainer"
import { TaskSpaceListContainer } from "../TaskSpaceList/TaskSpaceListContainer"

import styles from "./TaskSpace.module.css"

export const TaskSpace = () => {

  return (
    <div className={styles.taskSpace}>
        <TaskSpaceListContainer />
        <TaskSpaceDescriptionContainer />

      <TaskSpaceChatContainer />
      <TaskSpaceEditorContainer />
    </div>
  )
}
