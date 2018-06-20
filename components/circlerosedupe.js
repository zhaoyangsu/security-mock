// 10.145.89.154:5000/threats/area/top4
fetch('https://api.myjson.com/bins/1ed9e6')
  .then(response => response.json())
  .then(jsondata => {
    formattedArray = [];
    jsondata.forEach(function(obj, index) {
      a = {value: obj.pers, name: obj.EventLevel};
      formattedArray.push(a)
    })
    console.log(formattedArray);
    var dom = document.getElementById("dupecirclerose");
    var graph2 = echarts.init(dom);
    option2 = {
      title : {
          text: '威胁等级分布',
          // subtext: '纯属虚构',
          // x:'center',
          textStyle: {color: '#fff'},
          left: '7%'
      },
      backgroundColor: {
        type: 'linear',
        x: 0, y: 0, x2: 0, y2: 1,
        colorStops: [{
          offset: 0, color: 'rgb(9,31,66)' // color at 0% position
        }, {
          offset: 1, color: 'rgb(3,22,51)' // color at 100% position
        }],
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
    graph2.setOption(option2, true);
});
