// This is a random number generator for 3 dice rolls in JS

const myButton = document.getElementById("myButton");
const myLabel1 = document.getElementById("myLabel1");
const myLabel2 = document.getElementById("myLabel2");
const myLabel3 = document.getElementById("myLabel3");

const min = 1;
const max = 6;

myButton.onclick = function() {
    let randNum1 = Math.floor(Math.random() * max) + min;
    let randNum2 = Math.floor(Math.random() * max) + min;
    let randNum3 = Math.floor(Math.random() * max) + min;
    
    myLabel1.textContent = randNum1;
    myLabel2.textContent = randNum2;
    myLabel3.textContent = randNum3;
};
