"use strict";

function checkPer() {
  var a = parseInt(prompt("Enter your age"));

  if (a >= 0 && a <= 12) {
    alert("Child");
  } else if (a >= 13 && a <= 18) {
    alert("Teenager");
  } else if (a >= 19 && a <= 60) {
    alert("Adult");
  } else if (a >= 60 && a <= 120) {
    alert("Old");
  } else {
    alert("Invalid data");
  }
}

function specialSymb() {
  var number = parseInt(prompt("Enter number from 0-9"));
  var symbol = '';

  switch (number) {
    case 0:
      symbol = ")";
      break;

    case 1:
      symbol = "!";
      break;

    case 2:
      symbol = "@";
      break;

    case 3:
      symbol = "#";
      break;

    case 4:
      symbol = "$";
      break;

    case 5:
      symbol = "%";
      break;

    case 6:
      symbol = "^";
      break;

    case 7:
      symbol = "&";
      break;

    case 8:
      symbol = "*";
      break;

    case 9:
      symbol = "(";
      break;
  }

  alert(symbol);
}

function threeDigit() {
  var number = parseInt(prompt("Enter three-digit number"));
  var arrT = number.split(""),
      f = parseInt(arrT[0]),
      s = parseInt(arrT[1]),
      t = parseInt(arrT[2]);

  if (f == s || s == t || t == f) {
    alert("There are repeated letters");
  } else {
    alert("There are no repeated letters");
  }
}

function leapYear() {
  var year = parseInt(prompt("Enter any year"));

  if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
    alert("This year is a leap year");
  } else {
    alert("This year isn't a leap year");
  }
}

function fiveDigit() {
  debugger;
  var number = parseInt(prompt("Enter any five digit number"));
  var arrT = number.split(""),
      a = parseInt(arrT[0]),
      b = parseInt(arrT[1]),
      c = parseInt(arrT[2]),
      d = parseInt(arrT[3]),
      e = parseInt(arrT[4]);

  if (a == e && b == d) {
    alert("it's a palindrom");
  } else if (a !== e && b !== d) {
    alert("it's not a palindrom");
  } else {
    alert("Invalid data");
  }
}

function myConverter() {
  debugger;
  var usd = parseFloat(prompt("Enter amount of USD")),
      cur = parseInt(prompt("Enter the number of the currency: 1 - uah, 2 - eur, 3 - azn")),
      ratiouah = usd * 27.90,
      uah = 1,
      ratioeur = usd * 0.83,
      eur = 2,
      ratioazn = usd * 0.59;
  azn = 3;

  if (cur == 1) {
    alert(ratiouah);
  } else if (cur == 2) {
    alert(ratioeur);
  } else if (cur == 3) {
    alert(ratioazn);
  } else {
    alert("Invalid data");
  }
}

function sumPurch() {
  var number = parseFloat(prompt("Enter your sum"));

  if (number >= 200 && number < 300) {
    alert(parseInt(number * 0.03));
  } else if (number >= 300 && number < 500) {
    alert(parseInt(number + number * 0.05));
  } else if (number >= 500) {
    alert(parseInt(number + number * 0.07));
  } else {
    alert("Invalid data");
  }
}

function circleSquare() {
  var c = parseFloat(prompt("Enter circle length")),
      p = parseFloat(prompt("Enter square perimetre")),
      s = p / 4,
      d = c / Math.PI;

  if (d <= s) {
    alert("It can be in the square");
  } else if (d >= s) {
    alert("It can't be in the square");
  } else {
    alert("Invalid data");
  }
}

function question() {
  var q1 = prompt("Choose the correct answer: I \r1.is \r2.am \r3.are \ra teacher. "),
      q2 = prompt("Choose the correct answer: I \r1.was \r2.were \r3.will \rteacher a year ago. "),
      q3 = prompt("Choose the correct answer: I \r1.don't finish \r2.didn't finish \r3.haven't finished \rmy hw yet");

  if (!isNaN(q1) && !isNaN(q2) && !isNaN(q2)) {
    var rez1 = 0,
        rez2 = 0,
        rez3 = 0,
        score = 0;

    if (q1 == 2) {
      rez1 = 2;
    } else {
      rez1 = 0;
    }

    if (q2 == 1) {
      rez2 = 2;
    } else {
      rez2 = 0;
    }

    if (q3 == 3) {
      rez3 = 2;
    } else {
      rez3 = 0;
    }

    score = rez1 + rez2 + rez3;
    alert("Your score is " + score);
  } else {
    alert("Invalid data");
  }
}