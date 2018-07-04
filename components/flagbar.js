var dom = document.getElementById("flagbar");
var flagbar = echarts.init(dom);

fetch(endpoints.flagbar)
  .then(response => response.json())
  .then(jsondata => {
    formattedArray = [];
    yAxisFlag = [];
    yAxisLabel = [];
    //console.log(jsondata)
    var colorArray = ["rgb(36,146,215)","rgb(232,124,57)","rgb(166,197,57)","rgb(134,143,245)","rgb(182,142,217)"];
    jsondata.forEach(function(obj, index) {
      if (!obj.Country) {
        obj.Country = "China";
      }
      a = {value: parseInt(obj.count), Country: obj.Country, SrcIP: obj.SrcIP, itemStyle: {color:colorArray[index]}};
      yAxisFlag.push(obj.Country);
      yAxisLabel.push(obj.SrcIP);
      formattedArray.push(a)
    })
    // console.log(yAxisLabel)
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
        text: 'TOP威胁源主机',
        textStyle: {
          color: '#fff',
          fontSize: '24'
        },
        left: '35',
        // top: '7'
      },
      // margin-left for legend
      grid: { left: 60 },
      xAxis: {
        type: 'value',
        axisLabel: {formatter: '{value}', color:"rgb(125,149,193)"},
        position: 'top'
      },
      yAxis: [{
        type: 'category',
        inverse: true,
        data: yAxisFlag,
        axisLabel: {
          formatter: function(value) {
            return '{' + value + '| }\n{value|' + value + '}';
          },
          margin: 20,
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
      {
        position: 'left',
        type: 'category',
        inverse: true,
        data: yAxisLabel,
        axisLabel: {
          inside: true,
          padding: [0,0,16,0],
          // from y-axis label
          margin: 6,
          color: '#fff',
          fontSize: 15
         }
      }],
      series: [
        {
          type: 'bar',
          data: formattedArray,
          barWidth: '20%',
        }
      ]
    };
    flagbar.setOption(option, true);
  })
