import React from "react";
import "./explore.css";

function Explore() {
  return (
    <body>
      <div className="firstLine">
        <span>Explore Azure</span>
      </div>
      <div className="secondSection">
        <div className="secondSection1">
          <div className="toKnow">
            <span className="exploreHeadline">Get to know Azure</span>
            <p className="exploreText">
              Discover secure, future-ready cloud solutions—on-premises, <br />
              hybrid, multicloud, or at the edge
            </p>
          </div>
          <div className="global">
            <span className="exploreHeadline">Global infrastructure</span>
            <p className="exploreText">
              Learn about sustainable, trusred cloud infrastructure with more
              <br />
              regions than any other provider
            </p>
          </div>
          <div className="economics">
            <span className="exploreHeadline">Cloud economics</span>
            <p className="exploreText">
              Build your business case for the cloud with key financial and
              <br />
              technical guidance from Azure
            </p>
          </div>
        </div>
        <div className="secondSection2">
          <div className="enablement">
            <span className="exploreHeadline">Customer enablement</span>
            <p className="exploreText">
              Plan a clear path forward for your cloud journey with prover
              <br />
              tools, guidance, and resources
            </p>
          </div>
          <div className="stories">
            <span className="exploreHeadline">Customer stories</span>
            <p className="exploreText">
              See examples of innovaion from successful companies of all <br />
              sizes and from all industries
            </p>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Explore;