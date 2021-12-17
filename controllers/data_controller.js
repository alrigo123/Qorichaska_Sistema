let conex = require('../config/connection')
let model_Data = require('../models/data_model')
const nodemailer = require('nodemailer')
const controller = {}

function time() {
  ;(req, res) => {
    const userSession = req.session.user

    res.clearCookie('jwt')
    return res.redirect('/')
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
  return (today = dd + '/' + mm + '/' + yyyy)
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
  const estado = req.body.estado
  const duracion_estadia = req.body.duracion_estadia
  const fecha_limite = req.body.fecha_limite

  //let sql = 'call insertar_datos(?,?,?,?)';

  let sql = `CALL insertar_datos('${metodo}', ${preadelanto}, ${cuota_total}, '${titular}', '${apellidos}', '${tipo_doc}', '${num_doc}', '${pais_or}', '${ciudad}', '${email}', '${nacimiento}', '${nro_telefono}', '${fecha_arribo}', '${fecha_salida}', ${nro_habitaciones}, ${nro_personas}, '${estado}', '${duracion_estadia}') `
  //if estado no validado cambiar mensaje

  conex.query(sql, true, (error, result, field) => {
    if (error) {
      console.log(error)
    } else {
      function formatDate(date) {
        return date.replace(/^(\d{4})-(\d{2})-(\d{2})$/g, '$3/$2/$1')
      }

      console.log('Email Enviado a: ' + email)

      //  VALIDADA

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'basembc04@gmail.com',
          pass: '9TWvLTS2tr*QUk$',
        },
      })

      let mensaje = `Hola ${titular} ${apellidos} \n\nSu Reserva a sido realizada para el dia ${formatDate(
        fecha_arribo,
      )} hasta el dia ${formatDate(
        fecha_salida,
      )} \n\nCon un precio total de ${cuota_total} nuevos soles, para confirmar su reserva en el hostal, presentar su documento de identidad: ${num_doc}\n\nGracias por preferirnos - Qorichaska \n © MBC 2021`

      const mailOptions = {
        from: 'basembc04@gmail.com',
        to: email,
        subject: 'Reserva ' + date(),
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
  req.session.destroy()
  setTimeout(time, 0.5) //Para mostrar interfaz inicial
}

controller.getRooms = async (req, res) => {
  req.session.user = req.body.user

  await model_Data.getRooms(conex, (err, rooms) => {
    if (err) throw `Error ${err.message}`
    res.render('reserva', {
      data: rooms,
    })
  })
}

module.exports = controller
