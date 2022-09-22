function tulosta () {
  var etunimi = document.getElementById('enimi').value;
  var sukunimi = document.getElementById('snimi').value;
  if (etunimi == "" || sukunimi == "") {
    alert("Etunimi tai sukunimi on tyhjä!");
  } else {
    document.getElementById('v1').innerHTML = "Hei " + etunimi + " " + sukunimi;
  }
}
