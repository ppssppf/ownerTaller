import { model, Schema } from "mongoose";

const VehicleSchema = new Schema({
    plate:{ type: String,
         required: [true,"la placa es requerida"],
         unique: true,
         minlength:[5,"min 6 caracteres"],
         maxlength:[6,"Max 6 caracteres"] },
    color:{
        type: String,
        required: [true, "Color is required"],
        minlength: [3,"min 2 caracteres"]
    },
    model:{
        type: Number,
        required: [true, "el modelo es requerido"]
    }
})

export default model("Vehicle", VehicleSchema, "vehicle")