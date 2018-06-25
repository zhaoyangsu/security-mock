var dom = document.getElementById("circlerose");
var graph1 = echarts.init(dom);

var data1 = [{value:10, name:'rose1'},
  {value:5, name:'rose2'},
  {value:15, name:'rose3'},
  {value:25, name:'rose4'},
  {value:20, name:'rose5'},
  {value:35, name:'rose6'},
  {value:30, name:'rose7'},
  {value:40, name:'rose8'}];
var data2 = [{value:100, name:'very high'}]

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
    graph1.setOption(option1, true);
  })
