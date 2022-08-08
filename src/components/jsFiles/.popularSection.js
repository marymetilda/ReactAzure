import React from "react";
import "../css files/popularSection.css";
import { MdArrowForwardIos } from "react-icons/md";
import Li from "./li";

function PopularSection() {
  const listItem1 = [
    "AI + machine learning",
    "Compute",
    "Containers",
    "Hybrid + multicloud",
    "Internet of Things(IoT)",
  ];
  return (
    <div className="popularSection">
      <ol>
        <li>
          <button className="popular">Popular</button>
        </li>
        <Li listItem={listItem1[0]} />
        <Li listItem={listItem1[1]} />
        <Li listItem={listItem1[2]} />
        <Li listItem={listItem1[3]} />
        <Li listItem={listItem1[4]} />
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

export default PopularSection;
