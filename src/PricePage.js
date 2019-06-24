import React from "react";
import ReactDOM from "react-dom";
import { Ulcard } from "./ul-card";
import { Card } from "./Card";
import { Price } from "./Price";
import "normalize.css";
import "./css/styles.css";
import { Block2 } from "./Block2";
import { Block3 } from "./Block3";
import { Ulnav } from "./ul-nav";

export function PricePage() {
  return (
    <Price>
      <Card
        img={"https://i.ibb.co/Q65pk9z/Foto1.png"}
        head={"Curabitur quam leo"}
        price={"1000 rub"}
      >
        <Ulcard
          items={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
            "Etiam blandit arcu eget sapien ullamcorper cursus.",
            "Pellentesque vel ante id urna consectetur porta congue efficitur metus.",
            "Mauris at nisi vel felis fringilla ornare."
          ]}
        />
      </Card>

      <Card
        img={"https://i.ibb.co/2FtL6dP/Foto2.png"}
        head={"Nulla id ipsum ex"}
        price={"1000 rub"}
      >
        <Ulcard
          items={[
            "Vestibulum in lorem in massa eleifend blandit. ",
            "Integer et ligula id est bibendum imperdiet."
          ]}
        />
      </Card>

      <Card
        img={"https://i.ibb.co/0FkwDSf/Foto3.png"}
        head={"Mauris fermentum"}
        price={"1000 rub"}
      >
        <Ulcard
          items={[
            "Quisque id libero porta, finibus risus at, vestibulum dolor. ",
            "Pellentesque eget erat interdum, venenatis sapien non, lacinia diam.",
            "Donec viverra nisl nec augue iaculis, ut iaculis metus dignissim."
          ]}
        />
      </Card>
    </Price>
  );
}
