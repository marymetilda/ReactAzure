import React from "react";
import ListItems from "./ListItems";
import {footerItems} from "../components/jsFiles/constants/footerListTitles";
import "./footerList.css";

function FooterList() {
  return (
    <div className="footerSecondSection">
      {footerItems.map((footer) => {
        return (
          <div>
            <span className="footerHeadlines">{footer.title}</span>
            <ListItems footItem={footer.links} />
          </div>
        );
      })}
    </div>
  );
}

export default FooterList;
