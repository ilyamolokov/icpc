import React, { FunctionComponent, SetStateAction, useCallback, useEffect, useRef } from "react"

import "./Modal.module.css"

interface ModalProps {
  isModalOpen: boolean
  setIsModalOpen: React.Dispatch<SetStateAction<boolean>>
}

export const Modal: FunctionComponent<ModalProps> = ({ isModalOpen, setIsModalOpen }) => {
  const ref = useRef<HTMLDivElement>(null)

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsModalOpen(false)
    }
  }, [])

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [handleClickOutside])

  useEffect(() => {
    if (isModalOpen) {
      document.querySelector("#modal")?.classList.add("modalOpen")
      document.body.style.overflow = "hidden"
    } else {
      document.querySelector("#modal")?.classList.remove("modalOpen")
    }
    return () => {
      document.querySelector("#modal")?.classList.remove("modalOpen")
      document.body.style.overflow = "auto"
    }
  }, [isModalOpen])

  const teams = [
    { name: "Локомотив", id: 1 },
    { name: "Спартак", id: 2 },
    { name: "ЦСКА", id: 3 },
    { name: "Динамо", id: 4 },
    { name: "Зенит", id: 5 },
    { name: "Зенит", id: 6 },
    { name: "Зенит", id: 7 },
    { name: "Зенит", id: 8 },
    { name: "Зенит", id: 9 },
    { name: "Зенит", id: 10 },
    { name: "Зенит", id: 11 },
  ]

  return (
    <div className="modal" ref={ref} onClick={(e) => e.preventDefault()}>
      <div className="modalHeader">
        <p className="modalTitle">Выберите команду</p>
        <p className="exit" onClick={() => setIsModalOpen(false)}>
          x
        </p>
      </div>
      <div className="teams">
        {teams.map((team) => {
          return (
            <div className="team" key={team.id}>
              <span>{team.name}</span>
              <button className="buttonActive">Присоединиться</button>
            </div>
          )
        })}
      </div>
      {/* <p className="description">Вы уверены, что хотите удалить билет?</p>
            <div className="buttons">
                <button className="buttonYes" onClick={() => {}}>Да</button>
                <button className="buttonNo" onClick={() => setIsModalOpen(false)}>Нет</button>
            </div> */}
    </div>
  )
}
