import React, { useEffect, useState } from "react"

import styles from "./TaskDescription.module.css"

export const TaskDescription = () => {
  return (
    <div className={styles.taskDescription}>
      <div className={styles.taskDescriptionHeader}>
        <div className={styles.tabulation}> {/* В будущем можно вынести в отдельный компонент */}
          <span className={`${styles.description} ${styles.activeTab}`}>Описание</span>
          <span className={styles.solutions}>Отправленные решения</span>
        </div>
        <span className={styles.taskStatus}>Не решена</span> {/* В будущем можно вынести в отдельный компонент */}
      </div>

      <div className={styles.taskDescriptionText}>
        <div className={styles.taskTitleBlock}>
          <h3>Считалока 2.0</h3>
          <span>
            Дети продолжают запоминать цифры, а мы им помогать Нам вновь называют начало и конец последовательности чисел, а мы выводим их и
            числа между.
          </span>
        </div>

        <div className={styles.inputTextBlock}>
          <h3>Формат ввода</h3>
          <span>Два числа, каждое с новой строки.</span>
        </div>

        <div className={styles.outputTextBlock}>
          <h3>Формат вывода</h3>
          <span>Все числа от начала до конца (включительно), записанные через пробел.</span>
        </div>

        <div className={styles.codeSampleBlock}>
          <h2>Пример 1</h2>
          <div className={styles.codeSampleBlockIde}>
            <h3>Ввод</h3>
            <p>10</p>
          </div>
          <div className={styles.codeSampleBlockIde}>
            <h3>Вывод</h3>
            <p>1</p>
          </div>
        </div>
      </div>
    </div>
  )
}
