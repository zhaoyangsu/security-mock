if (false) {
var threats = [];
  $("#jsGrid").jsGrid({
      width: 100%,
      height: 380px,
      inserting: true,
      editing: true,
      sorting: true,
      // paging: true,
      data: threats,
      fields: [
          { name: "Category", type: "text", width: 70},
          { name: "VDC", type: "text", width: 100 },
          { name: "Name", type: "text", width: 200 },
          { name: "Create_Time", type: "number", width: 100 },
          { name: "ID", type: "text", width: 100 },
          { name: "Status", type: "text", width: 50 },
          { name: "Cluster", type: "text", width: 100 },
          { type: "control" }
      ]
  });
} else {
  var url = "http://172.18.175.204:8080/api/threats";
  $("#jsGrid").jsGrid({
    width: "1500px",
    height: "250px",
    inserting: false,
    editing: false,
    sorting: false,
    paging: false,
    controller: {
      loadData: function(filter){
        return fetch(url)
          .then(response => response.json())
          .then(threats => {
            if (threats.length > 5) {
              threats = threats.slice(0, 5);
            }
              return threats;
          });
      },
           // data: threats,
    fields: [
      { name: "威胁等级", type: "text"},
      { name: "受威胁局点", type: "text"},
      { name: "受威胁IP", type: "text"},
      { name: "威胁类型", type: "text"},
      { name: "威胁源", type: "text"},
      { name: "时间", type: "text"},
      { name: "状态", type: "text"},
    ],
    onItemUpdated: function(args) {
      console.log("updated", args.item)
      fetch(assetUrl, {
        body: JSON.stringify(args.item),  //must match 'Content-Type' header
        method: 'PUT',  //*GET, POST, PUT, DELETE, etc.
      })
      .then(function(response) {
        console.log(response);
      });
    },
    onItemInserted: function(args) {
      console.log("inserted", args.item)
      fetch(assetUrl, {
        body: JSON.stringify(args.item),  //must match 'Content-Type' header
        method: 'POST'
      })
      .then(function(response) {
        console.log(response);
      });
    },
    onItemDeleted: function(args) {
      console.log("deleted", args.item)
      fetch(assetUrl, {
        body: JSON.stringify(args.item),  //must match 'Content-Type' header
        method: 'DELETE'
      })
      .then(function(response) {
        console.log(response);
      });
    },
    loadIndicator: function(){
      return {
        show:function(){},
        hide:function(){}
      }
    }
  });

  console.log("===========================");
  $("#jsGrid").jsGrid("loadData");
  setInterval(function(){
    $("#jsGrid").jsGrid("loadData");
  }, 10000);
}

// widen last table head to accomdate scrollbar
$('.jsgrid-control-field').first().css("width","63.5px");
