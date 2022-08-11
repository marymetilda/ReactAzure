import React from "react";
import "../components/css files/card.css";

 
function Card(props) {
        return(
            <div className="card card2">
                <div className="cardSec1">
                <img src={props.img} alt="card" />
                <p>{props.text}</p>
                </div>
                <span className="cardSpan">{props.spanText}</span>
            </div>
        )
    }


export default Card;