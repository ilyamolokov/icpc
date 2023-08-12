import React, { useEffect, useState } from "react"
import { Button } from "../../../../ui/Button/Button"
import styles from "./ControlButton.module.css"
import { useGetControlUserQuery, useGetYandexUserQuery } from "../../../../store/api/api"
import { ControlTakenHandler, socket } from "../../../../sockets"
import { trainingSessionId } from "../../../../constants/training-session-id"

export const ControlButton = () => {
    const { data: currentUser } = useGetYandexUserQuery()
    const { data: controlUser } = useGetControlUserQuery(trainingSessionId)

    const [isActive, setIsActive] = useState(controlUser.userId === currentUser.id)

    const controlTakenEventHandler: ControlTakenHandler = ({ userId }) => {
        setIsActive(userId === currentUser.id)
    }

    const onTakeControl = () => {
        console.log(currentUser.id)
        socket.sendControlTaken({ userId: currentUser.id })
    }

    useEffect(() => {
        return socket.subscribeControlTaken(controlTakenEventHandler)
    }, [])

    const controlButtonTitle = isActive ? "Вы управляющий" : "Взять управление"

    return <div>
        <Button
            className={styles.takeControlButton}
            title={controlButtonTitle}
            type="button"
            onClick={onTakeControl}
            disabled={isActive}
        />
    </div>
}







