import classNames from "classnames"
import React, { FC } from "react"

import { Verdict } from "../../types/types"
import { IColumnType, Table } from "../../ui/Table/Table"
import { Arrow } from "../../ui/icons/Arrow"

import styles from "./ProblemSolutionsVerdicts.module.css"
import { ProblemSolutionVerdict } from "./components/ProblemSolutionVerdict/ProblemSolutionVerdict"

export interface ProblemSolutionsVerdictsProps {
  verdicts: Verdict[]
}

const columns: IColumnType<Verdict>[] = [
  {
    key: "time",
    title: "Время",
    width: 50,
    render: (_, { timeFromStart }) => <span className={classNames(styles.verdictStatus, styles.errorStatus)}>{timeFromStart}</span>,
  },
  {
    key: "status",
    title: "Статус",
    width: 400,
    render: (_, { verdict }) => <span className={classNames(styles.verdictStatus, styles.errorStatus)}>{verdict}</span>,
  },
  {
    key: "points",
    title: "Баллы",
    width: 40,
    render: (_, { score }) => <span className={classNames(styles.verdictStatus, styles.errorStatus)}>{score}</span>,
  },
  {
    key: "details",
    title: "",
    width: 32,
    render: (_, { id }) => (
      <>
        <Arrow className={styles.detailsArrow} width={20} height={20} color={"var(--color-grey-secondary)"} />
      </>
    ),
  },
]

export const ProblemSolutionsVerdicts: FC<ProblemSolutionsVerdictsProps> = ({ verdicts }) => {
  return (
    <div className={styles.problemSolutionVerdicts}>
      <Table<Verdict> data={verdicts} columns={columns} />
      <ProblemSolutionVerdict/>
    </div>
  )
}
