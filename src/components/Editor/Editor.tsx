import "ace-builds/src-noconflict/mode-javascript"
import React, { useEffect } from "react"
import AceEditor from "react-ace"

import { BlockWrapper } from "../BlockWrapper/BlockWrapper"
import { Button } from "../Button/Button"
import { Select } from "./components/Select/Select"

import styles from "./Editor.module.css"

export const Editor = () => {
  useEffect(() => {
    const gutter = document.querySelector<HTMLDivElement>(".ace_gutter")
    gutter.style.backgroundColor = "#fff"
  }, [])

  return (
    <BlockWrapper>
      <div className={styles.editor}>
        <div className={styles.header}>
          <Select />
        </div>
        <AceEditor
          mode="javascript"
          width="100%"
          height="778px"
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
      </div>
    </BlockWrapper>
  )
}
