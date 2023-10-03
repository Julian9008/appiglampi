import express from 'express'
import { rutas } from './routes/rutas.js'

export class Api {constructor (){
    this.app = express()
    this.procesarPeticiones ()
}
levantarServidor(){
    this.app.listen(3000,function(){
        console.log("servidor Operando con exito")
    })
}
procesarPeticiones (){
    this.app.use ('/',rutas)
}
conectarBD(){}
}
