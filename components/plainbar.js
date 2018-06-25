var dom = document.getElementById("plainbar");
var plainbar = echarts.init(dom);
plainbar.setOption({
  title: {
    left: '7%',
    text: '高危区域',
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

fetch(plainbarEndpoint)
  .then(response => response.json())
  .then(jsondata => {
    formattedArray = [];

    jsondata.forEach(function(obj, index) {
      a = {value: obj.pers, SrcIP: obj.onThreatArea};
      formattedArray.push(a)
    })

    option = {
      title: {
        left: '7%',
        text: '高危区域',
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
          data: [50,50,50,50],
          animation: false,
        },
        {
          name: 'City Alpha',
          type: 'bar',
          data: formattedArray,
          itemStyle: {
            normal: {color: 'rgb(38,196,192)'}
          },
          barWidth: '25%',
          // two labels can do the number on the right
          label: {
            normal: {
              show: true,
              position: 'top',
              // distance to host graphic element
              distance: 3,
              align: 'left',
              fontSize: 15,
              offset: [-70,0],
              formatter: function(value) {
                return value.data.SrcIP;
              }
            }
          }
        }
      ]
    };
    plainbar.setOption(option, true);
  })
