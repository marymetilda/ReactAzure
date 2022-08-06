import React, { Component } from "react";
import "../css files/cardSection2.css";

class CardSection2 extends Component {
  state = {
    card1: {
      headline: "Empower your devs with DevSecOps",
      text: "Give your devs the tools they need to create and deliver highly secure, innovative apps quickly and collaboratively.",
    },
    card2: {
      headline: "Get expert help migrating and modernizing",
      text: "Confidently set up your cloud environment with help from the Azure Migration and Modernization Program.",
    },
  };

  render() {
    return (
      <div className="cardSection2">
        <div className="firstCard">
          <img
            src="https://azurecomcdn.azureedge.net/cvt-f3473e70fd785159419fc0a92a7d821efcd1dbb882464b3ad7c37d7d4e3514bd/images/page/home/empower.webp"
            className="cardImage empower"
          />
          <div className="cardTextSection">
            <span className="cardHeadline">{this.state.card1.headline}</span>
            <p>{this.state.card1.text}</p>
          </div>
        </div>
        <div className="secondCard">
            <img src="https://azurecomcdn.azureedge.net/cvt-f3473e70fd785159419fc0a92a7d821efcd1dbb882464b3ad7c37d7d4e3514bd/images/page/home/expert-help.webp" className="cardImage getExpert" />
            <div className="cardTextSection">
                <span className="cardHeadline">{this.state.card2.headline}</span>
                <p>{this.state.card2.text}</p>
            </div>
        </div>
      </div>
    );
  }
}

export default CardSection2;
