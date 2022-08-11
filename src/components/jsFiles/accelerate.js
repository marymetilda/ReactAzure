import React from "react";
import "../css files/accelerate.css"

function Accelerate(){
    const images = "https://azurecomcdn.azureedge.net/cvt-3ae1e55fe1ff151f122ff24e05c956152af63af8e3d0d6713b6171693b4eb4de/images/page/home/accelerate-814w.webp"
    return(
        <div class="modern">
        <div class="modernImage">
            <img class="modernImageImg" src={images} alt="modernImage" />
        </div>
        <div class="modernTextSection">
            <p class="modernHeading">
                Accelerate your migration and modernization with Azure
            </p>
            <button class="modernButton">
                Explore help and tools
            </button>
        </div>
    </div>
    )
}

export default Accelerate;