import * as React from "react"
import { FC } from "react"

import { BlockWrapper } from "../../ui/BlockWrapper/BlockWrapper"
import { TaskSpaceChatMessage } from "./components/TaskSpaceChatMessage/TaskSpaceChatMessage"

import styles from "./TaskSpaceChat.module.css"

export const TaskSpaceChat: FC = () => {
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
      console.log(state.message)
      setState({ ...state, message: "", rows: 1 })
    }
  }

  return (
    <BlockWrapper className={styles.blockWrapper}>
      <span className={styles.commentsTitle}>Комментарии к задаче</span>
      <div className={styles.chat}>
        <TaskSpaceChatMessage
          username={"Ilya"}
          message={"Hello from Almaty Hello from Almaty Hello from Almaty Hello from Almaty Hello from Almaty "}
        />
        <TaskSpaceChatMessage username={"Ruslan"} message={"Salam"} />
        <TaskSpaceChatMessage username={"Yaroslav"} message={"Popolam"} />
        <TaskSpaceChatMessage username={"Yaroslav"} message={"Popolam"} />
        <TaskSpaceChatMessage username={"Yaroslav"} message={"Popolam"} />
        <TaskSpaceChatMessage username={"Yaroslav"} message={"Popolam"} />
        <TaskSpaceChatMessage username={"Yaroslav"} message={"Popolam"} />
        <TaskSpaceChatMessage username={"Yaroslav"} message={"Popolam"} />
        <TaskSpaceChatMessage username={"Yaroslav"} message={"Popolam"} />
        <TaskSpaceChatMessage username={"Yaroslav"} message={"Popolam"} />
        <TaskSpaceChatMessage username={"Yaroslav"} message={"Popolam"} />
        <TaskSpaceChatMessage username={"Yaroslav"} message={"Popolam"} />
        <TaskSpaceChatMessage username={"Yaroslav"} message={"Popolam"} />
        <TaskSpaceChatMessage username={"Yaroslav"} message={"Popolam"} />
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
