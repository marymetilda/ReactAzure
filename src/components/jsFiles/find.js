import React from "react";
import "../css files/Find.css";
import CustomerIcon from "../../subComponents/customerIcon";
import CustomerImages from "../../subComponents/customerImages";
import CustomerText from "../../subComponents/customerText";
import {CustIcon, CustImg,CustText} from "./constants/findConstants";
import Dots from "./Dots";

function Find() {


  return (
    <div class="innovationSection">
      <div class="titleInnovation">
        <h2>Find out how these customers are innovating with Azure</h2>
      </div>
      <div class="costomerIcons">
        <CustomerIcon
          divName="custButtonSecActive"
          buttonClass="custButtonActive"
          cust="forza"
          custIcon={CustIcon.forza}
        />
        <CustomerIcon
          divName="custButtonSec"
          buttonClass="custButton"
          cust="NHS"
          custIcon={CustIcon.NHS}
        />
        <CustomerIcon
          divName="custButtonSec"
          buttonClass="custButton"
          cust="NBA"
          custIcon={CustIcon.NBA}
        />
        <CustomerIcon
          divName="custButtonSec"
          buttonClass="custButton"
          cust="ACS"
          custIcon={CustIcon.ACS}
        />
        <CustomerIcon
          divName="custButtonSec"
          buttonClass="custButton"
          cust="pepsi"
          custIcon={CustIcon.pepsi}
        />
        <CustomerIcon
          divName="custButtonSec"
          buttonClass="custButton"
          cust="gel"
          custIcon={CustIcon.gel}
        />
      </div>
      <div className="customerImages">
        <CustomerImages
          imageName="custImageActive"
          customerImg={CustImg.forza}
        />
        <CustomerImages imageName="custImage" customerImg={CustImg.NHS} />
        <CustomerImages imageName="custImage" customerImg={CustImg.NBA} />
        <CustomerImages imageName="custImage" customerImg={CustImg.ACS} />
        <CustomerImages imageName="custImage" customerImg={CustImg.pepsi} />
        <CustomerImages imageName="custImage" customerImg={CustImg.gel} />
        <div className="customerTextActive">
          <CustomerText custTxt={CustText.forza} />
        </div>
        <div className="customerText">
          <CustomerText custTxt={CustText.NHS} />
        </div>
        <div className="customerText">
          <CustomerText custTxt={CustText.NBA} />
        </div>
        <div className="customerText">
          <CustomerText custTxt={CustText.ACS} />
        </div>
        <div className="customerText">
          <CustomerText custTxt={CustText.pepsi} />
        </div>
        <div className="customerText">
          <CustomerText custTxt={CustText.gel} />
        </div>
      </div>
      <div className="dotSection">
        <Dots />
      </div>
    </div>
  );
}

export default Find;
