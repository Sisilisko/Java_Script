//tehtävä 1
function parilliset() {
  var luku1 = document.getElementById('luku1').value;
  var parillisetLuvut = [];
  for (i=2;i<=luku1;i=i+2) {
    parillisetLuvut.push(i);
  }
  document.getElementById('t1').innerHTML = parillisetLuvut.join(" ");
}
//tehtävä 2
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
//tehtävä 3
function tarkistaÖ() {
  var sana = document.getElementById('sana').value;
  if (/[ö]/i.test(sana)) {
    document.getElementById('t3').innerHTML = "On";
  } else {
    document.getElementById('t3').innerHTML = "Ei ole";
  }
}
//tehtävä 4
function laskeKertoma() {
  var tulosLuku = 1;
  for (kertomaLuku = document.getElementById('t4-luku').value;kertomaLuku>1;kertomaLuku--) {
    tulosLuku *= kertomaLuku;
  }
  document.getElementById('t4').innerHTML = tulosLuku;
}
//tehtävä 5
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
//tehtävä 6
function print10() {
  var array10 = [];
  for (i=1;i<11;i++) {
    array10.push(i);
  }
  document.getElementById('t6').innerHTML = array10.join(" ");
}
//tehtävä 7
function summaEns10() {
  var tulosSummaEns10 = 0;
  for (var ensLuku = 1; ensLuku < 11; ensLuku++) {
    tulosSummaEns10 += ensLuku;
  }
  document.getElementById('t7').innerHTML = tulosSummaEns10;
}
//tehtävä 8
function laskePotenssi() {
  var t8Luku1 = document.getElementById('t8-luku1').value;
  var t8Luku2 = document.getElementById('t8-luku2').value;
  document.getElementById('t8').innerHTML = t8Luku1 ** t8Luku2;
}
//tehtävä 9
function searchMaxAndMin() {
  var t9Array = [];
  t9Array[0] = document.getElementById('t9-luku1').value;
  t9Array[1] = document.getElementById('t9-luku2').value;
  t9Array[2] = document.getElementById('t9-luku3').value;
  t9Array[3] = document.getElementById('t9-luku4').value;
  t9Array[4] = document.getElementById('t9-luku5').value;
  document.getElementById('t9').innerHTML = "Pienin luku: " + Math.min.apply(null, t9Array) + " ja suurin luku: " + Math.max.apply(null, t9Array);
}
//tehtävä 10
function randowSalasana() {
  var salasana10 = document.getElementById('t10-luku').value;
  var salaArray10 = Array.from(salasana10);
  var randomLetter = [...'abcdefghijklmnopqrstuvwxyzäöå'];
  var newSalaArray = [];
  for (i=0; i<salaArray10.length; i++) {
      newSalaArray.push(salaArray10[i]);
      newSalaArray.push(randomLetter[Math.floor(Math.random()*randomLetter.length)]);
  }
  document.getElementById('t10').innerHTML = newSalaArray.join("");
}
//tehtävä 11
function pariSummat() {
  var pnro = parseInt(document.getElementById('t11-luku-p').value);
  var inro = parseInt(document.getElementById('t11-luku-i').value);
  var palku, ralku, psumma=0, rsumma=0, pluvut='', rluvut='';
  if(pnro%2 == 0) {
    palku = pnro;
  } else {
    palku = pnro+1;
  };
  for (var b=palku;b<=inro; b+=2) {
    pluvut += b + ' ';
    psumma += b;
  };
  if(pnro%2 == 0) {
    ralku = pnro+1;
  } else {
    ralku = pnro;
  }
  for(var r = ralku; r<=inro; r+=2) {
    rluvut += r + ' ';
    rsumma += r;
  }
  document.getElementById('t11').innerHTML = '<p>Parilliset numerot: ' + pluvut +' ja niiden summa: ' + psumma + '</p><p>Parittomat luvut: ' + rluvut + ' ja niiden summa: '+ rsumma + '</p>';
}
