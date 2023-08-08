import styles from "./Loading.module.css"
import * as React from "react"
import { FC } from "react"

export const Loading = () => {
    return <div className={styles.iconContainer}>
    <i className={styles.loader}></i>
  </div>
}