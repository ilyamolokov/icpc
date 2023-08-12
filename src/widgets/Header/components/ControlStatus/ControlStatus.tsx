import React, { useEffect, useState } from "react"
import { FC } from "react"
import { getAvatarUrl } from "../../../../helpers/getAvatarUrl"
import { YandexUser } from "../../../../types/types"
import { ControlTakenHandler, socket } from "../../../../sockets"
import { api } from "../../../../api"
import { KeyboardOn } from "../../../../ui/icons/KeyboardOn"
import { KeyboardOff } from "../../../../ui/icons/KeyboardOff"
import { useGetControlUserQuery } from "../../../../store/api/api"
import { trainingSessionId } from "../../../../constants/training-session-id"

interface ControlStatusProps {
    id: string
}

export const ControlStatus: FC<ControlStatusProps> = ({ id }) => {
    const { data:controlUser } = useGetControlUserQuery(trainingSessionId)
    const [isActive, setIsActive] = useState(controlUser.userId === id)

    const controlTakenEventHandler: ControlTakenHandler = ({ userId }) => {
        setIsActive(userId === id)
    }

    useEffect(() => {
        return socket.subscribeControlTaken(controlTakenEventHandler)
    }, [])

    return isActive
        ? <KeyboardOn color="var(--color-black-typo-primary)" width={32} height={32} />
        : <KeyboardOff color="var(--color-black-typo-primary)" width={32} height={32} />

}
