var  score1 =8;
var score2 = 9;
var  pass1 =6;
var  pass2 = 7;

 var passBoth = (score1 >= score2) && ( score2 >= score1);

 var msg = 'Both rounds passed:' + passBoth;
 var el = document.getElementById('answer');
 el.innerHTML= msg;
