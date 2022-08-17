import React from "react";
import "../components/css files/button.css"

function BannerButtons() {
    return (
        <div className="bannerButtons">
        <button className="buttons button1"> <a href="https://azure.microsoft.com/en-us/pricing/purchase-options/pay-as-you-go/"> Get started</a></button>
        <button className="buttons button2"> <a href="https://azure.microsoft.com/en-us/free/">Try Azure for free</a> </button>
      </div>
    )
}

export default BannerButtons;