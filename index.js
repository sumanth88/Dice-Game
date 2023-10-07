var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceImage="dice"+randomNumber1+".png";//dice1.png-dice6.png
var diceImageSource="images/"+randomDiceImage;//images/dice1.png-images/dice6.png
document.querySelector(".img1").setAttribute("src",diceImageSource);
var randomNumber2=Math.floor(Math.random()*6)+1;
var imageSource2="images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",imageSource2);
if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="Player1Wins⛳";
}
else if(randomNumber1<randomNumber2)
{
  document.querySelector("h1").innerHTML="Player2Wins⛳";
}
else
{
  document.querySelector("h1").innerHTML="Draw!!";
}
// document.getElementByClass("img1").setAttribute("src","images/dice6.png");
