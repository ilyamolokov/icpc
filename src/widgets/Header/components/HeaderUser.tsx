import * as React from "react"
import { FC } from "react"

import { getAvatarUrl } from "../../../helpers/getAvatarUrl"
import { YandexUser } from "../../../types/types"
import { KeyboardOn } from "../../../ui/icons/KeyboardOn"

import styles from "./HeaderUser.module.css"

interface HeaderUserProps {
  yandexUser: YandexUser
}

export const HeaderUser: FC<HeaderUserProps> = ({ yandexUser }) => {
  return (
    <div className={styles.user}>
      <div className={styles.avatar}>
        <img className={styles.avatarImg} src={getAvatarUrl(yandexUser.default_avatar_id)} alt="avatar" />
        {/* <span className={styles.badge} /> */}
      </div>
      <KeyboardOn color="var(--color-black-typo-primary)" width={32} height={32} />
    </div>
  )
}
