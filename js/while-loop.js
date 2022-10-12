var i = 1;
var msg = '';

while (i<10){
  msg += i + 'x 5 = ' + (i*5) +'<br/>';
}
document.getElementById('answer').innerHTML = msg;
