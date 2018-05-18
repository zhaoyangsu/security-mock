var routers = [{type: 'router', SrcIP:'172.16.21.139'}, {type: 'router', SrcIP:'128.18.22.6'}];
// {name: fireeye, type: threat}
var rawData = ['adware','spyware','phishtank'];
// dictionary [spyware:2, adware:4]

var nodeSet = [];

var nodeCount = 0;
// loop through servers
for (nodeCount=0; nodeCount<routers.length; nodeCount++) {
  name = 'router (' + routers[nodeCount].SrcIP + ')';
  obj = {id: nodeCount, label: name, shape:'triangle', color:'green'};
  nodeSet.push(obj)
}
// maybe loop through threat by server?
// loop through threats
for (i=0; i<rawData.length; i++) {
  obj = {id: nodeCount, label: rawData[i]};
  nodeSet.push(obj)
  nodeCount++;
}
console.log(nodeSet)
var nodes = new vis.DataSet(nodeSet);

// create an array with edges
var edges = new vis.DataSet([
  {from: 0, to: 2},
  {from: 0, to: 1},
  {from: 1, to: 3},
  {from: 1, to: 4}
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
  },
  manipulation: {enabled:true}
};

// initialize your network!
var network = new vis.Network(container, data, options);
