$(document).ready(function(){
  moment.locale('zh-cn');
  var updateTime = function() {
    $(".timestamp").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
  }
  setInterval(updateTime, 1000);
});
