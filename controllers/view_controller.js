const controller = {}

controller.index = (req, res) => {
  res.render('index', { title: 'QORICHASKA' })
}

controller.reserva = (req, res) => {
  res.render('reserva')
}

module.exports = controller
