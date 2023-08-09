import React, { useState } from "react"

import { api } from "../../api"
import { TaskSpaceDescription } from "./TaskSpaceDescription"
import { useParams } from "react-router-dom"
import { useQuery } from "react-query"

export const TaskSpaceDescriptionContainer = () => {
  const {id:contestId, alias: currentAlias} = useParams();
  
  const { data:currentTaskDescription, isLoading, isError, refetch} = useQuery(
    ['currentTaskAlias', currentAlias],
    () => api.getTaskStatement(contestId, currentAlias),
  );

  return <TaskSpaceDescription currentTaskDescription={currentTaskDescription} isLoading={isLoading} isError={isError} refetch={refetch}/>
}
