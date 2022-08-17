import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import "../css files/exploreAzure.css";

function ExploreAzure() {
  return (
    <div className="exploreAzure">
      <a href="https://azure.microsoft.com/en-us/solutions/covid-19/">
        <span>
          Explore Azure resources and tools to help you adapt, optimize, and
          thrive
        </span>
      </a>
      <MdKeyboardArrowRight className="arrow-right" />
    </div>
  );
}

export default ExploreAzure;
