import React from 'react'
import Dashboard_feature from './Dashboard_feature'
import Navbar from './Navbar'
import Menubar from './Menubar'
function Dashboard() {
  
  
  return (
    <div>
      <div className='container2'>
        <Navbar/>
          <Menubar/>
        <div className='main' >        
          <Dashboard_feature />
        </div>
        
      </div>
    </div>
  )
}

export default Dashboard
