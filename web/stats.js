
  var values = [];
  var graph = document.querySelector("#idGraph");
  var idMyChart = document.querySelector("#myChart");
  //example json insert actual json here
  var json = '{"tree":{"children":[{"children":[{"category":"personality","percentage":0.01034228798199055,"children":[{"category":"personality","name":"Openness","sampling_error":0.0657624166,"id":"Openness","percentage":0.06424749974466704,"children":[{"category":"personality","percentage":0.0064834877666812285,"id":"Adventurousness","sampling_error":0.0548857384,"name":"Adventurousness"},{"category":"personality","percentage":0.5220224274912977,"id":"Artistic interests","sampling_error":0.1110915044,"name":"Artistic interests"},{"category":"personality","percentage":0.9068407510535437,"id":"Emotionality","sampling_error":0.051582574900000004,"name":"Emotionality"},{"category":"personality","percentage":0.31151632412716734,"id":"Imagination","sampling_error":0.0691521494,"name":"Imagination"},{"category":"personality","percentage":0.26030935944252803,"id":"Intellect","sampling_error":0.0608525061,"name":"Intellect"},{"category":"personality","percentage":0.35649804429788245,"id":"Liberalism","sampling_error":0.08885955679999999,"name":"Authority-challenging"}]},{"category":"personality","name":"Conscientiousness","sampling_error":0.08216575770000001,"id":"Conscientiousness","percentage":0.16902137308254367,"children":[{"category":"personality","percentage":0.5221728816940944,"id":"Achievement striving","sampling_error":0.10534988079999999,"name":"Achievement striving"},{"category":"personality","percentage":0.6755176526104589,"id":"Cautiousness","sampling_error":0.0973917069,"name":"Cautiousness"},{"category":"personality","percentage":0.9255404490099879,"id":"Dutifulness","sampling_error":0.06683634699999999,"name":"Dutifulness"},{"category":"personality","percentage":0.0023347327829975617,"id":"Orderliness","sampling_error":0.0749598243,"name":"Orderliness"},{"category":"personality","percentage":0.4295398525944047,"id":"Self-discipline","sampling_error":0.0506084616,"name":"Self-discipline"},{"category":"personality","percentage":0.17233587626816582,"id":"Self-efficacy","sampling_error":0.0983122476,"name":"Self-efficacy"}]},{"category":"personality","name":"Extraversion","sampling_error":0.061570641100000004,"id":"Extraversion","percentage":0.01034228798199055,"children":[{"category":"personality","percentage":0.4704955230299498,"id":"Activity level","sampling_error":0.0835790044,"name":"Activity level"},{"category":"personality","percentage":0.060669286186049,"id":"Assertiveness","sampling_error":0.0889780837,"name":"Assertiveness"},{"category":"personality","percentage":0.40577977683162475,"id":"Cheerfulness","sampling_error":0.1116966533,"name":"Cheerfulness"},{"category":"personality","percentage":0.20713702186053118,"id":"Excitement-seeking","sampling_error":0.08525225580000001,"name":"Excitement-seeking"},{"category":"personality","percentage":0.20644570121039996,"id":"Friendliness","sampling_error":0.08035944360000001,"name":"Outgoing"},{"category":"personality","percentage":0.06381502253164562,"id":"Gregariousness","sampling_error":0.0617306421,"name":"Gregariousness"}]},{"category":"personality","name":"Agreeableness","sampling_error":0.10237154999999999,"id":"Agreeableness","percentage":0.5306352002802869,"children":[{"category":"personality","percentage":0.8352661364715428,"id":"Altruism","sampling_error":0.0758878109,"name":"Altruism"},{"category":"personality","percentage":0.7178734965232981,"id":"Cooperation","sampling_error":0.0844290621,"name":"Cooperation"},{"category":"personality","percentage":0.9995723998885244,"id":"Modesty","sampling_error":0.0607487101,"name":"Modesty"},{"category":"personality","percentage":0.640956582022864,"id":"Morality","sampling_error":0.067440169,"name":"Uncompromising"},{"category":"personality","percentage":0.9324030993989241,"id":"Sympathy","sampling_error":0.1037076544,"name":"Sympathy"},{"category":"personality","percentage":0.2137315241400392,"id":"Trust","sampling_error":0.0622194434,"name":"Trust"}]},{"category":"personality","name":"Emotional range","sampling_error":0.09702369949999999,"id":"Neuroticism","percentage":0.04972519683677101,"children":[{"category":"personality","percentage":0.5065521811855158,"id":"Anger","sampling_error":0.0998311527,"name":"Fiery"},{"category":"personality","percentage":0.991340486574405,"id":"Anxiety","sampling_error":0.0595039268,"name":"Prone to worry"},{"category":"personality","percentage":0.9946986403386233,"id":"Depression","sampling_error":0.0638645326,"name":"Melancholy"},{"category":"personality","percentage":0.8469713603237199,"id":"Immoderation","sampling_error":0.057596751,"name":"Immoderation"},{"category":"personality","percentage":0.94987898830339,"id":"Self-consciousness","sampling_error":0.0616048697,"name":"Self-consciousness"},{"category":"personality","percentage":0.9983998899260951,"id":"Vulnerability","sampling_error":0.0913335275,"name":"Susceptible to stress"}]}],"id":"Extraversion_parent","name":"Extraversion"}],"id":"personality","name":"Big 5"},{"children":[{"category":"needs","percentage":0.012160478632906424,"children":[{"category":"needs","percentage":0.012160478632906424,"id":"Challenge","sampling_error":0.08824100900000001,"name":"Challenge"},{"category":"needs","percentage":0.9181276724895882,"id":"Closeness","sampling_error":0.0870237652,"name":"Closeness"},{"category":"needs","percentage":0.19108108782322691,"id":"Curiosity","sampling_error":0.1255692988,"name":"Curiosity"},{"category":"needs","percentage":0.2769963486111347,"id":"Excitement","sampling_error":0.1149242156,"name":"Excitement"},{"category":"needs","percentage":0.6176556557341385,"id":"Harmony","sampling_error":0.1152646165,"name":"Harmony"},{"category":"needs","percentage":0.07497918188388958,"id":"Ideal","sampling_error":0.10443913140000001,"name":"Ideal"},{"category":"needs","percentage":0.253784131797798,"id":"Liberty","sampling_error":0.15152466480000001,"name":"Liberty"},{"category":"needs","percentage":0.5935014969833565,"id":"Love","sampling_error":0.1060119434,"name":"Love"},{"category":"needs","percentage":0.02581899184127051,"id":"Practicality","sampling_error":0.0923980623,"name":"Practicality"},{"category":"needs","percentage":0.36839039720081174,"id":"Self-expression","sampling_error":0.08573452890000001,"name":"Self-expression"},{"category":"needs","percentage":0.8871030924390169,"id":"Stability","sampling_error":0.1121505201,"name":"Stability"},{"category":"needs","percentage":0.6556242269700923,"id":"Structure","sampling_error":0.0843736973,"name":"Structure"}],"id":"Challenge_parent","name":"Challenge"}],"id":"needs","name":"Needs"},{"children":[{"category":"values","percentage":0.9962104771954303,"children":[{"category":"values","percentage":0.803372181574193,"id":"Conservation","sampling_error":0.0716890513,"name":"Conservation"},{"category":"values","percentage":0.14332315808173657,"id":"Openness to change","sampling_error":0.0693371,"name":"Openness to change"},{"category":"values","percentage":0.4361156515339943,"id":"Hedonism","sampling_error":0.1433356369,"name":"Hedonism"},{"category":"values","percentage":0.012979712384687092,"id":"Self-enhancement","sampling_error":0.1092108766,"name":"Self-enhancement"},{"category":"values","percentage":0.9962104771954303,"id":"Self-transcendence","sampling_error":0.087287101,"name":"Self-transcendence"}],"id":"Self-transcendence_parent","name":"Self-transcendence"}],"id":"values","name":"Values"}],"id":"r","name":"root"},"word_count":113,"processed_lang":"en","source":"*UNKNOWN*","word_count_message":"There were 113 words in the input. We need a minimum of 600, preferably 1,200 or more, to compute statistically significant estimates","id":"*UNKNOWN*"}';

 
  console.log(myData);
    var personality = myData.tree.children[0];
    var needs = myData.tree.children[1];
    var valuess = myData.tree.children[2];

  var output = [];
  var myData = [];
    output = data;
    myData = JSON.parse(json);
    console.log(myData);
    var personality = myData.tree.children[0];
    var needs = myData.tree.children[1];
    var valuess = myData.tree.children[2];
    var labels = [];
    var percentages = [];
    var colors = [];
    storeData(personality);
    storeData(needs);
    storeData(valuess);
  

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