import React from "react";
import "../css files/yourIdeas.css"
import PopularSection from "./.popularSection";
import IdeasCardSection from "./ideasCardSection";
import IdeasImage from "./ideasImage";

function YourIdeas(){
    return (
        <div className="yourIdeas">
            <div className="headline">
                <span className="mainText ideas">Start putting your ideas into action with Azure products and services</span>
            </div>
            <div className="ideasSecondSection">
                <PopularSection />
                <IdeasCardSection />
                <IdeasImage />
            </div>
        </div>
    )
}

export default YourIdeas