function string(number) {
  var baseChar = ("A").charCodeAt(0),
      letters  = "";

  do {
    number -= 1;
    letters = String.fromCharCode(baseChar + (number % 26)) + letters;
    number = (number / 26) >> 0; // quick `floor`
  } while(number > 0);

  return letters;
}

Object.defineProperty(Array.prototype, 'chunk', {
	value: function(chunkSize) {
		var array = this;
		return [].concat.apply([],
			array.map(function(elem, i) {
				return i % chunkSize ? [] : [array.slice(i, i + chunkSize)];
			})
		);
	}
});


function convert(number) {

  var NS = [
    { value: 10000000, str: "Crore" },
    { value: 100000, str: "Lakh" },
    { value: 1000, str: "Thousand" },
    { value: 100, str: "Hundred" },
    { value: 90, str: "Ninety" },
    { value: 80, str: "Eighty" },
    { value: 70, str: "Seventy" },
    { value: 60, str: "Sixty" },
    { value: 50, str: "Fifty" },
    { value: 40, str: "Forty" },
    { value: 30, str: "Thirty" },
    { value: 20, str: "Twenty" },
    { value: 19, str: "Nineteen" },
    { value: 18, str: "Eighteen" },
    { value: 17, str: "Seventeen" },
    { value: 16, str: "Sixteen" },
    { value: 15, str: "Fifteen" },
    { value: 14, str: "Fourteen" },
    { value: 13, str: "Thirteen" },
    { value: 12, str: "Twelve" },
    { value: 11, str: "Eleven" },
    { value: 10, str: "Ten" },
    { value: 9, str: "Nine" },
    { value: 8, str: "Eight" },
    { value: 7, str: "Seven" },
    { value: 6, str: "Six" },
    { value: 5, str: "Five" },
    { value: 4, str: "Four" },
    { value: 3, str: "Three" },
    { value: 2, str: "Two" },
    { value: 1, str: "One" }
  ];

  var result = '';
  for (var n of NS) {
    if (number >= n.value) {
      if (number <= 99) {
        result += n.str;
        number -= n.value;
        if (number > 0) result += ' ';
      } else {
        var t = Math.floor(number / n.value);
        // console.log(t);
        var d = number % n.value;
        if (d > 0) {
          return convert(t) + ' ' + n.str + ' ' + convert(d);
        } else {
          return convert(t) + ' ' + n.str;
        }

      }
    }
  }
  return result;
}


const page = (t) => {
    let g = []
    t = t.chunk(2)
    
    for(let i = t.length; i>0; i--){
       let arr = ( t[i-1] ) 
       
     g.push(`
      <input type="checkbox" id="${convert(i)}">
  <div id="page${i}" class="page">
    <div class="front"> ${arr[0] || '' } </div>
    <div class="back"> ${arr[1] || ''} </div>
    <label for="${convert(i)}"></label>
  </div>
     `)
 
    }
    
    return g.join(' ')
}

function cube(frame,name){
	return `
<section class="three-d-container ${name}">
			<input type="radio" ${ (frame[0]||false) ? '':'disabled'} checked class="three-d-bullet a a" name="three-d ${name}">
			<input type="radio"  ${(frame[1]||false) ? '':'disabled'} 
 class="three-d-bullet b ${name}" name="three-d ${name}">
			<input type="radio"  ${(frame[2]||false) ? '':'disabled'} 
 class="three-d-bullet c ${name}" name="three-d ${name}">
			<input type="radio"  ${(frame[3]||false) ? '':'disabled'} 
 class="three-d-bullet d ${name}" name="three-d ${name}">
			<input type="radio"  ${(frame[4]||false) ? '':'disabled'} 
 class="three-d-bullet e ${name}" name="three-d ${name}">
			<input type="radio"  ${(frame[5]||false) ? '':'disabled'} 
 class="three-d-bullet f ${name}" name="three-d ${name}">
			
			<div class="three-d-cube ${name}">
				<figure class="three-d-item">
					${frame[0] || ''}
				</figure>
				<figure class="three-d-item">
					${frame[1] || ''}
				</figure>
				<figure class="three-d-item">
				${frame[2]|| ''}
				</figure>
				<figure class="three-d-item">
					${frame[3]|| ''}
				</figure>
				<figure class="three-d-item">
					${frame[4]|| ''}
				</figure>
				<figure class="three-d-item">
					${frame[5]|| ''}
				</figure>
			</div>
		</section>
		
	<br>
	<br>
	<br>
`
}

const stackCss = (r = 2, c = 2) => {

	var css0 = `
<style>

.by4 {
  width: 100%;
  height: calc(${(100 / r) - 0.5}%-600px);
  overflow-x: wrap;
  overflow-y: hidden;
}
.by4 iframe {
  width: ${(100 / r) - 0.5}%;
  height: calc(400px/${c} ); 
}

.empty {
  background-color: gray;
}
</style>


`

	return css0
}

