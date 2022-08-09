import React from "react";
import "../components/css files/Find.css";

function CustomerIcon(props) {
  return (
    <div className={props.divName}>
      <button class={props.buttonClass}>
        <img src={props.custIcon} class={props.cust} />
      </button>
    </div>
  );
}

export default CustomerIcon;
