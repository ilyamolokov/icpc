import * as React from "react"
import { FC, useCallback, useEffect, useState } from "react"
import { api } from "../../api"
import { ProblemSpaceList } from "./ProblemSpaceList"
import { useNavigate, useParams } from "react-router-dom"
import { useQuery } from "react-query"
import { Loading } from "../../ui/Loading/Loading"
import { Problem, Problems } from "../../types/types"
import { BlockWrapper } from "../../ui/BlockWrapper/BlockWrapper"

export const ProblemSpaceListContainer = () => {
  const { id, alias: currentAlias } = useParams();
  const navigate = useNavigate();
  const contestId = '50596' // мокаем contestId

  const { data: problems, isLoading, isError } = useQuery(
    'problems',
    () => api.getProblems(contestId),
    {
      onSuccess: (problems: Problems) => {
        navigate(`/workspace/${contestId}/${problems[0].alias}`);
      }
    }
  );

  const handleProblemSpaceClick = useCallback((problem: Problem) => {
    navigate(`/workspace/${contestId}/${problem.alias}`);
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
  return <ProblemSpaceList problems={problems} handleProblemSpaceClick={handleProblemSpaceClick} contestId={contestId} currentAlias={currentAlias} />
}