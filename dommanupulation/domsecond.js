var form = document.querySelector('#addForm');
form.addEventListener('submit',additem);
var ul = document.getElementById('items')
ul.addEventListener('click', removeitem);
var filter = document.querySelector('#filter');
filter.addEventListener('keyup', filteritem);



function additem(e){
  e.preventDefault();
  let item = document.querySelector('#item');
  let input = document.createTextNode(item.value);
  
  let li = document.createElement('li')
  li.className = "list-group-item";
  li.appendChild(input)
  
  ul.appendChild(li);
  let button = document.createElement('button')
  button.className = "btn btn-danger btn-sm float-right delete"
  button.innerHTML = "x";
  li.appendChild(button)
  item.value = "";
}
function removeitem(e){
 if(e.target.classList.contains('delete')){
  if(confirm('are you sure to delete')){
  let list = e.target.parentElement;
  ul.removeChild(list)
 }
}
}
function filteritem(e){
let text= e.target.value.toLowerCase();

let item = document.getElementsByTagName('li');
Array.from(item).forEach(function(i){
  let itemname = i.firstChild.textContent;
  console.log(itemname);
  if(itemname.toLowerCase().indexOf(text) != -1){
  
    i.style.display = 'block';
  } else {
    i.style.display = 'none';
  }
})
}