var kerrat = 0;
var luvut = document.getElementsByClassName('nayta');
let arvoLuku = Math.ceil(Math.random()*10);
let win = 0;
var winNumero = 0;
var loseNumero = 0;

function arvaa(arpa) {
  kerrat++;
  var arvaus = arpa.value;
  if ((kerrat < 3)&&(win==0)) {
    if (arvaus < arvoLuku) {
      document.getElementById('viesti').innerHTML = 'Your guess is too low.';
      document.getElementById(''+arvaus+'').classList.add("vaarin");
      document.getElementById(''+arvaus+'').disabled = true;
    } else if(arvaus > arvoLuku) {
      document.getElementById('viesti').innerHTML = 'Your guess is too high.';
      document.getElementById(''+arvaus+'').classList.add("vaarin");
      document.getElementById(''+arvaus+'').disabled = true;
    } else if (arvaus == arvoLuku) {
      document.getElementById('viesti').innerHTML ='Win! It took you ' + kerrat + ' turns.<br><button class="taas" onclick="pelaaTaas()">Play again</button>';
      document.getElementById(''+arvoLuku+'').classList.toggle("oikein");
      win = 1;
      winNumero += 1;
      document.getElementById('winNumber').innerHTML = winNumero;
    }
  } else if ((kerrat==3)&&(win==0)) {
    if (arvaus < arvoLuku) {
      document.getElementById('viesti').innerHTML = 'You guess is too low and no turns left.<br> The correct number is ' + arvoLuku + '.<br><button class="taas" onclick="pelaaTaas()">Play again</button>';
      document.getElementById(''+arvaus+'').classList.add("vaarin");
      document.getElementById(''+arvaus+'').disabled = true;
      loseNumero += 1;
      document.getElementById('loseNumber').innerHTML = loseNumero;
      document.getElementById(''+arvoLuku+'').classList.add("levitate");
      document.getElementById(''+arvaus+'').disabled = true;
    } else if(arvaus > arvoLuku) {
      document.getElementById('viesti').innerHTML = 'You guess is too high and no turns left.<br> The correct number is ' + arvoLuku + '.<br><button class="taas" onclick="pelaaTaas()">Play again</button>';
      document.getElementById(''+arvaus+'').classList.toggle("vaarin");
      loseNumero += 1;
      document.getElementById('loseNumber').innerHTML = loseNumero;
      document.getElementById(''+arvoLuku+'').classList.add("levitate");
      document.getElementById(''+arvaus+'').disabled = true;
    } else if (arvaus == arvoLuku) {
      document.getElementById('viesti').innerHTML ='Win! It took you ' + kerrat + ' turns.<br><button class="taas" onclick="pelaaTaas()">Play again</button>';
      document.getElementById(''+arvoLuku+'').classList.toggle("oikein");
      win = 1;
      winNumero += 1;
      document.getElementById('winNumber').innerHTML = winNumero;
    }
  } else if (win==1){
      document.getElementById('viesti').innerHTML ='You already found the right number, that is ' +arvoLuku + '.<br><button class="taas" onclick="pelaaTaas()">Play again</button>';
      document.getElementById(''+arvoLuku+'').classList.add("oikein");
  }
}
//play again
function pelaaTaas() {
  for (i=0;i<luvut.length;i++) {
    luvut[i].classList.remove("vaarin");
    luvut[i].classList.remove("oikein");
    luvut[i].classList.remove("levitate");
    luvut[i].disabled = false;
  }
  kerrat = 0;
  win = 0;
  arvoLuku = Math.ceil(Math.random()*10);
  document.getElementById('viesti').innerHTML = '';
}

animation()
