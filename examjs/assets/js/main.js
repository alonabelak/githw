
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
lightGallery(document.getElementById('lightgallery'), {
  plugins: [lgZoom, lgThumbnail],
  speed: 500,
  
  });