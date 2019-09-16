

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {

    type: 'doughnut',
    data: {
        labels: ['Developer', 'Designer'],
        datasets: [{
          data: [330,30],
          backgroundColor:['#1b1363','#00C8FF'],
          borderColor:['#1b1363','#00C8FF'],
          hoverBorderColor:'white'
        }],
       

    },


    options: {}
});