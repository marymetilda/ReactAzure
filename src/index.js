import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Nav from "./components/nav";
import Body from "./components/body";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div>
        <Nav />
        <Body />
    </div>
);