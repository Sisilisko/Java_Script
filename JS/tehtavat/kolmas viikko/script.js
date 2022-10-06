function parilliset() {
  var luku1 = document.getElementById('luku1').value;
  var parillisetLuvut = [];
  for (i=2;i<=luku1;i=i+2) {
    parillisetLuvut.push(i);
  }
  document.getElementById('t1').innerHTML = parillisetLuvut.join(" ");
}

function muuttaaSalasana() {
  var salaSana = document.getElementById('salasana').value;
  var salaArray = Array.from(salaSana);
  var secretLetter = 'Ö';
  var newSalaArray = [];
  for (i=0; i<salaArray.length; i++) {
      newSalaArray.push(salaArray[i]);
      newSalaArray.push(secretLetter);
  }
  document.getElementById('t2').innerHTML = newSalaArray.join("");
}

function tarkistaÖ() {
  var sana = document.getElementById('sana').value;
  if (/[ö]/i.test(sana)) {
    document.getElementById('t3').innerHTML = "On";
  } else {
    document.getElementById('t3').innerHTML = "Ei ole";
  }
}

function laskeKertoma() {
  var tulosLuku = 1;
  for (kertomaLuku = document.getElementById('t4-luku').value;kertomaLuku>1;kertomaLuku--) {
    tulosLuku *= kertomaLuku;
  }
  document.getElementById('t4').innerHTML = tulosLuku;
}

function tulosta100() {
  var array100 = [];
  for (i=1;i<101;i++) {
    array100.push(i);
  }
  for (var j = 0; j < array100.length; j++) {
    console.log('foo');
    if (array100[j] % 5 === 0 && array100[j] % 3 === 0) {
      array100[j]="Hip Heijaa";
    } else if (array100[j] % 5 === 0) {
      array100[j]="Heijaa";
    } else if (array100[j] % 3 === 0) {
      array100[j]="Hip";
    }
  }
  document.getElementById('t5').innerHTML = array100.join(" ");
}

function print10() {
  var array10 = [];
  for (i=1;i<11;i++) {
    array10.push(i);
  }
  document.getElementById('t6').innerHTML = array10.join(" ");
}

function summaEns10() {
  var tulosSummaEns10 = 0;
  for (var ensLuku = 1; ensLuku < 11; ensLuku++) {
    tulosSummaEns10 += ensLuku;
  }
  document.getElementById('t7').innerHTML = tulosSummaEns10;
}

function laskePotenssi() {
  var t8Luku1 = document.getElementById('t8-luku1').value;
  var t8Luku2 = document.getElementById('t8-luku2').value;
  document.getElementById('t8').innerHTML = t8Luku1 ** t8Luku2;
}
