import React from 'react'
import { DFromProvider } from '../hook/DFormContext'
import DoctorForm from '../form/DoctorForm'

const DoctorCard = () => {
  return (
    <div>
        <DFromProvider>
            <DoctorForm />
        </DFromProvider>
    </div>
  )
}

export default DoctorCard