var startNumber = '';
var number = '';
var taulu = ['+','-','*','/','%'];
var index = 0;

function add(number) {
  startNumber+= number;
  document.getElementById('operation').innerHTML = startNumber;
}

function laske() {
  var indeksi, jono;
  if(startNumber.search("%") > 0) {
    jono = startNumber.split('%'); // startNumber = 15%330 --> jono = [15, 330];
    startNumber = jono[0] * jono[1] / 100;

    document.getElementById('result').innerHTML = startNumber;
  } else{
    document.getElementById('result').innerHTML = eval(startNumber);


  }
}

function reset() {
  startNumber = '';
  document.getElementById('result').innerHTML = startNumber;
  document.getElementById('operation').innerHTML = startNumber;
}

function removeLast() {
  /*for(var i = 0; i < startNumber.length; i++) {
    for(var j = 0; j < taulu.length; j++) {
      if(startNumber[i] == taulu[j]) {
        index = i;
      }
    }
  }
  startNumber = startNumber.substr(0, index);*/
  startNumber = startNumber.substr(0, startNumber.length - 1);
  document.getElementById('operation').innerHTML = startNumber;
}

function save() {
  const time = new Date();
  const timeStr = time.toLocaleTimeString();
  document.getElementById('savedNotes').insertAdjacentHTML("beforeend", `${timeStr}: ${new String(startNumber)} = ${eval(startNumber)}<br>`);
}
