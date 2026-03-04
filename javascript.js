# Click Counter App
# Adds 1 to the number every click

let count = 0;

function addClick(){
  count++;
  document.getElementById("count").innerText = count;
}