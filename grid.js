// var url = "http://172.18.175.204:8080/api/threats";
var url = "https://api.myjson.com/bins/bhdyc";

$("#jsGrid").jsGrid({
  width: "1500px",
  height: "250px",
  inserting: false,
  editing: false,
  sorting: false,
  paging: false,
  controller: {
    loadData: function(filter){
    return fetch(url).then(response => response.json())
      .then(threats => {
        if (threats.length > 5) {
          threats = threats.slice(0, 5);
        }
        // load data 10 seconds after call success
        setTimeout(function() {
          $("#jsGrid").jsGrid("loadData");
        }, 10000);
        return threats;
      })
    }
  },
  fields: [
    { name: "威胁等级", type: "text"},
    { name: "受威胁局点", type: "text"},
    { name: "受威胁IP", type: "text" },
    { name: "威胁类型", type: "text"},
    { name: "威胁源", type: "text" },
    { name: "时间", type: "text" },
    { name: "状态", type: "text"},
  ],
  loadIndicator: function(){
    return {
      show: function(){},
      hide: function(){}
    }
  }
});

// load data after grid is intialized
$("#jsGrid").jsGrid("loadData");
