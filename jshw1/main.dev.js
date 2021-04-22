"use strict";

function userName() {
  var user_name = prompt("Enter your name"),
      rez = alert("Привет " + user_name + "!");
}

function userAge() {
  var date = 2021;
  var number = parseInt(prompt("Enter your year of birth")),
      rez = date - number;
  alert("Your age: " + rez);
}

function squareP() {
  var square = parseFloat(prompt("Enter the length of one side of the square")),
      rez = 4 * square;
  alert("Perimetre of the square is " + rez);
}

function areaC() {
  var radius = parseFloat(prompt("Enter the radius of your square"));
  var PI = Math.PI;
  var area = PI * Math.pow(radius, 2);
  alert("Area of the circle is " + area);
}

function userSpeed() {
  var distance = parseFloat(prompt("Enter the distance between your cities in km")),
      time = parseFloat(prompt("Enter expected time")),
      rez = distance / time;
  alert("Your speed " + rez);
}

function currencyC() {
  var ratio = 0.83;
  var currency = parseFloat(prompt("Enter the amount of dollars")),
      rez = currency * ratio;
  alert("Euros will be  " + rez);
}

function filesinFlash() {
  var volume = parseFloat(prompt("Enter the volume of your flashcard in GB")),
      volumemb = volume * 1000;
  var files = 820;
  var rez = Math.floor(volumemb / files);
  alert("There will be " + rez);
}

function priceChoc() {
  var price = parseFloat(prompt("Enter the price of your chocolate")),
      cash = parseFloat(prompt("Enter the amount of cash you have")),
      rez = Math.floor(cash / price),
      change = cash % price;
  alert("You can buy " + rez + " chocolates; Change will be " + change.toFixed(2));
}
/*function myCalc(){
    let number = parseInt(prompt("Enter a three-digit number")),
        number1 = number%10,
        number2 = (number - number1)%100/10;
        number3 = 


    alert();    
}*/


function myBank() {
  var fee = parseFloat(prompt("Enter the amount of fee to the bank"));
  var months = 2,
      interest = 0.05;
  var rez = months * interest / 12 * fee;
  alert("Amount of the money with interest is " + rez.toFixed(2));
}