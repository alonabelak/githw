"use strict";

map_link.addEventListener('click', function () {
  var myIcon = L.icon({
    iconUrl: 'img/marker1.png',
    iconSize: [95, 95],
    // size of the icon
    iconAnchor: [22, 94],
    // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor

  });
  map = L.map('map').setView([40.68321861841936, -73.90112730001431], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  var marker = L.marker([40.68321861841936, -73.90112730001431], {
    icon: myIcon
  }).addTo(map).bindPopup('This is here');
  map_link.remove();
  map_pic.remove();
});
map_link.addEventListener('click', function () {
  var link = document.createElement("link");
  link.setAttribute("rel", "stylesheet");
  link.setAttribute("href", "https://unpkg.com/leaflet@1.7.1/dist/leaflet.css");
  document.head.append(link);
  var script = document.createElement("script");
  script.setAttribute("scr", "https://unpkg.com/leaflet@1.7.1/dist/leaflet.js");
  document.body.append(script);
  script.onload = initMap;
});

function isValidEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

;
var submit = document.getElementById('submit');
submit.addEventListener('click', sendMessage);

function sendMessage(e) {
  var email = document.getElementById('email').value;
  var name = document.getElementById('name').value;
  e.preventDefault();
  var BOT_TOKEN = '1818073939:AAGLY-cIgnSwJdG8hAQYLJfeHcD68S62erE';
  var CHAT_ID = '-1001481769250';
  var text = 'User ' + name + ' is signed! Email is ' + email;

  if (isValidEmail(email)) {
    topPanel.success("You are signed in", true);
    $.get('https://api.telegram.org/bot' + BOT_TOKEN + '/sendMessage?chat_id=' + CHAT_ID + '&text=' + text);
  } else {
    topPanel.danger("Enter correct email", true);
  }
}

var topPanel = {
  success: function success() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Some text here";
    var autoclose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    this.showPanel(text, "success", autoclose);
  },
  danger: function danger() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Some text here";
    var autoclose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    this.showPanel(text, "danger", autoclose);
  },
  showPanel: function showPanel(text, type, autoclose) {
    var btn = autoclose ? "" : '<button onclick="topPanel.closePanel()>&times;</button>';
    var h = "<div id=\"top_panel\" class=\"panel_".concat(type, "\">\n        <p>").concat(text, "</p>").concat(btn, "<div></div>");

    if (document.getElementById("top_panel") !== null) {
      this.closePanel();
    }

    document.getElementsByTagName("body")[0].insertAdjacentHTML("afterbegin", h);

    if (autoclose) {
      var _this = this;

      setTimeout(function () {
        _this.closePanel();
      }, 3000);
    }
  },
  closePanel: function closePanel() {
    document.getElementById("top_panel").remove();
  }
};