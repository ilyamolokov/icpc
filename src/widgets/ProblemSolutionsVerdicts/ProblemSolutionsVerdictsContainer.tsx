import React, { FC, useEffect, useState } from "react"

import { VerdictRetrievedHandler, socket } from "../../sockets"
import { Verdict } from "../../types/types"
import { ProblemSolutionsVerdicts } from "./ProblemSolutionsVerdicts"

export const ProblemSolutionsVerdictsContainer: FC = () => {
  // const { alias } = useParams()

  const [verdicts, setVerdicts] = useState<Verdict[]>([])

  const verdictRetrievedEventHandler: VerdictRetrievedHandler = ({ timeFromStart, verdict, score, id }) => {
    setVerdicts((prev) => [...prev, { timeFromStart, verdict, score, id }])

    console.log(id)
    console.log(timeFromStart)
    console.log(verdict)
    console.log(score)
  }

  useEffect(() => {
    return socket.subscribeVerdictRetrieved(verdictRetrievedEventHandler)
  }, [])

  return <ProblemSolutionsVerdicts verdicts={verdicts} />
}
