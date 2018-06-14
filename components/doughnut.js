var dom = document.getElementById("doughnut");
var doughnut = echarts.init(dom);
option = {
  title: {
    text: '折线图堆叠',
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
  series: [
    {
      type:'pie',
    }
  ]
};

doughnut.setOption(option, true);

fetch('http://10.145.89.154:3128/threats/type_pers')
  .then(response => response.json())
  .then(jsondata => {
    formattedArray = [];
    jsondata.forEach(function(obj, index) {
      a = {value: obj.pers};
      if (index == 0) {
        a = {value: obj.pers, name: 23};
      }
      formattedArray.push(a)
    })

option = {
  title: {
    text: '折线图堆叠',
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
    trigger: 'item',
    formatter: "{a} <br/>{b}: {c} ({d}%)"
  },
  series: [
    {
      name:'访问来源',
      type:'pie',
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: true,
          position: 'center',
          textStyle: {
              fontSize: '70',
              fontWeight: 'bold'
          }
        }
      },
      labelLine: {
          normal: {
              show: false
          }
      },
      data:formattedArray
    }
  ]
};

console.log(formattedArray)
doughnut.setOption(option, true);
  })
