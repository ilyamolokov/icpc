import * as React from "react"
import { FC } from "react"

import { BlockWrapper } from "../../ui/BlockWrapper/BlockWrapper"

import styles from "./TaskSpaceDescription.module.css"

interface TaskSpaceDescriptionProps {
  description: string
}

export const TaskSpaceDescription: FC<TaskSpaceDescriptionProps> = ({ description }) => {
  if (!description) {
    return (
      <BlockWrapper className={styles.blockWrapper}>
        <div>Загрузка...</div>
      </BlockWrapper>
    )
  }

  return (
    <BlockWrapper className={styles.blockWrapper}>
      <div className={styles.taskDescriptionHeader}>
        <div className={styles.tabulation}>
          {" "}
          {/* В будущем можно вынести в отдельный компонент */}
          <span className={`${styles.description} ${styles.activeTab}`}>Описание</span>
          <span className={styles.solutions}>Отправленные решения</span>
        </div>
        <span className={styles.taskStatus}>Не решена</span> {/* В будущем можно вынести в отдельный компонент */}
      </div>

      <div className={styles.taskDescriptionContent}>
        <div dangerouslySetInnerHTML={{ __html: description }} />
        {/*  <div className={styles.taskTitleBlock}>*/}
        {/*    <h3>Считалока 2.0</h3>*/}
        {/*    <span>*/}
        {/*      Дети продолжают запоминать цифры, а мы им помогать Нам вновь называют начало и конец последовательности чисел, а мы выводим их и*/}
        {/*      числа между.*/}
        {/*    </span>*/}
        {/*  </div>*/}

        {/*  <div className={styles.inputTextBlock}>*/}
        {/*    <h3>Формат ввода</h3>*/}
        {/*    <span>Два числа, каждое с новой строки.</span>*/}
        {/*  </div>*/}

        {/*  <div className={styles.outputTextBlock}>*/}
        {/*    <h3>Формат вывода</h3>*/}
        {/*    <span>Все числа от начала до конца (включительно), записанные через пробел.</span>*/}
        {/*  </div>*/}

        {/*  <div className={styles.codeSampleBlock}>*/}
        {/*    <h2>Пример 1</h2>*/}
        {/*    <div className={styles.codeSampleBlockIde}>*/}
        {/*      <h3>Ввод</h3>*/}
        {/*      <p>10</p>*/}
        {/*    </div>*/}
        {/*    <div className={styles.codeSampleBlockIde}>*/}
        {/*      <h3>Вывод</h3>*/}
        {/*      <p>1</p>*/}
        {/*    </div>*/}
        {/*  </div>*/}
      </div>
    </BlockWrapper>
  )
}