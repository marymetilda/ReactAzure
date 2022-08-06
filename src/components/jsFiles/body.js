import React from "react";
import ExploreAzure from "./exploreAzure";
import Banner from "./banner";
import Premises from "./premises";
import FirstCardSection from "./firstCardSection";

function Body() {
    return (
        <div className="body">
           <ExploreAzure />
           <Banner />
           <Premises />
           <FirstCardSection />
        </div>
    );
}

export default Body;