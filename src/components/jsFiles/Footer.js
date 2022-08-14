import React from 'react'
import FooterList from '../../subComponents/FooterList';
import "../css files/footer.css"
import FooterLastSection from './FooterLastSection';
import FooterNav from './FooterNav';


function Footer() {
  return (
    <div className='footer'>
      <FooterNav />
      <FooterList />
      <FooterLastSection />
    </div>
  )
}

export default Footer; 
