Vue.component('nav-bar', {
  template: '<nav class="navbar is-white"><div class="container"><div class="navbar-brand"><a class="navbar-item brand-text" href="index.html">Threat Home</a><div class="navbar-burger burger" data-target="navMenu"><span></span> <span></span> <span></span></div></div><div id="navMenu" class="navbar-menu"><div class="navbar-start"><a class="navbar-item" href="table.html">Threat analysis (Table)</a><a class="navbar-item" href="maps.html">Situation Awareness (Maps)</a> <a class="navbar-item" href="network.html">Asset Management (Network)</a> <a class="navbar-item" href="bigscreen.html">Threat Intelligence (Big Screen)</a><a class="navbar-item" href="chart.html">Vulnerability scan (Chart)</a></div></div></div></nav>'
})
//
new Vue({ el: '#navbar' })
