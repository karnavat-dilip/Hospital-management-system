import React from 'react'
import {BiHome} from 'react-icons/bi'
import {AiTwotoneCalendar} from 'react-icons/ai'
import {BsFillCalendarDateFill} from 'react-icons/bs'
import {AiFillCaretLeft} from 'react-icons/ai'
function Menubar() {
    //for the mouse over on menu bar
  const onMouseOver=()=>{
    document.getElementById('lfticon').style.display="none"
    document.getElementById('main-id').style.filter="brightness(0.5)"
  }
  const onMouseOut=()=>{
    document.getElementById('lfticon').style.display="block"
    document.getElementById('main-id').style.filter="brightness(1)"
  }
  return (
    <div>
      <div className='manu' id='manu-id' onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
              
              <ol >
                <li><span><BiHome className='style_icon'/><AiFillCaretLeft id='lfticon'/> </span><a href='#'>  Dashboard </a></li>
                <li><span><AiTwotoneCalendar className='style_icon'/></span><a href='#'> appointment</a></li>
                <li><span><BsFillCalendarDateFill className='style_icon' /></span><a href='#'>patient registration</a></li>
              </ol>
            </div>
    </div>
  )
}

export default Menubar
