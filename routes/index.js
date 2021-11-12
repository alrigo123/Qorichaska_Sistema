const express = require('express');
const router = express.Router();
const view_Controller = require('../controllers/view_controller')

router.get('/', view_Controller.index);
router.get('/reserva',(req, res) => {
    res.render('reserva', { title: 'QORICHASKA' })
  });

module.exports = router;