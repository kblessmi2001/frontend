import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ContactManagement from '../Pages/ContactManagement'
import Appointment from '../Pages/Appointment'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<ContactManagement/>} />
        <Route path='/appointment/:id' element={<Appointment />} />
    </Routes>
  )
}

export default AllRoutes