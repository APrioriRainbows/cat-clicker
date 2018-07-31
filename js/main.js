let cat = document.getElementById('cat');
const counter = document.getElementById('click-number');
let count = 0;

cat.onclick = function(){
    counter.innerText ++;  
};
