import React from "react";
import {MdKeyboardArrowDown} from "react-icons/md";
import "./navItem.css";

function NavItem() {
  return (
    <>
      <div className="items navExplore">
        <span className="navItem explore">Explore </span>
        <MdKeyboardArrowDown className="arrow" />
      </div>
      <div className="items navProducts">
        <span className="navItem products">Products </span>
        <MdKeyboardArrowDown className="arrow" />
      </div>
      <div className="items navSolutions">
        <span className="navItem solutions">Solutions </span>
        <MdKeyboardArrowDown  className="arrow" />
      </div>
      <div className="items navPricing">
        <span className="navItem pricing">Pricing </span>
        <MdKeyboardArrowDown  className="arrow" />
      </div>
      <div className="items navPartners">
        <span className="navItem partners">Partners </span>
        <MdKeyboardArrowDown  className="arrow" />
      </div>
      <div className="items navResources">
        <span className="navItem resources">Resources </span>
        <MdKeyboardArrowDown  className="arrow" />
      </div>
    </>
  );
}

export default NavItem;
