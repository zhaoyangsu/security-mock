var url = "/api/threats/events/list";
// var url = "https://api.myjson.com/bins/bhdyc";

// $("#jsGrid").jsGrid({
//   width: "1500px",
//   height: "250px",
//   inserting: false,
//   editing: false,
//   sorting: false,
//   paging: false,
//   controller: {
//     loadData: function(filter){
//     return fetch(url).then(response => response.json())
//       .then(threats => {
//         if (threats.length > 5) {
//           threats = threats.slice(0, 5);
//         }
//         // load data 10 seconds after call success
//         setTimeout(function() {
//           $("#jsGrid").jsGrid("loadData");
//         }, 10000);
//         return threats;
//       })
//     }
//   },
//   fields: [
//     { name: "威胁等级", type: "text"},
//     { name: "受威胁局点", type: "text"},
//     { name: "受威胁IP", type: "text" },
//     { name: "威胁类型", type: "text"},
//     { name: "威胁源", type: "text" },
//     { name: "时间", type: "text" },
//     { name: "状态", type: "text"},
//   ],
//   loadIndicator: function(){
//     return {
//       show: function(){},
//       hide: function(){}
//     }
//   }
// });

var jsGridCustomLevelField = function (config) {
    jsGrid.Field.call(this, config);
};

jsGridCustomLevelField.prototype = new jsGrid.Field({
    // sorter: function (num1, num2) {
    //     return num1 - num2;
    // },
    itemTemplate: function (value) {
        var map = {
            "很高" : "threat-very-high",
            "高":"threat-high",
            "中":"threat-middle",
            "低":"threat-low",
            "很低":"threat-very-low",
        }
        return $("<span class='threat-level " + map[value] + "'>").append(value);
    }
    // insertTemplate: function (value) {
    //     this._insertPicker = $('<input type="text">').val(value);
    //     this._insertPicker.autoNumeric('init', optionsCurrency);
    //     return this._insertPicker;
    // },
    // editTemplate: function (value) {
    //     this._editPicker = $('<input type="text">').val(value);
    //     this._editPicker.autoNumeric('init', optionsCurrency);
    //     return this._editPicker;
    // },
    // filterTemplate: function () {
    //     if (!this.filtering)
    //         return '';
    //
    //     var grid = this._grid,
    //         $result = $('<input type="text">').val(0);
    //     if (this.autosearch) {
    //         $result.on('change', function (e) {
    //             grid.search();
    //         });
    //     }
    //
    //     return $result;
    // },
    // filterValue: function () {
    //     console.log(this._insertPicker.val());
    //     return this._insertPicker.val();
    // },
    // insertValue: function () {
    //     return this._insertPicker.autoNumeric('get');
    // },
    // editValue: function () {
    //     return this._editPicker.autoNumeric('get');
    // }
});

jsGrid.fields.threatLevel = jsGridCustomLevelField;


function grid() {

    var tableLen = 5;
    var tableOffset = 0;
    var tableData = [];
    var rawData = [];
    var jsGrid = $("#jsGrid");
    var requestInterval = null;
    var refreshInterval = null;
    var init = function () {
        jsGrid.jsGrid({
            width: "1500px",
            height: "250px",
            inserting: false,
            editing: false,
            sorting: false,
            paging: false,
            controller: {
                loadData: function (filter) {
                    return tableData;
                    // return fetch(url).then(response => response.json())
                    //     .then(threats => {
                    //         if (threats.length > 5) {
                    //             threats = threats.slice(0, 5);
                    //         }
                    //         // load data 10 seconds after call success
                    //         setTimeout(function () {
                    //             $("#jsGrid").jsGrid("loadData");
                    //         }, 10000);
                    //         return threats;
                    //     })
                }
            },
            fields: [
                {name: "威胁等级", type: "threatLevel",width: "50px"},
                {name: "受威胁局点", type: "text"},
                {name: "受威胁IP", type: "text"},
                {name: "威胁类型", type: "text", width: "150px"},
                {name: "威胁源", type: "text"},
                {name: "时间", type: "text"},
                {name: "状态", type: "text"},
            ],
            loadIndicator: function () {
                return {
                    show: function () {
                    },
                    hide: function () {
                    }
                }
            }
        });
        sendReq();
        startRefresh();
    }

    var stopRefresh = function () {
        if (refreshInterval) {
            clearInterval(refreshInterval);
            refreshInterval = null;
        }
        if (requestInterval) {
            clearInterval(requestInterval);
            requestInterval = null;
        }
    }

    var sendReq = function(){
        fetch(url).then(response => response.json())
            .then(threats => {
                rawData = threats;
                tableOffset = 0;
                // jsGrid.jsGrid("loadData");
            })
    }

    var loadData = function() {
        if (rawData == null || rawData.length <= tableLen) {
            tableData = rawData;
        } else {
            tableData = [];
            for (var i = 0; i < tableLen; i++) {
                tableData.push(rawData[(tableOffset + i) % rawData.length]);
            }
        }
        jsGrid.jsGrid("loadData");
        tableOffset ++;
    }

    var startRefresh = function () {
        if (requestInterval == null) {
            requestInterval = setInterval(sendReq,120000);
        }

        if (refreshInterval == null) {
            refreshInterval = setInterval(loadData,2000);
        }
    }

    jsGrid.mouseenter(function(){
        stopRefresh();
    }).mouseleave(function(){
        startRefresh();
    });

    init();
    return {}

}
$(document).ready(function(){
    grid();
});
// var interval = setInterval(function () {
//         console.log()
//     }
//     , 3000);
//
//
// // load data after grid is intialized
// $("#jsGrid").jsGrid("loadData");
