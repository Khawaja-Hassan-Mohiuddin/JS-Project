let color = document.getElementById("color");
let hex = document.getElementById("hex");
let btn = document.getElementById("btn");
let Container = document.getElementById("Container");
let Text = document.getElementsByClassName("Text")[0];

const colorObject = {
  COLOR: [
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Purple",
    "Orange",
    "Pink",
    "Brown",
    "Gray",
    "Black",
  ],
  HEX: [
    "#FF5733",
    "#3498db",
    "#2ecc71",
    "#f1c40f",
    "#9b59b6",
    "#e74c3c",
    "#FFC0CB",
    "#A52A2A",
    "#808080",
    "#000000",
  ],
};

let selectedColor=colorObject.COLOR;
color.addEventListener('click',() => {
    selectedColor=colorObject.COLOR;
    btn.click();
});
hex.addEventListener('click',() => {
    selectedColor=colorObject.HEX;
    btn.click();
});

btn.addEventListener('click',()=>{
    const RandomIndex=Math.floor(Math.random()*selectedColor.length);
    const RandomValue=selectedColor[RandomIndex];

    Container.style.backgroundColor=RandomValue;

    if(selectedColor==colorObject.COLOR){
        Text.textContent ="background-color:"+RandomValue
    }
    else{
        Text.textContent ="background-color:"+RandomValue
    }

})



