//tehtävä 1
function laskePisteet() {
  var pisteet = 0;
  var sana1 = Array.from(document.getElementById('sana1').value);

  for (i=0;i<sana1.length;i++) {
    if (/A|E|I|N|S|T/i.test(sana1[i])) {
      pisteet += 1;
    } else if (/O|Ä|K|L/i.test(sana1[i])) {
      pisteet += 2;
    } else if (/U|M/i.test(sana1[i])) {
      pisteet += 3;
    } else if (/Y|H|J|P|R|V/i.test(sana1[i])) {
      pisteet += 4;
    } else if (/Ö|D/i.test(sana1[i])) {
      pisteet += 7;
    } else if (/B|F|G/i.test(sana1[i])) {
      pisteet += 8;
    } else if (/C/i.test(sana1[i])) {
      pisteet += 10;
    } else {
      pisteet += 12;
    }
  }
  document.getElementById('t1').innerHTML = "Sanan " + sana1.join('') + " pisteet ovat: " + pisteet;
}
//tehtävä 2
function lotto() {
  var winNumero = [];

  for (i=0; i<7; i++) {
    var randomNumber = Math.floor(Math.random()*40)+1;
    winNumero.push(randomNumber);
  }
  document.getElementById('t2').innerHTML = winNumero.join(' ');
}
// tehtävä 3
function muunnaTaulukoksi()
{
  var jono = [];
  jono = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
  var taulu = '<table border="1">';
  for(var j = 0; j < jono.length; j++) {
    taulu += '<tr>';
    for(var k = 0; k < jono[j].length; k++) {
      taulu += '<td>' + jono[j][k] + '</td>';
    }
    taulu += '</tr>';
  }
  taulu += '</table>';
  document.getElementById('t3').innerHTML = taulu;
}
//tehtävä 4
function arvoKortit() {
  var pakka = [''];
  var maat = ['&#9828;', '&#9827;', '&#9826;', '&#9825;'];
  var numerot = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
  laskuri = 0;
  for(m = 0; m < maat.length; m++) {
    for(n = 0; n < numerot.length; n++) {
      if(m == maat.length-1 && n == numerot.length-1) {
        pakka[laskuri] = maat[m] + numerot[n];
      } else {
        pakka[laskuri] = maat[m]+numerot[n];
        laskuri++;
      }
    }
  }
  var kortit = [];
  for(l = 0; l < 5; l++) {
    temp = pakka[Math.floor(Math.random()*52)];
    kortit[l] = temp;
  }
  document.getElementById('t4').innerHTML = '<p>'+kortit.join('&nbsp&nbsp&nbsp')+'</p>';
}
