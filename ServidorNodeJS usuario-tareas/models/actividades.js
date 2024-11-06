const mongoose = require('mongoose')

//definir el esquema para usuarios //schema siginifica esquema
const tareaSchema = new mongoose.Schema({
    text: String, 
    user: String
})

tareaSchema.set('toJSON',{
    transform:(document, returnObject)=>{
        returnObject.id = returnObject._id.toString()
        delete returnObject._id
    }
})

const tarea = mongoose.model('tarea',tareaSchema)

module.exports = tarea
