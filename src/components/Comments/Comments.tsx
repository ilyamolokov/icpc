import React, { useEffect, useState } from "react"

import { Comment } from "./Comment/Comment"

import styles from "./Comments.module.css"

export const Comments = () => {
  const [state, setState] = useState({
    message: "",
    rows: 1,
    minRows: 1,
    maxRows: 10,
  })

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textareaLineHeight = 24
    const { minRows, maxRows } = state

    const previousRows = event.target.rows
    event.target.rows = minRows

    const currentRows = ~~(event.target.scrollHeight / textareaLineHeight)
    if (currentRows === previousRows) {
      event.target.rows = currentRows
    }

    if (currentRows >= maxRows) {
      event.target.rows = maxRows
      event.target.scrollTop = event.target.scrollHeight
    }

    setState({
      ...state,
      message: event.target.value,
      rows: currentRows < maxRows ? currentRows : maxRows,
    })
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      event.preventDefault()
      console.log(state.message)
      setState({ ...state, message: "", rows: 1 })
    }
  }

  return (
    <div className={styles.comments}>
      <span className={styles.commentsTitle}>Комментарии к задаче</span>
      <div className={styles.chat}>
        <Comment username={"Ilya"} message={"Hello from Almaty Hello from Almaty Hello from Almaty Hello from Almaty Hello from Almaty "} />
        <Comment username={"Ruslan"} message={"Salam"} />
        <Comment username={"Yaroslav"} message={"Popolam"} />
      </div>
      <textarea
        rows={state.rows}
        className={styles.inputField}
        placeholder="Текст для ввода"
        id="message"
        name="message"
        value={state.message}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}
