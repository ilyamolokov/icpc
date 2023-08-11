import classNames from "classnames"
import React from "react"

import { IColumnType, Table } from "../../ui/Table/Table"
import { Arrow } from "../../ui/icons/Arrow"

import styles from "./ProblemSolutionsVerdicts.module.css"

export interface IData {
  id: string
  time: string
  status: string
  points: string
}

const columns: IColumnType<IData>[] = [
  {
    key: "time",
    title: "Время",
    width: 50,
  },
  {
    key: "status",
    title: "Статус",
    width: 400,
    render: (_, { status }) => (
      <>
        <span className={classNames(styles.verdictStatus, styles.errorStatus)}>{status}</span>
      </>
    ),
  },
  {
    key: "points",
    title: "Баллы",
    width: 40,
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

export const ProblemSolutionsVerdicts = ({ data }: { data: IData[] }) => {
  return (
    <div className={styles.problemSolutionVerdicts}>
      <Table data={data} columns={columns} />
    </div>
  )
}

