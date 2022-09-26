function kolme1() {
  var luku = [];
  luku[0] = document.getElementById('luku1').value;
  luku[1] = document.getElementById('luku2').value;
  luku[2] = document.getElementById('luku3').value;

  document.getElementById('t1').innerHTML = "Annoit luvut: " + luku +"<br>Lukujen järjestys: " + luku.sort();
}

function suurinNumero() {
  var luku = [];
  luku[0] = document.getElementById('t2-luku1').value;
  luku[1] = document.getElementById('t2-luku2').value;
  luku[2] = document.getElementById('t2-luku3').value;
  luku[3] = document.getElementById('t2-luku4').value;
  luku[4] = document.getElementById('t2-luku5').value;
  console.log(luku);
  document.getElementById('t2').innerHTML = "Annoit luvut: " + luku + "<br>Suurin numero: " + Math.max.apply(null, luku);
}

function pariNumero() {
  var luku = document.getElementById('t3-luku').value;
  if ( luku%2 == 0 ) {
    document.getElementById('t3').innerHTML = "Antamasi luku: " + luku + "<br>Antamasi luku on parillinen";
  } else {
    document.getElementById('t3').innerHTML = "Antamasi luku: " + luku + "<br>Antamasi luku on pariton";
  }
}

function tarkistaIka() {
  var ika = document.getElementById('t4-luku').value;
  if (ika<16) {
    document.getElementById('t4').innerHTML = "Voit ajaa polkupyörää";
  } else if (ika<18) {
    document.getElementById('t4').innerHTML = "Voit ajaa mopoa";
  } else {
    document.getElementById('t4').innerHTML = "Voit ajaa autoa";
  }
}

function translateText() {
  var omaKieli = document.getElementById('kieli').value;
  if (omaKieli == "Englanti") {
    document.getElementById('t5').innerHTML = "Valitsit kielen: " + omaKieli +"<br>Hello world!";
  } else if (omaKieli == "Ruotsi") {
    document.getElementById('t5').innerHTML = "Valitsit kielen: " + omaKieli +"<br>Hej världen!";
  } else {
    document.getElementById('t5').innerHTML = "Valitsit kielen: " + omaKieli +"<br>Hola Mundo!";
  }
}
