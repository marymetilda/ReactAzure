import React, {Component} from "react";
import "../css files/card.css";

 
function Card(props) {
        return(
            <div className="card card2">
                <div className="cardSec1">
                <img src={props.img} />
                <p>{props.text}</p>
                </div>
                <span>{props.spanText}</span>
            </div>
        )
    }


export default Card;