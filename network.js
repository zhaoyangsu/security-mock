// create an array with nodes
var nodes = new vis.DataSet([
    {id: 'router', label: 'Router', shape:'triangle', color:'green'},
    {id: 2, label: 'Server'},
    {id: 3, label: 'Server'},
    {id: 4, label: 'spyware'},
    {id: 5, label: 'phishtank'}
]);

// create an array with edges
var edges = new vis.DataSet([
    {from: 'router', to: 3},
    {from: 'router', to: 2},
    {from: 2, to: 4},
    {from: 2, to: 5}
]);

// create a network
var container = document.getElementById('network-example');

// provide the data in the vis format
var data = {
    nodes: nodes,
    edges: edges
};

// very useful to customize table
// configure: {
//   enabled: true
// },

var options = {
  interaction: {
    dragView: false,
    zoomView: false
  },
  nodes:{
    shape: 'circle'
  },
  edges:{
    smooth: {
      enabled: false
    }
  },
  physics: {
    enabled:false
  }
};

// initialize your network!
var network = new vis.Network(container, data, options);
