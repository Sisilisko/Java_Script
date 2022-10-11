var kerrat = 0;
var luvut = document.getElementsByClassName('nayta');
let arvoLuku = Math.ceil(Math.random()*10);
let win = 0;
var winNumero = 0;
var loseNumero = 0;

function arvaa(arpa) {
  kerrat++;
  var arvaus = arpa.value;
  if ((kerrat <= 3)&&(win==0)) {
    if (arvaus < arvoLuku) {
      document.getElementById('viesti').innerHTML = 'Valitsit liian pienen numeron';
      document.getElementById(''+arvaus+'').classList.toggle("vaarin");
    } else if(arvaus > arvoLuku) {
      document.getElementById('viesti').innerHTML = 'Valitsit liian suuren numeron';
      document.getElementById(''+arvaus+'').classList.toggle("vaarin");
    } else if (arvaus == arvoLuku) {
      document.getElementById('viesti').innerHTML ='Oikein, käytit ' + kerrat + ' kertaa<br><button class="taas" onclick="pelaaTaas()">Pelaa taas</button>';
      document.getElementById(''+arvoLuku+'').classList.toggle("oikein");
      win = 1;
      winNumero += 1;
      document.getElementById('winNumber').innerHTML = winNumero;
    }
  } else if (win==1){
      document.getElementById('viesti').innerHTML ='Löysit jo oikean luvun<br><button class="taas" onclick="pelaaTaas()">Pelaa taas</button>';
      document.getElementById(''+arvoLuku+'').classList.add("oikein");
  } else {
    document.getElementById('viesti').innerHTML = 'Käytit kaikki arvauksesi, oikea luku on ' + arvoLuku + '<br><button class="taas" onclick="pelaaTaas()">Pelaa taas</button>';
    loseNumero += 1;
    document.getElementById('loseNumber').innerHTML = loseNumero;
  }
}

function pelaaTaas() {
  for (i=0;i<luvut.length;i++) {
    luvut[i].classList.remove("vaarin");
    luvut[i].classList.remove("oikein");
    console.log(win);
  }
  kerrat = 0;
  win = 0;
  arvoLuku = Math.ceil(Math.random()*10);
  document.getElementById('viesti').innerHTML = '';
}
