
let hex = document.getElementById("hex");
let colors = document.getElementById("colors");
let background = document.getElementById('background');
let btn=document.getElementById('btn')
let value=document.getElementsByClassName('Color-Name')[0];


const paintObject = {COLOR: ["Red","Blue","Green","Yellow","Purple","Orange","Pink","Brown","Gray","Black",],
  HEX: ["#FF5733","#3498db","#2ecc71","#f1c40f","#9b59b6","#e74c3c","#FFC0CB","#A52A2A","#808080","#000000", ],};


  let selectedColor=paintObject.COLOR;

  hex.addEventListener('click',()=>{
    selectedColor=paintObject.HEX;
    btn.click();
  });

  colors.addEventListener('click',()=>{
    selectedColor=paintObject.COLOR;
    btn.click();
  });
  

  btn.addEventListener('click',()=>{
    const randomIndex = Math.floor(Math.random() * selectedColor.length);
    const randomColor = selectedColor[randomIndex];


    background.style.backgroundColor = randomColor;

    if (selectedColor === paintObject.COLOR) {
        value.textContent = "background-color: "+randomColor; // Display the color name for CSS colors
    } else {
        value.textContent = "background-color: "+randomColor; // Display the HEX color value for HEX colors
    }
  })

