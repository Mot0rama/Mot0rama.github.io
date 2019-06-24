import React from "react";
import "./css/ul-nav.css";
import { NavLink } from "react-router-dom";

export function Ulnav({ activeRoute }) {
  return (
    <ul className="flex-container">
      <li
        className="flex-item"
        // className={"flex-item" + (activeRoute === "portfolio" ? " active" : "")}
      >
        <NavLink to="/" activeClassName="active">
          {" "}
          Portfolio{" "}
        </NavLink>
      </li>
      <li
        className="flex-item"
        // className={"flex-item" + (activeRoute === "price" ? " active" : "")}
      >
        <NavLink to="/price" activeClassName="active">
          {" "}
          Price{" "}
        </NavLink>
      </li>
      <li
        className="flex-item"
        // className={"flex-item" + (activeRoute === "contacts" ? " active" : "")}
      >
        <NavLink to="/contacts" activeClassName="active">
          {" "}
          Contacts{" "}
        </NavLink>
      </li>
      {/* <li
        className="flex-item"
        // className={"flex-item" + (activeRoute === "contacts" ? " active" : "")}
      >
        <NavLink to="/album" activeClassName="active">
          {" "}
          Album{" "}
        </NavLink>
      </li> */}
    </ul>
  );
}
