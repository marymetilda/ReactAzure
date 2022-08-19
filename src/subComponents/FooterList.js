import React from "react";
import ListItems from "./ListItems";
import {footerItems} from "../components/jsFiles/constants/footerListTitles";
import {HiOutlinePlusSm} from "react-icons/hi"
import "./footerList.css";

function FooterList() {
  return (
    <div className="footerSecondSection">
      {footerItems.map((footer) => {
        return (
          <div className="footHeadSection">
            <span className="footerHeadlines">{footer.title}</span>
            <ListItems footItem={footer.links} />
            <div className="plusSign"><HiOutlinePlusSm /></div>
          </div>
        );
      })}
    </div>
  );
}

export default FooterList;
