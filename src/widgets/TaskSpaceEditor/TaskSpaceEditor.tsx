import * as React from "react"
import { FC } from "react"

import AceEditor from "react-ace"

import "ace-builds/src-noconflict/mode-javascript"

import { BlockWrapper } from "../../ui/BlockWrapper/BlockWrapper"
import { Button } from "../../ui/Button/Button"
import { TaskSpaceEditorSelect } from "./components/TaskSpaceEditorSelect/TaskSpaceEditorSelect"

import styles from "./TaskSpaceEditor.module.css"

export const TaskSpaceEditor: FC = () => {
  React.useEffect(() => {
    const gutter = document.querySelector<HTMLDivElement>(".ace_gutter")
    gutter.style.backgroundColor = "#fff"
  }, [])

  return (
    <BlockWrapper className={styles.blockWrapper}>
      <div className={styles.header}>
        <TaskSpaceEditorSelect />
      </div>
      <AceEditor
        mode="javascript"
        width="100%"
        height="100%"
        showGutter={true}
        setOptions={{
          useWorker: false,
          fontSize: 14,
        }}
      />
      <div className={styles.footer}>
        <span className={styles.alarm}>Редактор бездействует 1 минуту</span>
        <Button title="Отправить" type="button" onClick={() => {}} disabled={false} />
      </div>
    </BlockWrapper>
  )
}
