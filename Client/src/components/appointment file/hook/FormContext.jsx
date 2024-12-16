import React, { createContext, useReducer } from "react";
import axios from 'axios'
import { FormReducer } from "./formReducer";

// create context
const FormContext = createContext();

export const FormProvider = ({children}) => {
    const initialState = {
        datas: [],
        loading: false,
        error: null
    }

    const [state,dispatch] = useReducer(FormReducer, initialState);

    // Get appointments
    const fetchAppointments = async () => {
        try {
            const response = await axios.get('http://localhost:1000/api/')
            dispatch({ type: 'FETCH_SUCCESS',  
                payload: response.data.map(item => ({ ...item, id: item._id }))
            })
        } catch (error) {
            dispatch({ type : 'FETCH_ERROR', payload: error.message})
        }
    }

    // Add appointments
    const addAppointments = async (appointment) => {
        const response = await axios.post('http://localhost:1000/api/add', appointment);
        dispatch({ type: 'ADD_APPOINTMENT',  payload: response.data   })
    }

    // Update appointments
    const updateAppointments = async (id, updAppointment) => {
        const response = await axios.put(`http://localhost:1000/api/update/${id}`, updAppointment)
        dispatch({ type: 'UPDATE_APPOINTMENT', payload: response.data})
    }

    // Delete appointments
    const deleteAppointments = async (id) => {
        await axios.delete(`http://localhost:1000/api/delete/${id}`)
        dispatch({ type: 'DELETE_APPOINTMENT', payload: id})
    }

    return(
        <FormContext.Provider value={{ state, fetchAppointments, addAppointments, updateAppointments,deleteAppointments }}>
            {children}
        </FormContext.Provider>
    )
}

export default FormContext