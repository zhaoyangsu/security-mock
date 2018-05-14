Vue.component('bread-crumb', {
  template: '<nav class="breadcrumb" aria-label="breadcrumbs"><ul><li><a href="../">Central SOC</a></li><li><a href="../">China</a></li><li><a href="../">Beijing</a></li><li class="is-active"><a href="#" aria-current="page">Threat List</a></li></ul></nav>'
})


var app = new Vue({
  el: '#app',
  data: {
    threats: []
  },
  created () {
    // stored on myjson - A simple JSON store for your web or mobile app
    fetch('https://api.myjson.com/bins/1eoswi')
      .then(response => response.json())
      .then(json => {
        this.threats = json;
      })
  }
})

Vue.component('nav-bar', {
  template: '<nav class="navbar is-white"><div class="container"><div class="navbar-brand"><a class="navbar-item brand-text" href="index.html">Threat Home</a><div class="navbar-burger burger" data-target="navMenu"><span></span> <span></span> <span></span></div></div><div id="navMenu" class="navbar-menu"><div class="navbar-start"><a class="navbar-item" href="table.html">Threat analysis (Table)</a><a class="navbar-item" href="maps.html">Situation Awareness (Maps)</a> <a class="navbar-item" href="index.html">Asset Management</a> <a class="navbar-item" href="index.html">Threat Intelligence</a> <a class="navbar-item" href="index.html">Vulnerability scan</a></div></div></div></nav>'
})

new Vue({ el: '#navbar' })
