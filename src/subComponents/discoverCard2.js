import React from "react";
import "./discoverCard2.css";

function DiscoverCard2(props){



    return(
        <div className="imageCard card" style={`background-image: url(${props.BackgroundImage})`}>
            <span>hello</span>
        </div>
    )
}

export default DiscoverCard2;