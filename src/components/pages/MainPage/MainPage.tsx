import { Modal } from "../../Modal/Modal"
import "./MainPage.css"
import React, { useState } from "react"
import { createPortal } from "react-dom"

function MainPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div className="mainPage">
      <header className="header">
        <div className="logo"></div>
      </header>
      <div className="options">
        <div className="optionsContainer">
          <button className="option active" >
            Пробный контест
          </button>
          <button className="option">
            Архив соревнований
          </button>
          <button className="option">
            Настройки компиляторов
          </button>
          <button className="option">
            Значения ошибок
          </button>
          <button className="option">
            Команды
          </button>
          <button className="option" onClick={()=> setIsModalOpen(!isModalOpen)}>
            {`Командная тренировка (ICPC)`}
          </button>
          {isModalOpen && createPortal(<Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>, document.getElementById("modal")!)}
        </div>
      </div>
      <div className="content">
        <div className="contentContainer">
          <div className="titleContainer">
            <a className="title" href="/">
              Ознакомительный контест
            </a>
            <div className="contentStatus">
              <div className="firstLine">26 авг 2023, 23:00:00</div>
              <div className="secondLine">
                <span className="secondName">длительность:</span>
                02:00:00
              </div>
            </div>
            <button className="contentButton">Объявления жюри</button>
          </div>
          <div className="infoContainer">
            <span>Виртуальное соревнование идет, вы можете стартовать</span>
            <button className="buttonActive">Стартовать виртуальное соревнование</button>
          </div>
        </div>
      </div>
      <footer className="footer">
        <ul>
          <li>
            <a href="/">Справка</a>
          </li>
          <li>
            <a href="/">Обратная связь</a>
          </li>
          <li>
            <a href="/">Пользовательское соглашение</a>
          </li>
        </ul>
        <span>
          © 2013–2023 ООО «<a href="/">Яндекс</a>»
        </span>
      </footer>
    </div>
  )
}

export default MainPage
