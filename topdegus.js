var diffcounter = document.getElementById("diff");
  
// To set two dates to two variables
var date = new Date("06/30/2007");
  
var diff = Math.floor((new Date()).getTime() - date.getTime());
var day = 1000 * 60 * 60 * 24;

var days = Math.floor(diff/day);
var months = Math.floor(days/31);
var years = Math.floor(months/12);

months -= years*12;
days -= years*12*31 + months*31;

diffcounter.innerText = "" + years + " years, " + months + " months and " + days + "";
