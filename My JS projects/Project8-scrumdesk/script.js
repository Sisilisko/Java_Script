function allowDrop(ev) {
  ev.preventDefault();
};
function drag(event) {
  event
    .dataTransfer
    .setData('text/plain', event.target.id);
  console.log('drag');
};
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

function addTask(btn) {
  console.log(btn.id);
  // When the user clicks the button, open the modal
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

var btnCancel = document.getElementById("btn-cancel");
btnCancel.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
