import * as React from "react"
import { FC } from "react"

import { BlockWrapper } from "../../ui/BlockWrapper/BlockWrapper"
import { TaskSpaceListInfo } from "./components/TaskSpaceListInfo/TaskSpaceListInfo"
import { TaskSpaceListItem } from "./components/TaskSpaceListItem/TaskSpaceListItem"

import styles from "./TaskSpaceList.module.css"

interface TaskSpaceListProps {
  tasks: { alias: string; id: string; name: string }[]
  currentTaskId: string
  onSelectTask: (taskId: string, alias: string) => void
}

export const TaskSpaceList: FC<TaskSpaceListProps> = ({ tasks, currentTaskId, onSelectTask }) => {
  if (!tasks)
    return (
      <BlockWrapper className={styles.container}>
        <div>Загрузка...</div>
      </BlockWrapper>
    )

  return (
    <BlockWrapper className={styles.container}>
      <h3 className={styles.title}>{"Задачи"}</h3>
      <div className={styles.tasks}>
        {tasks.map(({ id, name, alias }) => (
          <TaskSpaceListItem
            key={id}
            name={name}
            alias={alias}
            id={id}
            status="done"
            onSelect={onSelectTask}
            currentTaskId={currentTaskId}
          />
        ))}
      </div>

      <TaskSpaceListInfo />
    </BlockWrapper>
  )
}
