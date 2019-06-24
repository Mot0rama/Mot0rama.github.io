import React from "react";
import ReactDOM from "react-dom";
import "./css/styles.css";
import { Head } from "./Head";
import { Bady } from "./Bady";
import { Block1 } from "./Block1";
import { Block2 } from "./Block2";
import { Block3 } from "./Block3";
import { Block4 } from "./Block4";
import { Ulnav } from "./ul-nav";
import { Footer } from "./Footer";
import { Contacts } from "./Contacts";
import "normalize.css";
import { PhotoGallery } from "./PhotoGallery";
import { HashRouter, Route } from "react-router-dom";
import { GalPage } from "./GalPage";
import { PricePage } from "./PricePage";

function App() {
  return (
    <HashRouter>
      <Bady>
        <Block1>
          <Head />
        </Block1>
        <Block2>
          <Ulnav />
        </Block2>
        <Block3>
          <Route exact path="/" component={GalPage} />
          <Route path="/price" component={PricePage} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/album/:album" component={PhotoGallery} />
        </Block3>
        <Block4>
          <Footer />
        </Block4>
      </Bady>
    </HashRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
