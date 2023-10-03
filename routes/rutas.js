import express, { Router } from 'express'
import {ControladorHabitaciones } from '../controllers/ControladorHabitaciones.js'
import { ControladorReservas } from '../controllers/ControladorReservas.js';

let controladorHabitaciones = new ControladorHabitaciones();
let controladorReservas = new  ControladorReservas ();

export let rutas = express.Router()

rutas.post('/api/habitaciones', controladorHabitaciones.registrarHabitacion)
rutas.get('/api/habitacion',controladorHabitaciones.buscarHabitaciones)
rutas.get('/api/habitaciones',controladorHabitaciones.buscarHabitacionePorId)
rutas.put('/api/habitaciones',controladorHabitaciones.modificarHabitacion)
rutas.delete('/api/habitaciones',controladorHabitaciones.borrarHabitacion)

rutas.post('/api/reservas',controladorReservas.registrarReserva)
rutas.get('/api/reserva', controladorReservas.buscarReserva)
rutas.get('/api/reservas', controladorReservas.buscarReservaPorId)
rutas.put('/api/reservas',controladorReservas.modificarReserva)
rutas.delete('/api/reservas',controladorReservas.borrarReserva)