const css = (aa, change) => {
	var css1 = `
<style>
form {
    display: inline-block; //Or display: inline; 
}

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

`
	var css2 = `
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
`
	var css3 = `
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

`
	var css4 = `

body {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}

.description {
  text-align: center;
  color: #FFFFFF;
  margin-top: 30px;
  line-height: 60px;
}

#slider-wrapp {
  width: 100px;
  height: auto;
  margin: 50px 20%;
  text-align: center;
}
#slider-wrapp #slider {
  width: 100%;
  height: auto;
  position: relative;
}
#slider-wrapp #slider .slide {
  color: #FFFFFF;
  position: absolute;
  width: 1000px;
  height: 450px;
  left: 50%;
  margin-left: -350px;
  -webkit-box-shadow: 0 -36px 9px -28px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 -36px 9px -28px rgba(0, 0, 0, 0.3);
  -o-box-shadow: 0 -36px 9px -28px rgba(0, 0, 0, 0.3);
  -ms-box-shadow: 0 -36px 9px -28px rgba(0, 0, 0, 0.3);
  box-shadow: 0 -36px 9px -28px rgba(0, 0, 0, 0.3);
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
  transition: all 0.5s ease;
  -webkit-transform: perspective(1300px) translate3d(0px, -130px, -500px);
  -moz-transform: perspective(1300px) translate3d(0px, -130px, -500px);
  -o-transform: perspective(1300px) translate3d(0px, -130px, -500px);
  -ms-transform: perspective(1300px) translate3d(0px, -130px, -500px);
  transform: perspective(1300px) translate3d(0px, -130px, -500px);
}
#slider-wrapp #slider .slide iframe {
  padding: 3px;
  background: #FFFFFF;
  border-radius: 3px;
  width: 100%;
  height: 100%;
}
#slider-wrapp #slider .slide:nth-last-child(4) {
  -webkit-transform: perspective(1300px) translate3d(0px, -110px, -290px);
  -moz-transform: perspective(1300px) translate3d(0px, -110px, -290px);
  -o-transform: perspective(1300px) translate3d(0px, -110px, -290px);
  -ms-transform: perspective(1300px) translate3d(0px, -110px, -290px);
  transform: perspective(1300px) translate3d(0px, -110px, -290px);
}
#slider-wrapp #slider .slide:nth-last-child(3) {
  -webkit-transform: perspective(1300px) translate3d(0px, -75px, -210px);
  -moz-transform: perspective(1300px) translate3d(0px, -75px, -210px);
  -o-transform: perspective(1300px) translate3d(0px, -75px, -210px);
  -ms-transform: perspective(1300px) translate3d(0px, -75px, -210px);
  transform: perspective(1300px) translate3d(0px, -75px, -210px);
}
#slider-wrapp #slider .slide:nth-last-child(2) {
  -webkit-transform: perspective(1300px) translate3d(0px, -40px, -130px);
  -moz-transform: perspective(1300px) translate3d(0px, -40px, -130px);
  -o-transform: perspective(1300px) translate3d(0px, -40px, -130px);
  -ms-transform: perspective(1300px) translate3d(0px, -40px, -130px);
  transform: perspective(1300px) translate3d(0px, -40px, -130px);
}
#slider-wrapp #slider .slide:nth-last-child(1) {
  -webkit-transform: perspective(1300px) translate3d(0px, -5px, -50px);
  -moz-transform: perspective(1300px) translate3d(0px, -5px, -50px);
  -o-transform: perspective(1300px) translate3d(0px, -5px, -50px);
  -ms-transform: perspective(1300px) translate3d(0px, -5px, -50px);
  transform: perspective(1300px) translate3d(0px, -5px, -50px);
}
#slider-wrapp #slider .slide.active {
  -webkit-transform: perspective(1300px) translate3d(0px, 100px, 0px);
  -moz-transform: perspective(1300px) translate3d(0px, 100px, 0px);
  -o-transform: perspective(1300px) translate3d(0px, 100px, 0px);
  -ms-transform: perspective(1300px) translate3d(0px, 100px, 0px);
  transform: perspective(1300px) translate3d(0px, 100px, 0px);
  opacity: 0;
}
#slider-wrapp #slider.transfomer .slide:nth-last-child(5) {
  -webkit-transform: perspective(1300px) translate3d(0px, -110px, -290px);
  -moz-transform: perspective(1300px) translate3d(0px, -110px, -290px);
  -o-transform: perspective(1300px) translate3d(0px, -110px, -290px);
  -ms-transform: perspective(1300px) translate3d(0px, -110px, -290px);
  transform: perspective(1300px) translate3d(0px, -110px, -290px);
}
#slider-wrapp #slider.transfomer .slide:nth-last-child(4) {
  -webkit-transform: perspective(1300px) translate3d(0px, -75px, -210px);
  -moz-transform: perspective(1300px) translate3d(0px, -75px, -210px);
  -o-transform: perspective(1300px) translate3d(0px, -75px, -210px);
  -ms-transform: perspective(1300px) translate3d(0px, -75px, -210px);
  transform: perspective(1300px) translate3d(0px, -75px, -210px);
}
#slider-wrapp #slider.transfomer .slide:nth-last-child(3) {
  -webkit-transform: perspective(1300px) translate3d(0px, -40px, -130px);
  -moz-transform: perspective(1300px) translate3d(0px, -40px, -130px);
  -o-transform: perspective(1300px) translate3d(0px, -40px, -130px);
  -ms-transform: perspective(1300px) translate3d(0px, -40px, -130px);
  transform: perspective(1300px) translate3d(0px, -40px, -130px);
}
#slider-wrapp #slider.transfomer .slide:nth-last-child(2) {
  -webkit-transform: perspective(1300px) translate3d(0px, -5px, -50px);
  -moz-transform: perspective(1300px) translate3d(0px, -5px, -50px);
  -o-transform: perspective(1300px) translate3d(0px, -5px, -50px);
  -ms-transform: perspective(1300px) translate3d(0px, -5px, -50px);
  transform: perspective(1300px) translate3d(0px, -5px, -50px);
}
#slider-wrapp #slider._3D .slide {
  -webkit-box-shadow: -50px 10px 50px -15px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: -50px 10px 50px -15px rgba(0, 0, 0, 0.3);
  -o-box-shadow: -50px 10px 50px -15px rgba(0, 0, 0, 0.3);
  -ms-box-shadow: -50px 10px 50px -15px rgba(0, 0, 0, 0.3);
  box-shadow: -50px 10px 50px -15px rgba(0, 0, 0, 0.3);
  -webkit-transform: perspective(1300px) rotateY(30deg) translate3d(440px, -230px, -1950px);
  -moz-transform: perspective(1300px) rotateY(30deg) translate3d(440px, -230px, -1950px);
  -o-transform: perspective(1300px) rotateY(30deg) translate3d(440px, -230px, -1950px);
  -ms-transform: perspective(1300px) rotateY(30deg) translate3d(440px, -230px, -1950px);
  transform: perspective(1300px) rotateY(30deg) translate3d(440px, -230px, -1950px);
  opacity: 0;
}
#slider-wrapp #slider._3D .slide:nth-last-child(1) {
  -webkit-transform: perspective(1300px) rotateY(30deg) translate3d(510px, 20px, 0px);
  -moz-transform: perspective(1300px) rotateY(30deg) translate3d(510px, 20px, 0px);
  -o-transform: perspective(1300px) rotateY(30deg) translate3d(510px, 20px, 0px);
  -ms-transform: perspective(1300px) rotateY(30deg) translate3d(510px, 20px, 0px);
  transform: perspective(1300px) rotateY(30deg) translate3d(510px, 20px, 0px);
  opacity: 1;
}
#slider-wrapp #slider._3D .slide:nth-last-child(2) {
  -webkit-transform: perspective(1300px) rotateY(30deg) translate3d(510px, -40px, -200px);
  -moz-transform: perspective(1300px) rotateY(30deg) translate3d(510px, -40px, -200px);
  -o-transform: perspective(1300px) rotateY(30deg) translate3d(510px, -40px, -200px);
  -ms-transform: perspective(1300px) rotateY(30deg) translate3d(510px, -40px, -200px);
  transform: perspective(1300px) rotateY(30deg) translate3d(510px, -40px, -200px);
  opacity: 1;
}
#slider-wrapp #slider._3D .slide:nth-last-child(3) {
  -webkit-transform: perspective(1300px) rotateY(30deg) translate3d(510px, -100px, -400px);
  -moz-transform: perspective(1300px) rotateY(30deg) translate3d(510px, -100px, -400px);
  -o-transform: perspective(1300px) rotateY(30deg) translate3d(510px, -100px, -400px);
  -ms-transform: perspective(1300px) rotateY(30deg) translate3d(510px, -100px, -400px);
  transform: perspective(1300px) rotateY(30deg) translate3d(510px, -100px, -400px);
  opacity: 1;
}
#slider-wrapp #slider._3D .slide:nth-last-child(4) {
  -webkit-transform: perspective(1300px) rotateY(30deg) translate3d(510px, -160px, -600px);
  -moz-transform: perspective(1300px) rotateY(30deg) translate3d(510px, -160px, -600px);
  -o-transform: perspective(1300px) rotateY(30deg) translate3d(510px, -160px, -600px);
  -ms-transform: perspective(1300px) rotateY(30deg) translate3d(510px, -160px, -600px);
  transform: perspective(1300px) rotateY(30deg) translate3d(510px, -160px, -600px);
  opacity: 1;
}
#slider-wrapp #slider._3D .slide:nth-last-child(5) {
  -webkit-transform: perspective(1300px) rotateY(30deg) translate3d(510px, -175px, -800px);
  -moz-transform: perspective(1300px) rotateY(30deg) translate3d(510px, -175px, -800px);
  -o-transform: perspective(1300px) rotateY(30deg) translate3d(510px, -175px, -800px);
  -ms-transform: perspective(1300px) rotateY(30deg) translate3d(510px, -175px, -800px);
  transform: perspective(1300px) rotateY(30deg) translate3d(510px, -175px, -800px);
  opacity: 1;
}
#slider-wrapp #slider._3D .slide:nth-last-child(6) {
  -webkit-transform: perspective(1300px) rotateY(30deg) translate3d(510px, -190px, -1000px);
  -moz-transform: perspective(1300px) rotateY(30deg) translate3d(510px, -190px, -1000px);
  -o-transform: perspective(1300px) rotateY(30deg) translate3d(510px, -190px, -1000px);
  -ms-transform: perspective(1300px) rotateY(30deg) translate3d(510px, -190px, -1000px);
  transform: perspective(1300px) rotateY(30deg) translate3d(510px, -190px, -1000px);
  opacity: 1;
}
#slider-wrapp #slider._3D .slide:nth-last-child(7) {
  -webkit-transform: perspective(1300px) rotateY(30deg) translate3d(490px, -200px, -1200px);
  -moz-transform: perspective(1300px) rotateY(30deg) translate3d(490px, -200px, -1200px);
  -o-transform: perspective(1300px) rotateY(30deg) translate3d(490px, -200px, -1200px);
  -ms-transform: perspective(1300px) rotateY(30deg) translate3d(490px, -200px, -1200px);
  transform: perspective(1300px) rotateY(30deg) translate3d(490px, -200px, -1200px);
  opacity: 1;
}
#slider-wrapp #slider._3D .slide:nth-last-child(8) {
  -webkit-transform: perspective(1300px) rotateY(30deg) translate3d(480px, -210px, -1450px);
  -moz-transform: perspective(1300px) rotateY(30deg) translate3d(480px, -210px, -1450px);
  -o-transform: perspective(1300px) rotateY(30deg) translate3d(480px, -210px, -1450px);
  -ms-transform: perspective(1300px) rotateY(30deg) translate3d(480px, -210px, -1450px);
  transform: perspective(1300px) rotateY(30deg) translate3d(480px, -210px, -1450px);
  opacity: 1;
}
#slider-wrapp #slider._3D .slide:nth-last-child(9) {
  -webkit-transform: perspective(1300px) rotateY(30deg) translate3d(460px, -220px, -1700px);
  -moz-transform: perspective(1300px) rotateY(30deg) translate3d(460px, -220px, -1700px);
  -o-transform: perspective(1300px) rotateY(30deg) translate3d(460px, -220px, -1700px);
  -ms-transform: perspective(1300px) rotateY(30deg) translate3d(460px, -220px, -1700px);
  transform: perspective(1300px) rotateY(30deg) translate3d(460px, -220px, -1700px);
  opacity: 0.5;
}
#slider-wrapp #slider._3D .slide.active {
  opacity: 0;
  -webkit-transform: perspective(1300px) rotateX(0deg) rotateY(35deg) rotateZ(0deg) scale3d(1, 1, 1) translate3d(515px, 100px, 300px) !important;
  -moz-transform: perspective(1300px) rotateX(0deg) rotateY(35deg) rotateZ(0deg) scale3d(1, 1, 1) translate3d(515px, 100px, 300px) !important;
  -o-transform: perspective(1300px) rotateX(0deg) rotateY(35deg) rotateZ(0deg) scale3d(1, 1, 1) translate3d(515px, 100px, 300px) !important;
  -ms-transform: perspective(1300px) rotateX(0deg) rotateY(35deg) rotateZ(0deg) scale3d(1, 1, 1) translate3d(515px, 100px, 300px) !important;
  transform: perspective(1300px) rotateX(0deg) rotateY(35deg) rotateZ(0deg) scale3d(1, 1, 1) translate3d(515px, 100px, 300px) !important;
}
#slider-wrapp #slider._3D.transfomer .slide:nth-last-child(2) {
  -webkit-transform: perspective(1300px) rotateY(30deg) translate3d(510px, 20px, 0px);
  -moz-transform: perspective(1300px) rotateY(30deg) translate3d(510px, 20px, 0px);
  -o-transform: perspective(1300px) rotateY(30deg) translate3d(510px, 20px, 0px);
  -ms-transform: perspective(1300px) rotateY(30deg) translate3d(510px, 20px, 0px);
  transform: perspective(1300px) rotateY(30deg) translate3d(510px, 20px, 0px);
  opacity: 1;
}
#slider-wrapp #slider._3D.transfomer .slide:nth-last-child(3) {
  -webkit-transform: perspective(1300px) rotateY(30deg) translate3d(510px, -40px, -200px);
  -moz-transform: perspective(1300px) rotateY(30deg) translate3d(510px, -40px, -200px);
  -o-transform: perspective(1300px) rotateY(30deg) translate3d(510px, -40px, -200px);
  -ms-transform: perspective(1300px) rotateY(30deg) translate3d(510px, -40px, -200px);
  transform: perspective(1300px) rotateY(30deg) translate3d(510px, -40px, -200px);
  opacity: 1;
}
#slider-wrapp #slider._3D.transfomer .slide:nth-last-child(4) {
  -webkit-transform: perspective(1300px) rotateY(30deg) translate3d(510px, -100px, -400px);
  -moz-transform: perspective(1300px) rotateY(30deg) translate3d(510px, -100px, -400px);
  -o-transform: perspective(1300px) rotateY(30deg) translate3d(510px, -100px, -400px);
  -ms-transform: perspective(1300px) rotateY(30deg) translate3d(510px, -100px, -400px);
  transform: perspective(1300px) rotateY(30deg) translate3d(510px, -100px, -400px);
  opacity: 1;
}
#slider-wrapp #slider._3D.transfomer .slide:nth-last-child(5) {
  -webkit-transform: perspective(1300px) rotateY(30deg) translate3d(510px, -160px, -600px);
  -moz-transform: perspective(1300px) rotateY(30deg) translate3d(510px, -160px, -600px);
  -o-transform: perspective(1300px) rotateY(30deg) translate3d(510px, -160px, -600px);
  -ms-transform: perspective(1300px) rotateY(30deg) translate3d(510px, -160px, -600px);
  transform: perspective(1300px) rotateY(30deg) translate3d(510px, -160px, -600px);
  opacity: 1;
}
#slider-wrapp #slider._3D.transfomer .slide:nth-last-child(6) {
  -webkit-transform: perspective(1300px) rotateY(30deg) translate3d(510px, -175px, -800px);
  -moz-transform: perspective(1300px) rotateY(30deg) translate3d(510px, -175px, -800px);
  -o-transform: perspective(1300px) rotateY(30deg) translate3d(510px, -175px, -800px);
  -ms-transform: perspective(1300px) rotateY(30deg) translate3d(510px, -175px, -800px);
  transform: perspective(1300px) rotateY(30deg) translate3d(510px, -175px, -800px);
  opacity: 1;
}
#slider-wrapp #slider._3D.transfomer .slide:nth-last-child(7) {
  -webkit-transform: perspective(1300px) rotateY(30deg) translate3d(510px, -190px, -1000px);
  -moz-transform: perspective(1300px) rotateY(30deg) translate3d(510px, -190px, -1000px);
  -o-transform: perspective(1300px) rotateY(30deg) translate3d(510px, -190px, -1000px);
  -ms-transform: perspective(1300px) rotateY(30deg) translate3d(510px, -190px, -1000px);
  transform: perspective(1300px) rotateY(30deg) translate3d(510px, -190px, -1000px);
  opacity: 1;
}
#slider-wrapp #slider._3D.transfomer .slide:nth-last-child(8) {
  -webkit-transform: perspective(1300px) rotateY(30deg) translate3d(490px, -200px, -1200px);
  -moz-transform: perspective(1300px) rotateY(30deg) translate3d(490px, -200px, -1200px);
  -o-transform: perspective(1300px) rotateY(30deg) translate3d(490px, -200px, -1200px);
  -ms-transform: perspective(1300px) rotateY(30deg) translate3d(490px, -200px, -1200px);
  transform: perspective(1300px) rotateY(30deg) translate3d(490px, -200px, -1200px);
  opacity: 1;
}
#slider-wrapp #slider._3D.transfomer .slide:nth-last-child(9) {
  -webkit-transform: perspective(1300px) rotateY(30deg) translate3d(480px, -210px, -1450px);
  -moz-transform: perspective(1300px) rotateY(30deg) translate3d(480px, -210px, -1450px);
  -o-transform: perspective(1300px) rotateY(30deg) translate3d(480px, -210px, -1450px);
  -ms-transform: perspective(1300px) rotateY(30deg) translate3d(480px, -210px, -1450px);
  transform: perspective(1300px) rotateY(30deg) translate3d(480px, -210px, -1450px);
  opacity: 1;
}
#slider-wrapp #slider._3D.transfomer .slide:nth-last-child(10) {
  -webkit-transform: perspective(1300px) rotateY(30deg) translate3d(460px, -220px, -1700px);
  -moz-transform: perspective(1300px) rotateY(30deg) translate3d(460px, -220px, -1700px);
  -o-transform: perspective(1300px) rotateY(30deg) translate3d(460px, -220px, -1700px);
  -ms-transform: perspective(1300px) rotateY(30deg) translate3d(460px, -220px, -1700px);
  transform: perspective(1300px) rotateY(30deg) translate3d(460px, -220px, -1700px);
  opacity: 0.5;
}

.keyboard {
  position: absolute;
  bottom: 20px;
  left: 20px;
}
.keyboard .key {
  border-radius: 9px;
  color: #000000;
  display: inline-block;
  padding-top: 8px;
  text-indent: 15px;
  background: #FFFFFF;
  position: relative;
  font-family: sans-serif;
  cursor: pointer;
}
.keyboard .key:hover {
  background: #eee;
}
.keyboard .key.ctrl {
  width: 75px;
  height: 50px;
  position: relative;
  top: -4px;
}
.keyboard .key.ctrl.active {
  top: 0;
  margin-bottom: 5px;
}
.keyboard .key:after {
  content: " ";
  display: inline-block;
  position: absolute;
  top: 1px;
  left: -2px;
  right: -2px;
  height: 50px;
  border: 5px solid #aaa;
  border-radius: 5px;
  border-top: 0;
}
.keyboard .key.active {
  -webkit-box-shadow: inset 0 0 20px #999;
  -moz-box-shadow: inset 0 0 20px #999;
  -o-box-shadow: inset 0 0 20px #999;
  -ms-box-shadow: inset 0 0 20px #999;
  box-shadow: inset 0 0 20px #999;
  height: 45px !important;
  top: 3px;
}
.keyboard .key.active:after {
  height: 47px;
  border-color: #999;
}
.keyboard .arrows {
  display: inline-block;
  margin-left: 15px;
}
.keyboard .arrows > .key {
  width: 50px;
  height: 50px;
  font-weight: bold;
  font-size: 20px;
  margin: 2px;
}
.keyboard .arrows > .key.up {
  display: block;
  margin: 0 auto 3px 60px;
}
.keyboard .arrows > .key.up.active {
  margin-bottom: 8px;
}
.keyboard p {
  padding-top: 10px;
  font-size: 17px;
  letter-spacing: 2px;
  background: #FFFFFF;
  line-height: 34px;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
}
.keyboard kbd {
  display: inline-block;
  margin: 1px;
  padding: 1px 4px;
  font-size: 11px;
  line-height: 1.4;
  color: #242729;
  text-shadow: 0 1px 0 #FFFFFF;
  background-color: #e1e3e5;
  border: 1px solid #adb3b9;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(12, 13, 14, 0.2), 0 0 0 2px #FFFFFF inset;
  white-space: nowrap;
  position: relative;
  top: -3px;
}

@media (max-width: 980px) {
  .keyboard {
    opacity: 0;
  }
}
</style>

`

	return `
${css1} 
${css2} 
${css3}
${css4}
`
}



