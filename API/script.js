function getHumanData() {
  fetch("https://randomuser.me/api/")
  .then(response => response.json())
  .then(data => {
    console.log(data.results[0]);
    var data = data.results[0];
    document.getElementById('human-data').innerHTML =
    "<b>Nimi:</b> " + data.name.title + " " + data.name.first + " " + data.name.last +
    "<br><b>Sukupuoli:</b> " + data.gender +
    "<br><b>Osoite:</b> " + data.location.street.number + " " + data.location.street.name + "<br>" +
    data.location.city + " " + data.location.state + "<br>" +
    data.location.postcode + " " + data.location.country +
    "<br><b>Puhelin:</b> " + data.phone +
    "<br><b>Maa:</b> " + data.location.country +
    "<br><b>Käyttäjätunnus + salasana:</b> " + data.login.username + " " + data.login.password +
    "<br><b>Syntymäaika:</b> " + data.dob.date +
    "<br><b>Sähköposti:</b> " + data.email;
    document.getElementById("human-photo").src = data.picture.large;
  } );
}

function getCatData()
{
  fetch('cats.json')
  .then(response => response.json())
    .then(data => {
      var randowNumber = Math.floor(Math.random()*278);
      document.getElementById('cat-data').innerHTML = data[randowNumber];
    })
}
