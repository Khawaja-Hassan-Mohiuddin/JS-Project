let hamburger=document.getElementById('hamburger');
let nav=document.getElementsByClassName('nav')[0];

hamburger.addEventListener('click',() => {

    nav.classList.toggle('active')
});