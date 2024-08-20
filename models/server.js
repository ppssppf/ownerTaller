import express, { Router } from 'express'
import "dotenv/config"
import dbConnection from "../database/config.js"
import { getVehicle, postVehicle, putVehicle, deleteVehicle } from '../controllers/vehicleController.js'
import { getOwner, postOwner, putOwner, deleteOwner } from '../controllers/onwerController.js'


export default class Server{
    constructor(){
        this.app = express()
        this.listen()
        this.dbConnect()
        this.pathVehicle = "/api/vehicle" //link plublico
        this.pathOwner = "/api/owner"
        this.route()
    }
    listen(){// metodo para ecuchar el puerto
        this.app.listen(process.env.PORT, () =>{
            console.log(`el servidor esta corriendo en ${process.env.PORT}`)
        })
    }

    async dbConnect(){ // llmada al metodo dbConnection para conectarse a mongo
        await dbConnection()
    }
    route(){
        this.app.use(express.json())
        this.app.put(this.pathVehicle, putVehicle)
        this.app.get(this.pathVehicle, getVehicle)
        this.app.post(this.pathVehicle, postVehicle)
        this.app.delete(this.pathVehicle+'/:id', deleteVehicle)
        this.app.put(this.pathOwner, putOwner)
        this.app.get(this.pathOwner, getOwner)
        this.app.post(this.pathOwner, postOwner)
        this.app.delete(this.pathOwner+'/:id', deleteOwner)
    }
}