const script = (aa, change) => {
	var script1 = `
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
`

	var script2 = `

<script>

var html = ''


$(document).ready(function(){

    $("iframe").on("load", function(e){
let t = this
        $(this).contents().on("mousedown, mouseup, click", function(){


let b = document.getElementById("mySidenav")


b.innerHTML = '<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>'

let text =  $(this).contents().text()

html = t

b.innerHTML += '<button id="open" >Open</button>'

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

$("#open").on("click",function(){
oppen(t.getAttribute("srcdoc") )
})

        });
    });
});

function oppen(html){
var myWindow = window.open("", "MsgWindow", "width=1000,height=1000");

myWindow.document.write(html);

}
</script>
`

	var script3 = `
<script>
$(document).ready(function() {
    var $slider=$("#slider");
    var slideLength = $("#slider > .slide").length -1 ;
    var ctrl=false;
    $(document).keydown(function (e) {
        if(e.keyCode==17) {
            ctrl=true;
            $("#slider").removeClass("_3D");
            $(".key.ctrl").addClass("active");
        }
    }).keyup(function (e) {
        if(e.which == 17){
            ctrl=false;
            $("#slider").addClass("_3D");
            $(".key.ctrl").removeClass("active");
        }
        if(e.which==39 || e.which==40){
            nextSlide();
            return;
        }
        if(e.which==37 || e.which==38){
            prevSlide();
            return;
        }
    });

    var is3D=false;
    $(".key").mousedown(function(){
        if($(this).hasClass("ctrl")){
            if($(this).hasClass("active")) is3D = true;
            $("#slider").removeClass("_3D");
        }
        $(this).addClass("active");
    }).mouseup(function(){
        if($(this).hasClass("down") || $(this).hasClass("right")) nextSlide();
        if($(this).hasClass("up") || $(this).hasClass("left")) prevSlide();
        console.log(is3D);
        if($(this).hasClass("ctrl active")){
            if(is3D){
                $(this).removeClass("active");
                $("#slider").addClass("_3D");
                is3D=false;
            } 
        }else{
            $(this).removeClass("active");
        }
    });

    function nextSlide() {
        lastElem().addClass("active");
        $slider.addClass("transfomer");
        setTimeout(function(){
            var $slicedSlide = $('.slide').slice(slideLength);
            $slider.prepend($slicedSlide);
            $(document).find(".slide.active").removeClass("active");
            $slider.removeClass("transfomer");
        },300);
    }

    function prevSlide(){
        var $slicedSlide = $('.slide').slice(0,1).addClass("active");
        $slider.appendChild($slicedSlide);
        setTimeout(function(){
            lastElem().removeClass("active");
        },50);
    }

    function lastElem(){
        return $("#slider > .slide").last();
    }
});
</script>
`



	return `
${script1} 
${script2} 
${script3}
`
}

