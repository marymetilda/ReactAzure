import React from 'react'
import "../css files/seehow.css"
import {IoMdArrowDroprightCircle} from "react-icons/io"
import {MdOutlineKeyboardArrowRight} from "react-icons/md"

function SeeHow() {
  return (
    <div className='seeHow' style={{  backgroundImage:`url("https://azurecomcdn.azureedge.net/cvt-3ae1e55fe1ff151f122ff24e05c956152af63af8e3d0d6713b6171693b4eb4de/images/page/home/dev-stories/desktop.webp")` }}>
        <div className="customTextActive">
            <div className="custText custText1">
        <span className="textbody">
            See how a self-taught developer helped level the playing field for people with disabilities by creating a video game controller that uses voice and facial cues.
        </span>
        <div className="watchButtons">
        <button className='buttons button1 watchButtons'>
            <span><IoMdArrowDroprightCircle className='videoIcon' /> Watch the story (4:51)</span>
        </button>
        <button className='caseButton check'>
            <span>Check out more developer stories</span> <MdOutlineKeyboardArrowRight className="custArrow" />
        </button>
      </div>
        </div>
        </div>
      
    </div>
  )
}

export default SeeHow;
