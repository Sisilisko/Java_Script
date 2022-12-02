//Start drag'n'drop section
var items = document.querySelectorAll('.task');
var columns = document.querySelectorAll('.taskcol');

items.forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
});

columns.forEach(column => {
    column.addEventListener('dragover', dragOver);
    column.addEventListener('drop', dragDrop);
});

function dragOver(e) {
  e.preventDefault();
};

let dragItem = null;
function dragStart() {
    this.style.opacity = '0.4';
    dragItem = this;
}
function dragEnd() {
    this.style.opacity = '1';
    dragItem = null;
}
function dragDrop() {
    this.append(dragItem);
    countItems();
}
//End drag'n'drop section

//**Start modal window**
// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var taskInput = document.getElementById("task-input");

var columnId = 'btn-add-backlog';

function addTask(btn) {
  columnId = btn.id;
  // When the user clicks the button, open the modal
  modal.style.display = "block";
  taskInput.focus();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

var btnReset = document.getElementById("btn-reset");
btnReset.onclick = function() {
  taskInput.value = '';
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var btnSubmit = document.getElementById("btn-submit");
btnSubmit.addEventListener("click",submitTask);

function submitTask() {
  if (taskInput.value == false) {
    alert("Please, write some text for your task!");
    taskInput.focus();
  }else{
    createNewTaskElement(taskInput.value);
    modal.style.display = "none";
    taskInput.value = '';
    console.log(columnId);
  }
}
//**Start modal window**

//***Creating task item***
var createNewTaskElement=function(taskString){
  var listItem=document.createElement("div");//container for the task elements
  var label=document.createElement("label");//label
  var deleteItem=document.createElement("span");
  //setting elements
  label.innerText=taskString;
  deleteItem.innerHTML="&times;";
  deleteItem.className="close";
  listItem.className="task";
  listItem.draggable = true;
  //appending elements
  listItem.appendChild(label);
  listItem.appendChild(deleteItem);
  listItem.addEventListener('dragstart', dragStart);
  listItem.addEventListener('dragend', dragEnd);
  deleteItem.addEventListener('click', deleteTask);
  if (columnId=='btn-add-backlog') {
    document.getElementById("div1").appendChild(listItem);
  } else if (columnId=='btn-add-to-do') {
    document.getElementById("div2").appendChild(listItem);
  } else if (columnId=='btn-add-in-prog') {
    document.getElementById("div3").appendChild(listItem);
  } else if (columnId=='btn-add-done') {
    document.getElementById("div4").appendChild(listItem);
  };
  countItems();
}

createNewTaskElement('Add your tasks by clicking +');
createNewTaskElement('Drag your task when you want');
//***Deleting task.***
function deleteTask(){
  console.log("Delete Task...");
  if (confirm("Do you want to delete this task?") == true) {
    var listItem=this.parentNode;
    var ul=listItem.parentNode;
    //Remove the parent list item from the ul.
    ul.removeChild(listItem);
    countItems();
  }else{
    return;
  }
}

countItems();

function countItems() {
  items = document.querySelectorAll('.task');
  document.getElementById("task-number").innerHTML = items.length;
  var itemsProgress = document.querySelectorAll('#div3 > .task');
  document.getElementById("task-prog-number").innerHTML = itemsProgress.length;
}
