export const TaskSpace = () => {
  const [currentTask, setCurrentTask] = useState(null)

  return (
    <div className={styles.taskSpace}>
      <TaskSpaceList currentTask={currentTask} setCurrentTask={setCurrentTask} />
      <TaskSpaceDescription currentTask={currentTask} />
      <TaskSpaceChat currentTask={currentTask} />
      <EditorContainer currentTask={currentTask} />
    </div>
  )
}

