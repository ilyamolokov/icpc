import React from "react"

import { Arrow } from "../../../../ui/icons/Arrow"
import { ProblemSolutionsVerdicts } from "../../ProblemSolutionsVerdicts"

import styles from "./ProblemSolutionVerdict.module.css"
import { Verdict } from "../../../../types/types"

export const ProblemSolutionVerdict = () => {
  const verdicts: Verdict[] = [
    {
      timeFromStart: 10000000,
      verdict: "OK",
      score: 100,
      id: 1,
    }
  ]
  return (
    <div className={styles.problemSolutionDetails}>
      <div className={styles.detailsHeader}>
        <Arrow className={styles.arrowBack} width={24} height={24} color={"var(--color-black-typo-primary)"} />
        <h3 className={styles.title}>Детализация</h3>
      </div>
      <div className={styles.detailsContent}>
        <div className={styles.detailsTable}>
          <ProblemSolutionsVerdicts verdicts={verdicts} />
        </div>
      </div>
    </div>
  )
}
