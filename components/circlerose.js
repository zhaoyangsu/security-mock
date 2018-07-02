var dom = document.getElementById("circlerose");
var graph1 = echarts.init(dom);

fetch(endpoints.circlerose)
.then(response => response.json())
.then(jsondata => {
  formattedArray = [];
  jsondata.forEach(function(obj, index) {
    a = {value: obj.pers, name: obj.EventLevel};
    formattedArray.push(a)
  })
  // console.log(formattedArray);
  option1 = {
    title : {
        text: '威胁等级分布',
        // subtext: '纯属虚构',
        // x:'center',
        textStyle: {
      color: '#fff',
    fontSize: '24'
    },
        left: '7',
    top: '7'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    calculable : true,
    series : [
      {
        name:'面积模式',
        type:'pie',
        radius : [30, 110],
        roseType : 'area',
        data: formattedArray
      }
    ]
  };
  graph1.setOption(option1, true);
})
