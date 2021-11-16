;(function ($) {
  'use strict'

  $('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 60,
  })

  $('#topNav').affix({
    offset: {
      top: 200,
    },
  })

  new WOW().init()

  $('a.page-scroll').bind('click', function (event) {
    var $ele = $(this)
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: $($ele.attr('href')).offset().top - 60,
        },
        1450,
        'easeInOutExpo',
      )
    event.preventDefault()
  })

  $('.navbar-collapse ul li a').click(function () {
    /* always close responsive nav after click */
    $('.navbar-toggle:visible').click()
  })

  $('#galleryModal').on('show.bs.modal', function (e) {
    $('#galleryImage').attr('src', $(e.relatedTarget).data('src'))
  })
})(jQuery)

function myFunction() {
  var x = document.getElementById('mySelect').value
  if (x === 'Tarjeta') {
    document.getElementById(
      'demo',
    ).innerHTML = ` 
    <div class="mb-3">
    <label for="" class="form-label">Numero Tarjeta</label>
    <input type="text" name="" id="input_pago" class="form-control" placeholder="" aria-describedby="helpId">
    </div>
    <div class="mb-3">
    <label for="" class="form-label">Nombre Propietaro</label>
    <input type="text" name="" id="input_pago" class="form-control" placeholder="" aria-describedby="helpId">
    </div>
    <div class="mb-3">
    <label for="" class="form-label">Fecha Vencimiento</label>
    <input type="date" name="" id="input_pago" class="form-control" placeholder="" aria-describedby="helpId">
    </div>
    <div class="mb-4">
    <label for="" class="form-label">CV</label>
    <input type="text" name="" id="input_pago" class="form-control" placeholder="" aria-describedby="helpId">
    </div>`
  } else if (x === 'Deposito') {
    document.getElementById(
      'demo',
    ).innerHTML = `
    <div class="mb-3">
    <label for="" class="form-label">Numero Cuenta BCP</label>
    <input type="text" placeholder="XXX-XXXX-XXXX-XXXX" name="" id="input_pago" class="form-control" placeholder="" aria-describedby="helpId">
    </div>
    <div class="mb-3">
    <label for="" class="form-label">Tipo de Operacion</label>
    <input type="text" name="" id="input_pago" class="form-control" placeholder="" aria-describedby="helpId">
    </div>
    <div class="mb-3">
    <label for="" class="form-label">Hora y Fecha del Pago</label>
    <input type="datetime" name="" id="input_pago" class="form-control" placeholder="" aria-describedby="helpId">
    </div>
    <div class="mb-4">
    <label for="" class="form-label">Numero de Operacion</label>
    <input type="text" name="" id="input_pago" class="form-control" placeholder="" aria-describedby="helpId">
    </div>`
  } else {
    document.getElementById('demo').innerHTML = 'ERROR' + x
  }
}

// To calculate the days transcurred between two dates
function calculardiasDiscount() {
  var timeStart = new Date(document.getElementById('timeStart').value)
  var fechaLimite = '2030-01-01'
  var timeEnd = new Date(document.getElementById('timeEnd').value)
  if (new Date(timeStart).getTime() < new Date(fechaLimite).getTime()) {
    var actualDate = new Date()
    if (timeEnd > timeStart) {
      var diff = timeEnd.getTime() - timeStart.getTime()
      document.getElementById('daysDiscount').value = `${Math.round(
        diff / (1000 * 60 * 60 * 24),)} días`

    } else if (timeEnd != null && timeEnd < timeStart) {
      (document.getElementById('daysDiscount').value = '0 días')
    }
  } else {
    alert('la fecha es menor')
    return false
  }
}

//Valid date

var timeStart = new Date(document.getElementById('timeStart').value)
