//First script is a count down script, this was adapted between the Original Codefair Website and https://www.w3schools.com/howto/howto_js_countdown.asp
	// Codefair Date is added to the Javascript
var countDownDate = new Date("Nov 15, 2020 09:00:00").getTime();

// This function is to count each second
var x = setInterval(function() {

  // Get's the current time and date
  var now = new Date().getTime();

  //Subtract now from codefairdate
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);


  document.getElementById("count").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("count").innerHTML = "EXPIRED";
  }
}, 1000);


//Second script is for the collapsables adapted from https://www.w3schools.com/howto/howto_js_collapsible.asp
function myFunction() {
	/*If Display is  equal to none then show hidden content*/
  var x = document.getElementById("hidecontent");
  if (x.style.display === "none")
    {x.style.display = "inline-block";}
   else {
	/*If Display is not equal to none then hide the content*/
    x.style.display = "none";
  }
}

function myFunction2() {
  var x = document.getElementById("hidecontent2");
  if (x.style.display === "none")
    {x.style.display = "inline-block";}
   else {
    x.style.display = "none";
  }
}

function myFunction3() {
  var x = document.getElementById("hidecontent3");
  if (x.style.display === "none")
    {x.style.display = "inline-block";}
   else {
    x.style.display = "none";

  }
}

//Second script is for the Mobile friendly Navigation Bar adapted from  https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_topnav
function navRespon() {
  var x = document.getElementById("responsiveNav");
  if (x.className === "responsiveNav") {
	 /*Change class name to add responsive on the end, this effectively allows it to switch css styles*/
    x.className += " responsive";
  } else {
    x.className = "responsiveNav";
  }
}
