const express = require('express')
const router = express.Router()
const view_Controller = require('../controllers/view_controller')
const data_Controller = require('../controllers/data_controller')

router.get('/', view_Controller.index)

router.get('/reserva',data_Controller.getRooms)
//router.get('/reserva',view_Controller.reserva)

router.post('/reserva', data_Controller.view);

module.exports = router
