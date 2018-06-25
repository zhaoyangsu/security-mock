var dom = document.getElementById("flagbar");
var flagbar = echarts.init(dom);
// for longer callbacks need an intial setOption?
flagbar.setOption({
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
}, true);

// 10.145.89.154:8888/threats/src/top5
fetch('https://api.myjson.com/bins/106pri')
  .then(response => response.json())
  .then(jsondata => {
    formattedArray = [];
    yAxisFlag = [];
    //console.log(jsondata)
    var colorArray = ["rgb(36,146,215)","rgb(232,124,57)","rgb(166,197,57)","rgb(134,143,245)","rgb(182,142,217)"];
    jsondata.forEach(function(obj, index) {
      if (!obj.Country) {
        obj.Country = "China";
      }
      a = {value: parseInt(obj.count), Country: obj.Country, SrcIP: obj.SrcIP, itemStyle: {color:colorArray[index]}};
      yAxisFlag.push(obj.Country);
      formattedArray.push(a)
    })
    // console.log(formattedArray)
    // console.log(yAxisFlag)
    var worldIcons = {
      'China': 'public/flags/China.png',
      'Russia': 'public/flags/Russian_Federation.png',
      'United_States': 'public/flags/United_States_of_America.png',
      'SouthKorea': 'public/flags/South_Korea.png',
      'Japan': 'public/flags/Japan.png',
      'India': 'public/flags/India.png'
    };
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
        data: yAxisFlag,
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
            United_States: {
              backgroundColor: {image: worldIcons.United_States}
            },
            Japan: {
              backgroundColor: {image: worldIcons.Japan}
            },
            India: {
              backgroundColor: {image: worldIcons.India}
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
          data: [10,10,10,10,10],
          animation: false,
        },
        {
          type: 'bar',
          data: formattedArray,
          barWidth: '20%',
          label: {
            normal: {
              show: true,
              position: 'top',
              // distance to host graphic element
              distance: 3,
              align: 'left',
              fontSize: 15,
              formatter: function(value) {
                return value.data.SrcIP;
              }
            }
          }
        }
      ]
    };
    flagbar.setOption(option, true);
  })
