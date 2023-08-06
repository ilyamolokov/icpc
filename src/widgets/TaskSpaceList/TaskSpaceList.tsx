import * as React from "react"
import { FC } from "react"

import { BlockWrapper } from "../../ui/BlockWrapper/BlockWrapper"
import { TaskSpaceListInfo } from "./components/TaskSpaceListInfo/TaskSpaceListInfo"
import { TaskSpaceListItem } from "./components/TaskSpaceListItem/TaskSpaceListItem"

import styles from "./TaskSpaceList.module.css"

export const TaskSpaceList: FC = () => {
  const [selectedTask, setSelectedTask] = React.useState(null)

  return (
    <BlockWrapper className={styles.container}>
      <h3 className={styles.title}>{"Задачи"}</h3>
      <div className={styles.tasks}>
        <TaskSpaceListItem
          title="A. Crystal Crosswind"
          id="1"
          status="done"
          selected={selectedTask === "1"}
          onSelect={() => setSelectedTask("1")}
        />
        <TaskSpaceListItem
          title="B. Dungeon Crawler"
          id="2"
          status="pending"
          selected={selectedTask === "2"}
          onSelect={() => setSelectedTask("2")}
        />
        <TaskSpaceListItem
          title="C. Fair Division"
          id="3"
          status="wrong"
          selected={selectedTask === "3"}
          onSelect={() => setSelectedTask("3")}
        />
        <TaskSpaceListItem
          title="F. Islands from the Sky"
          id="4"
          status="default"
          selected={selectedTask === "4"}
          onSelect={() => setSelectedTask("4")}
        />
        <TaskSpaceListItem
          title="F. Islands from the Sky"
          id="5"
          status="default"
          selected={selectedTask === "5"}
          onSelect={() => setSelectedTask("5")}
        />
        <TaskSpaceListItem
          title="F. Islands from the Sky"
          id="6"
          status="wrong"
          selected={selectedTask === "6"}
          onSelect={() => setSelectedTask("6")}
        />
        <TaskSpaceListItem
          title="F. Islands from the Sky"
          id="7"
          status="default"
          selected={selectedTask === "7"}
          onSelect={() => setSelectedTask("7")}
        />
        <TaskSpaceListItem
          title="F. Islands from the Sky"
          id="8"
          status="done"
          selected={selectedTask === "8"}
          onSelect={() => setSelectedTask("8")}
        />
        <TaskSpaceListItem
          title="F. Islands from the Sky"
          id="9"
          status="default"
          selected={selectedTask === "9"}
          onSelect={() => setSelectedTask("9")}
        />
        <TaskSpaceListItem
          title="F. Islands from the Sky"
          id="10"
          status="default"
          selected={selectedTask === "10"}
          onSelect={() => setSelectedTask("10")}
        />
      </div>

      <TaskSpaceListInfo />
    </BlockWrapper>
  )
}
