import React from "react";
import "./lastCard.css";

function LastCard(props) {
  return (
    <div className="lastCard card">
      <img
        className="lastCardIcon"
        src={props.image}
        alt="lastCard"
      />
      <div className="lastCardTextSection">
        <span className="lastCardTitle">{props.span}</span>
        <p className="lastCardText">
          {props.text}
        </p>
      </div>
    </div>
  );
}

export default LastCard;
