import React from "react";
import ExploreAzure from "./exploreAzure";
import Banner from "./banner";
import Premises from "./premises";
import FirstCardSection from "./firstCardSection";
import New from "./new";
import YourIdeas from "./yourIdeas";
import Find from "./find";
import Accelerate from "./accelerate";
import Discover from "./discover";

function Body() {
  return (
    <div className="body">
      <ExploreAzure />
      <Banner />
      <Premises />
      <FirstCardSection />
      <New />
      <YourIdeas />
      <Find />
      <Accelerate />
      <Discover />
    </div>
  );
}

export default Body;
