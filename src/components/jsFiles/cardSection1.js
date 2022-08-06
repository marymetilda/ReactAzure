import React, { Component } from "react";
import "../css files/cardSection1.css";


const names ={
    card1: 'cardSectionAccelerate',
}

class CardSection1 extends Component{

    
    
    state = {
        item1 : {
            headline: "Accelerate your customers' growth—and your own",
            text:"Get ready for new opportunites by migrating and modernizing appications, data, iranstructure, and workloads."
        }
    }
 render() {
    return( <div className={`card ${names.card1}`}>
      <div className="cards">
        <div className="cardText">
            <span>{this.state.item1.headline}</span>
            <p>{this.state.item1.text}</p>
        </div>
      </div>
    </div>
    )
}
}
export default CardSection1;
