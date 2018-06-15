// var top5data = [{"SrcIP": "61.0.0.115", "DestIP": "62.0.0.115", "count": "4", "percent": "22.222222", "_tc": "18"}, {"SrcIP": "172.16.21.139", "DestIP": "172.16.21.141", "count": "4", "percent": "22.222222", "_tc": "18"}, {"SrcIP": "172.16.21.139", "DestIP": "172.16.21.140", "count": "3", "percent": "16.666667", "_tc": "18"}, {"SrcIP": "10.211.1.14", "DestIP": "198.178.124.50", "count": "3", "percent": "16.666667", "_tc": "18"}, {"SrcIP": "6.6.3.148", "DestIP": "174.37.172.101", "count": "1", "percent": "5.555556", "_tc": "18"}];

var dom = document.getElementById("nestedpie");
var nestedpie = echarts.init(dom);

option = {
    title: {
      left: '7%',
      text: '威胁类型分布',
      textStyle: {color: '#fff'}
    },
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
        name:'访问来源',
        type:'pie',
        selectedMode: 'single',
        radius: [0, '30%'],
        label: {
          normal: {position: 'inner'}
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data:[
          {value:335, name:'直达', selected:true},
          {value:1548, name:'搜索引擎'}
        ]
      },
      {
        // name:'访问来源',
        type:'pie',
      }
    ]
};

nestedpie.setOption(option, true);

fetch('http://10.145.89.154:3128/threats/type_pers')
  .then(response => response.json())
  .then(jsondata => {
    formattedArray = [];
    jsondata.forEach(function(obj, index) {
      a = {value: parseFloat(obj.pers), name: obj.EventName};
      formattedArray.push(a)
    })

    option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        title: {
          left: '7%',
          text: '威胁类型分布',
          textStyle: {color: '#fff'}
        },
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
            name:'访问来源',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],
            label: {
              normal: {position: 'inner'}
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data:[
              {value:335, name:'直达', selected:true},
              {value:1548, name:'搜索引擎'}
            ]
          },
          {
            // name:'访问来源',
            type:'pie',
            radius: ['40%', '55%'],
            // center: ['0%','0%'],
            label: {
              normal: {
                formatter: '{b|{b}}\n{hr|}\n {per|{d}%}',
                // backgroundColor: '#eee',
                // borderColor: '#aaa',
                borderWidth: 1,
                borderRadius: 4,
                // color: "#fff",
                rich: {
                  a: {
                      color: '#fff',
                      lineHeight: 22,
                      align: 'center'
                  },
                  hr: {
                      borderColor: '#aaa',
                      width: '100%',
                      borderWidth: 0.5,
                      height: 0
                  },
                  b: {
                      fontSize: 16,
                      lineHeight: 33
                  },
                  per: {
                      color: 'rgb(125,149,193)',
                      backgroundColor: '#334455',
                      padding: [2, 4],
                      borderRadius: 2
                  }
                }
              }
            },
            data:formattedArray
          }
        ]
    };
    console.log(formattedArray)
    nestedpie.setOption(option, true);
  })
