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
          <img
            className="cont-img"
            src="https://i.ibb.co/6BMMGxz/Foto-cont.png"
          />
        </div>

        <div className="cont-text cont-flex-item">
          <div className="center">
            <p>Proin eget condimentum dui</p> <br />
          </div>

          <div>
            <p>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Vestibulum orci ipsum, rhoncus ac pharetra
              nec, sollicitudin vitae tortor. Phasellus eu diam id massa porta
              vulputate. Maecenas ultrices tincidunt purus sit amet tempus.
              Pellentesque mollis congue lacinia.
            </p>{" "}
            <br />
          </div>

          <div className="cont-flex-item">
            <div className="num">
              <div>
                <p> nastyay@hmail.com </p>
              </div>
              <div>||</div>
              <div>
                <p> +7 (126) 245 45 88 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
