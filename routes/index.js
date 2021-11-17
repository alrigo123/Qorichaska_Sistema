const express = require('express')
const router = express.Router()
const view_Controller = require('../controllers/view_controller')

router.get('/', view_Controller.index)
router.get('/reserva',view_Controller.reserva)

router.post('/reserva', view_Controller.success);

module.exports = router
