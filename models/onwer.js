import { model, Schema } from "mongoose";

const OwnerSchema = new Schema({
    name: {type: String,
        required: [true,"el nombre del propetario es obligatorio"],
        minlength:[2, "Minimo 2 caracteres"],
        maxlength:[50, "maximo 50 caracteres"]},
    phone:{
        type: String,
        required: [true, "el  numero de telefono es requerido"],
        maxlength: [12, "maximo 12 caracteres"]},
    email:{
        type: String,
        required: [true, "el correo es requerido"]}
})
export default model("Owner", OwnerSchema,"owner")