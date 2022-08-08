import React from "react";
import "../css files/ideasImage.css"

function IdeasImage() {
    return(
            <div className="screenMain">
                    <div className="screenImageSection">
                        <div className="screenImage">
                            <img src="https://azurecomcdn.azureedge.net/cvt-f3473e70fd785159419fc0a92a7d821efcd1dbb882464b3ad7c37d7d4e3514bd/images/page/home/portal-screenshots/featured.webp" className="screenImageImg" />
                        </div>
                        <div className="arrowTextSection">
                            <img src="http://127.0.0.1:5500/images/diagonal-arrow.png" className="leftArrow" />
                            <p className="screenText">View Azure portal screenshot in full screen</p>
                        </div>
                    </div>
                </div>
    )
}

export default IdeasImage;