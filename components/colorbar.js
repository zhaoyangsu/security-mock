var dom = document.getElementById("colorbar");
var colorbar = echarts.init(dom);

function loadcolorbar() {
  fetch(endpoints.colorbar)
    .then(response => response.json())
    .then(jsondata => {
      formattedArray = [];
      yAxisLabel = [];
      // loop through colorArray to apply various colors to bar graph
      // "rgb(36,146,215)",
      var colorArray = ["rgb(232,124,57)","rgb(166,197,57)","rgb(134,143,245)","rgb(182,142,217)"];
      jsondata.forEach(function(obj, index) {
        a = {value: parseInt(obj.count), itemStyle: {color:colorArray[index]}};
        formattedArray.push(a);
        yAxisLabel.push(obj.DestIP);
      })

      option = {
        title: {
          text: '高危资产',
          textStyle: {
            color: '#fff',
            fontSize: '24'
          },
          left: '35',
          top: '7'
        },
        xAxis: {
          type: 'value',
          axisLabel: {formatter: '{value}', color:"rgb(125,149,193)"},
          position: 'top',
          splitLine: {
            lineStyle:{color:"rgb(125,149,193)"}
          },
          axisTick: {show:false}
        },
        yAxis: {
          type: 'category',
          inverse: true,
          data: yAxisLabel,
          axisLabel: {
            inside: true,
            padding: [0,0,24,0],
            // from y-axis label
            margin: 6,
            color: '#fff',
            fontSize: 15
           },
          axisTick: {show:false}
        },
        series: [
          {
            type: 'bar',
            data: formattedArray,
            barWidth: '20%',
          }
        ]
      };
      colorbar.setOption(option, true);
      setTimeout(() => {
        loadcolorbar();
      }, 10000);
    })
}
