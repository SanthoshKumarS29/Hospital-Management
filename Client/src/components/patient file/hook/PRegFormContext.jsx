import React, { createContext, useReducer } from "react";
import { PFormReducer } from "./PRegFormReducer";
import axios from "axios";


const PFormContext = createContext();

export const PFormProvider = ({children}) => {
    const initialState = {
        patDatas: [],
        loading: false,
        error: null
    }

    const [state, dispatch] = useReducer(PFormReducer, initialState);

    // Get Patients
    const fetchPatients = async () => {
        try {
            const response = await axios.get(`http://localhost:1000/api/pat`)
            dispatch({ type: 'FETCH_SUCCESS',
                payload: response.data.map(item => ({ ...item, id: item._id}))
            })
        } catch (error) {
            dispatch({ type: 'FETCH_ERROR', payload: error.message})
        }
    }

    // Add patients
    const addPatient = async (pat) => {
        const response = await axios.post(`http://localhost:1000/api/pat/add`, pat)
        dispatch({ type:'ADD_PATIENT', payload: response.data})
    }

    // update Patient
    const updatePatient = async (id, updatePat) => {
        const response = await axios.put(`http://localhost:1000/api/pat/update/${id}`, updatePat)
        dispatch({ type:'UPDATE_PATIENT', payload: response.data})
    }

    // Delete Patient
    const deletePatient = async (id) => {
        const response = await axios.delete(`http://localhost:1000/api/pat/delete/${id}`)
        dispatch({ type: 'DELETE_PATIENT', payload: id})
    }

    return(
        <PFormContext.Provider value={{ state, fetchPatients, addPatient, updatePatient, deletePatient }}>
            {children}
        </PFormContext.Provider>
    )
}

export default PFormContext