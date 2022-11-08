const cards = document.querySelectorAll('.memory-card');
var matchNumber = 0;
var turnNumber = 0;

/*START OF CONTROL BUTTONS*/
const timer = document.getElementById('timerid');
const btnStart = document.getElementById('start-button');
const btnReset = document.getElementById('reset-button');
const btnPause = document.getElementById('pause-button');
var value;
var isPause = false;
let mins = 0;
let secs = 0;

const game = {timer:null,start:null,end:null};

btnReset.disabled = true;
btnPause.disabled = true;
btnStart.addEventListener('click',start);
btnReset.addEventListener('click',reset);
btnPause.addEventListener('click',pause);

function start(){
   console.log('start');
   cards.forEach(card => card.addEventListener('click', flipCard));
   showTimer();
   btnStart.disabled = true;
   btnPause.disabled = false;
   btnReset.disabled = false;
   var date = new Date();
   game.start = date.getTime();
}

function pause(){
  if (isPause==false) {
    cards.forEach(card => card.removeEventListener('click', flipCard));
    console.log('pause');
    value = timer.textContent;
    console.log(value);
    clearInterval(game.timer);
    btnPause.innerHTML = 'RESUME';
    isPause = true;
    secs = value.slice(value.length - 2);
    mins = value.substring(0,2);
    return(secs,mins);
  }else{
    console.log('nyt');
    showTimer(mins,secs);
    isPause = false;
    btnPause.innerHTML = 'PAUSE';
    cards.forEach(card => card.addEventListener('click', flipCard));
  }
}

function reset(){
  matchNumber = 0;
  turnNumber = 0;
  document.getElementById('matchNumber').innerHTML = matchNumber;
  document.getElementById('turnNumber').innerHTML = turnNumber;
   console.log('end');
   cards.forEach(card => card.removeEventListener('click', flipCard));
   cards.forEach(card => card.classList.remove('flip'));
   btnStart.disabled = false;
   btnPause.disabled = true;
   btnReset.disabled = true;
   const date = new Date();
   game.end = date.getTime();
   const totalTime = ((game.end-game.start)/1000);
   console.log(totalTime);
   mins=0;
   secs=0;
   timer.textContent = '00:00';
   if(game.timer){
       clearInterval(game.timer);
   }
}

function showTimer(){
   game.timer = setInterval(()=>{
        secs = Number(secs);
        mins = Number(mins);
        secs += 1;
       mins = mins < 10 ? '0'+mins : mins;
       secs = secs < 10 ? '0'+secs : secs;
       if(secs>=60) {
         secs %= 60;
         mins ++;
         mins = mins < 10 ? '0'+mins : mins;
         secs = secs < 10 ? '0'+secs : secs;
      };
       timer.textContent = `${mins}:${secs}`;
   },1000);
}
/*END OF CONTROL BUTTONS*/

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  console.log('foo');
  if (lockBoard) return;
  if (this === firstCard) return;
  this.classList.add('flip');
  turnNumber += 1;
  document.getElementById('turnNumber').innerHTML = turnNumber;
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }
secondCard = this;

checkForMatch();
}

function checkForMatch() {
  if (firstCard.dataset.framework === secondCard.dataset.framework) {
    console.log('match!');
    matchNumber += 1;
    document.getElementById('matchNumber').innerHTML = matchNumber;
    disableCards();
    return;
  }
  unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  resetBoard();
}

function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let ramdomPos = Math.floor(Math.random() * 12);
    card.style.order = ramdomPos;
  });
})();
