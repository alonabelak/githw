"use strict";

function number() {
  var s = parseInt(document.getElementById("first_number").value),
      a = parseInt(document.getElementById("second_number").value);
  var sum = 0;

  for (i = s; i <= a; i++) {
    sum += i;
  }

  document.getElementById("number_rez").innerText = sum;
}

function divNumber() {
  var a = parseInt(document.getElementById("number1").value),
      b = parseInt(document.getElementById("number2").value),
      rez = 0;

  while (a != 0 && b != 0) {
    if (a > b) {
      a = a % b;
    } else {
      b = b % a;
    }

    rez = a + b;
  }

  document.getElementById("div_rez").innerText = rez;
}

function divide() {
  var a = parseInt(document.getElementById("divnumber").value);
  var rez = '';

  for (var _i = 1; _i < a; _i++) {
    if (a % _i === 0) {
      rez += _i + ', ';
    }
  }

  document.getElementById("divide_rez").innerText = rez;
}

function quant() {
  var a = parseInt(document.getElementById("quant_number").value);
  var rez = '',
      i = '';

  while (a != 0) {
    a = (a / 10).toFixed(0);
    i++;
    rez = i;
  }

  document.getElementById("quant_rez").innerHTML = rez;
}

function tenNumbers() {
  var positive = 0,
      negative = 0,
      zeros = 0,
      even = 0,
      odd = 0;

  for (var _i2 = 1; _i2 <= 10; _i2++) {
    var n = parseInt(prompt("Enter number"));

    if (n > 0) {
      positive = positive + 1;

      if (n % 2 == 0) {
        even = even + 1;
      } else {
        odd = odd + 1;
      }
    } else if (n < 0) {
      negative = negative + 1;

      if (n % 2 == 0) {
        even = even + 1;
      } else {
        odd = odd + 1;
      }
    } else if (n == 0) {
      zeros = zeros + 1;
    } else if (isNaN(n)) {
      alert("Enter corect data");
      _i2--;
    }

    document.getElementById("positive_rez").innerHTML = "Positive numbers " + positive;
    document.getElementById("negative_rez").innerHTML = "Negative numbers " + negative;
    document.getElementById("zeros_rez").innerHTML = "Zero numbers " + zeros;
    document.getElementById("even_rez").innerHTML = "Even numbers " + even;
    document.getElementById("odd_rez").innerHTML = "Odd numbers  " + odd;
  }
}

function tasks() {
  var d = true;

  do {
    var a = parseInt(prompt("Enter first number")),
        b = parseInt(prompt("Enter second number")),
        action = prompt("Enter action: +,-,*,/");

    if (!isNaN(a) && !isNaN(a) && action == "+") {
      rez = a + b;
      alert("Ответ: " + rez);
    } else if (!isNaN(a) && !isNaN(a) && action == "-") {
      rez = a - b;
      alert("Ответ: " + rez);
    } else if (!isNaN(a) && !isNaN(a) && action == "*") {
      rez = a * b;
      alert("Ответ: " + rez);
    } else if (!isNaN(a) && !isNaN(a) && action == "/") {
      rez = a / b;
      alert("Ответ: " + rez);
    } else {
      alert("Enter corect numbers");
    }

    question = confirm("Do you want more actions?");

    if (question === true) {
      d = true;
    } else if (question === false) {
      d = false;
    }
  } while (d);
}

function moveNumber() {
  var n = parseInt(document.getElementById("move1_number").value);
  var shift = parseInt(document.getElementById("move2_number").value);
}

function days() {
  var d = new Date(),
      rez = d.getDay();

  switch (rez) {
    case 1:
      day = "Monday";
      break;

    case 2:
      day = "Tuesday";
      break;

    case 3:
      day = "Wednesday";
      break;

    case 4:
      day = "Thursday";
      break;

    case 5:
      day = "Friday";
      break;

    case 6:
      day = "Saturday";
      break;

    case 7:
      day = "Sunday";
      break;
  }

  alert("Today: " + day);
  var question = confirm("Do you want to see next day?");

  while (question === true) {
    rez = rez + 1;
    var _day = "";

    if (rez >= 0 && rez <= 7) {
      switch (rez) {
        case 1:
          _day = "Monday";
          break;

        case 2:
          _day = "Tuesday";
          break;

        case 3:
          _day = "Wednesday";
          break;

        case 4:
          _day = "Thursday";
          break;

        case 5:
          _day = "Friday";
          break;

        case 6:
          _day = "Saturday";
          break;

        case 7:
          _day = "Sunday";
          break;
      }

      alert("Next day: " + _day);
      question = confirm("Do you want to see next day?");
    } else if (rez > 8) {
      rez = 1;
      alert("Next day: Monday");
      question = confirm("Do you want to see next day?");
    }
  }
}

function multiple() {
  for (var n = 1; n <= 10; n++) {
    for (var j = 1; j <= 10; j++) {
      rez = n * j;
      console.log(n + " *", j + " =", rez);
    }
  }
}

function guessNumber() {
  var rez = true,
      start = 0,
      finish = 100;
  alert("Think of a number from 1 to 100");
  var n = (finish - start) / 2;
  var question = parseInt(prompt("Choose correct variant \r1. Your number equals  " + n + "\r2. Your number is lower than  " + n + "\r3. Your number is bigger than  " + n));

  do {
    if (question == 2) {
      finish = n;
      n = parseInt((finish - start) / 2);
      question = parseInt(prompt("Choose correct variant \r1. Your number equals  " + n + "\r2. Your number is lower than  " + n + "\r3. Your number is bigger than  " + n));
      rez = false;

      if (question == 3) {
        start = n;
        n = parseInt((finish - start) / 2 + start);
        question = parseInt(prompt("Choose correct variant \r1. Your number equals  " + n + "\r2. Your number is lower than  " + n + "\r3. Your number is bigger than  " + n));
        rez = false;
      }
    } else if (question == 3) {
      start = n;
      n = parseInt((finish - start) / 2 + start);
      question = parseInt(prompt("Choose correct variant \r1. Your number equals  " + n + "\r2. Your number is lower than  " + n + "\r3. Your number is bigger than  " + n));
      rez = false;

      if (question == 2) {
        start = n;
        n = parseInt((finish - start) / 2);
        question = parseInt(prompt("Choose correct variant \r1. Your number equals  " + n + "\r2. Your number is lower than  " + n + "\r3. Your number is bigger than  " + n));
        rez = false;
      }
    } else if (question == 1) {
      alert("This is your number");
      rez = true;
    }
  } while (!rez === true);
}