import React from 'react'
import MobileApp from '../../subComponents/MobileApp'
import SocialMedia from '../../subComponents/SocialMedia'
import "../css files/footerNav.css"

function FooterNav() {
  return (
    <div className='footerNav'>
      <MobileApp />
      <SocialMedia />
    </div>
  )
}

export default FooterNav
