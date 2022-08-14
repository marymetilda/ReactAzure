import React from 'react'

function FooterLastSec1() {
  return (
    <div className='footerLastSec1'>
      <div className="footLastSec1">
        <label htmlFor="dropdown languages" className='languageLabel'>Change language</label>
        <select name="language" id="language" className='language'>
          <option value="1">English(UK)</option>
          <option value="2">English(America)</option>
          <option value="3">French</option>
          <option value="4">English(India)</option>
          <option value="5">English(Australia)</option>
        </select>
      </div>
    </div>
  )
}

export default FooterLastSec1
