import React from "react";
import "./css/Album.css";

export function Album({ urls, number, onClick }) {
  return (
    <figure className="album-gal eye" onClick={() => onClick(number)}>
      <div className="gal-reponsive eye">
        <a>
          <img className="img-reponsive" src={urls} />
        </a>
      </div>
      <figcaption> {number} </figcaption>
    </figure>
  );
}
