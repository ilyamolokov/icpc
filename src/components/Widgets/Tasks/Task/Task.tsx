import classNames from "classnames"
import * as React from "react"
import { FC } from "react"

import { Arrow } from "../../../icons/Arrow"
import { User } from "../../../icons/User"

import styles from "./Task.module.css"

interface TaskProps {
  className?: string
  title: string
  id: string
  status: string
  selected: boolean
  onSelect: () => void
}
export const Task: FC<TaskProps> = ({ className, title, id, status, selected, onSelect }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDropdown = () => setIsOpen(!isOpen)

  return (
    <div className={classNames(styles.container, className, { [styles.open]: isOpen })}>
      <div className={styles.lineTitleBlock}>
        <div
          className={classNames({
            [styles.lineDone]: status === "done",
            [styles.linePending]: status === "pending",
            [styles.lineWrong]: status === "wrong",
            [styles.lineDefault]: status === "default",
            [styles.linePrimary]: selected && status === "default",
          })}
        ></div>
        <div
          onClick={onSelect}
          className={classNames({
            [styles.titlePrimary]: selected,
            [styles.titleSecondary]: !selected,
          })}
        >
          {title}
        </div>
      </div>
      <div className={styles.statusUserBlock}>
        <div
          className={classNames({
            [styles.statusDone]: status === "done",
            [styles.statusPending]: status === "pending",
            [styles.statusWrong]: status === "wrong",
            [styles.statusDefault]: status === "default",
          })}
        >
          {"1"}
        </div>
        <div className={styles.user}>
          <User width={24} height={24} color={"var(--color-black-typo-primary)"} />
        </div>
        <div className={styles.dropdownContainer}>
          <div className={classNames(styles.arrow, { [styles.rotated]: isOpen })} onClick={toggleDropdown}>
            <Arrow width={18} height={18} color={"var(--color-black-typo-primary)"} />
          </div>
          {isOpen && (
            <div className={styles.dropdown}>
              <div className={styles.user}>
                <User width={24} height={24} color={"var(--color-black-typo-primary)"} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
