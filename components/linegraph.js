var dom = document.getElementById("linegraph");
var linegraph = echarts.init(dom);
linegraph.setOption({
  title: {
    left: '7%',
    text: '威胁事件趋势',
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
        textStyle: {color: '#fff'},
        left: '7%'
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
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        // data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
        data:['邮件营销','视频广告','直接访问'],
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
          name:'邮件营销',
          type:'line',
          stack: '总量',
          data: formattedArray
        },
        // {
        //   name:'视频广告',
        //   type:'line',
        //   stack: '总量',
        //   data:[150, 232, 201, 154, 190, 330, 410]
        // },
        // {
        //   name:'直接访问',
        //   type:'line',
        //   stack: '总量',
        //   data:[320, 332, 301, 334, 390, 330, 320]
        // },
      ],
    };
    linegraph.setOption(option, true);
  })
