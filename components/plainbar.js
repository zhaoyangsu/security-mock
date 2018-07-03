var dom = document.getElementById("plainbar");
var plainbar = echarts.init(dom);


  fetch(endpoints.plainbar)
    .then(response => response.json())
    .then(jsondata => {
      formattedArray = [];
  	  yAxisLabel = [];
      jsondata.forEach(function(obj, index) {
        formattedArray.push({value: obj.count})
  	    yAxisLabel.push(obj.DestArea);
      })

      option = {
        title: {
          text: '高危区域',
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
      			color: 'rgb(38,196,192)',
      			fontSize: 15
    		  },
    		  axisTick: {show:false}
        },
        series: [
          {
            type: 'bar',
            data: formattedArray,
            itemStyle: {
              normal: {color: 'rgb(38,196,192)'}
            },
            barWidth: '25%',
            // two labels can do the number on the right
          }
        ]
      };
      plainbar.setOption(option, true);
    })
