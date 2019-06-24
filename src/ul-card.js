import React from "react";
import "./css/ul-card.css";

export function Ulcard({ items = [] }) {
  return (
    <ul className="card-ul">
      {items.map(item => (
        <li className="card-li">{item}</li>
      ))}
    </ul>
  );
}
