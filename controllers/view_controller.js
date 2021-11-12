const controller = {}

controller.index = (req, res) => {
  res.render('index', { title: 'QORICHASKA' })
}

module.exports = controller
