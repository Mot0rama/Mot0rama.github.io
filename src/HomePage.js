import React from "react";
import { Link } from "react-router-dom";
import "normalize.css";
import "./css/homepage.css";

export function HomePage() {
  return (
    <div className="home">
      <div className="home-flex">
        <div className="home-text home-flex-item">
          <div>
            <p>
              Каждый свой момент мы переживаем будто совершенно разные люди.
              Счастливые, печальные, вдохновленные, усталые, похудевшие или
              набравшие пару уютных килограммов, одинокие или влюбленные.
              Разные. И здорово, когда ты можешь вернуться к любому себе,
              вспомнить и улыбнуться. Именно это мне и нравится в съемке.
            </p>
          </div>
        </div>
        <div className="home-text home-flex-item part2">
          <br />
          <p>Что можно отразить момент.</p>
          <br />
        </div>
        <div className="home-text home-flex-item part2">
          <p>И этот момент останется навсегда.</p>
          <br />
        </div>
        <div className="home-flex-item button-potfolio">
          <Link to="/portfolio">
            <a>Portfolio</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
