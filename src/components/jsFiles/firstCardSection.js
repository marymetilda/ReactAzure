import React from "react";
import "../css files/firstCardSection.css"
import CardSection1 from "./cardSection1";
import CardSection2 from "./cardSection2";

function FirstCardSection() {
    return(
        <div className="firstCardSection">
           <CardSection1 />
           <CardSection2 />
        </div>
    )
}

export default FirstCardSection;