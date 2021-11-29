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

function GetValue(){
  //La fecha es de tipo Date
  var timeStart = document.getElementById('timeStart').value;
  var timeEnd = document.getElementById('timeEnd').value;
document.getElementById('tiempo-estadia').innerHTML = `
<label for="dob">Estadia</label>
<input readonly value="" type="text" name="tiempo-estadia" id="tiempo-estadia" />
from: <strong> ${timeStart} </strong>   to:   <strong> ${timeEnd} </strong>`;
}

// To calculate the days transcurred between two dates
function calculardiasDiscount() {
  var timeStart = new Date(document.getElementById('timeStart').value)
  var fechaLimite = '2030-01-01'
  var timeEnd = new Date(document.getElementById('timeEnd').value)
  if (new Date(timeStart).getTime() < new Date(fechaLimite).getTime()) {
    var actualDate = new Date()
    if (timeEnd > timeStart) {
      //obtener fecha
      var diff = timeEnd.getTime() - timeStart.getTime()
      GetValue()
      document.getElementById('daysDiscount').value = `${Math.round(
        diff / (1000 * 60 * 60 * 24),
      )} días`
    } else if (timeEnd != null && timeEnd < timeStart) {
      document.getElementById('daysDiscount').value = '0 días'
    }
  } else {
    alert('la fecha es menor')
    return false
  }
}

//Valid date

var timeStart = new Date(document.getElementById('timeStart').value)

//Modal
