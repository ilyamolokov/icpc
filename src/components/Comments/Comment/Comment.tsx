import React, { FunctionComponent, useEffect, useState } from "react"

import styles from "./Comment.module.css"

interface CommentProps {
  username: string
  message: string
}

export const Comment: FunctionComponent<CommentProps> = ({ username, message }) => {
  return (
    <div className={styles.comment}>
      {username}: <span>{message}</span>
    </div>
  )
}
