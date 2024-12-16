import mongoose from "mongoose";


const AppointmentSchema = new mongoose.Schema({
    patientName:{
        type: String,
        required: true
    },
    doctorName:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    }
})

export const Appointment = mongoose.model('Appointment', AppointmentSchema)