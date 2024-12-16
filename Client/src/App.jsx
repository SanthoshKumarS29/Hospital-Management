import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/constant file/NavBar'
import AppoinmentCard from './components/appointment file/shareContext/AppoinmentCard'
import DoctorCard from './components/doctor file/shareContext/DoctorCard'
import PatientCard from './components/patient file/shareContext/PatientCard'


function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<AppoinmentCard />}/>
        <Route path='/doc' element={<DoctorCard />} />
        <Route path='/pat' element={<PatientCard />} />
      </Routes>
      {/* <PatientCard /> */}
    </>
  )
}

export default App
