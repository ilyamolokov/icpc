import classnames from "classnames"
import React from "react"

import { Verdict } from "../../../../types/types"
import { IColumnType, Table } from "../../../../ui/Table/Table"
import { Arrow } from "../../../../ui/icons/Arrow"
import { ProblemSolutionsVerdicts } from "../../ProblemSolutionsVerdicts"

import styles from "./ProblemSolutionVerdict.module.css"
import { Accordion } from "../../../../ui/Accordion/Accordion"

const verdicts: Verdict[] = [
  {
    timeFromStart: 10000000,
    verdict: "OK",
    score: 100,
    id: 1,
    compileLog: "Compile log",
    compiler: "gcc",
    diff: "diff",
    problemAlias: "problemAlias",
    problemId: "problemId",
    source: "source",
    submissionTime: "2021-05-05T12:00:00.000Z",
  },
]

const columns: IColumnType<Verdict>[] = [
  {
    key: "time",
    title: "Время",
    width: 50,
    render: (_, { timeFromStart }) => <span className={styles.row}>{new Date(timeFromStart).toISOString().slice(11, 19)}</span>,
  },
  {
    key: "status",
    title: "Статус",
    width: 400,
    render: (_, { verdict }) => {
      const className = classnames({
        [styles.row]: true,
        [styles.verdictStatus]: true,
        [styles.verdictStatusOk]: verdict === "OK",
      })
import { Verdict } from "../../../../types/types"

      return <span className={className}>{verdict}</span>
    },
  },
  {
    key: "points",
    title: "Баллы",
    width: 40,
    render: (_, { verdict }) => <span className={styles.row}>{verdict === "OK" ? "1" : "0"}</span>,
  },
]
export const ProblemSolutionVerdict = () => {
  const verdicts: Verdict[] = [
    {
      timeFromStart: 10000000,
      verdict: "OK",
      score: 100,
      id: 1,
    }
  ]
  return (
    <div className={styles.problemSolutionDetails}>
      <div className={styles.detailsHeader}>
        <Arrow className={styles.arrowBack} width={24} height={24} color={"var(--color-black-typo-primary)"} />
        <h3 className={styles.title}>Детализация</h3>
      </div>
      <div className={styles.detailsContent}>
        <div className={styles.detailsTable}>
          <ProblemSolutionsVerdicts verdicts={verdicts} />
        </div>
      </div>
    </div>
  )
}
