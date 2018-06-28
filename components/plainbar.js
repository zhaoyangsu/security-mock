var dom = document.getElementById("plainbar");
var plainbar = echarts.init(dom);
plainbar.setOption({
  title: {
    left: '7%',
    text: '高危区域',
    textStyle: {color: '#fff'}
  },
  // linear gradient background color
}, true);

fetch(endpoints.plainbar)
  .then(response => response.json())
  .then(jsondata => {
    formattedArray = [];

    jsondata.forEach(function(obj, index) {
      a = {value: obj.count, SrcIP: obj.DestArea};
      formattedArray.push(a)
    })

    option = {
      title: {
        left: '30',
        top: '7',
        text: '高危区域',
        textStyle: {
          color: '#fff',
          fontSize: "40"
        }
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
          // hide unwanted axis label with size
          fontSize: 1,
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
