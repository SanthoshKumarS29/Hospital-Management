import mongoose from "mongoose";


const DoctorSchema  = new mongoose.Schema({
    docName:{
        type: String,
        required: true
    },
    specialty:{
        type: String,
        required: true
    }
})

export const Doctor = mongoose.model('Doctor', DoctorSchema)