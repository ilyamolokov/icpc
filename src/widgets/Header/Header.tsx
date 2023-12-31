import classnames from "classnames"
import React, { FC } from "react"

import { YandexUser } from "../../types/types"
import { Button } from "../../ui/Button/Button"

import styles from "./Header.module.css"
import { HeaderUser } from "./components/HeaderUser/HeaderUser"
import { ControlButtonContainer } from "./components/ControlButton/ControlButtonContainer"

interface HeaderProps {
  onTakeControl: () => void
  yandexUsersOnline: YandexUser[]
}

export const Header: FC<HeaderProps> = ({ onTakeControl, yandexUsersOnline }) => {
  // const isTakeControlButtonContainerDisabled = isControlTaken
  // const controlButtonTitle = isTakeControlButtonContainerDisabled ? "Вы управляющий" : "Взять управление"

  console.log(yandexUsersOnline)

  return (
    <header className={styles.header}>
      <div className={classnames(styles.headerSection, styles.tabs)}>
        <span className={classnames(styles.tabItem, styles.tabItemSelected)}>Решение</span>
        <span className={styles.tabItem}>Положение участников</span>
      </div>

      <div className={styles.headerSection}>
        <div className={styles.users}>
          {yandexUsersOnline.map((user) => (
            <HeaderUser yandexUser={user} key={user.id} />
          ))}
        </div>
        <ControlButtonContainer />
        {/* <div>
          <Button
            className={styles.takeControlButtonContainer}
            title={controlButtonTitle}
            type="button"
            onClick={onTakeControl}
            disabled={isTakeControlButtonContainerDisabled}
          />
        </div> */}
      </div>

      <div className={styles.headerSection}>
        <div className={styles.timer}>
          {/* До завершения осталось: <span className={styles.time}>01:56:02</span> */}
        </div>

        <div>
          <Button className={styles.finishButton} title="Завершить тренировку" type="button" onClick={() => { }} disabled={false} />
        </div>
      </div>
    </header>
  )
}
