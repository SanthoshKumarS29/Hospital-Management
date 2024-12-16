import React, { useContext, useEffect, useState } from 'react'
import PFormContext from '../hook/PRegFormContext'


const PatientRegForm = () => {

  const {state, fetchPatients, addPatient, updatePatient, deletePatient } = useContext(PFormContext)
  const [patData, setPatdata] = useState({
    name:'',
    age:'',
    gender:''
  })
  const [isEditMode, setEditMode] = useState(false)
  const [patId, setPatId] = useState(null)
  
  useEffect(() => {
    fetchPatients()
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setPatdata((prev) => ({
      ...prev, [name] : value,
    }))
  }

  const handleEdit = (pat) => {
    if (!pat._id) {
      console.error('Error: appointment.id is undefined');
      return;
   }

    setPatdata(pat);
    setEditMode(true);
    setPatId(pat._id);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(isEditMode){
      updatePatient(patId, patData)
      setEditMode(false)
      setPatId(null)
    } else {
      addPatient(patData)
    }
    setPatdata({
      name:'',
      age:'',
      gender:''
    })
  }

  return (
    <div className='max-w-5xl mx-auto border-2 grid grid-cols-2 mt-4'>
        <div className='p-10'>
            <h1 className='text-center text-4xl font-semibold mb-8'>{isEditMode ? 'Edit the Patient Form':'Patients Form'}</h1>
            <form onSubmit={handleSubmit} className='space-y-6'>
                <div>
                    <label htmlFor="Patient Name" className='block text-base font-medium text-gray-700 mb-1'>Patient Name</label>
                    <input type="text" name="name" id="Patient Name" placeholder='Enter Patient Name' value={patData.name} onChange={handleChange} className='mt-1 w-full border border-gray-400 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-indigo-500 sm:text-sm' />
                </div>
                <div>
                    <label htmlFor="Age" className='block text-base font-medium text-gray-700 mb-1'>Age</label>
                    <input type="number" name="age" id="Age" placeholder='Enter Your Age' value={patData.age} onChange={handleChange} className='mt-1 w-full border border-gray-400 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-indigo-500 sm:text-sm' />
                </div>
                <div>
                    <label htmlFor="Gender" className='block text-base font-medium text-gray-700 mb-1'>Gender</label>
                    <div className='flex gap-2 mt-2'>
                      <input type="radio" name="gender" id="Gender" value='Male' onChange={handleChange} className='' />
                      <p>Male</p>
                    </div>
                    <div className='flex gap-2 mt-2'>
                      <input type="radio" name="gender" id="Gender" value='Female' onChange={handleChange} className='' />
                      <p>Female</p>
                    </div>
                    <div className='flex gap-2 mt-2'>
                      <input type="radio" name="gender" id="Gender" value='Others' onChange={handleChange} className='' />
                      <p>Other</p>
                    </div>
                </div>
                <div>
                    <button type='submit' className='w-full inline-flex justify-center py-3 px-4 border border-black shadow-sm text-sm font-medium text-black bg-green-300 hover:bg-white rounded-md duration-200'>{isEditMode ? 'Edit' : 'Submit Form'}</button>
                </div>
            </form>
        </div>
        {/* Render the doctors */}
        <div className='p-10'>
            <h2 className='text-2xl font-semibold mb-8'>Doctors({state.patDatas.length})</h2>
            <div className='flex flex-col gap-4'>
                {state.patDatas.map((patList) => (
                    <li key={patList._id} className='border-2 border-green-400 rounded-lg p-4 list-none leading-8'>
                        <div>
                            <p><span>Doctor: </span>{patList.name}</p>
                            <p><span>Age: </span>{patList.age}</p>
                            <p><span>Gender: </span>{patList.gender}</p>
                        </div>
                        <div className='flex justify-between mt-5'>
                            <button onClick={()=> handleEdit(patList)} className='bg-green-400 text-black px-3 text-base py-1 font-medium rounded-md'>Edit</button>
                            <button onClick={() => deletePatient(patList._id)} className='bg-red-400 text-black px-3 text-base py-1 font-medium rounded-md'>Delete</button>
                        </div>
                    </li>
                ))}
            </div>
        </div>

    </div>
  )
}

export default PatientRegForm