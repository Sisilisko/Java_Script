function formValidation(form) {
  var firstName = form.firstName.value;
  var lastName = form.lastName.value;
  var address = form.address.value;
  var postIndex = form.index.value;
  var city = form.city.value;
  var check = form.phone.value;
  var email = form.email.value;
//Tarkistetaan etunimi
var regName = /^[a-zöäåA-ZÖÄÅ]+[a-zöäåA-ZÖÄÅ]+$/;
console.log(regName.test(firstName));
  if(firstName.length < 3 || !regName.test(firstName)) {
    alert("Please enter your first name that is at least 3 characters long and uses only a-z, A-Z characters.");
    form.firstName.focus();
    return false;
  }
//Tarkistetaan sukunimi
  if(lastName.length < 3 || !regName.test(lastName)) {
    alert("Please enter your last name that is at least 3 characters long and uses only a-z, A-Z characters.");
    form.lastName.focus();
    return false;
  }
//Tarkistetaan sähköposti
  if(emailIsValid(sahkoposti)==false) {
    alert("Anna oikea sähköpostiosoitteesi");
    form.sposti.focus();
    return (false);
  }
//Tarkistetaan palaute viesti
  if(palaute.length < 20)
  {
    alert("Palautteessa pitää olla vähintään 20 merkkiä");
    form.palaute.focus();
    return false;
  }
//Tarkistetaan radiobutton "miten kuulit tästä kyselystä"
  var vastaus = false;
  for(var i = 0; i < pallukka.length; i++) {
    if(pallukka[i].checked == true) {
      vastaus = true;
    }
 }
    if(vastaus == false) {
      alert('Et ole valinnut miten kuulit tästä kyselystä');
      return false;
    }
//Tarkistetaan checkbox "miten pääset töihin"
  var checkvastaus = false;
  for(var j = 0; j < check.length; j++) {
    if(check[j].checked == true) {
      checkvastaus = true;
    }
  }
  if(checkvastaus == false) {
    alert("Et valinnut, miten pääset töihin");
    return false;
  } else {alert("Kiitos lomakkeen täytöstä");}
}
// Tyhjennetään lomake
function formReset(form) {
  var clean = form.value;
  if(!confirm("Oletko varma?"))
  {
    return false;
  }
}
//Functio joka tarkistaa sähköpostin
function emailIsValid (email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
