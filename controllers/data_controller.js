const controller = {}

function time(){
    (req,res) => {
    res.redirect('/');
    }
  }

controller.view = (req, res) => {
    //const data = req.body
    const titular = req.body.nombre_titular
    const origen = req.body.pais_or

    console.log(titular,origen)

    setTimeout(time,0.5);


}

module.exports = controller