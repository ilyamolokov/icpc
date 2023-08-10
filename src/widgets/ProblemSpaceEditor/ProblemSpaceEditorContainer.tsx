import React, { FC, useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { api } from "../../api"
import { CodeHandler, socket } from "../../sockets"
import { ProblemSpaceEditor } from "./ProblemSpaceEditor"

export const ProblemSpaceEditorContainer: FC = () => {
  const { alias } = useParams()
  const [codeState, setCodeState] = useState<string>("")

  const sendCode = (code: string) => {
    const training_session_id = "c9b5c66e-e1d8-4579-9ab9-4fd2adc4b6db"
    api.postSubmissions(training_session_id, code, "python3_docker", "A")
  }

  const onCodeChange = (code: string) => {
    socket.sendCode({ code, problemAlias: alias })
  }
  const editorEventhandler: CodeHandler = ({ code }) => {
    setCodeState(code)
  }
  useEffect(() => {
    socket.subscribeEditor(alias, editorEventhandler)
  }, [alias])
  return <ProblemSpaceEditor onCodeChange={onCodeChange} codeState={codeState} sendCode={sendCode} />
}
