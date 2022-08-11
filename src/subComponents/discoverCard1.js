import React from "react";
import "./discoverCard1.css";

function DiscoverCard1(props) {
  return (
    <>
    <div className="disCard">
      <img
        src={props.cardImage} class="disCardImage"
        alt="discoverCard"
      />
      <div class="disCardService">
        <h4 class="disCardHeadline">{props.cardHeadline}</h4>
        <span class="disCardText">{props.cardText}</span>
      </div>
    </div>
    </>
  );
}

export default DiscoverCard1;
