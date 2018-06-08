var ctx = document.getElementById("chart").getContext('2d');
var circle = document.getElementById("circle").getContext('2d');

var top5data = [{"SrcIP": "61.0.0.115", "DestIP": "62.0.0.115", "count": "4", "percent": "22.222222", "_tc": "18"}, {"SrcIP": "172.16.21.139", "DestIP": "172.16.21.141", "count": "4", "percent": "22.222222", "_tc": "18"}, {"SrcIP": "172.16.21.139", "DestIP": "172.16.21.140", "count": "3", "percent": "16.666667", "_tc": "18"}, {"SrcIP": "10.211.1.14", "DestIP": "198.178.124.50", "count": "3", "percent": "16.666667", "_tc": "18"}, {"SrcIP": "6.6.3.148", "DestIP": "174.37.172.101", "count": "1", "percent": "5.555556", "_tc": "18"}];

labelGroup = [];
dataGroup = [];

top5data.forEach(function(threat) {
  labelGroup.push(threat.SrcIP);
  //  + " " + threat.DestIP
  dataGroup.push(threat.count);
})

// console.log(labelGroup)
// console.log(dataGroup)

// For a pie chart
var myPieChart = new Chart(circle,{
    type: 'pie',
    data: {
        labels: labelGroup,
        datasets: [{
            label: 'Threat Count',
            data: dataGroup,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ]
        }]
    }
    // options: options
});

var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ["USA", "Brazil", "Russia", "Germany", "Malysia"],
        datasets: [{
            label: 'Threat Count',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        title: {
          display: true,
          text: 'Top 5 Threat Sources'
        },
        legend: {
          display: false
        }
    }
});
