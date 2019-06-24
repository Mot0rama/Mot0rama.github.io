import React from "react";
import { Album } from "./Album";
import { Gal } from "./Gal";
import "normalize.css";
import "./css/styles.css";

export function GalPage(props) {
  function to(album) {
    props.history.push("/album/" + album);
  }
  return (
    <Gal>
      <Album
        urls={"/main/001.jpg"}
        number={"001"}
        onClick={to}
      />
      <Album
        urls={"/main/002.jpg"}
        number={"002"}
        onClick={to}
      />
      <Album
        urls={"/main/003.jpg"}
        number={"003"}
        onClick={to}
      />
      <Album
        urls={"/main/004.jpg"}
        number={"004"}
        onClick={to}
      />
      <Album
        urls={"/main/005.jpg"}
        number={"005"}
        onClick={to}
      />
      <Album
        urls={"/main/006.jpg"}
        number={"006"}
        onClick={to}
      />
      <Album
        urls={"/main/007.jpg"}
        number={"007"}
        onClick={to}
      />
      <Album
        urls={"/main/008.jpg"}
        number={"008"}
        onClick={to}
      />
      <Album
        urls={"/main/009.jpg"}
        number={"009"}
        onClick={to}
      />
      <Album
        urls={"/main/010.jpg"}
        number={"010"}
        onClick={to}
      />
      <Album
        urls={"/main/011.jpg"}
        number={"011"}
        onClick={to}
      />
      <Album
        urls={"/main/012.jpg"}
        number={"012"}
        onClick={to}
      />
      <Album
        urls={"/main/013.jpg"}
        number={"013"}
        onClick={to}
      />
      <Album
        urls={"/main/014.jpg"}
        number={"014"}
        onClick={to}
      />
      <Album
        urls={"/main/015.jpg"}
        number={"015"}
        onClick={to}
      />
      <Album
        urls={"/main/016.jpg"}
        number={"016"}
        onClick={to}
      />
      <Album
        urls={"/main/017.jpg"}
        number={"017"}
        onClick={to}
      />
      <Album
        urls={"/main/018.jpg"}
        number={"018"}
        onClick={to}
      />
    </Gal>
  );
}
