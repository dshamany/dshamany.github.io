const PAGES = ['about', 'experience', 'education', 'skills', 'projects'];

// Cached Items
let header  = document.querySelector('header');
let navList = document.querySelector('nav ul');
let menuBtn = document.querySelector('#menu-button');
let nav     = document.querySelector('nav');

// Event listeners
menuBtn.addEventListener('click', toggleMenu);


// Functions
function toggleMenuClass(){
    header.className = (header.className === 'header') ? 'header-show' : 'header';
    nav.className = (nav.className === 'nav') ? 'nav-show' : 'nav';
}

function toggleMenu(){
    toggleMenuClass();
}

function resetElements(){
    header.className = 'header';
    nav.className    = 'nav';
}

let pagesArr = [];

class Page {
    constructor(title, content = ''){
        this.title = title;
        this.content = content;
        this.link = `#${this.header}`;
    }
}

function init(){

    // Append NavBar
    PAGES.forEach((e)=>{
        // Create div with link inside
        let li = document.createElement('li');
        let a  = document.createElement('a');
        li.className = 'nav-item';
        li.setAttribute('onclick', 'toggleMenu()');
        li.style.listStyle = "none";
        a.text = e.toUpperCase();
        li.appendChild(a);
        navList.appendChild(li);
    });
}

init();