/****************************************************
*               JavaScript For Loop                 *
****************************************************/
function loopFunction() {
  var text = "";
  var i;
  for (i = 0; i < 5; i++) {
    text += "The number is " + i + "<br>";
  }
  document.getElementById("loop").innerHTML = text;
}

/****************************************************
*                    Statement 1                    *
****************************************************/
var cars = ["BMW", "Volvo", "Saab", "Ford"];
var i, len, text;
for (i=0, len = cars.length, text = ""; i < len; i++) {
  text += cars[i] + "<br>";
}
document.getElementById("state1").innerHTML = text;

/****************************************************
*                  The For/In Loop                  *
****************************************************/
var txt = "";
var person = {fname:"John", lname:"Doe", age:25};
var x;
for (x in person) {
  txt += person[x] + " ";
}
document.getElementById("for-in").innerHTML = txt;
