function myFunction() {
  var x = document.getElementById('mySelect').value
  if (x === 'TARJETA') {
    document.getElementById('demo').innerHTML = ` 
      <div class="form-group">
      <label for="" class="form-label">Nombre Propietaro</label>
      <input type="text" name="" id="input_pago" placeholder="">
      </div>
      <div class="form-group">
      <label for="" class="form-label">Numero Tarjeta</label>
      <input type="text" name="" id="input_pago" placeholder="">
      </div>
      <div class="form-group">
      <label for="" class="form-label">Fecha Vencimiento</label>
      <input type="date" name="" id="input_pago"  placeholder="">
      </div>
      <div class="form-group">
      <label for="" class="form-label">CVV</label>
      <input type="text" name="" id="input_pago" placeholder="">
      </div>`
  } else if (x === 'DEPOSTIVO EFECTIVO') {
    document.getElementById('demo').innerHTML = `
      <div class="form-group">
      <label for="" class="form-label">Numero Cuenta BCP</label>
      <input type="text" placeholder="XXX-XXXX-XXXX-XXXX" name="" id="input_pago" placeholder="" aria-describedby="helpId">
      </div>
      <div class="form-group">
      <label for="" class="form-label">Tipo de Operacion</label>
      <input type="text" name="" id="input_pago" placeholder="" aria-describedby="helpId">
      </div>
      <div class="form-group">
      <label for="" class="form-label">Hora y Fecha del Pago</label>
      <input type="datetime" name="" id="input_pago" placeholder="" aria-describedby="helpId">
      </div>
      <div class="form-group">
      <label for="" class="form-label">Numero de Operacion</label>
      <input type="text" name="" id="input_pago" placeholder="" aria-describedby="helpId">
      </div>`
  } else {
    document.getElementById('demo').innerHTML = 'ERROR' + x
  }
}

//Botones mas y menos
function cantidad(id_input, operacion) {
  event.preventDefault()
  var numero = $('#' + id_input).val()
  if (operacion == '1') {
    numero++
  } else {
    if (numero <= 0) {
      numero = 1
    }
    numero--
  }
  $('#' + id_input).val(numero)
}

//GET DATA
function getData() {
  let nombre_titular_input = document.getElementById('nombre_titular_input')
    .value
  let apellidos_input = document.getElementById('apellidos_input').value
  let nro_documento_input = document.getElementById('nro_documento_input').value
  let combo_tipo_documento_input = document.getElementById('myselectDocumento') //para obtner el texto

  //let tipo_hab_input = document.getElementById('tipo_hab_input').value

  let email_input = document.getElementById('email_input').value
  let tipo_documento_input =
    combo_tipo_documento_input.options[combo_tipo_documento_input.selectedIndex]
      .text

  let myselectHuespedes_input = document.getElementById('myselectHuespedes')
    .value //para obtner el valor

  let combo_tipo_pago_input = document.getElementById('mySelect') //para obtner el texto

  let tipo_pago_input =
    combo_tipo_pago_input.options[combo_tipo_pago_input.selectedIndex].text

  let simple = parseInt(document.getElementById('1').value)
  let doble = parseInt(document.getElementById('2').value)
  let triple = parseInt(document.getElementById('3').value)
  let matrimonial = parseInt(document.getElementById('4').value)
  let suite = parseInt(document.getElementById('5').value)
  let total = simple + doble + triple + matrimonial + suite
  let totalPagar =
    simple * 100 + doble * 150 + triple * 200 + matrimonial * 250 + suite * 300

  const valor = 'SIMPLE'

  let preadelanto = totalPagar / 2

  document.getElementById('nombre_titular').value = nombre_titular_input
  document.getElementById('apellidos').value = apellidos_input
  document.getElementById('email_data').value = email_input
  document.getElementById('nro_documento').value = nro_documento_input
  document.getElementById('tipo_documento').value = tipo_documento_input

  document.getElementById('nro_personas').value = myselectHuespedes_input

  document.getElementById('nroHabitaciones').value = total
  document.getElementById('totalPagar').value = totalPagar
  document.getElementById('preadelanto').value = preadelanto

  document.getElementById('metodo').value = tipo_pago_input

  /*
  document.getElementById('preadelanto').innerHTML = `
  <label for="dob">Estadia</label>
  <input readonly value="from:  ${preadelanto}" type="text" name="tiempo-estadia" id="tiempo-estadia" />`

  document.getElementById('cuotatotal').innerHTML = `
  <label for="dob">Estadia</label>
  <input readonly value="from:  ${cuota_total}" type="text" name="tiempo-estadia" id="tiempo-estadia" />`
  
*/
}

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

// ROOMS

function roomResult() {
  document.getElementById('tipoHabitaciones').value = sumaHabitaciones()
}

function sumaHabitaciones() {
  let simple = parseInt(document.getElementById('1').value)
  let doble = parseInt(document.getElementById('2').value)
  let triple = parseInt(document.getElementById('3').value)
  let matrimonial = parseInt(document.getElementById('4').value)
  let suite = parseInt(document.getElementById('5').value)

  const valors = ''
  const valord = ''
  const valort = ''
  const valorm = ''
  const valorsuite = ''

  if (simple > 0) {
    valors = 'SIMPLE'
  } else {
    valors
  }

  if (doble > 0) {
    valord = 'DOBLE'
  } else {
    valord
  }

  if (triple > 0) {
    valort = 'TRIPLE'
  } else {
    valort
  }
  if (matrimonial > 0) {
    valorm = 'MATRIMONIAL'
  } else {
    valorm
  }
  if (suite > 0) {
    valorsuite = 'SUITE'
  } else {
    valorsuite
  }

  document.getElementById(
    'tipoHabitaciones',
  ).innerHTML = ` <label for="position">Tipo Habitacion</label>
    <input readonly value=" ${valors} - ${valord} - ${valort} -${valorm} - ${valorsuite}" type="text" name="tipoHabitaciones" />`
}

//VERFY CHHECKBOX

var checkbox = document.getElementById('pre_adelanto_check')
var test = document.getElementById('cuota_total_check')

checkbox.addEventListener('change', comprueba, false)
test.addEventListener('change', comprueba, false)

function comprueba() {
  if (checkbox.checked) {
    document.getElementById('cuota_total_check').disabled = true
  } else {
    document.getElementById('cuota_total_check').disabled = false
  }

  if (test.checked) {
    document.getElementById('pre_adelanto_check').disabled = true
  } else {
    document.getElementById('pre_adelanto_check').disabled = false
  }
}

function getPagoData() {
  //let tipo_hab_input = document.getElementById('tipo_hab_input').value

 
}

//PRICE IN THE CHECKBOX
