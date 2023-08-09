import * as React from "react"
import { FC, useEffect, useState } from "react"

import { TaskSpaceChat } from "./TaskSpaceChat"
import { MessageHandler, socket } from "../../sockets/socket"
import { useParams } from "react-router"

export const TaskSpaceChatContainer: FC = () => {
  const { alias } = useParams()

  const [messages, setMessages] = useState<string[]>([])

  const messageEventHandler: MessageHandler = ({ message }) => {
    setMessages(prevState => [...prevState, message])
  }

  const onSendMessage = (message: string) => {
    socket.sendMessage(message, alias)
  }

  useEffect(() => {
    socket.subscribeMessage(alias, messageEventHandler)
  }, [alias])

  return <TaskSpaceChat messages={messages} onSendMessage={onSendMessage} />
}
