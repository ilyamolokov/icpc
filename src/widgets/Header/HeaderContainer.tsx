import * as React from "react"
import { FC, useEffect, useState } from "react"

import { Header } from "./Header"
import { ControlTakenHandler, socket } from "../../sockets"
import { useGetYandexUserQuery } from "../../store/api/user.api"

export const HeaderContainer: FC = () => {
  const { data: user } = useGetYandexUserQuery()

  const [isControlTaken, setIsControlTaken] = useState<boolean>(false)

  const controlTakenHandler: ControlTakenHandler = ({ userId }) => {
    setIsControlTaken(userId === user.id)
  }

  const onTakeControl = () => {
    socket.sendControlTaken({ userId: user.id })
  }

  useEffect(() => {
    return socket.subscribeControlTaken(controlTakenHandler)
  }, [isControlTaken])

  return <Header onTakeControl={onTakeControl} isControlTaken={isControlTaken} />
}
