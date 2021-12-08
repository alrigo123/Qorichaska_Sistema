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
      simple * 100 + doble * 150 + triple * 200 + matrimonial * 250 + suite * 350
  
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
  
  
  
  
  //TIPP PAGO INPUT EN LOS CHJECK BOOX
  //VERFY CHHECKBOX
  
  var checkbox = document.getElementById('pre_adelanto_check')
  var test = document.getElementById('cuota_total_check')
  
  checkbox.addEventListener('change', comprueba, false)
  test.addEventListener('change', comprueba, false)
  
  function comprueba() {
    if (checkbox.checked) {
      document.getElementById('cuota_total_check').disabled = true
      //document.getElementById('cuotatoal').value = CUOTA_TOTAL   -- example
    } else {
      document.getElementById('cuota_total_check').disabled = false
    }
  
    if (test.checked) {
      document.getElementById('pre_adelanto_check').disabled = true
    } else {
      document.getElementById('pre_adelanto_check').disabled = false
    }
  }