"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Circle =
/*#__PURE__*/
function () {
  function Circle(options) {
    _classCallCheck(this, Circle);

    this.radius = options.radius;
  }

  _createClass(Circle, [{
    key: "areaCircle",
    value: function areaCircle() {
      var s = (Math.PI * Math.pow(this.radius, 2)).toFixed(2);
      return s;
    }
  }, {
    key: "circleLength",
    value: function circleLength() {
      var l = (2 * Math.PI * this.radius).toFixed(2);
      return l;
    }
  }, {
    key: "radiusInfo",
    get: function get() {
      return this.radius;
    },
    set: function set(newRadius) {
      this.radius = newRadius;
    }
  }, {
    key: "diameterInfo",
    get: function get() {
      var d = (2 * this.radius).toFixed(2);
      return d;
    }
  }]);

  return Circle;
}();

var circle = new Circle({
  radius: 3
});
console.log(circle.radiusInfo);
console.log(circle.diameterInfo);
console.log(circle.areaCircle());
console.log(circle.circleLength());

var Marker =
/*#__PURE__*/
function () {
  function Marker(options) {
    _classCallCheck(this, Marker);

    this.color = options.color;
    this.quantity = options.quantity;
  }

  _createClass(Marker, [{
    key: "print",
    value: function print(text) {
      var style = "color: ".concat(this.color);
      return "<p style=\"".concat(style, "\">").concat(text, "</p>");
    }
  }]);

  return Marker;
}();

var greenText = new Marker({
  color: "green",
  quantity: 100
});

function styleInfo() {
  var text = document.getElementById("print").value;
  var style = "";
  style += "color:".concat(greenText.color);
  var rez = "<p style=\"".concat(style, "\">").concat(text, "</p>");
  document.getElementById("style_rez").innerHTML = rez;
}

var Employee = function Employee(name, age, experience, department) {
  _classCallCheck(this, Employee);

  this.name = name;
  this.age = age;
  this.experience = experience;
  this.department = department;
};

var employees = [new Employee("John", "25", "2", "Marketing"), new Employee("Julia", "22", "1", "Sales"), new Employee("Ben", "27", "5", "Accounting"), new Employee("Lesia", "30", "3", "HR")];

var EmpTable =
/*#__PURE__*/
function () {
  function EmpTable(employees) {
    _classCallCheck(this, EmpTable);

    this.employees = employees;
  }

  _createClass(EmpTable, [{
    key: "getHtml",
    value: function getHtml() {
      document.write("<table border = \"3\"><tr>");

      for (var _i = 0, _Object$entries = Object.entries(employees[0]); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 1),
            key = _Object$entries$_i[0];

        document.write('<th>' + key + '</th>');
      }

      document.write("</tr>");

      for (var i = 0; i < employees.length; i++) {
        document.write("<tr>");
        Object.values(employees[i]).forEach(function (empl) {
          document.write("<td>" + empl + "</td>");
        });
        document.write("</tr>");
      }

      document.write("</table>");
    }
  }]);

  return EmpTable;
}();

var empTable = new EmpTable(employees);
empTable.getHtml();