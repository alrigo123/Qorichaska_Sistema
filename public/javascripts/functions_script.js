function date() {
  var today = new Date()
  var dd = today.getDate()+3
  var mm = today.getMonth() + 1 //January is 0!
  var yyyy = today.getFullYear()
  if (dd < 10) {
    dd = '0' + dd
  }
  if (mm < 10) {
    mm = '0' + mm
  }
  return (today = mm + '/' + dd + '/' + yyyy)
}

function number(){
  var a = document.getElementById('input_pago').value;

  var res = a.replace(/(a{4})(\B)/g,"$1-");
  
  console.log(res);
}



function myFunction() {
  var x = document.getElementById('mySelect').value
  if (x === 'TARJETA') {
    document.getElementById('demo').innerHTML = ` 
      <div class="form-group">
      <label for="" class="form-label">Nombre Propietaro</label>
      <input class="text-center" type="text" name="" id="input_pago" placeholder="Juan Perez">
      </div>
      <div class="form-group">
      <label for="" class="form-label">Numero Tarjeta</label>
      <input class="text-center" type="text" name="" id="input_pago" maxlength="16" placeholder="0000000000000">
      </div>
      <div class="form-group">
      <label for="" class="form-label">Fecha Vencimiento</label>
      <input class="text-center" type="date" name="" id="input_pago"  placeholder="">
      </div>
      <div class="form-group">
      <label for="" class="form-label">CVV</label>
      <input class="text-center" type="text" name="" id="input_pago" maxlength="3" placeholder="123">
      </div>`
  } else if (x === 'DEPOSITO EFECTIVO') {
    document.getElementById('demo').innerHTML = `
      <div class="form-group">
      <label for="" class="form-label">Numero Cuenta BCP</label>
      <input class="text-center" readonly type="text" value="123-456-7890-0000" name="" id="input_pago" placeholder="" aria-describedby="helpId">
      </div>
      <div class="form-group">
      <label for="" class="form-label">Fecha Limite de Deposito</label>
      <input class="text-center" readonly type="text" name="" id="fecha_limite" value="${date()}" aria-describedby="helpId">
      </div>
      <div class="form-group">
      <label for="" class="form-label">Si no realiza el pago hasta la fecha
      <input class="text-center" readonly type="text" id="fecha_limite" value="${date()}" style="text-align:left;
      width: 15%;
      display: inline;
      border: 1px none red;
      background-color: transparent;font-weight: bold;font-size:14px;color:#A40000;">su reserva sera anulada</label>
      </div>
      `
  } else {
    document.getElementById('demo').innerHTML = 'ERROR' + x
  }
}

//Botones mas y menos
function cantidad(id_input, operacion) {
  event.preventDefault()
  var numero = $('#' + id_input).val()
  if (operacion == '1') {
    if (numero > 2) {
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


//PRICE IN THE CHECKBOX
