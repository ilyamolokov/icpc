import classNames from "classnames"
import * as React from "react"
import { FC } from "react"

import { Arrow } from "../../../../ui/icons/Arrow"
import { User } from "../../../../ui/icons/User"

import styles from "./TaskSpaceListItem.module.css"

interface TaskSpaceListProps {
  className?: string
  name: string
  alias: string
  id: string
  status: string
  onSelect: (id: string, alias: string) => void
  currentTaskId: string
}
export const TaskSpaceListItem: FC<TaskSpaceListProps> = ({ className, name, id, status, onSelect, currentTaskId, alias }) => {
  const title = `${alias}. ${name}`

  const isSelected = id === currentTaskId

  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDropdown = () => setIsOpen(!isOpen)

  const handleSelect = () => onSelect(id, alias)

  return (
    <div className={classNames(styles.container, className, { [styles.open]: isOpen })}>
      <div className={styles.lineTitleBlock}>
        <div
          className={classNames({
            [styles.lineDone]: status === "done",
            [styles.linePending]: status === "pending",
            [styles.lineWrong]: status === "wrong",
            [styles.lineDefault]: status === "default",
            [styles.linePrimary]: isSelected && status === "default",
          })}
        />
        <div
          onClick={handleSelect}
          className={classNames({
            [styles.titlePrimary]: isSelected,
            [styles.titleSecondary]: !isSelected,
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
