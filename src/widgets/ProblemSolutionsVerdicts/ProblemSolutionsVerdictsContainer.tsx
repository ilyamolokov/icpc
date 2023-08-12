import React, { FC, useEffect, useState } from "react"

import { VerdictRetrievedHandler, socket } from "../../sockets"
import { Verdict } from "../../types/types"
import { ProblemSolutionsVerdicts } from "./ProblemSolutionsVerdicts"
import { trainingSessionId } from "../../constants/training-session-id"
import { useParams } from "react-router"
import { api } from "../../api"

export const ProblemSolutionsVerdictsContainer: FC = () => {
  const { alias } = useParams()

  const [verdicts, setVerdicts] = useState<Verdict[]>([])

  const verdictRetrievedEventHandler: VerdictRetrievedHandler = (verdict) => {
    setVerdicts((prev) => [verdict, ...prev])
  }

  useEffect(() => {
    api.getVerdictsByAlias(trainingSessionId, alias)
      .then(({ submissions }) => setVerdicts(submissions.sort((a, b) => b.timeFromStart - a.timeFromStart)))
      .catch(console.log)

    return socket.subscribeVerdictRetrieved(verdictRetrievedEventHandler)
  }, [alias])

  return <ProblemSolutionsVerdicts verdicts={verdicts} />
}
