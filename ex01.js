const inputTabElement = document.getElementById('inputTab');
const buttonElement = document.getElementById('button');
const tabsElement = document.getElementById('tabs')

buttonElement.addEventListener('click', adicionarTabuada);
function adicionarTabuada(ev) {
  ev.preventDefault();
  tabsElement.innerHTML = "";
  if (inputTabElement.value !== "") {
    for(var i=0; i<=10; i++) {
      let res = inputTabElement.value * i;
      tabsElement.innerHTML += `${inputTabElement.value} x ${i} = ${res} <br>`
    }
    inputTabElement.value = "";
    
  } 
}
