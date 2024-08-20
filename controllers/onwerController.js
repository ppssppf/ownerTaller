import Owner from "../models/onwer.js"

export async function getOwner(req, res) {
    try{
        const owners = await Owner.find()
        res.json(owners)
    }catch(error){
        res.status(500).json({error})
    }
}
export async function postOwner(req, res) {
    const body = req.body
    try{
        const owner = new Owner(body)
        await owner.save()
        res.status(201).json('propietario creado con exito')
    }catch(error){
        res.status(500).json("problemas con la creacion del propietario")
    }
}
export async function putOwner(req, res){
    const {name,phone,email} = req.body
    try{
        await Owner.findOneAndUpdate({phone:phone},
            {name:name, email:email})
            res.status(200).json("datos del propietario actualizados con exito")
    }catch(error){
        res.status(500).json(error)
    }
}

export async function deleteOwner(req,res){
    const _id = req.params.id //tomar el id desde el postman o el thuder (en la url)
    try {
        await Owner.findByIdAndDelete({_id:_id})
        res.json("propietario eliminado con exito")
    } catch (error) {
        res.status(404).json("error en la eliminacion del propietario")
    }
}