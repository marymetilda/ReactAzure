import React from 'react'
import "../css files/footer.css"
import FooterNav from './FooterNav';
import FooterSecondSection from './FooterSecondSection';

function Footer() {
  return (
    <div className='footer'>
      <FooterNav />
      <FooterSecondSection />
    </div>
  )
}

export default Footer;
