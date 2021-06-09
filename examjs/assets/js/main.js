map_link.addEventListener('click', function(){
    var myIcon = L.icon({
        iconUrl: 'img/marker1.png',  
        iconSize:     [95, 95], // size of the icon
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
        });
        map = L.map('map').setView([40.68321861841936, -73.90112730001431], 13);
    
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        let marker = L.marker([40.68321861841936, -73.90112730001431], {icon: myIcon}).addTo(map)
        .bindPopup('This is here');
        map_link.remove();
        map_pic.remove();
    });
    map_link.addEventListener('click', function(){
    let link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "https://unpkg.com/leaflet@1.7.1/dist/leaflet.css")
    document.head.append(link);
    let script = document.createElement("script");
    script.setAttribute("scr","https://unpkg.com/leaflet@1.7.1/dist/leaflet.js");
    document.body.append(script);
    script.onload = initMap;
});  

function isValidEmail(email) {
  let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
};
let submit = document.getElementById('submit')
submit.addEventListener('click', sendMessage);

function sendMessage(e) {
  let email = document.getElementById('email').value;
  let name = document.getElementById('name').value;
  e.preventDefault();
  const BOT_TOKEN = '1818073939:AAGLY-cIgnSwJdG8hAQYLJfeHcD68S62erE';
  const CHAT_ID = '-1001481769250';
  const text = 'User ' + name + ' is signed! Email is ' + email;
  if (isValidEmail(email)) {
    alert("You are signed in! Thank you");
    $.get('https://api.telegram.org/bot' + BOT_TOKEN + '/sendMessage?chat_id=' + CHAT_ID + '&text=' + text);
  } else {
    alert("Enter valid email");
  }
}


