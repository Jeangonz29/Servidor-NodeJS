const tareaRouter = require('express').Router()

// teachable machine - proyecto imagen / tensorflow.js 
//clave de administracion 
// unan de mexico, 
const tarea = require('../models/actividades')

tareaRouter.post('/', (request, response)=>{
    const {text, user} = request.body;
    
    console.log('AQUI ENTRO')
    //console.log(request.body)
    // se puede validar en el front, pero si hay un fastidioso desde el inspeccionar
    //pero para mas seguirdad validarlo aqui donde esta el fiscal xd
    //entonces: (validaciones a nivel de backend)

    if(!text){
        return response.status(400).json({error:'Todos los campos son obligatorios'}) //yo puedo crear mis propios status, los numeros, y el json es para el string con el error

    }else{
        //guardar en la bd
        let objetoTarea = new tarea();//<-- es una instancia

        objetoTarea.text = text;
        objetoTarea.user = user;

        async function guardartarea() {
            await objetoTarea.save() //guardo en la bd
            console.log(objetoTarea)

            const listatexto = await tarea.find()
            console.log(listatexto)
        }
        guardartarea().catch(console.error)

        return response.status(200).json({msj:'se a creado una nueva tarea)'})
    
    }
})

tareaRouter.get('/consultar-tarea', async (req, res) => {
   
})
// const listatareas = await tareaa.find()

//obtener lista de tareas
tareaRouter.get('/Lista-tareas', async (req, res) => {
    try{
        const listado = await tarea.find()
        return req.status(200).find({testOk:true,data:listado})
    }catch(error){
        return res.status(400).json({error: 'ha corrido un error'})
    }
})
module.exports = tareaRouter
