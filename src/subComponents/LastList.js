import React from 'react'
import {LastlistItems} from "../components/jsFiles/constants/footerlastlist"

function LastList() {
  return (
    <ul className="footerLastList">
      {LastlistItems.map((LastItems) => {
       return (
        <li key={LastItems.id} className={`lastListItem lastItem${LastItems.id}`}>
          <span className="footerLastItems">{LastItems.item}</span>
      </li>
      );
    })
  }
    </ul>
  )
}

export default LastList
