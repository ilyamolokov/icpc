import React, { FunctionComponent } from "react"

import styles from "./ProblemSpaceChatMessage.module.css"

interface ProblemSpaceChatMessageProps {
  username: string
  message: string
}

export const ProblemSpaceChatMessage: FunctionComponent<ProblemSpaceChatMessageProps> = ({ username, message }) => {
  return (
    <div className={styles.comment}>
      {username}: <span>{message}</span>
    </div>
  )
}
