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




// 2. Funcion que a la fecha de hoy se sume 3 dias y se ponga en input
function sumartresDias(){
  if (timeStart != null && timeEnd == null) {
    var hoy = new Date(timeStart)
    var suma = new Date(hoy.addDays(3))
    document.getElementById('timeEnd').value = suma
  }
}

// 3. que la fecha de nacimiento sea mayor de 18
function mayorEdad(){
  var fecha_nac = new Date(document.getElementById('fecha_nac').value)
  var Edad = calcularEdad(fecha_nac)
  if(Edad >= 18){
    return true
  }
  else{
    alert('Usted no es mayor de edad')
    document.getElementById('fecha_nac').value = ''
    return false
  }
}

function calcularEdad(fecha_nac){
  var hoy = new Date();
  var cumpleanos = new Date(fecha_nac);
  var edad = hoy.getFullYear() - cumpleanos.getFullYear();
  var m = hoy.getMonth() - cumpleanos.getMonth();
  if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
      edad--;
  }
  return edad;
}