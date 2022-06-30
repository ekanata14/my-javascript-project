const button = document.querySelector("#button");
// let colorDesc = document.querySelector("color-desc");

let color = ["red", "green", "blue", "antiquewhite", "bisque", "gray", "brown", "orange"];

button.addEventListener('click', ()=>{
    const randomNumber = getRandomNumber();

    document.querySelector("#color-desc").innerText = "The Color is: " + color[randomNumber];
    document.querySelector("body").style.backgroundColor = color[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random()* color.length);
}