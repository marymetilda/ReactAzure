import React from "react";
import ExploreAzure from "./exploreAzure";
import Banner from "./banner";
import Premises from "./premises";
import FirstCardSection from "./firstCardSection";
import New from "./new";
import YourIdeas from "./yourIdeas";

function Body() {
    return (
        <div className="body">
           <ExploreAzure />
           <Banner />
           <Premises />
           <FirstCardSection />
           <New />
           <YourIdeas />
        </div>
    );
}

export default Body;