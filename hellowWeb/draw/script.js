function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function dwn(){
 downloadCanvasAsImage($("#name").val()||$("#name").text(), $("#file").val()||$("#file").text())
}



var openFile = function(file) {
	
		 var url = document.getElementById("image")

    var input = file.target;
	
					//	document.getElementById('inserted').innerHTML = ('file type: '+input.files[0].type.split('/')[0] +'<br> file @: '+input.files[0].type.split('/')[1] +'<br> file name: '+ input.files[0].name.split('.')[0] )



    var reader = new FileReader();

    reader.onload = function(){

      var dataURL = reader.result;
      
      $("#inserted").html()
$("#inserted").append("<img id='output' >")

      var output = document.getElementById('output');
      
      output.src = dataURL;

 
    };

    reader.readAsDataURL(input.files[0]);
  };
  


var downloadCanvasAsImage = function(name,file){

    let canvasImage = document.getElementById('canvas').toDataURL(`image/${file}`);

    // this can be used to download any image from webpage to local disk
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function () {
        let a = document.createElement('a');
        a.href = window.URL.createObjectURL(xhr.response);
        a.download = name || 'image_name.jpg';
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        a.remove()
      };
      xhr.open('GET', canvasImage); // This is to download the canvas Image
      xhr.send();
}

// create canvas element and append it to document body
const canvas = document.getElementById('canvas');


// some hotfixes... ( ≖_≖)
document.body.style.margin = 0;
canvas.style.position = 'fixed';

// get canvas 2D context and set him correct size
var ctx = canvas.getContext('2d');
resize();

// last known position
var pos = { x: 0, y: 0 };

window.addEventListener('resize', resize);
document.addEventListener('mousemove', draw);
document.addEventListener('mousedown', setPosition);
document.addEventListener('mouseenter', setPosition);

// new position from mouse event
function setPosition(e) {
  pos.x = e.clientX;
  pos.y = e.clientY;
}

// resize canvas
function resize() {
 ctx.canvas.width = window.innerWidth-300;
  ctx.canvas.height = window.innerHeight-100;
}
$("#color").change(function(){draw(1)})
$("#size").change(function(){draw(1)})
$("#pens").change(function(){draw(1)})

function draw(e) {
  // mouse left button must be pressed
  if (e.buttons !== 1) return;

  ctx.beginPath(); // begin

  ctx.lineWidth =  $("#size").val()||$("#size").text();
  ctx.lineCap = $("#pens").val()||$("#pens").text();
  ctx.strokeStyle = $("#color").val()||$("#color").text() //'#c0392b';

  ctx.moveTo(pos.x, pos.y); // from
  setPosition(e);
  ctx.lineTo(pos.x, pos.y); // to

  ctx.stroke(); // draw it!
}


var imageLoader = document.getElementById('logo');
    imageLoader.addEventListener('change', handleImage, false);


function handleImage(e){
    var reader = new FileReader();
    reader.onload = function(event){
        var img = new Image();
        img.onload = function(){
           
            ctx.drawImage(img,0,0);
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);     
}

