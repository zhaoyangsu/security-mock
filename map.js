Vue.component('nav-bar', {
  template: '<nav class="navbar is-white"><div class="container"><div class="navbar-brand"><a class="navbar-item brand-text" href="index.html">Threat Home</a><div class="navbar-burger burger" data-target="navMenu"><span></span> <span></span> <span></span></div></div><div id="navMenu" class="navbar-menu"><div class="navbar-start"><a class="navbar-item" href="table.html">Threat analysis (Table)</a><a class="navbar-item" href="maps.html">Situation Awareness (Maps)</a> <a class="navbar-item" href="index.html">Asset Management</a> <a class="navbar-item" href="index.html">Threat Intelligence</a> <a class="navbar-item" href="index.html">Vulnerability scan</a></div></div></div></nav>'
})

new Vue({ el: '#navbar' })

//basic map config with custom fills, mercator projection
var map = new Datamap({
 scope: 'world',
 element: document.getElementById('map'),
 projection: 'mercator',
 height: 700,
 fills: {
   defaultFill: 'rgb(12,56,118)',
   lt50: 'rgb(66,42,56)',
   gt50: 'rgb(14,41,59)',
   highC: 'rgb(238,219,41)',
   keepOrange: 'rgb(206,66,27)'
 },

 data: {
   USA: {fillKey: 'lt50' },
   RUS: {fillKey: 'lt50' },
   CAN: {fillKey: 'lt50' },
   BRA: {fillKey: 'gt50' },
   ARG: {fillKey: 'gt50'},
   COL: {fillKey: 'gt50' },
   AUS: {fillKey: 'gt50' },
   ZAF: {fillKey: 'gt50' },
   MAD: {fillKey: 'gt50' }
 },
 arcConfig: {
   strokeColor: 'rgb(238,219,41)'
 }
})

// Beijing Lat and Long
//latitude: ‎39.913818,
//longitude: 116.363625

//sample of the arc plugin
map.arc([
{
 origin: {
     latitude: 21.32,
     longitude: -84.32
 },
 destination: {
     latitude: 21.32,
     longitude: 5.32
 }
},
{
   origin: {
       latitude: 34.194444,
       longitude: -97.67
   },
   destination: {
       latitude: 39.913818,
       longitude: 116.363625
   }
}
], {strokeWidth: 2});


//bubbles, custom popup on hover template
map.bubbles([
  {name: 'Servers', latitude: 21.32, longitude: 5.32, radius: 10, fillKey: 'keepOrange'},
  {name: 'Port Scan', latitude: 34.194444, longitude: -97.67, radius: 13, fillKey: 'highC'},
  {name: 'DGA Domain', latitude: 21.32, longitude: -84.32, radius: 8, fillKey: 'highC'},
  {name: 'Data Center', latitude: 39.913818, longitude: 116.363625, radius: 17, fillKey: 'keepOrange'},
  ], {
  popupTemplate: function(geo, data) {
    return "<div class='hoverinfo'>Threat: " + data.name + "</div>";
  }
});
