function heippa(terve="maailma") {
  var sana = "hei ";
  alert(`${sana} ${terve} !`);
}

function laskeYhteen(l1,l2) {
  var yhteensa = l1 + l2;
  return yhteensa;
}

function tulosta(l1,l2) {
  var vastaus = laskeYhteen(l1,l2);
  alert(vastaus);
}

function onkoSamat(lu1,lu2) {
  if (lu1==lu2) {
    alert("Luvut ovat samat!")
  } else {
    alert("Luvut eivät ole samaa!")
  }
}

function eriSuuret(l1,l2) {
  if (l1 != l2) {
    alert("Luvut ovat erisuuret!");
  } else {
    alert("Luvut ovat samat");
  }
}
