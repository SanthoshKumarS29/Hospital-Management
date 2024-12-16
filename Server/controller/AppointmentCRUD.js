import { Appointment } from "../models/Appointment.js";



// Get Appointment
export const getAllAppointment = async (req,res) => {
    try {
        const appointments = await Appointment.find();
        return res.json(appointments)
    } catch (error) {
        return res.status(400).json({
            err: error.message
        })
    }
}

// Add New Appointment
export const createAppointment = async (req,res) => {

    try {
        const newAppointment = new Appointment(req.body)
        const savedAppointment = await newAppointment.save()
        return res.json(savedAppointment)
    } catch (error) {
        return res.status(400).json({
            err: error.message
        })
    }
}

// Update Appointment
export const updateAppointment = async (req,res) => {

    try{
        const updates = await Appointment.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if(!updates){
            return res.status(404).json({
                message:'Appointemnt not found'
            })
        }
        return res.status(200).json(updates)
    } catch (error) {
        return res.status(400).json({
            err: error.message
        })
    }
}


// Delete an Appointment
export const deleteAppointment = async (req,res) => {
    const { id } = req.params;

    try{
        const delAppointment = await Appointment.findByIdAndDelete(id);

        if(!delAppointment){
            return res.status(404).json({
                message: 'Appointment Not found'
            })
        }

        return res.status(200).json({ 
            message: 'Deleted successfully' 
        });

    } catch(error){
        return res.status(400).json({
            err: error.message
        })
    }
}