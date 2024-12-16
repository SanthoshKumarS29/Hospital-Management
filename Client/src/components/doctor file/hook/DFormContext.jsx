import React, { createContext, useReducer } from "react";
import axios from "axios";
import { DFormReducer } from "./DFormReducer";


// Create Contect For Doctor
const DFormContext = createContext();

export const DFromProvider = ({children}) => {
    const initialState = {
        docDatas: [],
        loading: false,
        error: null
    }

    const [state, dispatch] = useReducer(DFormReducer, initialState);

    // Get Doctors
    const fetchDoctors = async () => {
        try {
            const response = await axios.get('http://localhost:1000/api/doc/')
            dispatch({ type: 'FETCH_SUCCESS',  
                payload: response.data.map(item => ({ ...item, id: item._id }))
            })
        } catch (error) {
            dispatch({ type : 'FETCH_ERROR', payload: error.message})
        }
    }

    // Add Doctors
    const addDoctors = async (doc) => {
        const response = await axios.post(`http://localhost:1000/api/doc/add`, doc)
        dispatch({ type: 'ADD_DOCTORS', payload: response.data})
    }

    // Update Doctors
    const updateDoctors = async (id, updatedoc) => {
        const response = await axios.put(`http://localhost:1000/api/doc/update/${id}`, updatedoc)
        dispatch({ type: 'UPDATE_DOCTORS', payload: response.data})
    }

    // Delete Doctors
    const deleteDoctors = async (id) => {
        const response = await axios.delete(`http://localhost:1000/api/doc/delete/${id}`)
        dispatch({ type: 'DELETE_DOCTORS', payload: id})
    }

    return(
        <DFormContext.Provider value={{ state, fetchDoctors, addDoctors, updateDoctors, deleteDoctors}}>
            {children}
        </DFormContext.Provider>
    )
}

export default DFormContext