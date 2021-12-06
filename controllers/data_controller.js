let conex = require('../config/connection')
let model_Data = require('../models/data_model')
const controller = {}

function time() {
  ;(req, res) => {
    res.redirect('/')
  }
}

//POST
controller.view = (req, res) => {
  //const data = req.body

  //Cliente
  const titular = req.body.nombre_titular
  const apellidos = req.body.apellidos
  const tipo_doc = req.body.tipo_documento
  const num_doc = req.body.nro_documento
  const pais_or = req.body.pais_or
  const ciudad = req.body.ciudad
  const email = req.body.email
  const nacimiento = req.body.fecha_nac
  const nro_telefono = req.body.nro_telefono

  //Pago
  const metodo = req.body.metodo;
  const preadelanto = req.body.preadelanto;
  const cuota_total = req.body.cuota_total;

  //Reserva
  const fecha_arribo = req.body.fecha_arribo
  const fecha_salida = req.body.fecha_salida 
  const nro_habitaciones = req.body.nro_habitaciones
  const nro_personas = req.body.nro_personas;
  const duracion_estadia = req.body.duracion_estadia;

  //let sql = 'call insertar_datos(?,?,?,?)';

  let sql = `CALL insertar_datos('DEPOSITO EFECTIVO', ${preadelanto}, ${cuota_total}, '${titular}', '${apellidos}', '${tipo_doc}', '${num_doc}', '${pais_or}', '${ciudad}', '${email}', '${nacimiento}', '${nro_telefono}', '${fecha_arribo}', '${fecha_salida}', ${nro_habitaciones}, ${nro_personas}, 'VALIDADA', '${duracion_estadia}') `;
  
   conex.query(sql,true,(error,result,field) => {
  if (error){
    console.log(error)
  }else{
    setTimeout(time, 0.5) //Para mostrar interfaz inicial
  }
  //Podemos usar el model y guardar los datos en un objeto noma pa que se vea mas chingon xd
}) 


  setTimeout(time, 0.5) //Para mostrar interfaz inicial
}

controller.getRooms = async (req, res) => {
  await model_Data.getRooms(conex, (err, rooms) => {
    if (err) throw `Error ${err.message}`
    res.render('reserva', {
      data: rooms,
    })
  })
}

module.exports = controller
