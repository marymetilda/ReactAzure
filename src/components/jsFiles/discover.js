import React from "react";
import DiscoverCard1 from "../../subComponents/discoverCard1";
import DiscoverCard2 from "../../subComponents/discoverCard2";
import "../css files/discover.css";

function Discover() {
  const cardImages = {
    directory:
      "https://azurecomcdn.azureedge.net/cvt-a7e0362205437bd001caa362ccfe82096680094b5b6a3e91ed7e46d8730853a2/images/page/home/news/active-directory.webp",
    microsoft:
      "https://azurecomcdn.azureedge.net/cvt-a7e0362205437bd001caa362ccfe82096680094b5b6a3e91ed7e46d8730853a2/images/page/home/news/purview.webp",
    innovate:
      "https://azurecomcdn.azureedge.net/cvt-a7e0362205437bd001caa362ccfe82096680094b5b6a3e91ed7e46d8730853a2/images/page/home/news/open-source.webp",
    arc: "https://azurecomcdn.azureedge.net/cvt-a7e0362205437bd001caa362ccfe82096680094b5b6a3e91ed7e46d8730853a2/images/page/home/news/azure-arc-596w.webp",
    beyond:
      "https://azurecomcdn.azureedge.net/cvt-a7e0362205437bd001caa362ccfe82096680094b5b6a3e91ed7e46d8730853a2/images/page/home/news/azure-regions-1250w.webp",
    sap: "https://azurecomcdn.azureedge.net/cvt-a7e0362205437bd001caa362ccfe82096680094b5b6a3e91ed7e46d8730853a2/images/page/home/news/sap.webp",
  };

  const cardHeadlines = {
    directory: "AZURE ACTIVE DIRECTORY",
    microsoft: "MICROSOFT PURVIEW",
    arc: "AZURE ARC",
    sap: "SAP ON AZURE",
  };

  const cardTexts = {
    directory:
      "Help protect your users and data with multicloud identity and access management.",
    microsoft:
      "Manage your data with a comprehensive solution for governance and compliance.",
    innovate:
      "Innovate faster and strengthen security with your favorite open-source tools, languages, and frameworks.",
    arc: "Build applications and run them across datacenters, at the edge, and in multicloud environments.",
    beyond:
      "Go beyond the limits of on-premises datacenters with more regions than any other provider.",
    sap: "Find new ways to bring the itelligence, security, and reliability of Azure to your SAP applications.",
  };

  return (
    <div className="discover">
      <div className="mainTitle">
        <span className="discoverHeadline">
          Discover what's happening on Azure
        </span>
      </div>

      <div className="discoverCardSection1">
        <div className="disCar1">
        <DiscoverCard1 
          cardImage={cardImages.directory}
          cardHeadline={cardHeadlines.directory}
          cardText={cardTexts.directory}
        />
        </div>

        <div className="disCar2">
        <DiscoverCard1 
          cardImage={cardImages.microsoft}
          cardHeadline={cardHeadlines.microsoft}
          cardText={cardTexts.microsoft}
        />
        </div>

      <div className="disCar3">
        <DiscoverCard2 
          BackgroundImage={cardImages.innovate}
          cardSpan={cardTexts.innovate}
        />
        </div>

      <div className="disCar4">
        <DiscoverCard1 
          cardImage={cardImages.arc}
          cardHeadline={cardHeadlines.arc}
          cardText={cardTexts.arc}
        />
        </div>

      <div className="disCar5">
        <DiscoverCard2 
          BackgroundImage={cardImages.beyond}
          cardSpan={cardTexts.beyond}
        />
        </div>

        <div className="disCar6">
        <DiscoverCard1 
          cardImage={cardImages.sap}
          cardHeadline={cardHeadlines.sap}
          cardText={cardTexts.sap}
        />
        </div>
      </div>
    </div>
  );
}

export default Discover;
