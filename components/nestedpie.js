var dom = document.getElementById("nestedpie");
var nestedpie = echarts.init(dom);

  fetch(endpoints.nestedpie)
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
          text: '威胁类型分布',
          textStyle: {
		    color: '#fff',
			fontSize: '24'
		  },
          left: '7',
		  top: '7'
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
              //{value:335, name:'直达', selected:true},
              {value:1548, name:''}
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
    nestedpie.setOption(option, true);
  })
