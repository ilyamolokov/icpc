import * as React from "react"
import { FC, useCallback, useEffect, useState } from "react"
import { api } from "../../api"
import { TaskSpaceList } from "./TaskSpaceList"
import { useNavigate, useParams } from "react-router-dom"
import { useQuery } from "react-query"
import { Loading } from "../../ui/Loading/Loading"
import { Task, Tasks } from "../../types/types"
import { BlockWrapper } from "../../ui/BlockWrapper/BlockWrapper"

export const TaskSpaceListContainer = () => {
  const { id, alias: currentAlias } = useParams();
  const navigate = useNavigate();
  const contestId = '50596' // мокаем contestId

  const { data: tasks, isLoading, isError } = useQuery(
    'tasks',
    () => api.getTasks(contestId),
    {
      onSuccess: (tasks: Tasks) => {
        navigate(`/workspace/${contestId}/${tasks[0].alias}`);
      }
    }
  );

  const handleTaskSpaceClick = useCallback((task: Task) => {
    navigate(`/workspace/${contestId}/${task.alias}`);
  }, [])

  if (isLoading) {
    return (<BlockWrapper>
      <Loading />
    </BlockWrapper>)

  }

  if (isError) {
    return (<BlockWrapper>
      <div>error</div>
    </BlockWrapper>)
  }
  console.log(tasks)
  return <TaskSpaceList tasks={tasks} handleTaskSpaceClick={handleTaskSpaceClick} contestId={contestId} currentAlias={currentAlias} />
}
