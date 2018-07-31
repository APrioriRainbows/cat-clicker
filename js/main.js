let cat = document.getElementById('cat');
let catBox = document.querySelector('body');
//let count = 0;
let cats = [];

class Cat {
    constructor(name, pic){
	this.name = name;
	this.pic = pic;
	this.count = 0;
	this.div = document.createElement('div');
	catBox.appendChild(this.div);
	this.div.innerHTML = `<img src='${this.pic}' alt='a cat' class='button'><section class="counter">Clicks: <span id="click-number">${this.count}</span></section>`;
	var self = this;
	this.div.addEventListener('click', function  click() {
	    let counter = this.querySelector('#click-number');
	    self.count ++;
	    counter.innerText = self.count;
	})
    }
}

let Sheila = new Cat('Sheila','img/cat.jpg');
let Sasha = new Cat('Sasha', 'img/cat.jpg');
cats.push(Sheila);
cats.push(Sasha);


