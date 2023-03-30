let randomNumber1 = Math.floor(1+6*Math.random());
let randomNumber2 = Math.floor(1+6*Math.random());
let image1 = document.querySelector(".img1");
let image2 = document.querySelector(".img2");
let diceimage1 = "dice"+randomNumber1+".png";
let image1Source = "images/"+diceimage1;
let diceimage2 = "dice"+randomNumber2+".png";
let image2Source = "images/"+diceimage2;
image1.setAttribute("src",image1Source);
image2.setAttribute("src",image2Source);

let title_text = document.querySelector(".container h1");

if(randomNumber1 === randomNumber2){
    title_text.textContent = "Draw";
}
else if(randomNumber1 > randomNumber2){
    title_text.textContent = "Player 1 Wins";
}
else if(randomNumber1 < randomNumber2){
    title_text.textContent = "Player 2 Wins";
}