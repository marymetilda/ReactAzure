import React from 'react'
import {SocialMediaIcons} from "../components/jsFiles/constants/socialMedia"
import "../components/css files/socialMedia.css"

function SocialMedia() {
  return (
    <div className='mediaIcons'>
        {SocialMediaIcons.map((MediaIcon)=> {
            return (
                <div className='socialIcons' key={MediaIcon.id}>{MediaIcon.icon}</div>
            )
        })}
    </div>
  )
}

export default SocialMedia
