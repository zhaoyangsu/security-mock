var dom = document.getElementById("colorbar");
var colorbar = echarts.init(dom);
colorbar.setOption({
  title: {
    left: '7%',
    text: '高危资产',
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

fetch(colorbarEndpoint)
  .then(response => response.json())
  .then(jsondata => {
    formattedArray = [];

    // loop through colorArray to apply various colors to bar graph
    // "rgb(36,146,215)",
    var colorArray = ["rgb(232,124,57)","rgb(166,197,57)","rgb(134,143,245)","rgb(182,142,217)"];
    jsondata.forEach(function(obj, index) {
      a = {value: parseInt(obj.count), SrcIP: obj.onThreatIP, itemStyle: {color:colorArray[index]}};
      formattedArray.push(a)
    })

    option = {
      title: {
        left: '7%',
        text: '高危资产',
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
          data: [100,100,100,100],
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
              // offset: [-70,0],
              formatter: function(value) {
                return value.data.SrcIP;
              }
            }
          }
        }
      ]
    };
    colorbar.setOption(option, true);
  })
