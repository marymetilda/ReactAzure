import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Nav from "./components/jsFiles/nav";
import Body from "./components/jsFiles/body";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Nav />
    <Body />
  </div>
);
