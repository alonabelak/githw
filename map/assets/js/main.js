let map; 
map_link.addEventListener('click', function(){
    map = L.map('map').setView([50.47710696984148, 30.447275315685832], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    let marker = L.marker([50.47710696984148, 30.447275315685832]).addTo(map)
    .bindPopup('Where I live');
    L.marker([50.447618485716916, 30.52537785491277]).addTo(map)
    .bindPopup('Centre');
    L.marker([50.46603382386226, 30.515764817803362]).addTo(map)
    .bindPopup('Podil');
    L.marker([50.45738028659234, 30.512191948216667]).addTo(map)
    .bindPopup('Пейзажная алея');
    L.marker([50.49534337443858, 30.360859435480368]).addTo(map)
    .bindPopup('Shopping mall');
    L.marker([50.48581467478758, 30.497509286604533]).addTo(map)
    .bindPopup('Book shop');
    L.marker([50.44936719191061, 30.513358583222562]).addTo(map)
    .bindPopup('Golden Gates');

    map_link.remove();
    map_pic.remove();
})
function initMap(){
    map = L.map('map').setView([50.47710696984148, 30.447275315685832], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    L.marker([]).addTo(map)
        .bindPopup('');
        //.openPopup();
}
var myIcon = L.icon({
    iconUrl: 'my-icon.png',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowUrl: 'my-icon-shadow.png',
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
});


// let PLACES = [
//     {
//         lat:50.47710696984148,
//         lng:30.447275315685832,
//         pic: "link",
//         title: "Where I live",
//         type:"red"
//     },
//     {
//         lat:50.46603382386226,
//         lng:30.52537785491277,
//         pic: "link",
//         title: "Centre",
//         type:"green"
//     },
//     {
//         lat:50.46603382386226,
//         lng:30.515764817803362,
//         pic: "link",
//         title: "Podil",
//         type:"green"
//     },
//     {
//         lat:50.45738028659234,
//         lng:30.512191948216667,
//         pic: "link",
//         title: "Пейзажная алея",
//         type:"green"
//     },
//     {
//         lat:50.49534337443858,
//         lng:30.360859435480368,
//         pic: "link",
//         title: "Shopping mall",
//         type:"green"
//     },
//     {
//         lat:50.48581467478758,
//         lng:30.497509286604533,
//         pic: "link",
//         title: "Book shop",
//         type:"green"
//     },
//     {
//         lat:50.44936719191061,
//         lng:30.513358583222562,
//         pic: "link",
//         title: "Golden Gates",
//         type:"green"
//     },
// ]

// let LeafIcon = L.Icon.extend({
//     options: {
//         shadowUrl: 'img/mapicon.png',
//         iconSize: [38, 95],
//         shadowSize: [50, 64],
//         iconAnchor: [22, 94],
//         shadowAnchor: [4, 62],
//         popupAnchor: [-3, -76]
//     }
// });

// map_link.addEventListener('click', function(){
//     let link = document.createElement("link");
//     link.setAttribute("rel", "stylesheet");
//     link.setAttribute("href", "https://unpkg.com/leaflet@1.7.1/dist/leaflet.css")
//     document.head.append(link);
//     let script = document.createElement("script");
//     script.setAttribute("scr","https://unpkg.com/leaflet@1.7.1/dist/leaflet.js");
//     document.body.append(script);
//     script.onload = initMap;
    
    // map_link.remove();
    // map_pic.remove();
// })   
