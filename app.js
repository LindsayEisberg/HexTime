//Display the current time

var d;
var h;
var m;
var s;
var color;

function displayTime() {
  d = new Date();
  h = d.getHours();
  m = d.getMinutes();
  s = d.getSeconds();

  //add a zero to the left of the numbers if they are single digits

  if(h<=9) h = '0' + h;
  if(m<=9) m = '0' + m;
  if(s<=9) s = '0' + s;

  //set background color;
  color = "#" + h + m + s;
  document.body.style.background = color;

  document.getElementById("hex").innerHTML = color;

  //retrigger the function
  setTimeout(displayTime, 1000);
}


//call the fucntion

displayTime();
