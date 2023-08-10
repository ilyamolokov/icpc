import React, {useEffect, useRef, useState} from "react"
import { FC } from "react"

import { ProblemSpaceEditor } from "./ProblemSpaceEditor"
import { useParams } from "react-router-dom";
import { CodeHandler, socket } from "../../sockets"

export const ProblemSpaceEditorContainer: FC = () => {
  const { alias } = useParams()
  const [codeState, setCodeState] = useState<string>('');

  const onCodeChange = (code:string) => {
      socket.sendCode({ code, problemAlias: alias })
  }
  const editorEventhandler: CodeHandler = ({code}) => {
    setCodeState(code)
  }
  useEffect(() => {
    socket.subscribeEditor(alias, editorEventhandler)
  }, [alias])
  return <ProblemSpaceEditor onCodeChange={onCodeChange} codeState={codeState}/>
}
