
  var values = [];
  var graph = document.querySelector("#idGraph");
  var idMyChart = document.querySelector("#myChart");
  //example json insert actual json here
  var output = [];
  var myData = [];
  jQuery.get('../output.txt', function(data) {
    output = data;
    myData = JSON.parse(output);
    var personality = myData.tree.children[0];
    var needs = myData.tree.children[1];
    var valuess = myData.tree.children[2];
    var labels = [];
    var percentages = [];
    var colors = [];
    storeData(personality);
    storeData(needs);
    storeData(valuess);
  });
  

  function storeData(obj){
    
    obj.children[0].children.forEach(element => {
      labels.push(element.name);
      percentages.push(Math.floor(element.percentage*100));
      colors.push(generateRandomColor());
    
  });
  }

  function generateRandomColor(){
    var redCode = Math.floor(Math.random()*255)+1;
    var greenCode = Math.floor(Math.random()*255)+1;
    var blueCode = Math.floor(Math.random()*255)+1;
    
    return color = "rgb("+  redCode + ", " + greenCode + ", "+blueCode + ")";
  }

var ctx = idMyChart.getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: '# of Votes',
            data: percentages,
            backgroundColor: colors
            ,
            borderColor: colors,
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
        }
    }
});