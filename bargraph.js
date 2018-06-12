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
  title: {
    text: 'Wheater Statistics'
  },
  grid: {
    left: 100
  },
  xAxis: {
    type: 'value',
    name: 'Days',
    axisLabel: {
      formatter: '{value}'
    }
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
      // righ margin from bar
      margin: 20,
      rich: {
        value: {
          lineHeight: 30,
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
          backgroundColor: {
            image: worldIcons.Japan
          }
        }
      }
    }
  },
  series: [{
      name: 'City Alpha',
      type: 'bar',
      data: [517,495,188,177,150],
    }
  ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
