import React, { useContext, useEffect, useState } from 'react'
import FormContext  from '../hook/FormContext'

const AppointmentForm = () => {

    const {state, fetchAppointments, addAppointments, updateAppointments,deleteAppointments} = useContext(FormContext)
    const [AppData, setAppData] = useState({
        patientName:'',
        doctorName:'',
        date:''
    })
    const [isEditMode, setEditMode] = useState(false) //Track the appointment can be edit
    const [appointmentId, setAppointmentID] = useState(null) // Track the id to correctly edit

    useEffect(() => {
      fetchAppointments()
    },[])

    const handleChange = (e) => {
      const {name, value} = e.target;
      setAppData((prev) => ({
        ...prev, [name] : value,
      }))
    }

    const handleEdit = (appointment) => {
    // check the id correctly get or not logic
    //   if (!appointment._id) {
    //     console.error('Error: appointment.id is undefined');
    //     return;
    // }
      setAppData(appointment); //edit the form with existing data
      setEditMode(true);
      setAppointmentID(appointment._id)
    }

    const handleSubmit = (e) => {
      e.preventDefault();

      if(isEditMode){
        updateAppointments(appointmentId, AppData);
        setEditMode(false)
        setAppointmentID(null)
      } else {
        // data is stored
        addAppointments(AppData)
      }
      setAppData({
        patientName:'',
        doctorName:'',
        date:''
      })
    }

  return (
    <div className='max-w-5xl mx-auto border-2 grid grid-cols-2 mt-4'>
        <div className='p-10'>
          <h1 className='text-center text-4xl font-semibold mb-8'>{isEditMode ? 'Edit The Appointment' : 'Appointment Form'}</h1>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <label htmlFor="Patient Name" className='block text-base font-medium text-gray-700 mb-1'>Patient Name</label>
              <input type="text" name="patientName" id="Patient Name" placeholder='Enter Your Name' value={AppData.patientName} onChange={handleChange} className='mt-1 w-full border border-gray-400 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-indigo-500 sm:text-sm' />
            </div>
            <div>
              <label htmlFor="Doctor Name" className='block text-base font-medium text-gray-700 mb-1'>Doctor Name</label>
              <input type="text" name="doctorName" id="Doctor Name" placeholder='Enter Your Doctor Name' value={AppData.doctorName} onChange={handleChange} className='mt-1 w-full border border-gray-400 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-indigo-500 sm:text-sm' />
            </div>
            <div>
              <label htmlFor="Date" className='block text-base font-medium text-gray-700 mb-1'>Date</label>
              <input type="date" name="date" id="Date" placeholder='Date' value={AppData.date ? new Date(AppData.date).toISOString().split('T')[0] : ''} onChange={handleChange} className='mt-1 w-full border border-gray-400 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-indigo-500 sm:text-sm' />
            </div>
            <div>
              <button type='submit' className='w-full inline-flex justify-center py-3 px-4 border border-black shadow-sm text-sm font-medium text-black bg-green-300 hover:bg-white rounded-md duration-200'>{isEditMode ? 'Edit' : 'Submit Form'}</button>
            </div>
          </form>
        </div>
        {/* Render the patient */}
        <div className='p-10'>
          <div>
            <h2 className=' text-2xl font-semibold mb-8'>Appoinments ({state.datas.length})</h2>
            <div className='flex flex-col gap-4 '>
              {state.datas.map((appointmentList) => (
                <li key={appointmentList._id} className='border-2 border-red-400 rounded-lg p-4 list-none leading-8'>
                  <div>
                    <p><span>Patient: </span>{appointmentList.patientName}</p>
                    <p><span>Doctor: </span>{appointmentList.doctorName}</p>
                    <p><span>Date: </span>{new Date(appointmentList.date).toLocaleDateString()}</p>
                  </div>
                  <div className='flex justify-between mt-5'>
                    <button onClick={()=> handleEdit(appointmentList)} className='bg-green-400 text-black px-3 text-base py-1 font-medium rounded-md'>Edit</button>
                    <button onClick={() => deleteAppointments(appointmentList._id)} className='bg-red-400 text-black px-3 text-base py-1 font-medium rounded-md'>Delete</button>
                  </div>
                </li>
              ))}
            </div>
          </div>
        </div>
    </div>
  )
}

export default AppointmentForm