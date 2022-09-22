function tulosta () {
  var etunimi = document.getElementById('etunimi').value;
  var sukunimi = document.getElementById('sukunimi').value;
  var transport = document.getElementsByName('transport');
  var kouluun = 0;
  var lempitunti = document.getElementById('lempitunti').value;

  for (var i=0;i<transport.length; i++) {
    if(transport[i].checked) {
      kouluun = transport[i].value;
    }
  }

  if (etunimi == "") {
    alert("Kirjoita etunimi, kiitos!");
  } else if (sukunimi == "") {
    alert("Kirjoita sukunimi, kiitos!")
  } else if (kouluun == 0) {
    alert ("Ole hyvä ja valitse, millä tulit kouluun, kiitos!")
  } else if (lempitunti == "") {
    alert ("Ole hyvä ja valitse lempituntisi koulussa, kiitos!")
  } else {
    document.getElementById('v1').innerHTML = "Annoit seuraavat tiedot:<br>Hei " + etunimi + " " + sukunimi +".<br> Tulit kouluun " + kouluun + ".<br> Lempituntisi koulussa on: " +lempitunti + ".";
  }
}
