module.exports.html = function( aa,change){
	return `
<style>

  input:focus, textarea:focus, select:focus{
        outline: none;
    }

input {
display: table-cell;
background-color: #333;
 border:1px solid #333;
font-size: 15px;
color: white;

}

.navbar input:hover {
  background-color: #ddd;
  color: black;
}


body {
  font-family: "Lato", sans-serif;
}

.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

#main {
  transition: margin-left .5s;
  padding: 16px;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>

<style>
* {
  box-sizing: border-box;
}

/* Style the body */
body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}

/* Header/logo Title */
.header {
  padding: 80px;
  text-align: center;
  background: #1abc9c;
  color: white;
}

/* Increase the font size of the heading */
.header h1 {
  font-size: 40px;
}

/* Style the top navigation bar */
.navbar {
  overflow: hidden;
  background-color: #333;
}



/* Column container */
.row {  
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
}

/* Create two unequal columns that sits next to each other */
/* Sidebar/left column */
.side {
  -ms-flex: 30%; /* IE10 */
  flex: 30%;
  background-color: #f1f1f1;
  padding: 20px;
}

/* Main column */
.main {   
  -ms-flex: 70%; /* IE10 */
  flex: 70%;
  background-color: white;
  padding: 20px;
}

/* Fake image, just for this example */
.fakeimg {
  background-color: #aaa;
  width: 100%;
  padding: 20px;
}

/* Footer */
.footer {
  padding: 20px;
  text-align: center;
  background: #ddd;
}

/* Responsive layout - when the screen is less than 700px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 700px) {
  .row {   
    flex-direction: column;
  }
}

/* Responsive layout - when the screen is less than 400px wide, make the navigation links stack on top of each other instead of next to each other */
@media screen and (max-width: 400px) {
  .navbar a {
    float: none;
    width: 100%;
  }
}
</style>

<style>
* {
box-sizing: border-box
}

body {
font-family: Verdana, sans-serif; 
margin:0;
overflow: none;
}

.mySlides${change} {
display: none
}
img {
vertical-align: middle;
}

iframe {
	width:100%;
	height: 90%;
}

/* Slideshow container */
.slideshow-container${change} {
  max-width: 1000px;
  position: relative;
  margin: auto;
}


/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}

/* The dots/bullets/indicators */
.dot${change} {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot${change}:hover {
  background-color: #717171;
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .prev, .next,.text {font-size: 11px}
}

</style>


<div class="slideshow-container${change}">
${aa.map((x) => `<div class="mySlides${change} fade">${x}</div>`).join("")}
</div>
<br>
<div style="text-align:center">
${Array.from(Array(aa.length).keys())
  .map(
    (x) =>
      ` <span class="dot${change}" onclick="currentSlide(${Number(x) + 1})"></span>  `
  )
  .join(" ")}
</div>

<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>


<script>

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides${change}");
  var dots = document.getElementsByClassName("dot${change}");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}



</script>

<div id="data"></div>

<div id="mySidenav" class="sidenav">

</div>



<script>




var html = ''


$(document).ready(function(){

    $("iframe").on("load", function(e){
let t = this
        $(this).contents().on("mousedown, mouseup, click", function(){


let b = document.getElementById("mySidenav")


b.innerHTML = '<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>'



html = t


let files = Object.keys(JSON.parse(t.getAttribute("fileData")) )

for(let i in files){
let data = Object.entries(JSON.parse(t.getAttribute("fileData"))[files[i]]).map( function(d){
return "<a>" + d[0]+": " +d[1] + "</a>"
})

b.innerHTML += '<a href="#"><h3>'+files[i]+'</h3></a>'

for(let i in data){
b.innerHTML += '<a href="#">'+data[i]+'</a>'
}

}

openNav()

        });
    });
});


function oppen(html){
var myWindow = window.open("", "MsgWindow", "width=1000,height=1000");

myWindow.document.write(html);


}

</script>
  
  </div>
  </div>

<script>


function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}
</script>

  <div class="row">

    <div class="main">

`
}

