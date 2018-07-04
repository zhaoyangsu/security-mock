var dom = document.getElementById("linegraph");
var linegraph = echarts.init(dom);

fetch(endpoints.linegraph)
  .then(response => response.json())
  .then(jsondata => {
    formattedArray = [];

    xAxisDate = [];
    jsondata.forEach(function(obj, index) {
      a = {value: parseInt(obj.count)};

      var formattedDate = obj.date.substring(4,6) + "/" + obj.date.substring(6,8);
      xAxisDate.push(formattedDate);
      formattedArray.push(a)
    })

    option = {
      title: {
        text: '威胁事件趋势',
        textStyle: {
		  color: '#fff',
		  fontSize: '24'
		},
		left: '7',
		top: '7'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        // ,'周'
        data:['月'],
        right: 20,
        top: 10,
        textStyle: {
          color:"#fff"
        }
      },
      grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        // figure out epoch?
        data: xAxisDate,
        axisLabel: {
          color: '#fff',
        }
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          color: '#fff',
        }
      },
      series: [
        {
          name:'月',
          type:'line',
          stack: '威胁数',
          data: formattedArray
        },
      ],
    };
    linegraph.setOption(option, true);
  })
