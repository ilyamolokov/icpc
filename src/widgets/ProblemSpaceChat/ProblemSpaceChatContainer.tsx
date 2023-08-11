import * as React from "react"
import { FC, useEffect, useState } from "react"
import { useParams } from "react-router"

import { api } from "../../api"
import { MessageHandler, socket } from "../../sockets"
import { Message } from "../../types/types"
import { ProblemSpaceChat } from "./ProblemSpaceChat"

export const ProblemSpaceChatContainer: FC = () => {
  const { alias } = useParams()

  const [messages, setMessages] = useState<Message[]>([])

  const messageEventHandler: MessageHandler = ({ content, userLogin }) => {
    setMessages((prevState) => [...prevState, { content, userLogin }])
  }

  const onSendMessage = (message: string) => {
    api.postMessage("c9b5c66e-e1d8-4579-9ab9-4fd2adc4b6db", alias, message)
      .then(console.log)
      .catch(console.log)
  }

  useEffect(() => {
    socket.subscribeMessage(messageEventHandler)
  }, [alias])

  return <ProblemSpaceChat messages={messages} onSendMessage={onSendMessage} />
}
