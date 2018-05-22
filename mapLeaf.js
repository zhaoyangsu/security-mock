// leaflet and google uses sourced stuff with watermark
var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYXBwMW8iLCJhIjoiY2poaThkbGZnMjJybzM2czJodDgxcWR1YSJ9.rwfA67fCZem6-aDNb8GVkg'
}).addTo(mymap);

// data taken from splunk maps and processed
// var dataSet = [];
// data.forEach(function(geo, index) {
//   delete geo.result.geobin;
//   dataSet.push(geo.result)
// });
// console.log(JSON.stringify(dataSet))

var data = [{"latitude":"36.37790","longitude":"-120.95437","128.18.22.151":"2","208.73.210.29":"1"},{"latitude":"27.99870","longitude":"-82.51560","198.178.124.50":"3"},{"latitude":"32.15080","longitude":"34.88830","62.0.0.115":"4"},{"latitude":"47.60620","longitude":"-122.33210","174.37.172.101":"1"},{"latitude":"27.99870","longitude":"-82.51560","198.178.124.50":"3"},{"latitude":"32.15080","longitude":"34.88830","62.0.0.115":"4"},{"latitude":"36.37790","longitude":"-120.95437","128.18.22.151":"2","208.73.210.29":"1"},{"latitude":"47.60620","longitude":"-122.33210","174.37.172.101":"1"},{"latitude":"27.99870","longitude":"-82.51560","198.178.124.50":"3"},{"latitude":"32.15080","longitude":"34.88830","62.0.0.115":"4"},{"latitude":"36.37790","longitude":"-120.95437","128.18.22.151":"2","208.73.210.29":"1"},{"latitude":"47.60620","longitude":"-122.33210","174.37.172.101":"1"},{"latitude":"27.99870","longitude":"-82.51560","198.178.124.50":"3"},{"latitude":"32.15080","longitude":"34.88830","62.0.0.115":"4"},{"latitude":"34.05330","longitude":"-118.25490","208.73.210.29":"1"},{"latitude":"37.54020","longitude":"-122.30410","128.18.22.151":"2"},{"latitude":"47.60620","longitude":"-122.33210","174.37.172.101":"1"},{"latitude":"27.99870","longitude":"-82.51560","198.178.124.50":"3"},{"latitude":"32.15080","longitude":"34.88830","62.0.0.115":"4"},{"latitude":"34.05330","longitude":"-118.25490","208.73.210.29":"1"},{"latitude":"37.54020","longitude":"-122.30410","128.18.22.151":"2"},{"latitude":"47.60620","longitude":"-122.33210","174.37.172.101":"1"},{"latitude":"27.99870","longitude":"-82.51560","198.178.124.50":"3"},{"latitude":"32.15080","longitude":"34.88830","62.0.0.115":"4"},{"latitude":"34.05330","longitude":"-118.25490","208.73.210.29":"1"},{"latitude":"37.54020","longitude":"-122.30410","128.18.22.151":"2"},{"latitude":"47.60620","longitude":"-122.33210","174.37.172.101":"1"},{"latitude":"27.99870","longitude":"-82.51560","198.178.124.50":"3"},{"latitude":"32.15080","longitude":"34.88830","62.0.0.115":"4"},{"latitude":"34.05330","longitude":"-118.25490","208.73.210.29":"1"},{"latitude":"37.54020","longitude":"-122.30410","128.18.22.151":"2"},{"latitude":"47.60620","longitude":"-122.33210","174.37.172.101":"1"},{"latitude":"27.99870","longitude":"-82.51560","198.178.124.50":"3"},{"latitude":"32.15080","longitude":"34.88830","62.0.0.115":"4"},{"latitude":"34.05330","longitude":"-118.25490","208.73.210.29":"1"},{"latitude":"37.54020","longitude":"-122.30410","128.18.22.151":"2"},{"latitude":"47.60620","longitude":"-122.33210","174.37.172.101":"1"},{"latitude":"27.99870","longitude":"-82.51560","198.178.124.50":"3"},{"latitude":"32.15080","longitude":"34.88830","62.0.0.115":"4"},{"latitude":"34.05330","longitude":"-118.25490","208.73.210.29":"1"},{"latitude":"37.54020","longitude":"-122.30410","128.18.22.151":"2"},{"latitude":"47.60620","longitude":"-122.33210","174.37.172.101":"1"},{"latitude":"27.99870","longitude":"-82.51560","198.178.124.50":"3"},{"latitude":"32.15080","longitude":"34.88830","62.0.0.115":"4"},{"latitude":"34.05330","longitude":"-118.25490","208.73.210.29":"1"},{"latitude":"37.54020","longitude":"-122.30410","128.18.22.151":"2"},{"latitude":"47.60620","longitude":"-122.33210","174.37.172.101":"1"}];
