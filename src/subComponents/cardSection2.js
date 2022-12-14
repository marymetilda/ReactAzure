import React, { Component } from "react";
import "../components/css files/cardSection2.css";

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
        <div className="cardCommon psudoCard">
          <img src="https://azurecomcdn.azureedge.net/cvt-34197be086e60dcac17aed601eac83f8c90a57b4da394df264c667cfd8d3d7f5/images/page/home/accelerate-customers-growth-mobile.webp" className="cardImage" alt="psudoImg" />
          <div className="cardTextSection">
            <span className="cardHeadline">Accelerate your customers' growth-and your own</span>
            <p></p>
          </div>
        </div>
        <div className="cardCommon firstCard">
          <img
            src="https://azurecomcdn.azureedge.net/cvt-f3473e70fd785159419fc0a92a7d821efcd1dbb882464b3ad7c37d7d4e3514bd/images/page/home/empower.webp"
            className="cardImage empower"
            alt="cardsection1"
          />
          <div className="cardTextSection">
            <span className="cardHeadline">{this.state.card1.headline}</span>
            <p>{this.state.card1.text}</p>
          </div>
        </div>
        <div className="cardCommon secondCard">
            <img src="https://azurecomcdn.azureedge.net/cvt-f3473e70fd785159419fc0a92a7d821efcd1dbb882464b3ad7c37d7d4e3514bd/images/page/home/expert-help.webp" className="cardImage getExpert" alt="cardsection2" />
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
