import React from "react";
import ExploreAzure from "./exploreAzure";
import Banner from "./banner";
import Premises from "./premises";
import CardSection1 from "./cardSection1";

function Body() {
    return (
        <div className="body">
           <ExploreAzure />
           <Banner />
           <Premises />
           <CardSection1 />
        </div>
    );
}

export default Body;