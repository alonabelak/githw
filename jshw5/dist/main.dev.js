"use strict";

var auto = {
  "Manufacturer": "Hyundai",
  "Model": "Veloster",
  "Year": 2016,
  "Average speed": 80,
  vehicleInfo: function vehicleInfo() {
    var rez = "<ul>";

    for (var k in auto) {
      if (typeof auto[k] !== "function") {
        rez += "<li>".concat(k, ": ").concat(auto[k], "</li>");
      }
    }

    rez += "</ul>";
    document.getElementById("vehicle_rez").innerHTML = rez;
  },
  timeInfo: function timeInfo() {
    var km = document.getElementById("car_distance").value;
    var travel_time = km / auto["Average speed"];
    var h = 0;

    while (travel_time >= 4) {
      travel_time = travel_time - 4;
      h++;
    }

    var rez = km / auto["Average speed"] + h;
    document.getElementById("time_rez").innerHTML = rez;
  }
};
var fraction = {
  fr1: {
    n: 10,
    d: 6
  },
  fr2: {
    n: 2,
    d: 8
  },
  sum: function sum() {
    var rez = {
      n: 0,
      d: 0
    };

    if (this.fr1.d === this.fr2.d) {
      rez.n = this.fr1.n + this.fr2.n;
      rez.d = this.fr1.d;
    } else if (this.fr1.d !== this.fr2.n) {
      rez.n = this.fr1.n * this.fr2.d + this.fr1.d * this.fr2.n;
      rez.d = this.fr1.d * this.fr2.d;
    }

    return this.reduction(rez);
  },
  substraction: function substraction() {
    var rez = {
      n: 0,
      d: 0
    };

    if (this.fr1.d === this.fr2.d) {
      rez.n = this.fr1.n - this.fr2.n;
      rez.d = this.fr1.d;
    } else if (this.fr1.d !== this.fr2.d) {
      rez.n = this.fr1.n * this.fr2.d - this.fr1.d * this.fr2.n;
      rez.d = this.fr1.d * this.fr2.d;
    }

    return this.reduction(rez);
  },
  multiplication: function multiplication() {
    var rez = {
      n: 0,
      d: 0
    };
    rez.n = this.fr1.n * this.fr2.n;
    rez.d = this.fr1.d * this.fr2.d;
    return this.reduction(rez);
  },
  division: function division() {
    var rez = {
      n: 0,
      d: 0
    };
    rez.n = this.fr1.n * this.fr2.d;
    rez.d = this.fr1.d * this.fr2.n;
    return this.reduction(rez);
  },
  reduction: function reduction(obj) {
    var number = function number(a, b) {
      var rez_number = 0;

      while (a != 0 && b != 0) {
        if (a > b) {
          a = a % b;
        } else {
          b = b % a;
        }

        rez_number = a + b;
      }

      return rez_number;
    };

    var rez = number(obj.n, obj.d);
    return [obj.n / rez, obj.d / rez];
  },
  fractionRez: function fractionRez() {
    var rez = "<ul>\n                <li>".concat(fraction.fr1.n, "/").concat(fraction.fr1.d, " + ").concat(fraction.fr2.n, "/").concat(fraction.fr2.d, " = ").concat(fraction.sum(), "</li>\n                <li>").concat(fraction.fr1.n, "/").concat(fraction.fr1.d, " - ").concat(fraction.fr2.n, "/").concat(fraction.fr2.d, " = ").concat(fraction.substraction(), "</li>\n                <li>").concat(fraction.fr1.n, "/").concat(fraction.fr1.d, " * ").concat(fraction.fr2.n, "/").concat(fraction.fr2.d, " = ").concat(fraction.multiplication(), "</li>\n                <li>").concat(fraction.fr1.n, "/").concat(fraction.fr1.d, " / ").concat(fraction.fr2.n, "/").concat(fraction.fr2.d, " = ").concat(fraction.division(), "</li>\n                </ul> \n                ");
    document.getElementById("fraction_rez").innerHTML = rez;
  }
};
$(function () {
  $('#current_time').mask('99:99:99');
});
$(function () {
  $('#time_change').mask('99:99:99');
});
var time = {
  h: 0,
  m: 0,
  s: 0,
  get: function get(k) {
    return this[k];
  },
  set: function set(k, newTime) {
    this[k] = newTime;
  },
  currentTime: function currentTime() {
    var t = document.getElementById("current_time").value;
    var tArr = t.split(":");
    var h = parseInt(tArr[0]);
    var m = parseInt(tArr[1]);
    var s = parseInt(tArr[2]);
    time.set(["h"], h);
    time.set(["m"], m);
    time.set(["s"], s);
    var rez = addZero(this.get("h")) + ":" + addZero(this.get("m")) + ":" + addZero(this.get("s"));
    document.getElementById("current_time_rez").innerHTML = rez;
  },
  validTime: function validTime(el) {
    var arrt = el.split(":");
    var h = parseInt(arrt[0]);
    var m = parseInt(arrt[1]);
    var s = parseInt(arrt[2]);

    if (h >= 0 && m >= 0 && s >= 0) {
      rez_s = timeConverter(h, m, s); //function from prev hw
    } else {
      alert("Enter correct time");
    }

    return rez_s;
  },
  changeTime: function changeTime() {
    var a = document.getElementById("current_time").value;
    var num1 = time.validTime(a);
    var b = document.getElementById("time_change").value;
    var num2 = time.validTime(b);
    var sum_s = num1 + num2;
    var change_time = getTime(sum_s); //function of seconds from prev hw

    var changeArr = change_time.split(":");
    var h = parseInt(changeArr[0]);
    var m = parseInt(changeArr[1]);
    var s = parseInt(changeArr[2]);
    time.set(["h"], h);
    time.set(["m"], m);
    time.set(["s"], s);
    var rez = addZero(this.get("h")) + ":" + addZero(this.get("m")) + ":" + addZero(this.get("s"));
    document.getElementById("change_rez").innerHTML = rez;
  }
};

function addZero(n) {
  return n < 10 ? "0" + n : n;
} //functions from previous hw


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