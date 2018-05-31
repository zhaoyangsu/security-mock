Vue.component('bread-crumb', {
  template: '<nav class="breadcrumb" aria-label="breadcrumbs" style="margin-bottom: 0;"><ul><li><a href="../">Central SOC</a></li><li><a href="../">China</a></li><li><a href="../">Beijing</a></li><li class="is-active"><a href="#" aria-current="page">Threat List</a></li></ul></nav>'
})


var app = new Vue({
  el: '#app',
  data: {
    threats: []
  },
  created () {
    // stored on myjson - A simple JSON store for your web or mobile app
    // full list https://api.myjson.com/bins/1eoswi, short list below
    fetch('https://api.myjson.com/bins/1041xi')
      .then(response => response.json())
      .then(json => {
        this.threats = json;
      })
  }
})