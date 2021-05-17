"use strict";

function compare() {
  var a = parseInt(document.getElementById("first_number").value),
      b = parseInt(document.getElementById("second_number").value);
  var rez = document.getElementById("compare_rez").innerHTML = comparison(a, b);
}

function comparison(a, b) {
  //debugger;    
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  }
}

function factorial() {
  var number = parseInt(document.getElementById("factorial_number").value);

  if (number > 0) {
    rez = factorialRez(number);
  } else if (number === 0) {
    rez = 1;
  }

  document.getElementById("factorial_rez").innerHTML = rez;
}

function factorialRez(n) {
  var rez = 1;

  for (i = 1; i <= n; i++) {
    rez = rez * i;
  }

  return rez;
}

function threeDigit() {
  var num1 = parseInt(document.getElementById("number1").value);
  var num2 = parseInt(document.getElementById("number2").value);
  var num3 = parseInt(document.getElementById("number3").value);
  var rez = document.getElementById("threedigit_rez").innerHTML = threeDigitRez(num1, num2, num3);
}

function threeDigitRez(a, b, c) {
  return a * 100 + b * 10 + c;
}

function square() {
  var rez = 1;
  var num1 = parseInt(document.getElementById("length").value);
  var num2 = parseInt(document.getElementById("width").value) || null;

  if (num1 >= 0 && num2 >= 0) {
    rez = squareRez(num1, num2);
  } else {
    alert("Enter correct data");
  }

  document.getElementById("square_rez").innerHTML = rez;
}

function squareRez(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (b === null) {
    return a * a;
  }

  return a * b;
}

function perfectNumber() {
  var rez;
  var n = parseInt(document.getElementById("perfect_number").value);

  if (perfectNumberCheck(n) === true) {
    rez = "Perfect";
  } else {
    rez = "Not perfect";
  }

  document.getElementById("perfect_rez").innerHTML = rez;
}

function perfectNumberCheck(n) {
  var sum = 0;

  for (i = 1; i <= n; i++) {
    if (n % i == 0) {
      sum += i;
    }
  }

  if (sum - n === n) {
    return true;
  } else {
    return false;
  }
}

function minmax() {
  var num1 = parseInt(document.getElementById("min_number").value);
  var num2 = parseInt(document.getElementById("max_number").value);
  var rez = '';

  for (i = num1; i < num2; i++) {
    if (perfectNumberCheck(i) === true) {
      rez += i - 1 + " ";
    }
  }

  document.getElementById("minmax_rez").innerHTML = rez;
}

function time() {
  var rez = "";
  var hour = parseInt(document.getElementById("hours").value);
  var minute = parseInt(document.getElementById("minutes").value);
  var second = parseInt(document.getElementById("seconds").value);

  if (hour >= 0 && minute >= 0 && second >= 0) {
    rez = time_number(hour, minute, second);
  } else {
    alert("Enter correct data");
  }

  document.getElementById("time_rez").innerHTML = rez;
}

function addZero(n) {
  return n < 10 ? "0" + n : n;
}

function time_number() {
  var h = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var m = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return addZero(h) + ":" + addZero(m) + ":" + addZero(s);
}

function timeConverter() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var rez = 0;

  if (a > 0) {
    a = a * 60 * 60;
  }

  if (b > 0) {
    b = b * 60;
  }

  rez = a + b + c;
  return rez;
}

function timeConvert() {
  //debugger;
  var hour = parseInt(document.getElementById("hour").value);
  var minute = parseInt(document.getElementById("minute").value);
  var second = parseInt(document.getElementById("second").value);
  var rez = 0;

  if (hour >= 0 && minute >= 0 && second >= 0) {
    rez = timeConverter(hour, minute, second);
  } else {
    alert("Enter correct data");
  }

  document.getElementById("timeconvert_rez").innerHTML = rez;
}

function getTime(s) {
  var m = 0;
  var h = 0;
  var rez = "";

  if (s > 59) {
    m = Math.floor(s / 60);
    s = s % 60;

    if (m > 59) {
      h = Math.floor(m / 60);
      m = m % 60;
    }
  }

  rez = addZero(h) + ":" + addZero(m) + ":" + addZero(s);
  return rez;
}

function timeNumber() {
  var rez = "";
  var s = parseInt(document.getElementById("time_number").value);

  if (s >= 0) {
    rez = getTime(s);
  } else {
    alert("Enter correct data");
  }

  document.getElementById("timenumber_rez").innerHTML = rez;
}

$(function () {
  $('.date').mask('99:99:99');
});

function _module(a) {
  if (a > 0) {
    return a;
  } else if (a < 0) {
    return a * -1;
  } else if (a === 0) {
    return 0;
  }
}

function date() {
  var date1 = document.getElementById("first_date").value;
  var date2 = document.getElementById("second_date").value;
  var date1_arr = date1.split(':');
  var date2_arr = date2.split(':');
  var rez1 = timeConverter(parseInt(date1_arr[0]), parseInt(date1_arr[1]), parseInt(date1_arr[2]));
  var rez2 = timeConverter(parseInt(date2_arr[0]), parseInt(date2_arr[1]), parseInt(date2_arr[2]));
  var rez = getTime(_module(rez1 - rez2));
  document.getElementById("dateconvert_rez").innerHTML = rez;
}