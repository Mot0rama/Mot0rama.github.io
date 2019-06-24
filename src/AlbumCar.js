import React from "react";
import "./css/AlbumCar.css";

export function GalRow({ images = [], onClick }) {
  return (
    <ul className="GalRow flexy-container">
      {images.map((image, index) => (
        <li className="flexy-item" onClick={() => onClick(index)}>
          <img src={image.src} alt="" />
        </li>
      ))}
    </ul>
  );
}
