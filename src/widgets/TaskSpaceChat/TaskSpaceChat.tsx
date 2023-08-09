import * as React from "react"
import { FC } from "react"

import { BlockWrapper } from "../../ui/BlockWrapper/BlockWrapper"
import { TaskSpaceChatMessage } from "./components/TaskSpaceChatMessage/TaskSpaceChatMessage"

import styles from "./TaskSpaceChat.module.css"

interface TaskSpaceChatProps {
  messages: string[]
  onSendMessage: (message: string) => void
}

export const TaskSpaceChat: FC<TaskSpaceChatProps> = ({ messages, onSendMessage }) => {
  const [state, setState] = React.useState({
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
      onSendMessage(state.message)
    }
  }

  return (
    <BlockWrapper className={styles.blockWrapper}>
      <span className={styles.commentsTitle}>Комментарии к задаче</span>
      <div className={styles.chat}>
        {messages.map((message, index) => (
          <TaskSpaceChatMessage key={index} username={"Ruslan"} message={message} />
        ))}
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
    </BlockWrapper>
  )
}
