import React from "react";
import { Navbars, Header, Brand, WhatGPT3, Features, Possibility, CTA, Blog, Footer, Article, Feature , Box} from "./components";
import "./App.css";
import { AiFillAndroid } from "react-icons/ai";

const App = () => (
  <div className="app">
    <div className="containers">
      <Navbars />
      <Header />
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
    </div>
    <Footer />
  </div>
);

export default App;
