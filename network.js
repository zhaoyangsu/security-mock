var nodes = [{"id": 1, "node_name": "app_server1", "type": "virtual_machine", "zone": "application", "ip": ["application", "10.0.1.5"]},{"id": 2, "node_name": "app_server2", "type": "virtual_machine", "zone": "application", "ip": ["application", "10.0.1.6"]},{"id": 3, "node_name": "app_server3", "type": "virtual_machine", "zone": "application", "ip": ["application", "10.0.1.7"]},{"id": 4, "node_name": "app_host1", "type": "dell_server", "zone": "virtualization", "ip": ["virtualization", "10.0.1.3"]},{"id": 5, "node_name": "router1", "type": "router", "zone": "network", "ip": ["virtualization", "10.0.1.1"]},{"id": 6, "node_name": "firewall1", "type": "firewall", "zone": "security", "ip": ["mgmt", "192.168.1.5"]},{"id": 7, "node_name": "router2", "type": "router", "zone": "network", "ip": ["DMZ", "10.0.0.1"]},{"id": 8, "node_name": "firewall2", "type": "firewall", "zone": "security", "ip": ["mgmt", "192.168.2.5"]},{"id": 9, "node_name": "ids", "type": "ids", "zone": "DMZ", "ip": ["DMZ", "10.0.0.2"]},{"id": 10, "node_name": "switch1", "type": "switch", "zone": "network", "ip": ["Internet", "11.11.11.11"]}];
//console.log(nodes);

var links = [{"id" : 1, "node1": 1, "node2": 4, "relation": 4},{"id" : 2, "node1": 2, "node2": 4, "relation": 4},{"id" : 3, "node1": 3, "node2": 4, "relation": 4},{"id" : 4, "node1": 5, "node2": 4, "relation": 4},{"id" : 5, "node1": 5, "node2": 6, "relation": 4},{"id" : 6, "node1": 7, "node2": 6, "relation": 4},{"id" : 7, "node1": 7, "node2": 8, "relation": 4},{"id" : 8, "node1": 7, "node2": 9, "relation": 4},{"id" : 9, "node1": 9, "node2": 10, "relation": 4}];

var nodeSet = [];

// loop through nodes to apply correct styling
for (ic=0; ic<nodes.length; ic++) {
  node = nodes[ic];
  // fastest javascript to check through list
  if (node.type == "virtual_machine") {
    node.shape = "triangle";
    node.color = "DarkViolet";
  } else if (node.type == "router") {
    node.shape = "square";
    node.color = "orange";
  } else {
    node.shape = "circle";
    node.color = "blue";
    node.font = "true";
  }
  name = node.node_name;
  // + " ("'router (' + nodes[ic].SrcIP + ')';
  if (node.font) {
    obj = {id: ic, label: name, shape:node.shape, color:node.color, zone:node.zone, font:{color:'white'}};
  } else {
    obj = {id: ic, label: name, shape:node.shape, color:node.color, zone:node.zone};
  }
  nodeSet.push(obj)
}
// maybe loop through threat by server?
// loop through threats
//console.log(nodeSet)
var nodes = new vis.DataSet(nodeSet);

var edgeSet = [];
for (icl=0; icl<links.length; icl++) {
  obj = {from:links[icl].node1-1, to:links[icl].node2-1}
  edgeSet.push(obj);
}

//console.log(edgeSet)
var edges = new vis.DataSet(edgeSet);

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

// on add node send JSON object to rest API
// grouping for each nodes, virtual lines to group nodes
// filter nodes
// business filter, security filter

// filter out attack
