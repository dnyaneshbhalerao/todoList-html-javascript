function onAddTask() {
  var newTodo = document.getElementById('newTodo');
  var li = document.createElement('li');
  var divTick = document.createElement('div');
  var divClose = document.createElement('div');
  var ul = document.getElementById("my-list");
  var listTask = document.createTextNode(newTodo.value);
  //create a right tick
  if(newTodo.value === ''){
    alert("Please add todo task");
  }
  else {
    divTick.setAttribute("class","right-tick");
    divTick.innerHTML = '&#10003;';
    divTick.setAttribute('onclick','onComplete(this)');
    //
    divClose.setAttribute("class","close-custom");
    divClose.innerHTML = '&#10006;';
    divClose.setAttribute("onclick","onDelete(this)");
    
    li.setAttribute("class","task");
    li.appendChild(divTick);
    li.appendChild(listTask);
    li.appendChild(divClose);
    ul.appendChild(li);
  }
}

function onComplete(e) {
  if(e.className.includes('done')){
    e.parentNode.className = "task";
    e.className = 'right-tick';
  }
  else {
    e.parentNode.className = e.parentNode.className +' done';
    e.className = e.className +' done';
  }
}

function onDelete(e) {
  e.parentNode.parentNode.removeChild(e.parentNode);
}