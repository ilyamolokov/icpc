import React, { FunctionComponent } from "react"

import styles from "./TaskSpaceChatMessage.module.css"

interface TaskSpaceChatMessageProps {
  username: string
  message: string
}

export const TaskSpaceChatMessage: FunctionComponent<TaskSpaceChatMessageProps> = ({ username, message }) => {
  return (
    <div className={styles.comment}>
      {username}: <span>{message}</span>
    </div>
  )
}
