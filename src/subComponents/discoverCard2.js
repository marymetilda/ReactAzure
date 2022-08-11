import React from "react";
import "./discoverCard2.css";

function DiscoverCard2(props){

    return(
       <>
        <div className="imageCard card" style={{  backgroundImage: `url(${props.BackgroundImage})` }}>
        <div className="innoCardTextSection">
        <span className="cardSpan2">{props.cardSpan}</span>
        </div>
        </div>
        </>
        
    );
}

export default DiscoverCard2;