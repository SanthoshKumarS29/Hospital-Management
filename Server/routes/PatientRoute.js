import express from 'express';
import { createPatients, deletepatient, getPatients, updatePatient } from '../controller/PatientCRUD.js';


const PatRouter = express.Router()

PatRouter.post('/pat/add', createPatients)
PatRouter.get('/pat/', getPatients)
PatRouter.put('/pat/update/:id', updatePatient)
PatRouter.delete('/pat/delete/:id', deletepatient)

export default PatRouter