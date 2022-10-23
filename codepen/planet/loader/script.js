//setInterval(function(){  }, 3000);

document.getElementById("dot").innerText = "Loading..."

var dots = 0
var d = true
setInterval(function(){  

  if(d){
    dots++
  }
  if(!d){
    dots--
  }
  if(dots == 3){
    d = false
  }
  if(dots == 0){
    d = true
  }
 
  
  document.getElementById("dot").innerText ="Loading"+(".").repeat(dots)
}, 1000);



//dots == 0 ? dots=3:dots=dots