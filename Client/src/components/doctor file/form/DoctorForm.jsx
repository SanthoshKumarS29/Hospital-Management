import React, { useContext, useEffect, useState } from 'react'
import DFormContext from '../hook/DFormContext'


const DoctorForm = () => {

    const {state, fetchDoctors, addDoctors, updateDoctors, deleteDoctors } = useContext(DFormContext)
    const [docData, setDocData] = useState({
        docName:'',
        specialty:'',
    })
    const [isEditMode, setEditMode] = useState(false)
    const [docId, setDocId] = useState(null)

    useEffect(() => {
        fetchDoctors()
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setDocData((prev) => ({
            ...prev, [name] : value,
        }))
    }

    const handleEdit = (doc) => {
        if (!doc._id) {
                console.error('Error: appointment.id is undefined');
                return;
             }
        setDocData(doc);
        setEditMode(true);
        setDocId(doc._id);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(isEditMode){
            updateDoctors(docId, docData)
            setEditMode(false)
            setDocId(null)
        } else {
            // Data is Stored
            addDoctors(docData)
        }
        setDocData({
            docName:'',
            specialty:'',
        })
    }

  return (
    <div className='max-w-5xl mx-auto border-2 grid grid-cols-2 mt-4'>
        <div className='p-10'>
            <h1 className='text-center text-4xl font-semibold mb-8'>{isEditMode ? 'Edit the Doctor Form':'Doctors Form'}</h1>
            <form onSubmit={handleSubmit} className='space-y-6'>
                <div>
                    <label htmlFor="Doctor Name" className='block text-base font-medium text-gray-700 mb-1'>Doctor Name</label>
                    <input type="text" name="docName" id="Doctor Name" placeholder='Enter Doctor Name' value={docData.docName} onChange={handleChange} className='mt-1 w-full border border-gray-400 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-indigo-500 sm:text-sm' />
                </div>
                <div>
                    <label htmlFor="Specailty" className='block text-base font-medium text-gray-700 mb-1'>Specailty</label>
                    <input type="text" name="specialty" id="Specailty" placeholder='Enter Your Specailty' value={docData.specialty} onChange={handleChange} className='mt-1 w-full border border-gray-400 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-indigo-500 sm:text-sm' />
                </div>
                <div>
                    <button type='submit' className='w-full inline-flex justify-center py-3 px-4 border border-black shadow-sm text-sm font-medium text-black bg-green-300 hover:bg-white rounded-md duration-200'>{isEditMode ? 'Edit' : 'Submit Form'}</button>
                </div>
            </form>
        </div>
        {/* Render the doctors */}
        <div className='p-10'>
            <h2 className='text-2xl font-semibold mb-8'>Doctors({state.docDatas.length})</h2>
            <div className='flex flex-col gap-4'>
                {state.docDatas.map((docList) => (
                    <li key={docList._id} className='border-2 border-blue-400 rounded-lg p-4 list-none leading-8'>
                        <div>
                            <p><span>Doctor: </span>{docList.docName}</p>
                            <p><span>Specailty: </span>{docList.specialty}</p>
                        </div>
                        <div className='flex justify-between mt-5'>
                            <button onClick={()=> handleEdit(docList)} className='bg-blue-400 text-black px-3 text-base py-1 font-medium rounded-md'>Edit</button>
                            <button onClick={() => deleteDoctors(docList._id)} className='bg-red-400 text-black px-3 text-base py-1 font-medium rounded-md'>Delete</button>
                        </div>
                    </li>
                ))}
            </div>
        </div>

    </div>
  )
}

export default DoctorForm