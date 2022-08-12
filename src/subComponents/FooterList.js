import React from "react";
import ListItems from "./ListItems";
import {
  footerItems,
  FooterListitem1,
  FooterListitem2,
} from "../components/jsFiles/constants/footerListTitles";

function FooterList() {
  const title1 = { one: "Explore Azure", two: "Products and pricing" };
  return (
    <div style={{ display: "flex" }}>
      {/* <div>
      <span>{title1.one}</span>
      <div>
     <ListItems 
     footItem={FooterListitem1}/>
     </div>
    </div> */}
      {/* <div>
      <span>{title1.two}</span>
      <div>
        <ListItems 
        footItem={FooterListitem2}/>
      </div>
    </div> */}
      {footerItems.map((footer) => {
        return (
          <div style={{ padding: '10px'}}>
            <span style={{fontSize: '18px', fontWeight: '600'}}>{footer.title}</span>
            <ListItems footItem={footer.links} />
          </div>
        );
      })}
    </div>
  );
}

export default FooterList;
