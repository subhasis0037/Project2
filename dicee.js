var a=Math.floor(Math.random()*6)+1;
var b=Math.floor(Math.random()*6)+1;


 if (a > b){
   document.querySelector("h1").innerHTML = "Player 1 Wins!";
 }
 else if (a == b){
   document.querySelector("h1").innerHTML = "No one Win the Game!";
 }
     else{
   document.querySelector("h1").innerHTML = "Player 2  Wins!";
 };
  var x= "images/dice"+a+".png";
  var y= "images/dice"+b+".png";
document.querySelectorAll("img")[0].setAttribute("src",x);
document.querySelectorAll("img")[1].setAttribute("src",y);
