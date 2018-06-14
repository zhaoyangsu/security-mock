var dom = document.getElementById("colorGraph");
var graph1 = echarts.init(dom);
option = {
  title: {
    left: '7%',
    text: 'TOP威胁源主机',
    textStyle: {color: '#fff'}
  },
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
  xAxis: {
    type: 'value',
    axisLabel: {formatter: '{value}', color:"rgb(125,149,193)"},
    position: 'top'
  },
  yAxis: {
    type: 'category',
    inverse: true,
    data: ['China','Russia', 'South_Korea', 'America', 'Japan'],
    axisLabel: {
      margin: 20,
      // #ffffff hide with  color
      color: 'rgb(9,31,66)',
    }
  },
  series: [
    { // For shadow
      type: 'bar',
      itemStyle: {
        normal: {color: 'rgb(19,56,86)'}
      },
      barGap:'-100%',
      barCategoryGap:'40%',
      barWidth: '20%',
      data: [600,600,600,600,600],
      animation: false,
    },
    {
      name: 'City Alpha',
      type: 'bar',
      data: [{value: 517, ip: '222.11.11.120', itemStyle: {color: 'rgb(36,146,215)'}},
      {value: 495, ip: '194.1.239.124', itemStyle: {color: 'rgb(232,124,57)'}},
      {value: 188, ip: '147.43.12.215', itemStyle: {color: 'rgb(166,197,57)'}},
      {value: 177, ip: '104.244.14.252', itemStyle: {color: 'rgb(134,143,245)'}},
      {value: 150, ip: '49.156.170.241', itemStyle: {color: 'rgb(182,142,217)'}}],
      barWidth: '20%',
      label: {
        normal: {
          show: true,
          formatter: function(value) {
            return value.data.ip;
          }
        }
      }
    }
  ]
};
graph1.setOption(option, true);
