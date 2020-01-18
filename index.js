
var randomNumber1 = Math.floor(Math.random()*6) + 1;

var  Image1 = "dice" + randomNumber1 + ".png";

var Image1Src = "images/" + Image1;

var I1 = document.querySelectorAll("img")[0];
I1.setAttribute("src",Image1Src);

var randomNumber2 = Math.floor(Math.random()*6) + 1;

var Image2 = "dice" + randomNumber2 + ".png";

var Image2Src = "images/" + Image2;

var I2 = document.querySelectorAll("img")[1];
I2.setAttribute("src",Image2Src);


var heading = document.querySelector("h1");

if(randomNumber1>randomNumber2){
    heading.innerHTML = "Player 1 wins!!";
}else if(randomNumber2>randomNumber1){
    heading.innerHTML = "Player 2 wins!!";
}else{
    heading.innerHTML = "Draw...";    
}