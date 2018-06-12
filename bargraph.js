var dom = document.getElementById("barGraph");
var myChart = echarts.init(dom);
var app = {};
option = null;
app.title = '极坐标系下的堆叠柱状图';

var worldIcons = {
  'Albania': 'flags/Albania.png',
  'Russia': 'flags/Russian_Federation.png',
  'America': 'flags/United_States_of_America.png',
  'SouthKorea': 'flags/South_Korea.png',
  'Japan': 'flags/Japan.png'
};

option = {
  color: ['rgb(247,132,58)','rgb(36,146,215)'],
  title: {
    left: '35%',
    text: 'Wheater Statistics',
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
    data: ['Albania','Russia', 'South_Korea', 'America', 'Japan'],
    axisLabel: {
      formatter: function(
        value) {
        return '{' + value + '| }\n{value|' + value + '}';
      },
      margin: 20,
      // #ffffff hide with font color
      color: 'rgb(9,31,66)',
      rich: {
        value: {
          lineHeight: 0,
          align: 'center'
        },
        Albania: {
          height: 20,
          align: 'center',
          backgroundColor: {image: worldIcons.Albania}
        },
        Russia: {
          height: 20,
          align: 'center',
          backgroundColor: {image: worldIcons.Russia}
        },
        South_Korea: {
          height: 20,
          align: 'center',
          backgroundColor: {image: worldIcons.SouthKorea}
        },
        America: {
          height: 20,
          align: 'center',
          backgroundColor: {image: worldIcons.America}
        },
        Japan: {
          height: 20,
          align: 'center',
          backgroundColor: {image: worldIcons.Japan}
        }
      }
    }
  },
  series: [{
      name: 'City Alpha',
      type: 'bar',
      data: [517,495,188,177,150],
      barWidth: '20%'
    }
  ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
