import React from "react";
import "./css/Card.css";

export function Card({ children, img, head, price }) {
  return (
    <div className="card">
      <div>
        <img src={img} />
        <p class="text">{head}</p>
      </div>
      <div className="center-text">{children}</div>
      <p className="rub">{price}</p>
    </div>
  );
}
