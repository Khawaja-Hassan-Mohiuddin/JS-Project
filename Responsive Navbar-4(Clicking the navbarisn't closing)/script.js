

let hamburger = document.getElementsByClassName('hamburger')[0];
let ham = document.getElementsByClassName('ham-btn')[0];
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    ham.classList.toggle('active');
});
