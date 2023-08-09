import * as React from "react"
import { FC } from "react"

import { BlockWrapper } from "../../ui/BlockWrapper/BlockWrapper"
import { TaskSpaceListInfo } from "./components/TaskSpaceListInfo/TaskSpaceListInfo"
import { TaskSpaceListItem } from "./components/TaskSpaceListItem/TaskSpaceListItem"

import styles from "./TaskSpaceList.module.css"
import { Loading } from "../../ui/Loading/Loading"
import { Tasks, Task } from "../../types/types"

interface Props {
  tasks:Tasks
  handleTaskSpaceClick:any
  contestId:string
  currentAlias:string
//   contestId: string
//   onSelectTask: (taskId: string, alias: string) => void
}

export const TaskSpaceList:FC<Props> = ({ tasks, handleTaskSpaceClick, contestId, currentAlias }) => {
  if (!tasks)
    return (
      <BlockWrapper className={styles.blockWrapper}>
        <Loading/>
      </BlockWrapper>
    )

  return (
    <BlockWrapper className={styles.container}>
      <h3 className={styles.title}>{"Задачи"}</h3>
      <div className={styles.tasks}>
        {tasks.map((task) => (
          <TaskSpaceListItem
            key={task.id}
            task={task}
            handleTaskSpaceClick={handleTaskSpaceClick}
            status="done"
          />
        ))}
      </div>

      <TaskSpaceListInfo />
    </BlockWrapper>
  )
}
