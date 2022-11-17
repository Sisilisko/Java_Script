function formValidation(form) {
  var firstName = form.firstName.value;
  var lastName = form.lastName.value;
  var address = form.address.value;
  var postIndex = form.index.value;
  var city = form.city.value;
  var phone = form.phone.value;
  var email = form.email.value;
//Tarkistetaan etunimi
  var regName = /^[a-zöäåA-ZÖÄÅ]+[a-zöäåA-ZÖÄÅ]+$/;

  if(firstName.length < 3 || !regName.test(firstName)) {
    alert("Please enter your first name that is at least 3 characters long and uses only letters.");
    form.firstName.focus();
    return false;
  }
//Tarkistetaan sukunimi
  if(lastName.length < 3 || !regName.test(lastName)) {
    alert("Please enter your last name that is at least 3 characters long and uses only letters.");
    form.lastName.focus();
    return false;
  }
//Tarkistetaan address
  if(address.length < 3) {
    alert("Please enter your correct address.");
    form.address.focus();
    return false;
  }
//Tarkistetaan postIndex
  if (!(/^[0-9]{5,6}$/.test(postIndex))) {
    alert("Please enter your post index that is 5 or 6 digits long.");
    form.index.focus();
    return false;
  }
//Tarkistetaan city
  if(address.city < 3) {
    alert("Please enter your correct city.");
    form.city.focus();
    return false;
  }
//Tarkistetaan phone
  if (!(/^[0-9]{7,15}$/.test(phone))) {
    alert("Please enter your phone number that is 7 or 15 digits long.");
    form.phone.focus();
    return false;
  }
  //Tarkistetaan sähköposti
  if(emailIsValid(email)==false) {
    alert("Please enter your correct email.");
    form.email.focus();
    return false;
  }
//Functio joka tarkistaa sähköpostin
  function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }
};
// Tyhjennetään lomake
function formClean(form) {
  var clean = form.value;
  if(!confirm("Are you sure that you want to clear the form?"))
  {
    return false;
  }
}
