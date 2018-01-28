


jQuery.get('../output.txt', function(data) {
  console.log(data);
});


var h1 = document.getElementsByTagName('h2')[0],
start = document.getElementById('asr_go'),
seconds = 0, minutes = 0, hours = 0,
t;
var isActive = false;

function add() {
  
seconds++;
if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
        minutes = 0;
        hours++;
    }
}

h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
timer();
}
function timer() {
  
t = setTimeout(add, 1000);
 
}
start.onclick = function(){
  if(!isActive){
  timer();
  isActive = true;
}
else{
  h1.textContent = "00:00:00";
  seconds = 0; minutes = 0; hours = 0;
  clearTimeout(t);
  isActive = false;

}
}
timer();
clearTimeout(t);

