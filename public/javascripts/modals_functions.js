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
  
  /*        function modalstep1() {
        let nombre_titular_input = document.getElementById('nombre_titular_input').value;
        let apellido_input = document.getElementById('apellidos_input').value;
        if (nombre_titular_input === "" || apellido_input === "") {
          
          Swal.fire({
            title: `Alerta`,
            text: `Debe de Completar Todos los Campos `,
            icon: 'warning',
            showConfirmButton: true,
            timer: false
          }).then(() => {
            window.location = '/reserva'
          })
        }
      }
  */

/*
    function modalstep4() {
        let nombre_titular_input = document.getElementById('nombre_titular_input').value;
        let apellido_input = document.getElementById('apellidos_input').value;
        if (nombre_titular_input === "" || apellido_input === "") {
          
          Swal.fire({
            title: `Alerta`,
            text: `Debe de Completar Todos los Campos `,
            icon: 'warning',
            showConfirmButton: true,
            timer: false
          }).then(() => {
            window.location = '/reserva'
          })
        }
      }
      */