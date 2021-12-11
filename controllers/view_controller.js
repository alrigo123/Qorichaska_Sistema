
const controller = {}

controller.index = (req, res) => {
  res.render('index', { title: 'QORICHASKA' })
}

controller.reserva = (req, res) => {
  req.session.user;
  const userSession = req.session.user;
  res.render('reserva',{
    session : userSession
  })
}

module.exports = controller
