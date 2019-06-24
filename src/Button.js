import React from "react";
import "./css/Button.css";

export function TopButton() {
  function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return <button className="top" onClick={scrollTop} />;
}
