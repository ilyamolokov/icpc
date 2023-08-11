import React, { FC, useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { api } from "../../api"
import { CodeHandler, ControlTakenHandler, socket } from "../../sockets"
import { ProblemSpaceEditor } from "./ProblemSpaceEditor"
import { useGetYandexUserQuery } from "../../store/api/user.api"

export const ProblemSpaceEditorContainer: FC = () => {
  const { alias } = useParams()

  const [codeState, setCodeState] = useState<string>("")
  const [isEditorDisabled, setIsEditorDisabled] = useState<boolean>(true)

  const { data: user } = useGetYandexUserQuery()

  const training_session_id = "c9b5c66e-e1d8-4579-9ab9-4fd2adc4b6db"
  const sendCode = (code: string) => {
    const trainingSessionId = "c9b5c66e-e1d8-4579-9ab9-4fd2adc4b6db"
    api.postSubmissions(trainingSessionId, code, "python3_docker", "A").then(console.log).catch(console.log)
  }

  const onCodeChange = (code: string) => {
    socket.sendCode({ code, problemAlias: alias, userId: user.id})
  }

  const editorEventHandler: CodeHandler = ({ code, userId, problemAlias }) => {
    if(userId !== user.id && problemAlias === alias) {
      setCodeState(code)
    }
  }

  const controlTakenHandler: ControlTakenHandler = ({ userId }) => {
    setIsEditorDisabled(userId !== user.id)
  }

  useEffect(() => {
    api
      .getCodeByProblemAlias(training_session_id, alias)
      .then(({ code }) => setCodeState(code))
      .catch(console.log)

    const editorUnsubscribe =  socket.subscribeEditor(editorEventHandler)
    const controlTakenUnsubscribe = socket.subscribeControlTaken(controlTakenHandler)

    return () => {
      editorUnsubscribe()
      controlTakenUnsubscribe()
    }
  }, [alias])

  return <ProblemSpaceEditor onCodeChange={onCodeChange} codeState={codeState} sendCode={sendCode} isEditorDisabled={isEditorDisabled} />
}
