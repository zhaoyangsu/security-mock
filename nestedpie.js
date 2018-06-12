// var top5data = [{"SrcIP": "61.0.0.115", "DestIP": "62.0.0.115", "count": "4", "percent": "22.222222", "_tc": "18"}, {"SrcIP": "172.16.21.139", "DestIP": "172.16.21.141", "count": "4", "percent": "22.222222", "_tc": "18"}, {"SrcIP": "172.16.21.139", "DestIP": "172.16.21.140", "count": "3", "percent": "16.666667", "_tc": "18"}, {"SrcIP": "10.211.1.14", "DestIP": "198.178.124.50", "count": "3", "percent": "16.666667", "_tc": "18"}, {"SrcIP": "6.6.3.148", "DestIP": "174.37.172.101", "count": "1", "percent": "5.555556", "_tc": "18"}];

var dom = document.getElementById("nestedPie");
var myChart = echarts.init(dom);
var app = {};
option = null;
app.title = '极坐标系下的堆叠柱状图';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['直达','营销广告','搜索引擎','邮件营销','联盟广告','视频广告','百度','谷歌','必应','其他'],
        textStyle: {
          color:"rgb(125,149,193)"
        }
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
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'直达', selected:true},
                {value:679, name:'营销广告'},
                {value:1548, name:'搜索引擎'}
            ]
        },
        {
            name:'访问来源',
            type:'pie',
            radius: ['40%', '55%'],
            label: {
                normal: {
                    formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                    backgroundColor: '#eee',
                    borderColor: '#aaa',
                    borderWidth: 1,
                    borderRadius: 4,
                    // shadowBlur:3,
                    // shadowOffsetX: 2,
                    // shadowOffsetY: 2,
                    // shadowColor: '#999',
                    // padding: [0, 7],
                    rich: {
                        a: {
                            color: '#999',
                            lineHeight: 22,
                            align: 'center'
                        },
                        // abg: {
                        //     backgroundColor: '#333',
                        //     width: '100%',
                        //     align: 'right',
                        //     height: 22,
                        //     borderRadius: [4, 4, 0, 0]
                        // },
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
                            color: '#eee',
                            backgroundColor: '#334455',
                            padding: [2, 4],
                            borderRadius: 2
                        }
                    }
                }
            },
            data:[
                {value:335, name:'直达'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1048, name:'百度'},
                {value:251, name:'谷歌'},
                {value:147, name:'必应'},
                {value:102, name:'其他'}
            ]
        }
    ]
};

if (option && typeof option === "object") {
    myChart.setOption(option, true);
}