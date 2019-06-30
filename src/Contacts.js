import React from "react";
import "./css/Contacts.css";
import { Block2 } from "./Block2";
import { Block3 } from "./Block3";
import { Ulnav } from "./ul-nav";

export function Contacts() {
  return (
    <div className="cont">
      <div className="cont-flex">
        <div className="cont-flex-item">
          <img className="cont-img" src="social/cont.jpg" />
        </div>

        <div className="cont-text cont-flex-item">
          <div>
            <p>
              Связаться со мной можно любым удобным для вас способом! Вы можете
              позвонить, оставить сообщение в любом мессенджере или на
              электронной почте, а так же найти меня в соцсетях.
            </p>{" "}
            <br />
          </div>

          <div className="cont-flex-item">
            <div className="num">
              <div>
                <p> atrubicina9@gmail.com </p>
              </div>
              <div>||</div>
              <div>
                <p> +7 (977) 610 89 69 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
