import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <div className='px-4 py-6 bg-green-400'>
            <nav className='flex justify-between'>
                <h1 className='font-bold text-base md:text-xl'>GFG-Hospital Management App</h1>
                <ul className='flex gap-4 font-semibold'>
                    <li><Link to='/'>Appointments</Link></li>
                    <li><Link to='/doc'>Doctors</Link></li>
                    <li><Link to='/pat'>Patients</Link></li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default NavBar