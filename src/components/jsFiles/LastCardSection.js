import React from 'react'
import LastCard from '../../subComponents/LastCard'


function LastCardSection() {
    const lastCard = {
        card1:{
            Image: "https://azurecomcdn.azureedge.net/cvt-3ae1e55fe1ff151f122ff24e05c956152af63af8e3d0d6713b6171693b4eb4de/svg/pricing06.svg",
            Span: "Start building on Azure free",
            Text: "Get popular services free for 12 months and 40+ other services free always—plus $200 credit to use in your first 30 days."
        }
    }
  return (
    <div>
    <LastCard 
    image={lastCard.card1.Image}/>
    </div>
  )
}

export default LastCardSection;
