const { Schema, model } = require("mongoose");

const hardwareSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    modelo: {
        type: String,
        required: true,
        
    },
    marca: {
        type: String
    },
    descripcion: {
        type: String
    },    
    fecha: {
        type: Date, default: Date.now 
    },
    imagen: {
        type: String
    }

})
module.exports = model("Hardware", hardwareSchema)