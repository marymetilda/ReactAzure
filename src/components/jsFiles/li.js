import React from "react";
import "../css files/li.css"

function Li(props){
    return(
        <div className="listItem">
            <li><button className="tabs">{props.listItem}</button></li>
        </div>
    )
}

export default Li;