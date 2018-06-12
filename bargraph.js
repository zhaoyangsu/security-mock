var dom = document.getElementById("barGraph");
var myChart = echarts.init(dom);
var app = {};
option = null;
app.title = '极坐标系下的堆叠柱状图';

// {name: '浏览',icon: 'image://flags/Albania.png'},
// {name: '浏览',icon: 'image://flags/Russian_Federation.png'},
// {name: '浏览',icon: 'image://flags/United_States_of_America.png'},
// {name: '浏览',icon: 'image://flags/South_Korea.png'},
// {name: '浏览',icon: 'image://flags/Japan.png'},

var weatherIcons = {
  'Sunny': 'flags/Albania.png',
  'Cloudy': 'flags/Russian_Federation.png',
  'Showers': 'flags/United_States_of_America.png'
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
    data: ['Sunny', 'Cloudy', 'Showers'],
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
        Sunny: {
          height: 20,
          align: 'center',
          backgroundColor: {
            image: weatherIcons.Sunny
          }
        },
        Cloudy: {
          height: 20,
          align: 'center',
          backgroundColor: {
            image: weatherIcons.Cloudy
          }
        },
        Showers: {
          height: 20,
          align: 'center',
          backgroundColor: {
            image: weatherIcons.Showers
          }
        }
      }
    }
  },
  series: [{
      name: 'City Alpha',
      type: 'bar',
      data: [517],
    }, {
      name: 'City Beta',
      type: 'bar',
      data: [150]
    }, {
      name: 'City Gamma',
      type: 'bar',
      data: [220]
    }
  ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
