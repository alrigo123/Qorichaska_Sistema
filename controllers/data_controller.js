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
  const titular = req.body.nombre_titular
  const origen = req.body.pais_or
  const tipo_doc = req.body.tipo_documento
  const nacimiento = req.body.fecha_nac
  console.log(req.body)
  console.log(titular, origen, tipo_doc, nacimiento)

  //let sql = 'call insertar_datos(?,?,?,?)';
  let sql = `CALL insertar_datos('TARJETA', 450, 600, '${titular}', 'Estrada', 'PASAPORTE', '71340601', 'Argentina', 'Buenos Aires', 'alex@gmail.com', '${nacimiento}', '934647988', '2021-12-02', '2021-12-12', 4, 5, 'VALIDADA', 20) `
/*
   conex.query(sql,true,(error,result,field) => {
  if (error){
    console.log(error)
  }else{
    setTimeout(time, 0.5) //Para mostrar interfaz inicial
  }
Podemos usar el model y guardar los datos en un objeto noma pa que se vea mas chingon xd
}) 
*/

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
