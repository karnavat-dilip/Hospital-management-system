import React from 'react'
import logo2 from '../images/download.jpeg'
function Navbar() {
  return (
    <div>
      <div className='header'>
          <div className='head'> <img src={logo2} width='50px' height='50px'></img></div>
          <div className='hospital_name'><h1 className='lbl'>Hospital name</h1></div>
          <h1 className='profile lbl'>Admin</h1>
        </div>
    </div>
  )
}

export default Navbar
