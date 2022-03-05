var names,
    avatar = document.querySelector('.avatar'),
presence = document.querySelector('.presence');

 avatar.className = 'face-' + ((Math.random() * 13 + 1) >>> 0) + ' color-' + ((Math.random() * 10 + 1) >>> 0);


//$("#all").hide()

$("#setname").click(function(){
  if( $("#Name").val().trim().length == 0 ){
 
  }else{
    $("#info").hide('slow',function(){
      $("#info").remove()
    })
    $("#all").show()

  }
})


set_name = function(a){
   names = a
}


function generatePass(pLength){
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < pLength; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  
}

function host(){
  $("#login").val(generatePass(5) )

  join(  $("#login").val() )
     
}

function join(e){
  
  
(function(){
  
  var 
  box = PUBNUB.$('box'), 
  input = PUBNUB.$('input'), 
  channel = 'chat'+e//$("#join").val().toString()

  /*
PUBNUB.subscribe({
  channel : channel,
  callback : function(text) {
    box.innerHTML = (''+text).replace( /[<>]/g, '' ) + '<br>' + box.innerHTML
  }
});
*/
  
  
    PUBNUB.subscribe({
    channel: channel,
   callback : function(text) {
    box.innerHTML = (''+text).replace( /[<>]/g, '' ) + '<br>' + box.innerHTML
  },
    presence: function(text) {
        if (text.occupancy > 0) {
        presence.textContent = text.occupancy + ' people online';
      } else {
        presence.textContent = 'Nobody else is online';
      }
    
    }
  });
  
  
  
 
  
PUBNUB.bind('keyup', input, function(e) {
    
    var a = names+": "+ input.value;
  
  if(input.value === ''){
    
  }else{
  
  (e.keyCode || e.charCode) === 13 &&   PUBNUB.publish({
    channel : channel, message : a, x : (input.value='')
  })
  }
})


})()
  
  
    
}