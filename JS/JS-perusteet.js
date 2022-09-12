function laskut() {
  var luku1, luku2, summa, erotus, osamaara, tulo;
  luku1 = 10;
  luku2 = 2;
  summa = luku1 + luku2;
  erotus = luku1 - luku2;
  osamaara = luku1 / luku2;
  tulo = luku1 * luku2;
  console.log("Summa: " + summa);
  console.log("Erotus: " + erotus);
  console.log("Osamäärä: " + osamaara);
  console.log("Tulo: " + tulo);
}

function liitaSanat() {
  var t1='Tänään',
      t2='on',
      t3='maanantai.';
  console.log(`${t1} ${t2} ${t3}`);
}

function atribuutti(nimi) {
  var t1 = 'on',
      t2 = 'hyvä tyyppi';
  console.log(`${nimi} ${t1} ${t2}.`);
}

function laskeYhteen(luku1, luku2) {
  console.log(luku1 + luku2);
}
