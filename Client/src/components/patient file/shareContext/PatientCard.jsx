import React from 'react'
import { PFormProvider } from '../hook/PRegFormContext'
import PatientRegForm from '../form/PatientRegForm'


const PatientCard = () => {
  return (
    <div>
        <PFormProvider>
          <PatientRegForm />
        </PFormProvider>
    </div>
  )
}

export default PatientCard