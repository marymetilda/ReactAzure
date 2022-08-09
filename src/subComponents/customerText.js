import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function CustomerText(props) {
  return (
    <div className="custText">
      <p className="textBody">
       {props.custTxt}
      </p>
      <button className="caseButton">
        <span>Case study</span> <MdOutlineKeyboardArrowRight className="custArrow" />
      </button>
    </div>
  );
}

export default CustomerText;
