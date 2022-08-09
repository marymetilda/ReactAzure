import React from "react";
import "../css files/yourIdeas.css"
import PopularSection from "../../subComponents/.popularSection";
import IdeasCardSection from "../../subComponents/ideasCardSection";
import IdeasImage from "../../subComponents/ideasImage";

function YourIdeas(){
    return (
        <div className="yourIdeas">
            <div className="headline">
                <span className="mainText ideas">Start putting your ideas into action with Azure products and services</span>
            </div>
            <div className="ideasSecondSection">
                 <div className="cardsAndTexts">
                <PopularSection />
                <IdeasCardSection />
                </div>
                <IdeasImage />
            </div>
        </div>
    )
}

export default YourIdeas