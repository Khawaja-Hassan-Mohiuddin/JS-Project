let Increase=document.getElementById('Increase')
let Reset=document.getElementById('Reset');
let Decrease=document.getElementById('Decrease');
let number=document.getElementsByClassName('number')[0];

let no=0;

Increase.addEventListener('click',() => {
    no+=1;
    number.textContent=no;
    if(no>0){
        number.style.color='Green'
    }
    if(no==0){
        number.style.color='#474141'
    }
    
});
Reset.addEventListener('click',() => {
    no=0;
    number.textContent=no;
    if(no==0){
        number.style.color='#474141'
    }
});;
Decrease.addEventListener('click',() => {
    no-=1;
    number.textContent=no;
    if(no<0){
        number.style.color='Red'
    }
    if(no==0){
        number.style.color='#474141'
    }
    
});;