import React from "react";
import { Link } from "react-router-dom";
import "./css/Head.css";

export function Head() {
  return (
    <div className="head mid">
      <Link to="/home">
        <h2> Nastya Trubitsina </h2>
      </Link>
    </div>
  );
}
