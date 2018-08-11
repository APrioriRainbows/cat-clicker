let cat = document.getElementById('cat');
let catBox = document.getElementById('cat-box');
let activeCatArea = document.getElementById('clicked-cat');
let cats = [];

class Cat {
    constructor(name, pic){
	this.name = name;
	this.pic = pic;
	this.count = 0;
	this.li = document.createElement('li');
	catBox.appendChild(this.li);
	this.li.innerHTML = `${this.name}`;
	var cat = this;
	this.li.addEventListener('click', function loadCat(){
	    console.log(cat);
	    cat.div = document.createElement('div');
	    activeCatArea.innerHTML = '';
	    activeCatArea.appendChild(cat.div);
	    cat.div.innerHTML =`<img src='${cat.pic}' alt='a cat' class='button'><section class="counter">Clicks: <span id="click-number">${cat.count}</span></section><br><section>Kitty Name: ${cat.name}</section>`;
	    cat.div.addEventListener('click', function  click() {
		let counter = this.querySelector('#click-number');
		cat.count ++;
		counter.innerText = cat.count;
	    })
	})
				 
    }
}

let Sheila = new Cat('Sheila','img/cat.jpg');
let Sasha = new Cat('Sasha','img/cat2.jpg');
let Cooper = new Cat('Cooper','img/cat3.jpg');
let Cordelia = new Cat('Cordelia', 'img/cat4.jpg');
let KittyCat = new Cat('Kitty Cat AKA Cat', 'img/cat5.gif');
cats.push(Sheila);
cats.push(Sasha);
cats.push(Cooper);
cats.push(Cordelia);
cats.push(KittyCat);

