import express from 'express'
import { createAppointment, deleteAppointment, getAllAppointment, updateAppointment } from '../controller/AppointmentCRUD.js'


const AppRouter = express.Router()

AppRouter.post('/add',createAppointment)
AppRouter.get('/', getAllAppointment)
AppRouter.put('/update/:id',updateAppointment)
AppRouter.delete('/delete/:id', deleteAppointment)

export default AppRouter