import * as React from "react"
import { FC, useEffect, useState } from "react"

import { ProblemSpaceChat } from "./ProblemSpaceChat"
import { MessageHandler, socket } from "../../sockets"
import { useParams } from "react-router"

export const ProblemSpaceChatContainer: FC = () => {
  const { alias } = useParams()

  const [messages, setMessages] = useState<string[]>([])

  const messageEventHandler: MessageHandler = ({ message }) => {
    setMessages(prevState => [...prevState, message])
  }

  const onSendMessage = (message: string) => {
    socket.sendMessage({ message, problemAlias: alias })
  }

  useEffect(() => {
    socket.subscribeMessage(alias, messageEventHandler)
  }, [alias])

  return <ProblemSpaceChat messages={messages} onSendMessage={onSendMessage} />
}
