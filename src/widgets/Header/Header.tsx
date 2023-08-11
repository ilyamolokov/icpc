import classnames from "classnames"
import React from "react"

import { Button } from "../../ui/Button/Button"
import { KeyboardOff } from "../../ui/icons/KeyboardOff"
import { KeyboardOn } from "../../ui/icons/KeyboardOn"
import { User } from "../../ui/icons/User"

import styles from "./Header.module.css"

export const Header = () => {

  return (
    <header className={styles.header}>
      <div className={classnames(styles.headerSection, styles.tabs)}>
        <span className={classnames(styles.tabItem, styles.tabItemSelected)}>Решение</span>
        <span className={styles.tabItem}>Положение участников</span>
      </div>

      <div className={styles.headerSection}>
        <div className={styles.users}>
          <div className={styles.user}>
            <div className={styles.avatar}>
              <User color="var(--color-black-typo-primary)" width={40} height={40} />
              <span className={styles.badge} />
            </div>
            <KeyboardOn color="var(--color-black-typo-primary)" width={32} height={32} />
          </div>
          <div className={styles.user}>
            <div className={styles.avatar}>
              <User color="var(--color-black-typo-primary)" width={40} height={40} />
              <span className={styles.badge} />
            </div>
            <KeyboardOff color="var(--color-grey-secondary)" width={32} height={32} />
          </div>
          <div className={styles.user}>
            <div className={styles.avatar}>
              <User color="var(--color-black-typo-primary)" width={40} height={40} />
              <span className={classnames(styles.badge, styles.badgeDisconnected)} />
            </div>
            <KeyboardOff color="var(--color-grey-secondary)" width={32} height={32} />
          </div>
        </div>

        <div>
          <Button className={styles.takeControlButton} title="Взять управление" type="button" onClick={() => {}} disabled={false} />
        </div>
      </div>

      <div className={styles.headerSection}>
        <div className={styles.timer}>
          До завершения осталось: <span className={styles.time}>01:56:02</span>
        </div>

        <div>
          <Button className={styles.finishButton} title="Завершить тренировку" type="button" onClick={() => {}} disabled={false} />
        </div>
      </div>
    </header>
  )
}
