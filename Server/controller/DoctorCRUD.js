import { Doctor } from "../models/Doctor.js";

// Get Doctors
export const getDoctors = async(req,res) =>{
    try {
        const doctors = await Doctor.find();
        return res.json(doctors)
    } catch (error) {
        return res.status(400).json({
            err: error.message
        })
    }
}

// Add New Doctors
export const createDoctors = async (req,res) => {
    try {
        const newDoctor = new Doctor(req.body)
        const SavedTheDoctor = await newDoctor.save()
        return res.json(SavedTheDoctor)
    } catch (error) {
        return res.status(400).json({
            err: error.message
        })
    }
}

// Update Doctors
export const updateDoctors = async (req,res) => {
    try {
        const updateDoc = await Doctor.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if(!updateDoc){
            return res.status(404).json({
                message: 'Doctor not found'
            })
        }
        return res.json({
            message:'Doctor Updated'
        })
    } catch (error) {
        return res.status(400).json({
            err: error.message
        })
    }
}

// Delete the Doctors
export const deleteDoctors = async (req,res) =>{
    const {id} = req.params; 
    // VThe req.params property is an object containing properties mapped to the named route “parameters”. For example, if you have the route /student/:id, then the “id” property is available as req.params.id. This object defaults to {}. 
    try {
        const deleteDoc = await Doctor.findByIdAndDelete(id);
        if (!deleteDoc){
            return res.status(404).json({
                message:'Doctor not found'
            })
        }

        return res.json({
            message: 'Docter Deleted'
        })
    } catch (error) {
        return res.status(400).json({
            err: error.message
        })
    }
}
