Vue.component('bread-crumb', {
  template: '<nav class="breadcrumb" aria-label="breadcrumbs" style="margin-bottom: 0;"><ul><li><a href="../">Central SOC</a></li><li><a href="../">China</a></li><li><a href="../">Beijing</a></li><li class="is-active"><a href="#" aria-current="page">Threat List</a></li></ul></nav>'
})

var assetUrl = 'http://10.145.89.154:8080/api/database/asset';

fetch('http://10.145.89.154:8080/api/database/asset?cluster=jx_cluster2')
  .then(response => response.json())
  .then(threats => {
    $("#jsGrid").jsGrid({
        width: "100%",
        height: "80%",
        inserting: true,
        editing: true,
        sorting: true,
        // paging: true,
        data: threats,
        fields: [
            { name: "category", type: "text", width: 70},
            { name: "vdc", type: "text", width: 100 },
            { name: "name", type: "text", width: 200 },
            { name: "create_time", type: "text", width: 100 },
            { name: "id", type: "text", width: 100 },
            { name: "type", type: "text", width: 50 },
            { name: "cluster", type: "text", width: 100 },
            { type: "control" }
        ],
        onItemUpdated: function(args) {
          console.log("updated", args.item)
          fetch(assetUrl, {
            body: JSON.stringify(args.item), // must match 'Content-Type' header
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
          })
          .then(function(response) {
            console.log(response);
          });
        },
        onItemInserted: function(args) {
          console.log("inserted", args.item)
          fetch(assetUrl, {
            body: JSON.stringify(args.item), // must match 'Content-Type' header
            method: 'POST'
          })
          .then(function(response) {
            console.log(response);
          });
        },
        onItemDeleted: function(args) {
          console.log("deleted", args.item)
          fetch(assetUrl, {
            body: JSON.stringify(args.item), // must match 'Content-Type' header
            method: 'DELETE'
          })
          .then(function(response) {
            console.log(response);
          });
        }
    });
})
