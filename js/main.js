const PAGES = ['about', 'experience', 'education', 'skills', 'projects'];

// Cached Items
let navList = document.querySelector('nav ul');

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
        li.style.listStyle = "none";
        a.text = e.toUpperCase();
        li.appendChild(a);
        navList.appendChild(li);
    });
}

init();