Vue.component('nav-bar', {
  template: '<nav class="navbar is-white"><div class="container"><div class="navbar-brand"><a class="navbar-item brand-text" href="index.html">Threat Home</a><div class="navbar-burger burger" data-target="navMenu"><span></span> <span></span> <span></span></div></div><div id="navMenu" class="navbar-menu"><div class="navbar-start"><a class="navbar-item" href="table.html">Threat analysis (Table)</a><a class="navbar-item" href="maps.html">Situation Awareness (Maps)</a> <a class="navbar-item" href="network.html">Asset Management (Network)</a> <a class="navbar-item" href="index.html">Threat Intelligence</a> <a class="navbar-item" href="index.html">Vulnerability scan</a></div></div></div></nav>'
})

new Vue({ el: '#navbar' })
