import * as React from "react"
import { FC, useEffect, useState } from "react"

import { api } from "../../api"
import { TaskSpaceList } from "./TaskSpaceList"

interface TaskSpaceListContainerProps {
  currentTaskId: string
  onSelectTask: (taskId: string, alias: string) => void
}

export const TaskSpaceListContainer: FC<TaskSpaceListContainerProps> = ({ currentTaskId, onSelectTask }) => {
  const [tasks, setTasks] = useState(null)

  const handleSubmit = (tasks: any[]) => {
    setTasks(tasks)
    onSelectTask(tasks[0].id, tasks[0].alias)
    console.log(tasks)
  }

  useEffect(() => {
    api.getTasks("50596").then(handleSubmit).catch(console.log)
  }, [])

  return <TaskSpaceList tasks={tasks} currentTaskId={currentTaskId} onSelectTask={onSelectTask} />
}
