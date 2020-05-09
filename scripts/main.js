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


var modal = document.getElementById("modal");
var modal1 = document.getElementById("modal1");
var btn = document.getElementById("collapsible1");
var btn1 = document.getElementById("collapsible2");
var clbtn = document.getElementById('closebtn');
var clbtn1 = document.getElementById('closebtn1');
var bod = document.getElementById('body');


btn.onclick = function(){
	modal.setAttribute('Id','modal-slidein')
	bod.style.overflowY = 'hidden';
}

clbtn.onclick=function(){
	modal.setAttribute('Id','modal-slideout')
	bod.style.overflowY = 'scroll';
}

btn1.onclick = function(){
	modal1.setAttribute('Id','modal-slidein1')
	bod.style.overflowY = 'hidden';
}

clbtn1.onclick=function(){
	modal1.setAttribute('Id','modal-slideout')
	bod.style.overflowY = 'scroll';
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

$(document).ready(function () {
  $('.carousel').slick({
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    centerMode: true,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
        // centerMode: true,
      } },


    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        infinite: true } },


    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000 } }] });



});
