var randomIndex = Math.floor(Math.random()*7);

function getBirdData() {
  fetch("birds.json")
  .then(response => response.json())
  .then(data => {
    console.log(randomIndex);
    console.log(data.birds[randomIndex]);
    let bird = data.birds[randomIndex];
    document.getElementById('bird-photo').src = bird.picture;
    document.getElementById('bird-name').innerHTML = "<img src='images/eng.png' width='25'>" + bird.name + "<br>" + "<img src='images/fin.png' width='25'>" + bird.name_fin;
    document.getElementById('bird-sound').src = bird.sound;
  } );
  randomIndex ++;
  if (randomIndex==7) {
    randomIndex = 0;
  }
}

getBirdData();
document.getElementById('next-btn').addEventListener("click", getBirdData);
