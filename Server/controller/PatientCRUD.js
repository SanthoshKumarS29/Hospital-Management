import { Patient } from "../models/Patient.js";

// Get Patients
export const getPatients = async (req,res) => {
    try {
        const patients = await Patient.find();
        if(!patients){
            return res.status(404).json({
                message:'Patients not found'
            })
        }
        return res.json(patients)
    } catch (error) {
        return res.status(400).json({
            err: error.message
        })
    }
}

// Add New Patients
export const createPatients = async (req,res) => {
    try {
        const newPatient = new Patient(req.body);
        const saveThePatient = await newPatient.save()
        return res.json(saveThePatient)
    } catch (error) {
        return res.status(400).json({
            err: error.message
        })
    }
}

// Update Patient
export const updatePatient = async (req,res) => {
    try {
        const updPatient = await Patient.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if(!updPatient){
            return res.status(404).json({
                message:'Patients not found'
            })
        }
        return res.json({
            messgae: 'Patient Updates'
        })
    } catch (error) {
        return res.status(400).json({
            err: error.message
        })
    }
}

// delete an Patient
export const deletepatient = async (req,res) => {
    const { id } = req.params;

    try {
        const delPatient = await Patient.findByIdAndDelete(id)

        if(!delPatient){
            return res.status(404).json({
                messgae: 'Patient not found'
            })
        }
        return res.json({
            message:'Patient Deleted'
        })
    } catch (error) {
        return res.status(400).json({
            err: error.message
        })
    }
}