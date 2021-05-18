"use strict";

var arr_style = [{
  prop: "color",
  value: "green"
}, {
  prop: "font-size",
  value: "20px"
}, {
  prop: "text-align",
  value: "center"
}, {
  prop: "text-decoration",
  value: "line-through"
}];

function styleInfo() {
  var text = document.getElementById("style_text").value;
  var style = "";

  for (i = 0; i < arr_style.length; i++) {
    style += "".concat(arr_style[i].prop, ":").concat(arr_style[i].value, ";\n       ");
  }

  var rez = "<p style=\"".concat(style, "\">").concat(text, "</p>");
  document.getElementById("style_rez").innerHTML = rez;
}

var arrAudit = [{
  name: "Green auditorium",
  number: "50",
  faculty: "Faculty of Foreign Philology"
}, {
  name: "Blue auditorium",
  number: "40",
  faculty: "Faculty of English Philology"
}, {
  name: "Black auditorium",
  number: "60",
  faculty: "Faculty of Ukrainian Language"
}, {
  name: "Red auditorium",
  number: "30",
  faculty: "Faculty of Physical Trainings"
}];

function auditInfo1(arr) {
  var rez = "<ul>";

  for (var _i = 0; _i < arr.length; _i++) {
    rez += "<li> Name of auditorium: ".concat(arr[_i].name, ";<br>Number of places: ").concat(arr[_i].number, ";<br>Faculty: ").concat(arr[_i].faculty, ";  </li>");
  }

  rez += "</ul>";
  return rez;
}

function auditInfo() {
  var rez = auditInfo1(arrAudit);
  document.getElementById("audit_rez").innerHTML = rez;
}