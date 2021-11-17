const controller = {}

function time(){
  (req,res) => {
  res.render('/');
  }
}


controller.index = (req, res) => {
  res.render('index', { title: 'QORICHASKA' })
}

controller.reserva = (req, res) => {
  res.render('reserva', { 
    alert: false,
    alertTitle: 'Registration',
    alertMessage: 'Successful Registration',
    alertIcon: 'success',
    showConfirmButton: false,
    timer: 1500,
    ruta: '', })
  
}

controller.success = async(req, res) =>{
   setTimeout(time,10);
}

module.exports = controller