const normal = (aa, change) => {
	return `
${css(aa, change)}


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


<div id="data"></div>

<div id="mySidenav" class="sidenav">

</div>

${script(aa, change)}

  
  </div>
  </div>




  <div class="row">

    <div class="main">

`
}

const stack = (aa, change, r, c) => {
	let s = aa.chunk(r * c)
	return `
${stackCss(r, c)}
${css(aa, change)}

${s.map((x) => `
<div class="mySlides${change} fade">
<div class="by4">
${x.join("")}
</div>
</div>
`).join("")

		}

<br>
<div style="text-align:center">
${Array.from(Array(s.length).keys())
			.map(
				(x) =>
					` <span class="dot${change}" onclick="currentSlide(${Number(x) + 1})"></span>  `
			)
			.join(" ")}
</div>


<div id="data"></div>

<div id="mySidenav" class="sidenav">

</div>


${script(aa, change)}

  
  </div>
  </div>




  <div class="row">

    <div class="main">
`
}

const _3dslide = (aa, change) => {
	return `
${script(aa, change)}

<div id="slider-wrapp">
  <div id="slider" class="_3D">
${aa.map(function(x) {
		return `
    <div class="slide">
${x}
</div>
`
	}).join(" ")
		}
  </div>

 </div>
</div>
<div class="keyboard">
  <div class="key ctrl">Ctrl</div>
  <div class="arrows">
    <div class="key left">&larr;</div>
    <div class="key right">&rarr;</div>
  </div>

</div>




<div id="data"></div>

<div id="mySidenav" class="sidenav">

</div>

 ${css(aa, change)}


`
}

