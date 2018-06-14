var dom = document.getElementById("barGraph");
var myChart = echarts.init(dom);

var worldIcons = {
  'China': 'flags/China.png',
  'Russia': 'flags/Russian_Federation.png',
  'America': 'flags/United_States_of_America.png',
  'SouthKorea': 'flags/South_Korea.png',
  'Japan': 'flags/Japan.png'
};

option = {
  // color: ['rgb(247,132,58)','rgb(36,146,215)'],
  title: {
    left: '7%',
    text: 'TOP威胁源主机',
    textStyle: {color: 'rgb(117,240,255)'}
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
  // margin-left for legend
  grid: { left: 100 },
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
      formatter: function(value) {
        return '{' + value + '| }\n{value|' + value + '}';
      },
      margin: 20,
      // #ffffff hide with  color
      color: 'rgb(9,31,66)',
      rich: {
        value: {
          lineHeight: 0,
          align: 'center',
          // fontSize 1 to hide the text, use icons
          fontSize: 1,
          height: 20,
        },
        China: {
          backgroundColor: {image: worldIcons.China}
        },
        Russia: {
          backgroundColor: {image: worldIcons.Russia}
        },
        South_Korea: {
          backgroundColor: {image: worldIcons.SouthKorea}
        },
        America: {
          backgroundColor: {image: worldIcons.America}
        },
        Japan: {
          backgroundColor: {image: worldIcons.Japan}
        }
      }
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
      // label: {
      //   normal: {
      //     show: true,
      //     position: 'right',
      //     color: 'rgb(36,146,215)',
      //     formatter: function(value) {
      //       // console.log(value)
      //       return value.data.ip;
      //     }
      //   }
      // }
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

myChart.setOption(option, true);
