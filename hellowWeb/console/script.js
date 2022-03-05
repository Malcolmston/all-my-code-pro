var obj = ''

$(".button").click(function(e){
    let find = ( e.target.id  )
    $("#console").html('')
    
    if(find !== 'all'){
    
    
       const g =  (obj.filter(x=>x.split('"')[1] == find))
       
       for( i in g){
             $("#console").append(g[i])
                     $("#console").append("<br>")
        $("#console").append("<br>")
       }
    }else{
        let g  = obj
        for( i in g){
             $("#console").append(g[i])
                     $("#console").append("<br>")
        $("#console").append("<br>")
       }
    }
})

console.log = function(a){
     $("#console").append( "<a class='log'>"+a+"  </a>" )
        $("#console").append("<br>")
        $("#console").append("<br>")
         obj =   $("#console").html().split('<br><br>') 
    
}

console.error = function(a){
     $("#console").append( "<a class='error'>"+new Error(a)+"  </a>" )
        $("#console").append("<br>")
        $("#console").append("<br>")
         obj =   $("#console").html().split('<br><br>') 
    
}

console.info = function(a){
     $("#console").append( "<a class='info'>"+a+"  </a>" )
        $("#console").append("<br>")
        $("#console").append("<br>")
         obj =   $("#console").html().split('<br><br>') 
    
}

console.warn = function(a){
     $("#console").append( "<a class='warn'>"+a+" </a>" )
        $("#console").append("<br>")
        $("#console").append("<br>")
         obj =   $("#console").html().split('<br><br>') 
    
}

console.time = function(){
    let a = new Date()
     $("#console").append( "<a class='time'>"+a+" </a>" )
        $("#console").append("<br>")
        $("#console").append("<br>")
         obj =   $("#console").html().split('<br><br>') 
    
}

console.log('hi') 

console.log('hi') 
