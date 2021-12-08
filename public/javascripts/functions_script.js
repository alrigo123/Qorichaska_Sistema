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
  } else if (x === 'DEPOSITO EFECTIVO') {
    document.getElementById('demo').innerHTML = `
      <div class="form-group">
      <label for="" class="form-label">Numero Cuenta BCP</label>
      <input readonly type="text" value="XXX-XXXX-XXXX-XXXX" name="" id="input_pago" placeholder="" aria-describedby="helpId">
      </div>
      <div class="form-group">
      <label for="" class="form-label">Fecha Limite de Deposito</label>
      <input readonly type="text" name="" id="fecha_limite" value="2021-12-11" aria-describedby="helpId">
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
    if (numero >2) {
      numero = 2
    }
    numero++
  } else {
    if (numero <= 0) {
      numero = 1
    }
    numero--
  }
  $('#' + id_input).val(numero)
}











function getPagoData() {
  //let tipo_hab_input = document.getElementById('tipo_hab_input').value

 
}

//PRICE IN THE CHECKBOX
