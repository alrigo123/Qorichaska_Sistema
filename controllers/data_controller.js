let conex = require('../config/connection')
let model_Data = require('../models/data_model')
const nodemailer = require('nodemailer')
const controller = {}

function time() {
  ;(req, res) => {
    res.redirect('/')
  }
}

function date() {
  var today = new Date()
  var dd = today.getDate()
  var mm = today.getMonth() + 1 //January is 0!
  var yyyy = today.getFullYear()

  if (dd < 10) {
    dd = '0' + dd
  }

  if (mm < 10) {
    mm = '0' + mm
  }

  return (today = mm + '/' + dd + '/' + yyyy)
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
  const metodo = req.body.metodo
  const preadelanto = req.body.preadelanto
  const cuota_total = req.body.cuota_total

  //Reserva
  const fecha_arribo = req.body.fecha_arribo
  const fecha_salida = req.body.fecha_salida
  const nro_habitaciones = req.body.nro_habitaciones
  const nro_personas = req.body.nro_personas
  const duracion_estadia = req.body.duracion_estadia

  //let sql = 'call insertar_datos(?,?,?,?)';

  let sql = `CALL insertar_datos('${metodo}', ${preadelanto}, ${cuota_total}, '${titular}', '${apellidos}', '${tipo_doc}', '${num_doc}', '${pais_or}', '${ciudad}', '${email}', '${nacimiento}', '${nro_telefono}', '${fecha_arribo}', '${fecha_salida}', ${nro_habitaciones}, ${nro_personas}, 'VALIDADA', '${duracion_estadia}') `

  conex.query(sql, true, (error, result, field) => {
    if (error) {
      console.log(error)
    } else {


      function arribo() {
        var date1 = fecha_arribo

        var dd = date1.getDate()
        var mm = date1.getMonth() + 1 //January is 0!
        var yyyy = date1.getFullYear()      
        if (dd < 10) {
          dd = '0' + dd
        }
        if (mm < 10) {
          mm = '0' + mm
        }
        return (date1 = mm + '/' + dd + '/' + yyyy)
      }

      function salida(){
        var date2 = fecha_salida
        var dd2 = date2.getDate()
        var mm2 = date2.getMonth() + 1 //January is 0!
        var yyyy2 = date2.getFullYear()
        if (dd2 < 10) {
          dd2 = '0' + dd2
        }
        if (mm2 < 10) {
          mm2 = '0' + mm2
        }
        return (date2 = mm2 + '/' + dd2 + '/' + yyyy2)
      }
      
      console.log('Email Enviado a: ' + email)
      let mensaje = `Hola ${titular} ${apellidos} \n\n Su Reserva a sido realizada para el dia ${fecha_arribo} hasta el dia ${fecha_salida} \n\n Gracias por preferirnos`

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'basembc04@gmail.com',
          pass: '9TWvLTS2tr*QUk$',
        },
      })

      const mailOptions = {
        from: 'basembc04@gmail.com',
        to: email,
        subject: 'Reserva '+date(),
        text: mensaje,
      }

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error)
        } else {
          console.log('Email enviado: ' + info.response)
        }
      })

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
