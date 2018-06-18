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

// 10.145.89.154:8888/threats/asset/top4
fetch('https://api.myjson.com/bins/106pri')
  .then(response => response.json())
  .then(jsondata => {
    formattedArray = [];
    //console.log(jsondata)
    // loop through colorArray to apply various colors to bar graph
    var colorArray = ["rgb(36,146,215)","rgb(232,124,57)","rgb(166,197,57)","rgb(134,143,245)","rgb(182,142,217)"];
    jsondata.forEach(function(obj, index) {
      if (!obj.Country) {
        obj.Country = "China";
      }
      a = {value: parseInt(obj.count), SrcIP: obj.SrcIP, itemStyle: {color:colorArray[index]}};
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
          data: [600,600,600,600,600],
          animation: false,
        },
        {
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
              position: 'top',
              // distance to host graphic element
              distance: 3,
              align: 'left',
              fontSize: 15,
              // offset: [-70,0],
              formatter: function(value) {
                return value.data.ip;
              }
            }
          }
        }
      ]
    };
    colorbar.setOption(option, true);
  })
