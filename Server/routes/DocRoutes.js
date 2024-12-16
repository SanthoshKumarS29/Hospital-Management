import express from 'express';
import { createDoctors, deleteDoctors, getDoctors, updateDoctors } from '../controller/DoctorCRUD.js';


const DocRouter = express.Router()

DocRouter.post('/doc/add', createDoctors)
DocRouter.get('/doc/', getDoctors)
DocRouter.put('/doc/update/:id', updateDoctors)
DocRouter.delete('/doc/delete/:id', deleteDoctors)

export default DocRouter