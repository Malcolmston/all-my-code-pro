

var number = document.getElementById("word");     //
 var enter = document.getElementById("enter");      //enter
 let info = document.getElementById("num");        //score
 var num = document.getElementById("info");        //text val
  var say = document.getElementById("new");       //new
  //var help = document.getElementById("help");

 
   var f = [];
function factorial (n) {
  if (n === 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = factorial(n-1) * n;
}

 say.addEventListener("click", function () {
 let formulas =  ["+","-","/","*","!","^"]
 
 var formula = formulas[Math.round(Math.random()*6)]
 
 let a = Math.round(Math.random()*1000)
 let b = Math.round(Math.random()*1000)
 let c =Math.round(Math.random()*10)
 let form = 0
 
 if (formula == 4){
      form =( a + ' '+ formula)
 }
 
 if (formula == 5){
       form = (a + ' '+ formula+ ' '+c)
 } else{
     
      form =(a + ' '+ formula +' '+ b)
 }
 
 

 let anser = eval(form);
//alert(anser)

 num.innerHTML = 'what is the anser to: '+form
});


enter.addEventListener("click", function () {
    alert(anser)
if(number.value == anser){
    
   alert('corect') 
} else{
    alert(anser)
}
});


window.addEventListener('load', ()=>{ 
        
    resize(); // Resizes the canvas once the window loads 
    document.addEventListener('mousedown', startPainting); 
    document.addEventListener('mouseup', stopPainting); 
    document.addEventListener('mousemove', sketch); 
    window.addEventListener('resize', resize); 
}); 
    
const canvas = document.querySelector('#canvas'); 
   
// Context for the canvas for 2 dimensional operations 
const ctx = canvas.getContext('2d'); 
    
// Resizes the canvas to the available size of the window. 
function resize(){ 
  ctx.canvas.width = window.innerWidth; 
  ctx.canvas.height = window.innerHeight; 
} 
    
// Stores the initial position of the cursor 
let coord = {x:0 , y:0};  
   
// This is the flag that we are going to use to  
// trigger drawing 
let paint = false; 
    
// Updates the coordianates of the cursor when  
// an event e is triggered to the coordinates where  
// the said event is triggered. 
function getPosition(event){ 
  coord.x = event.clientX - canvas.offsetLeft; 
  coord.y = event.clientY - canvas.offsetTop; 
} 
  
// The following functions toggle the flag to start 
// and stop drawing 
function startPainting(event){ 
  paint = true; 
  getPosition(event); 
} 
function stopPainting(){ 
  paint = false; 
} 
    
function sketch(event){ 
  if (!paint) return; 
  ctx.beginPath(); 
    
  ctx.lineWidth = 5; 
   
  // Sets the end of the lines drawn 
  // to a round shape. 
  ctx.lineCap = 'round'; 
    
  ctx.strokeStyle = 'green'; 
      
  // The cursor to start drawing 
  // moves to this coordinate 
  ctx.moveTo(coord.x, coord.y); 
   
  // The position of the cursor 
  // gets updated as we move the 
  // mouse around. 
  getPosition(event); 
   
  // A line is traced from start 
  // coordinate to this coordinate 
  ctx.lineTo(coord.x , coord.y); 
    
  // Draws the line. 
  ctx.stroke(); 
} 

