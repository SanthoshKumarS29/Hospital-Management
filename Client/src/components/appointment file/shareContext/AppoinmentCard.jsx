import React from 'react'
import { FormProvider } from '../hook/FormContext'
import AppointmentForm from '../form/AppointmentForm'

const AppoinmentCard = () => {
  return (
    <div>
        <FormProvider>
            <AppointmentForm />
        </FormProvider>
    </div>
  )
}

export default AppoinmentCard