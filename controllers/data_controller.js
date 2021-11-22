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

  console.log(titular, origen)

  setTimeout(time, 0.5)
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
