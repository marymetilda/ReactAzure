import React from "react";
import "../css files/banner.css";
import BannerButtons from "./buttons";

function Banner() {
  return (
    <div>
      <div className="intro">
        <div className="introTextSection">
          <div className="headline">
            <span>AZURE. INVENT WITH PURPOSE.</span>
          </div>
          <div className="mainHeadline">
            <span>Security that supports innovation</span>
          </div>
          <div className="bannerText">
            <p>
              Create bold new apps using solutions for layering security into
              every phase of development. Get started now with pay-as-you-go
              pricing. There's no upfront commitment—cancel anytime. Or try
              Azure free for up to 30 days.
            </p>
          </div>
          <BannerButtons />
        </div>
      </div>
    </div>
  );
}

export default Banner;
