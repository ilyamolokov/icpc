import classNames from "classnames"
import React, { FC } from "react"

import { Verdict } from "../../types/types"
import { IColumnType, Table } from "../../ui/Table/Table"
import { Arrow } from "../../ui/icons/Arrow"

import styles from "./ProblemSolutionsVerdicts.module.css"
import classnames from "classnames"

export interface ProblemSolutionsVerdictsProps {
  verdicts: Verdict[]
}

const columns: IColumnType<Verdict>[] = [
  {
    key: "time",
    title: "Время",
    width: 50,
    render: (_, { timeFromStart }) => (
      <span className={styles.row}>
        {
          new Date(timeFromStart).toISOString().slice(11, 19)
        }
      </span>
    ),
  },
  {
    key: "status",
    title: "Статус",
    width: 400,
    render: (_, { verdict }) => {
      const className = classnames({
        [styles.row]: true,
        [styles.verdictStatus]: true,
        [styles.verdictStatusOk]: verdict === 'OK'
      })

      return <span className={className}>{verdict}</span>
    },
  },
  {
    key: "points",
    title: "Баллы",
    width: 40,
    render: (_, { verdict }) => <span className={styles.row}>
      {verdict === 'OK' ? '1' : '0'}
    </span>,
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
    </div>
  )
}
