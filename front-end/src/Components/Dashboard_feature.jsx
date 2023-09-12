import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Feature from './Feature'
import Appointment from './Doctor_Appointment'
import Nomatch from './Nomatch'

function Dashboard_feature() {

    return (

        <div className='container3' id='main-id'>

            <Routes>
                <Route path='/' element={<Feature />} />
                <Route path='/Appointment' element={<Appointment />} />
                <Route path='*' element={<Nomatch/>} />

            </Routes>
        </div>
    )
}

export default Dashboard_feature
