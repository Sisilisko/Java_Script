const cards = document.querySelectorAll('.memory-card');

//start of setting the size of game
var link = window.location.href;
var size1 = /type=4x4/gi;
var size2 = /type=4x6/gi;
var size3 = /type=6x6/gi;
var size4x4 = size1.test(link);
var size4x6 = size2.test(link);
var size6x6 = size3.test(link);
if (size4x4==true) {
  render(16);
} else if (size4x6==true) {
  render(24);
} else if (size6x6==true) {
  render(36);
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.width = '15%';
  }
  document.querySelector('.memory-game').style.width = '900px';
} else {
  render(16);
}

function render(n) {
  for (let i = 0; i < cards.length; i++) {
    if (i < n) {
      cards[i].style.display = 'block';
    }else if (i >= n) {
      cards[i].style.display = 'none';
    }else{
      break;
    }
  }
}

//end of setting the size of game
const clock = document.getElementById('clock');
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
   clock.style.background = '#01DB96';
   var date = new Date();
   game.start = date.getTime();
   (function shuffle() {
     cards.forEach(card => {
       let ramdomPos = Math.floor(Math.random() * 12);
       card.style.order = ramdomPos;
     });
   })();
}

function pause(){
  if (isPause==false) {
    cards.forEach(card => card.removeEventListener('click', flipCard));
    console.log('pause');
    clock.style.background="#189ACB";
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
    clock.style.background='#01DB96';
    isPause = false;
    btnPause.innerHTML = 'PAUSE';
    cards.forEach(card => card.addEventListener('click', flipCard));
  }
}

function reset(){
  clearInterval(game.timer);
  clock.style.background = '#FF6E6E';
  btnStart.disabled = false;
  btnPause.disabled = true;
  btnReset.disabled = true;
  cards.forEach(card => card.removeEventListener('click', flipCard));
  //after 2 secs
  setTimeout(function() {
  clock.style.background = '';
  matchNumber = 0;
  turnNumber = 0;
  document.getElementById('matchNumber').innerHTML = matchNumber;
  document.getElementById('turnNumber').innerHTML = turnNumber;
  console.log('end');
  cards.forEach(card => card.removeEventListener('click', flipCard));
  cards.forEach(card => card.classList.remove('flip'));
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
 },2000);
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
    checkWin();
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

function checkWin() {
  if ((size4x4==true)&&(matchNumber==8)) {
    value = timer.textContent;
    console.log(value);
    clearInterval(game.timer);
    btnStart.disabled = true;
    btnPause.disabled = true;
    btnReset.disabled = true;
    clock.style.background='Gold';
    winMessage();
  } else if ((size4x6==true)&&(matchNumber==12)) {
    value = timer.textContent;
    console.log(value);
    clearInterval(game.timer);
    btnStart.disabled = true;
    btnPause.disabled = true;
    btnReset.disabled = true;
    clock.style.background='Gold';
    winMessage();
  } else if ((size6x6==true)&&(matchNumber==18)) {
    value = timer.textContent;
    console.log(value);
    clearInterval(game.timer);
    btnStart.disabled = true;
    btnPause.disabled = true;
    btnReset.disabled = true;
    clock.style.background='Gold';
    winMessage();
  }
}

var message = document.getElementById('win-message');

function winMessage() {
  setTimeout(() => {
    document.querySelector('.memory-game').style.filter = 'blur(4px)';
    message.style.display = 'inline-table';
    message.innerHTML = 'Congratulations!<br>You win!<br>You got all ' + matchNumber + ' matches in ' + turnNumber + ' turns.<br>Your time: ' + value +'<button type="button" id="play-again" onclick="playAgain()">Play again ?</button>';
  }, 2000)
}

function playAgain() {
  btnStart.disabled = false;
  message.style.display = 'none';
  document.querySelector('.memory-game').style.filter = 'none';
  matchNumber = 0;
  turnNumber = 0;
  document.getElementById('matchNumber').innerHTML = matchNumber;
  document.getElementById('turnNumber').innerHTML = turnNumber;
  cards.forEach(card => card.classList.remove('flip'));
  clock.style.background='white';
  timer.textContent = '00:00';
  mins=0;
  secs=0;
  timer.textContent = '00:00';
  if(game.timer){
    clearInterval(game.timer);
  };
}

(function shuffle() {
  cards.forEach(card => {
    let ramdomPos = Math.floor(Math.random() * 12);
    card.style.order = ramdomPos;
  });
})();
