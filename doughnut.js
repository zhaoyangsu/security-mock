var dom = document.getElementById("doughnut");
var myChart = echarts.init(dom);

option = {
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
