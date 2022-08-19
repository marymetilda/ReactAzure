import React from 'react'
import {GoPrimitiveDot} from "react-icons/go"
import {CustClassNames} from "../jsFiles/constants/findConstants"

function Dots() {
  return (

    <div className='dotSec'>
     {(CustClassNames).map((CustClass) => {
        return(
                <div key={CustClass.id} className={CustClass.class}><GoPrimitiveDot /></div>
        )
     })}
    </div>
  )
}

export default Dots
