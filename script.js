function toggleNavBar(evt) {
    let state = nav.getAttribute('class');
    console.log(evt.target.tagName);
    if (evt.target.tagName === 'A' || evt.target.tagName === 'LI') {
        nav.setAttribute('class', 'nav-closed');
        return;
    } else {
        if (state === 'nav-closed') {
            nav.setAttribute('class', 'nav-open');

        } else {
            nav.setAttribute('class', 'nav-closed');
        }
    }
}

function closeNav() {
    let nav = document.querySelector('nav');
    nav.setAttribute('class', 'nav-closed');
}

// Cache
let nav = document.querySelector('nav');


// Event Handlers
document.getElementById('nav-btn').addEventListener('click', toggleNavBar);
document.querySelector('nav').addEventListener('click', toggleNavBar);
document.querySelector('div').addEventListener('click', closeNav);