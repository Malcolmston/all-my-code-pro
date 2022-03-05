const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");


function $(id){
    return document.getElementById(id)
}

Object.prototype.text = function(a){
    this.innerHTML = a
}


setInterval(function(){
  $('time').text(`${time()}`); }, 1);
  
  function time(a){
      
      if(new Date().toString().split(' ')[4].split(':')[0] > 12){
          document.body.classList.add("dark-theme");
      }else{
          document.body.classList.remove("dark-theme");
      }
      
      return  new Date().toString().split(' ')[4].split(':')[0] > 12
      
      ? 'PM: '+  Number(new Date().toString().split(' ')[4].split(':')[0]-12)  +":"
      +new Date().toString().split(' ')[4].split(':')[1]+':'+
      new Date().toString().split(' ')[4].split(':')[2] 
      
      : "AM: " +new Date().toString().split(' ')[4]

 
  }
  
  


if (prefersDarkScheme.matches) {
  document.body.classList.add("dark-theme");
} else {
  document.body.classList.remove("dark-theme");
}