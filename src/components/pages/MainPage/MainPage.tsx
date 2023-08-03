import React from "react"
import './MainPage.css';

function MainPage() {
  return (
    <div className="mainPage">
      <header className="header">
        <div className="logo"></div>
      </header>
      <div className="options">
        <div className="optionsContainer">
          <a className="optionActive" href="/">Пробный контест</a>
          <a className="option" href="/">Архив соревнований</a>
          <a className="option" href="/">Настройки компиляторов</a>
          <a className="option" href="/">Значения ошибок</a>
          <a className="option" href="/">Команды</a>
          <a className="option" href="/">Командная тренировка (ICPC)</a>
        </div>
      </div>
      <div className="content">
        <div className="contentContainer">
          <div className="titleContainer">
            <a className="title" href="/">Ознакомительный контест</a>
            <div className="contentStatus">
              <div className="firstLine">26 авг 2023, 23:00:00</div>
              <div className="secondLine">
                <span className="secondName">длительность:</span>
                02:00:00
              </div>
            </div>
            <button className="contentButton">
              Объявления жюри
            </button>
          </div>
          <div className="infoContainer">
            <span>
              Виртуальное соревнование идет, вы можете стартовать
            </span>
            <button className="buttonStart">Стартовать виртуальное соревнование</button>
          </div>
        </div>
      </div>
      <footer className="footer">
        <ul>
          <li><a href="/">Справка</a></li>
          <li><a href="/">Обратная связь</a></li>
          <li><a href="/">Пользовательское соглашение</a></li>
        </ul>
        <span>© 2013–2023  ООО «<a href="/">Яндекс</a>»</span>
      </footer>
    </div>
  )
}

export default MainPage
