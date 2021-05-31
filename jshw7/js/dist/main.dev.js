"use strict";

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
      document.write("<p>Area: ".concat(s, "</p>"));
      return s;
    }
  }, {
    key: "cicleLength",
    value: function cicleLength() {
      var l = (2 * Math.PI * this.radius).toFixed(2);
      document.write("<p>Circle length: ".concat(P, "</p>"));
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
    }
  }]);

  return Circle;
}();

var circle = new Circle({
  radius: 3
});