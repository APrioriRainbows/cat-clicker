let cat = document.getElementById('cat');
let catBox = document.getElementById('cat-box');
let activeCatArea = document.getElementById('clicked-cat');
let cats = [];

function createElement(type,parent_selector,id,) {
    const el = document.createElement(type)
    el.setAttribute("id",id)
    const parent = document.querySelector(parent_selector)
    parent.appendChild(el)
    return el
}

const listView = {
    init: () => {

    },
    render: () => {

    }
}

const catView = {
    init: () => {

    },
    render: () => {

    }
}

const editView = { // edit cat names & image
    init: () => {},
    render: () => {},// call once
    save: () => {
	// change cat
	// alert "SAVED!"
	// redirect to listView
    },
}

function init() {
    // create all dom elements

    // bind 

}

function render() {

}

//switch current cat function
//increase count



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
    select() {
	document.gEBI("cat-name").innerText = this.name
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

window.onload = function() {
    listView.init()
    catView.init()
    formView.init()

    [listView,catView,formView].map(function(view) {
	return view.init()
    })

    [listView,catView,formView].forEach(view => view.init())

}
