import React from "react";
import "./lastCard.css";
import {LastCardItems} from "../components/jsFiles/constants/lastCardConstants";

function LastCard({}) {
  return (
    <>
    {LastCardItems.map((LastCardItem) => {
       return (
        <div key={LastCardItem.id} className="lastCard card" style={{backgroundColor: `${LastCardItem.bgc}`}}>
        <img
          className="lastCardIcon"
          src={LastCardItem.image}
          alt="lastCard"
        />
        <div className="lastCardTextSection">
          <span className="lastCardTitle">{LastCardItem.Span}</span>
          <p className="lastCardText">
            {LastCardItem.Text}
          </p>
        </div>
      </div>
      );
    })
  }
  </>
  );
}

export default LastCard;
