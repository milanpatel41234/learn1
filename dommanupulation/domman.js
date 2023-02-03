//document.getconsole.log(document.getElementsByClassName("title3").textContent)
let a = document.getElementsByClassName("list-group-item");
console.log(a[2]);
a[2].style.backgroundColor = "green";
//a.textContent = "milan"
for(let i=0; i<a.length; i++){
    a[i].style.color = "blue";
}