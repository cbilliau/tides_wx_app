


// Map //
var mymap = L.map('mapid').setView([41.361667, -72.09], 10);

L.tileLayer('https://api.mapbox.com/styles/v1/cbilliau/cip5ricbk000ccwmgx7b0bvio/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2JpbGxpYXUiLCJhIjoiY2lwNXJmZGN6MDBqYXdmbTNjbmNtOWx4MSJ9.o-LRx9-j3USLEJLh0QjpAg', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'cbilliau.0bbe6ei6',
    accessToken: 'pk.eyJ1IjoiY2JpbGxpYXUiLCJhIjoiY2lwNXJmZGN6MDBqYXdmbTNjbmNtOWx4MSJ9.o-LRx9-j3USLEJLh0QjpAg'
}).addTo(mymap);