const csCub = (aa, change) => {
	let r = aa.chunk(6)

	let s = ''
	for(let i in r)
		if( i != "in")
			s+=  cube(r[i], i.toString() )
		
	
	
return `
${s }
${script(aa, change) }
${css(aa, change)}

<div id="mySidenav" class="sidenav">

</div>

<style>
 

iframe {
    width: 100%;
    height: 100%;
    background-color: white;
}
.title {
  text-align: center;
  color: #333;
  font: 24px Helvetica, Arial, serif;
}
.creds {
  text-align: center;
  color: #666;
  font: 12px Helvetica, Arial, serif;
}
.creds a {
  color: #000;
  text-decoration: none;
  border-bottom: 1px dotted #000;
}
.three-d-container{
margin:30px auto;
width:300px;
height:300px;
border-radius: 3px;
position:relative;
-webkit-perspective:1000px;
   -moz-perspective:1000px;
    -ms-perspective:1000px;
     -o-perspective:1000px;
        perspective:1000px;
-webkit-box-shadow:0 20px 60px rgba(0,0,0,0.2),			  			  0 0 40px rgba(0,0,0,0.2) inset;
   -moz-box-shadow:0 20px 60px rgba(0,0,0,0.2),			  			  0 0 40px rgba(0,0,0,0.2) inset;
        box-shadow:0 20px 60px rgba(0,0,0,0.2),			  			  0 0 40px rgba(0,0,0,0.2) inset;
}
.three-d-cube{
width:100%;
height:100%;
position:absolute;
-webkit-transition:-webkit-transform 1s;
   -moz-transition:   -moz-transform 1s;
     -o-transition:     -o-transform 1s;
        transition:        transform 1s;
-webkit-transform-style:preserve-3d;
   -moz-transform-style:preserve-3d;
    -ms-transform-style:preserve-3d;
     -o-transform-style:preserve-3d;
        transform-style:preserve-3d;
-webkit-transform:translateZ( -150px );
   -moz-transform:translateZ( -150px );
    -ms-transform:translateZ( -150px );
     -o-transform:translateZ( -150px );
        transform:translateZ( -150px );
}
.three-d-cube .three-d-item{
width:100%;
height:100%;
display:block;
margin:0;
position:absolute;
}
.three-d-cube .three-d-item img{
width:100%;
height:100%;
display:block;
margin:0;
}
.three-d-item:nth-child(1){
-webkit-transform:rotateY(   0deg ) translateZ( 150px );
   -moz-transform:rotateY(   0deg ) translateZ( 150px );
    -ms-transform:rotateY(   0deg ) translateZ( 150px );
     -o-transform:rotateY(   0deg ) translateZ( 150px );
        transform:rotateY(   0deg ) translateZ( 150px );
}
.three-d-item:nth-child(2){
-webkit-transform:rotateX( 180deg ) translateZ( 150px );
   -moz-transform:rotateX( 180deg ) translateZ( 150px );
    -ms-transform:rotateX( 180deg ) translateZ( 150px );
     -o-transform:rotateX( 180deg ) translateZ( 150px );
        transform:rotateX( 180deg ) translateZ( 150px );
}
.three-d-item:nth-child(3){
-webkit-transform:rotateY(  90deg ) translateZ( 150px );
   -moz-transform:rotateY(  90deg ) translateZ( 150px );
    -ms-transform:rotateY(  90deg ) translateZ( 150px );
     -o-transform:rotateY(  90deg ) translateZ( 150px );
        transform:rotateY(  90deg ) translateZ( 150px );
}
.three-d-item:nth-child(4){
-webkit-transform:rotateY( -90deg ) translateZ( 150px );
   -moz-transform:rotateY( -90deg ) translateZ( 150px );
    -ms-transform:rotateY( -90deg ) translateZ( 150px );
     -o-transform:rotateY( -90deg ) translateZ( 150px );
        transform:rotateY( -90deg ) translateZ( 150px );
}
.three-d-item:nth-child(5){
-webkit-transform:rotateX(  90deg ) translateZ( 150px );
   -moz-transform:rotateX(  90deg ) translateZ( 150px );
    -ms-transform:rotateX(  90deg ) translateZ( 150px );
     -o-transform:rotateX(  90deg ) translateZ( 150px );
        transform:rotateX(  90deg ) translateZ( 150px );
}
.three-d-item:nth-child(6){
-webkit-transform:rotateX( -90deg ) translateZ( 150px );
   -moz-transform:rotateX( -90deg ) translateZ( 150px );
    -ms-transform:rotateX( -90deg ) translateZ( 150px );
     -o-transform:rotateX( -90deg ) translateZ( 150px );
        transform:rotateX( -90deg ) translateZ( 150px );
}
.a:checked ~ .three-d-cube{
-webkit-transform:translateZ( -150px ) rotateY(    0deg );
   -moz-transform:translateZ( -150px ) rotateY(    0deg );
    -ms-transform:translateZ( -150px ) rotateY(    0deg );
     -o-transform:translateZ( -150px ) rotateY(    0deg );
        transform:translateZ( -150px ) rotateY(    0deg );
}
.b:checked ~ .three-d-cube{
-webkit-transform:translateZ( -150px ) rotateX( -180deg );
   -moz-transform:translateZ( -150px ) rotateX( -180deg );
    -ms-transform:translateZ( -150px ) rotateX( -180deg );
     -o-transform:translateZ( -150px ) rotateX( -180deg );
        transform:translateZ( -150px ) rotateX( -180deg );
}
.c:checked ~ .three-d-cube{
-webkit-transform:translateZ( -150px ) rotateY(  -90deg );
   -moz-transform:translateZ( -150px ) rotateY(  -90deg );
    -ms-transform:translateZ( -150px ) rotateY(  -90deg );
     -o-transform:translateZ( -150px ) rotateY(  -90deg );
        transform:translateZ( -150px ) rotateY(  -90deg );
}
.d:checked ~ .three-d-cube{
-webkit-transform:translateZ( -150px ) rotateY(   90deg );
   -moz-transform:translateZ( -150px ) rotateY(   90deg );
    -ms-transform:translateZ( -150px ) rotateY(   90deg );
     -o-transform:translateZ( -150px ) rotateY(   90deg );
        transform:translateZ( -150px ) rotateY(   90deg );
}
.e:checked ~ .three-d-cube{
-webkit-transform:translateZ( -150px ) rotateX(  -90deg );
   -moz-transform:translateZ( -150px ) rotateX(  -90deg );
    -ms-transform:translateZ( -150px ) rotateX(  -90deg );
     -o-transform:translateZ( -150px ) rotateX(  -90deg );
        transform:translateZ( -150px ) rotateX(  -90deg );
}
.f:checked ~ .three-d-cube{
-webkit-transform:translateZ( -150px ) rotateX(   90deg );
   -moz-transform:translateZ( -150px ) rotateX(   90deg );
    -ms-transform:translateZ( -150px ) rotateX(   90deg );
     -o-transform:translateZ( -150px ) rotateX(   90deg );
        transform:translateZ( -150px ) rotateX(   90deg );
}
.three-d-bullet{
margin:350px 10px 0 0;
float:left;
}
.three-d-bullet:first-child{
margin:350px 10px 0 88px;
}
</style>

`
}


module.exports.html = function(aa, change, a = 'one', c = 1, d = 1) {	
	switch (a) {
		case 'one':
			return `
${normal(aa, change)}
<script>

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

</script>
`
		case 'all':
			return `
${stack(aa, change, Number(c), Number(d))}
<script>

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

</script>
`
		case 'window':
			return `
${_3dslide(aa, change)}
<script>

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

</script>
`
		case "cube":
			return `
${csCub(aa, change)}


<script>

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

</script>
`
			
	
	}

}


