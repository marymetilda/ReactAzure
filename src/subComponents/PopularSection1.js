import React from "react";
import "../components/css files/popularSection.css";
import { MdArrowForwardIos } from "react-icons/md";
import Li from "./li";

function PopularSection1() {
  const listItem1 = [
    "AI + machine learning",
    "Compute",
    "Containers",
    "Hybrid + multicloud",
    "Internet of Things(IoT)",
  ];
  return (
    <div className="popularSec">
      <ol className="">
        <div className="card popCard">
        <Li listItem={listItem1[0]} />
        </div>
        <div className="card popCard">
        <Li listItem={listItem1[1]} />
        </div>
        <div className="card popCard">
        <Li listItem={listItem1[2]} />
        </div>
        <div className="card popCard">
        <Li listItem={listItem1[3]} />
        </div>
        <div className="card popCard">
        <Li listItem={listItem1[4]} />
        </div>
        <li>
          <button className="allProduct">
            <span className="allProducts"> See all products(200+)</span>
            <MdArrowForwardIos className="arrowProduct" />
          </button>
        </li>
      </ol>
    </div>
  );
}

export default PopularSection1;
