var dom = document.getElementById("doughnut");
var myChart = echarts.init(dom);

option = {
  // linear gradient background color
  backgroundColor: {
    type: 'linear',
    x: 0, y: 0, x2: 0, y2: 1,
    colorStops: [{
      offset: 0, color: 'rgb(9,31,66)' // color at 0% position
    }, {
      offset: 1, color: 'rgb(3,22,51)' // color at 100% position
    }],
  },
  tooltip: {
    trigger: 'item',
    formatter: "{a} <br/>{b}: {c} ({d}%)"
  },
  series: [
    {
      name:'访问来源',
      type:'pie',
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: true,
          position: 'center',
          textStyle: {
              fontSize: '100',
              fontWeight: 'bold'
          }
        }
      },
      labelLine: {
          normal: {
              show: false
          }
      },
      data:[
          {value:335, name:'23'},
          {value:310},
          {value:234},
          {value:135},
          {value:1548}
      ]
    }
  ]
};

myChart.setOption(option, true);
