//Archivo donde se definen los controladores del vehiculo (los metodos de get,post,put,delete)
import Vehicle from "../models/vehicle.js";

//funcion para consultar los vehiculos
export async function getVehicle(req,res) {
    try{
        const vehicles = await Vehicle.find()
        res.json(vehicles)
    } catch(error){
        res.status(500).json({error})
    }
}
// funcion donde se recibe un vehiculo y se inserta en la base de datos
export async function postVehicle(req, res){
    const body = req.body
    try{
        const vehicle = new Vehicle(body)
        await vehicle.save()
        res.status(201).json('Vehiculo creado con exito')
    }catch (error){
        res.status(500).json("problemas con la creacion del vehiculo")
    }
}

export async function putVehicle(req, res) {
    const {plate,color,model} = req.body //destructuring data de body
    try{
        //encontrar y acutlizar el obeto
        await vehicle.findOneAndUpdate({plate:plate},{color:color, model:model})
        res.status(200).json("vehiculo actuiizado con exito")
    }catch(error){
        res.status(500).json(error)
    }   
}

export async function deleteVehicle(req, res){
    const _id = req.params.id //tomar el id desde el postman o el thuder (en la url)
    try {
        await Vehicle.findByIdAndDelete({_id:_id})
        // await Vehicle.findOneAndDelete({plate:plate}) ---en caso de que fuera por 
        res.json("Vehiculo eliminado con exito")
    } catch (error) {
        res.status(404).json("error en la eliminacion del vehiculo")
    }
}