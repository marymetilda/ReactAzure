import React from "react";
import "../css files/Find.css";
import CustomerIcon from "../../subComponents/customerIcon";
import CustomerImages from "../../subComponents/customerImages";
import CustomerText from "../../subComponents/customerText";

function Find() {
  const custIcon = {
    forza:
      "https://azurecomcdn.azureedge.net/cvt-a7e0362205437bd001caa362ccfe82096680094b5b6a3e91ed7e46d8730853a2/images/page/home/customer-tabs/forza5-logo.svg",
    NHS: "https://azurecomcdn.azureedge.net/cvt-a7e0362205437bd001caa362ccfe82096680094b5b6a3e91ed7e46d8730853a2/images/page/home/customer-tabs/nhs-logo.svg",
    NBA: "https://azurecomcdn.azureedge.net/cvt-a7e0362205437bd001caa362ccfe82096680094b5b6a3e91ed7e46d8730853a2/images/page/home/customer-tabs/nba-logo.svg",
    ACS: "https://azurecomcdn.azureedge.net/cvt-a7e0362205437bd001caa362ccfe82096680094b5b6a3e91ed7e46d8730853a2/images/page/home/customer-tabs/acs-logo.svg",
    pepsi:
      "https://azurecomcdn.azureedge.net/cvt-a7e0362205437bd001caa362ccfe82096680094b5b6a3e91ed7e46d8730853a2/images/page/home/customer-tabs/pepsico-logo.svg",
    gel: "https://azurecomcdn.azureedge.net/cvt-a7e0362205437bd001caa362ccfe82096680094b5b6a3e91ed7e46d8730853a2/images/page/home/customer-tabs/ge-logo.svg",
  };

  const custImg = {
    forza:
      "https://azurecomcdn.azureedge.net/cvt-a7e0362205437bd001caa362ccfe82096680094b5b6a3e91ed7e46d8730853a2/images/page/home/customer-tabs/forza5-desktop.webp",
    NHS: "https://azurecomcdn.azureedge.net/cvt-a7e0362205437bd001caa362ccfe82096680094b5b6a3e91ed7e46d8730853a2/images/page/home/customer-tabs/nhs-desktop.webp",
    NBA: "https://azurecomcdn.azureedge.net/cvt-a7e0362205437bd001caa362ccfe82096680094b5b6a3e91ed7e46d8730853a2/images/page/home/customer-tabs/nba-desktop.webp",
    ACS: "https://azurecomcdn.azureedge.net/cvt-a7e0362205437bd001caa362ccfe82096680094b5b6a3e91ed7e46d8730853a2/images/page/home/customer-tabs/acs-desktop.webp",
    pepsi:
      "https://azurecomcdn.azureedge.net/cvt-a7e0362205437bd001caa362ccfe82096680094b5b6a3e91ed7e46d8730853a2/images/page/home/customer-tabs/pepsico-desktop.webp",
    gel: "https://azurecomcdn.azureedge.net/cvt-a7e0362205437bd001caa362ccfe82096680094b5b6a3e91ed7e46d8730853a2/images/page/home/customer-tabs/ge-desktop.webp",
  };

  const custText = {
    forza:
      " Turn 10 Studios created a turbocharged gaming architecture for Forza Horizon 5 using Azure Kubernetes Service (AKS) and other Azure services.",
    NHS: "Northumbria Healthcare NHS Foundation Trust is helping patients understand surgical risks with personalized profiles created with Azure Machine Learning and the Responsible AI Dashboard.",
    NBA: "To expand the possibilities for innovative fan experiences and streamline day-to-day operations, the NBA migrated its SAP solutions and other IT resources to Azure.",
    ACS: "American Cancer Society kept resources flowing to patients and researchers during the global pandemic by trasitioning their infrastructure to Azure.",
    pepsi:
      "PepsiCo uses Azure Machine Learning to identify cosumer shopping trends and provide actionable, store-level insights.",
    gel: "GE Digital helps pilots make the skies safer with data and analytics provided through its FlightPulse app—built using the open-source.NET platform.",
  };

  return (
    <div class="innovationSection">
      <div class="title">
        <h2>Find out how these customers are innovating with Azure</h2>
      </div>
      <div class="costomerIcons">
        <CustomerIcon
          divName="custButtonSecActive"
          buttonClass="custButtonActive"
          cust="forza"
          custIcon={custIcon.forza}
        />
        <CustomerIcon
          divName="custButtonSec"
          buttonClass="custButton"
          cust="NHS"
          custIcon={custIcon.NHS}
        />
        <CustomerIcon
          divName="custButtonSec"
          buttonClass="custButton"
          cust="NBA"
          custIcon={custIcon.NBA}
        />
        <CustomerIcon
          divName="custButtonSec"
          buttonClass="custButton"
          cust="ACS"
          custIcon={custIcon.ACS}
        />
        <CustomerIcon
          divName="custButtonSec"
          buttonClass="custButton"
          cust="pepsi"
          custIcon={custIcon.pepsi}
        />
        <CustomerIcon
          divName="custButtonSec"
          buttonClass="custButton"
          cust="gel"
          custIcon={custIcon.gel}
        />
      </div>
      <div className="customerImages">
        <CustomerImages
          imageName="custImageActive"
          customerImg={custImg.forza}
        />
        <CustomerImages imageName="custImage" customerImg={custImg.NHS} />
        <CustomerImages imageName="custImage" customerImg={custImg.NBA} />
        <CustomerImages imageName="custImage" customerImg={custImg.ACS} />
        <CustomerImages imageName="custImage" customerImg={custImg.pepsi} />
        <CustomerImages imageName="custImage" customerImg={custImg.gel} />
        <div className="customerTextActive">
          <CustomerText custTxt={custText.forza} />
        </div>
        <div className="customerText">
          <CustomerText custTxt={custText.NHS} />
        </div>
        <div className="customerText">
          <CustomerText custTxt={custText.NBA} />
        </div>
        <div className="customerText">
          <CustomerText custTxt={custText.ACS} />
        </div>
        <div className="customerText">
          <CustomerText custTxt={custText.pepsi} />
        </div>
        <div className="customerText">
          <CustomerText custTxt={custText.gel} />
        </div>
      </div>
    </div>
  );
}

export default Find;
