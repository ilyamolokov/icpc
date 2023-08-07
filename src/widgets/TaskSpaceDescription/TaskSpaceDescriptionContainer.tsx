import * as React from "react"
import { FC, useEffect, useState } from "react"

import { api } from "../../api"
import { TaskSpaceDescription } from "./TaskSpaceDescription"

interface TaskSpaceDescriptionContainerProps {
  currentTaskAlias: string
}

export const TaskSpaceDescriptionContainer: FC<TaskSpaceDescriptionContainerProps> = ({ currentTaskAlias }) => {
  const [description, setDescription] = useState(null)

  useEffect(() => {
    api.getTaskStatement("50596", currentTaskAlias).then(setDescription).catch(console.log)
  }, [currentTaskAlias])

  return <TaskSpaceDescription description={description} />
}
