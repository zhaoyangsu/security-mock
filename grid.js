var threatsUrl = 'http:10.145.89.154:3128/threats';
 fetch(threatsUrl)
   .then(response => response.json())
   .then(threats => {
     $("#jsGrid").jsGrid({
         width: "100%",
         height: "80%",
         inserting: true,
         editing: true,
         sorting: true,
         paging: true,
         data: threats,
         fields: [
             { name: "EventLevel", type: "text", width: 70},
             { name: "OnThreatIP", type: "text", width: 100 },
             { name: "c_time", type: "text", width: 100 },
             { name: "EventName", type: "text", width: 100 },
             { name: "EventState", type: "text", width: 100 },
             { name: "SrcIP", type: "text", width: 100 },
             { name: "DestArea", type: "text", width: 100 },
             { type: "control" }
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
         }
     });
 })
