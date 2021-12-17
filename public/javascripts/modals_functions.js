//MODALES
function modal() {
  let nombre_titular = document.getElementById('nombre_titular').value
  if (nombre_titular === '') {
    Swal.fire({
      title: `Alerta`,
      text: `Debe de Completar Todos los Campos `,
      icon: 'warning',
      showConfirmButton: true,
      timer: false,
    }).then(() => {
      window.location = '/reserva'
    })
  } else {
    Swal.fire({
      title: `Reserva`,
      text: `${nombre_titular} Reserva Realizada Satisfactoriamente `,
      icon: 'success',
      showConfirmButton: false,
      timer: 1800,
    }).then(() => {
      window.location = '/'
    })
  }
}

function modalstep1() {
  let nombre_titular_input = document.getElementById('nombre_titular_input')
    .value
  let email_input = document.getElementById('email_input').value
  let numero_referencia = document.getElementById('nro_telefono').value
  let nro_documento_input = document.getElementById('nro_documento_input').value
  if (
    nombre_titular_input === '' ||
    numero_referencia === '' ||
    nro_documento_input === '' ||
    email_input === ''
  ) {
    Swal.fire({
      title: `Alerta`,
      text: `Debe de Completar Todos los Campos `,
      icon: 'warning',
      showConfirmButton: true,
      timer: false,
    }).then(() => {
      window.location = '/reserva'
    })
  }
}



function modalstep2(){
  let timeStart = document.getElementById('timeStart').value
  let timeEnd = document.getElementById('timeEnd').value
  let daysDiscount = document.getElementById('daysDiscount').value
  if(daysDiscount === "0 días"){
    Swal.fire({
      title: `Alerta`,
      text: `Su tiempo de estadia no pude ser 0 dias`,
      icon: 'warning',
      showConfirmButton: true,
      timer: false,
    }).then(() => {
      window.location = '/reserva'
    })
  }else if(timeStart === "" || timeEnd === ""){
    Swal.fire({
      title: `Alerta`,
      text: `Ingrese Fechas de Estadia`,
      icon: 'warning',
      showConfirmButton: true,
      timer: false,
    }).then(() => {
      window.location = '/reserva'
    })
  }
}
