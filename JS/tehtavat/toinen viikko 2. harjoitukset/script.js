function tarkista1() {
  var luku = document.getElementById('luku1').value;
  if ( luku >= 0 ) {
    document.getElementById('t1').innerHTML = "Luku on positiivinen";
  } else {
    document.getElementById('t1').innerHTML = "Luku on negatiivinen";
  }
}

function dayName() {
  var dayNumber = document.getElementById('dayNumber').value;
  switch (dayNumber) {
    case '1':
      document.getElementById('t2').innerHTML = "Maanantai";
      break;
    case '2':
      document.getElementById('t2').innerHTML = "Tiistai";
      break;
    case '3':
      document.getElementById('t2').innerHTML = "Keskiviikko";
      break;
    case '4':
      document.getElementById('t2').innerHTML = "Torstai";
      break;
    case '5':
      document.getElementById('t2').innerHTML = "Perjantai";
      break;
    case '6':
      document.getElementById('t2').innerHTML = "Lauantai";
      break;
    case '7':
      document.getElementById('t2').innerHTML = "Sunnuntai";
      break;
    default:
      document.getElementById('t2').innerHTML = "Et antanut luku 1-7";
  }
}

function tarkista2() {
  var vuosiLuku = document.getElementById('vuosiLuku').value;
  if (vuosiLuku % 4 === 0 && vuosiLuku % 100 !== 0) {
    document.getElementById('t3').innerHTML = "Vuosi on karkausvuosi";
  } else if (vuosiLuku % 400 === 0) {
        document.getElementById('t3').innerHTML = "Vuosi on karkausvuosi";
  } else {
        document.getElementById('t3').innerHTML = "Vuosi ei ole karkausvuosi";
    }
}

function ToInteger(x) {
    x = Number(x);
    return x < 0 ? Math.ceil(x) : Math.floor(x);
}

function laskeSumma() {
    var t4Luku1 = parseInt(document.getElementById('t4-luku1').value);
    var t4Luku2 = parseInt(document.getElementById('t4-luku2').value);
    var t4Luku3 = parseInt(document.getElementById('t4-luku3').value);
    var t4Luku4 = parseInt(document.getElementById('t4-luku4').value);
    var t4Luku5 = parseInt(document.getElementById('t4-luku5').value);
    var summa = t4Luku1 + t4Luku2 + t4Luku3 + t4Luku4 + t4Luku5;
    document.getElementById('t4').innerHTML = "Lukujen summa on: " + summa + " ja keskiarvo on: " + summa/5;
}

function printLause() {
  var t5Luku = document.getElementById('t5-luku').value;
  var lause = "";
  for (i=1; i<11; i++) {
    lause += t5Luku + ` x ${i} = ` + t5Luku * i + "<br>";
  }
  document.getElementById('t5').innerHTML = lause;
}
