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
