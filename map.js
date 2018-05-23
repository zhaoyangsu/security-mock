//basic map config with custom fills, mercator projection
var map = new Datamap({
  element: document.getElementById('map'),
  geographyConfig: {
   // dataUrl: 'https://raw.githubusercontent.com/markmarkoh/datamaps/master/src/js/data/chn.topo.json',
   dataJson: 'chn.topo.json'
  },
  scope: 'world',
  height: 700,
  fills: {
    lt50: 'rgb(66,42,56)'
  },
  data: {
    CHN: {fillKey: 'lt50' }
  },
  // projection: 'mercator',
  setProjection: function (element) {
    var projection = d3.geo.mercator()
      .center([90.49, 40.09]) // always in [East Latitude, North Longitude]
      .scale(700);
    var path = d3.geo.path().projection(projection);
    return { path: path, projection: projection };
  },
})

// Beijing Lat and Long
//latitude: ‎39.913818,
//longitude: 116.363625

//sample of the arc plugin
// map.arc([
// {
//  origin: {
//      latitude: 21.32,
//      longitude: -84.32
//  },
//  destination: {
//      latitude: 21.32,
//      longitude: 5.32
//  }
// },
// {
//    origin: {
//        latitude: 34.194444,
//        longitude: -97.67
//    },
//    destination: {
//        latitude: 39.913818,
//        longitude: 116.363625
//    }
// }
// ], {strokeWidth: 2});

// data taken from splunk maps and processed
// var dataSet = [];
// data.forEach(function(geo, index) {
//   delete geo.result.geobin;
//   dataSet.push(geo.result)
// });
// console.log(JSON.stringify(dataSet))

var data = [{"latitude":"36.37790","longitude":"-120.95437","128.18.22.151":"2","208.73.210.29":"1"},{"latitude":"27.99870","longitude":"-82.51560","198.178.124.50":"3"},{"latitude":"32.15080","longitude":"34.88830","62.0.0.115":"4"},{"latitude":"47.60620","longitude":"-122.33210","174.37.172.101":"1"},{"latitude":"27.99870","longitude":"-82.51560","198.178.124.50":"3"},{"latitude":"32.15080","longitude":"34.88830","62.0.0.115":"4"},{"latitude":"36.37790","longitude":"-120.95437","128.18.22.151":"2","208.73.210.29":"1"},{"latitude":"47.60620","longitude":"-122.33210","174.37.172.101":"1"},{"latitude":"27.99870","longitude":"-82.51560","198.178.124.50":"3"},{"latitude":"32.15080","longitude":"34.88830","62.0.0.115":"4"},{"latitude":"36.37790","longitude":"-120.95437","128.18.22.151":"2","208.73.210.29":"1"},{"latitude":"47.60620","longitude":"-122.33210","174.37.172.101":"1"},{"latitude":"27.99870","longitude":"-82.51560","198.178.124.50":"3"},{"latitude":"32.15080","longitude":"34.88830","62.0.0.115":"4"},{"latitude":"34.05330","longitude":"-118.25490","208.73.210.29":"1"},{"latitude":"37.54020","longitude":"-122.30410","128.18.22.151":"2"},{"latitude":"47.60620","longitude":"-122.33210","174.37.172.101":"1"},{"latitude":"27.99870","longitude":"-82.51560","198.178.124.50":"3"},{"latitude":"32.15080","longitude":"34.88830","62.0.0.115":"4"},{"latitude":"34.05330","longitude":"-118.25490","208.73.210.29":"1"},{"latitude":"37.54020","longitude":"-122.30410","128.18.22.151":"2"},{"latitude":"47.60620","longitude":"-122.33210","174.37.172.101":"1"},{"latitude":"27.99870","longitude":"-82.51560","198.178.124.50":"3"},{"latitude":"32.15080","longitude":"34.88830","62.0.0.115":"4"},{"latitude":"34.05330","longitude":"-118.25490","208.73.210.29":"1"},{"latitude":"37.54020","longitude":"-122.30410","128.18.22.151":"2"},{"latitude":"47.60620","longitude":"-122.33210","174.37.172.101":"1"},{"latitude":"27.99870","longitude":"-82.51560","198.178.124.50":"3"},{"latitude":"32.15080","longitude":"34.88830","62.0.0.115":"4"},{"latitude":"34.05330","longitude":"-118.25490","208.73.210.29":"1"},{"latitude":"37.54020","longitude":"-122.30410","128.18.22.151":"2"},{"latitude":"47.60620","longitude":"-122.33210","174.37.172.101":"1"},{"latitude":"27.99870","longitude":"-82.51560","198.178.124.50":"3"},{"latitude":"32.15080","longitude":"34.88830","62.0.0.115":"4"},{"latitude":"34.05330","longitude":"-118.25490","208.73.210.29":"1"},{"latitude":"37.54020","longitude":"-122.30410","128.18.22.151":"2"},{"latitude":"47.60620","longitude":"-122.33210","174.37.172.101":"1"},{"latitude":"27.99870","longitude":"-82.51560","198.178.124.50":"3"},{"latitude":"32.15080","longitude":"34.88830","62.0.0.115":"4"},{"latitude":"34.05330","longitude":"-118.25490","208.73.210.29":"1"},{"latitude":"37.54020","longitude":"-122.30410","128.18.22.151":"2"},{"latitude":"47.60620","longitude":"-122.33210","174.37.172.101":"1"},{"latitude":"27.99870","longitude":"-82.51560","198.178.124.50":"3"},{"latitude":"32.15080","longitude":"34.88830","62.0.0.115":"4"},{"latitude":"34.05330","longitude":"-118.25490","208.73.210.29":"1"},{"latitude":"37.54020","longitude":"-122.30410","128.18.22.151":"2"},{"latitude":"47.60620","longitude":"-122.33210","174.37.172.101":"1"}];

//bubbles, custom popup on hover template


var geoPins = [];
data.forEach(function(geo) {
  // sometimes there are two ip addresses with counts
  //console.log(Object.getOwnPropertyNames(geo));
  obj = {name: Object.getOwnPropertyNames(geo)[2], latitude:geo.latitude, longitude:geo.longitude, radius: 8, fillKey: 'keepOrange'};
  geoPins.push(obj);
})
map.bubbles(geoPins, {
  popupTemplate: function(geo, data) {
    return "<div class='hoverinfo'>Threat: " + data.name + "</div>";
  }
});
// [
//   {name: 'Servers', latitude: 21.32, longitude: 5.32, radius: 10, fillKey: 'keepOrange'},
//   {name: 'Port Scan', latitude: 34.194444, longitude: -97.67, radius: 13, fillKey: 'highC'},
//   {name: 'DGA Domain', latitude: 21.32, longitude: -84.32, radius: 8, fillKey: 'highC'},
//   {name: 'Data Center', latitude: 39.913818, longitude: 116.363625, radius: 17, fillKey: 'keepOrange'},
//   ]
