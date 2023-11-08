//for first image
$("document").ready(function(){ 
    $("#image-1").mouseenter(function(){    
        $(this).attr("src","images/wok-screen2.png"); //swap picture on hover
    });     
    $("#image-1").mouseleave(function(){   
        $(this).attr("src","images/wok-screen1.png");      
    }); 
    $("#image-1").on('click', function(){
        window.location.href = `green-wok.html`;    //connects to portfolio template on click
   });
   
});

//for second image
$("document").ready(function(){ 
    $("#image-2").mouseenter(function(){    
        $(this).attr("src","images/expedia-screen2.png");    //swap picture on hover 
    });     
    $("#image-2").mouseleave(function(){       
        $(this).attr("src","images/expedia-screen1.png");      
    }); 
    $("#image-2").on('click', function(){
        window.location.href = `expedia.html`;    //connects to portfolio template on click
   });
});

//for third image
$("document").ready(function(){ 
    $("#image-3").mouseenter(function(){    
        $(this).attr("src","images/weather-screen2.png");   
    });     
    $("#image-3").mouseleave(function(){       
        $(this).attr("src","images/weather-screen1.png");     //swap picture on hover 
    }); 
    $("#image-3").on('click', function(){
        window.location.href = `weather-app.html`;    //connects to portfolio template on click  
   });
});

//for fourth image
$("document").ready(function(){ 
    $("#image-4").mouseenter(function(){    
        $(this).attr("src","images/devine-screen2.png");  //swap picture on hover 
    });     
    $("#image-4").mouseleave(function(){       
        $(this).attr("src","images/devine.png");    
    }); 
    $("#image-4").on('click', function(){
        window.location.href = `devine-kinky.html`;  //connects to portfolio template on click  
   });
});

//for fifth image
$("document").ready(function(){ 
    $("#image-5").mouseenter(function(){    
        $(this).attr("src","images/gemme-screen2.png");    //swap picture on hover 
    });     
    $("#image-5").mouseleave(function(){       
        $(this).attr("src","images/gemme-screen1.png");        
    }); 
    $("#image-5").on('click', function(){
        window.location.href = `gemme.html`;    //connects to portfolio template on click
   });
});

//for sixth image
$("document").ready(function(){ 
    $("#image-6").mouseenter(function(){    
        $(this).attr("src","images/giles-screen2.png");  //swap picture on hover   
    });     
    $("#image-6").mouseleave(function(){       
        $(this).attr("src","images/giles-screen1.png");     
    }); 
    $("#image-6").on('click', function(){
        window.location.href = `giles.html`;   //connects to portfolio template on click 
   });
});

//for seventh image
$("document").ready(function(){ 
    $("#image-7").mouseenter(function(){    
        $(this).attr("src","images/wright-1.png");  //swap picture on hover   
    });     
    $("#image-7").mouseleave(function(){       
        $(this).attr("src","images/wright-screen2.png");     
    }); 
    $("#image-7").on('click', function(){
        window.location.href = `unwind.html`;   //connects to portfolio template on click 
   });
});

//for eighth image
$("document").ready(function(){ 
    $("#image-8").mouseenter(function(){    
        $(this).attr("src","images/kelloggs-screen2.png");  //swap picture on hover   
    });     
    $("#image-8").mouseleave(function(){       
        $(this).attr("src","images/kelloggs-screen1.png");     
    }); 
    $("#image-8").on('click', function(){
        window.location.href = `vector.html`;   //connects to portfolio template on click 
   });
});

//for ninth image
$("document").ready(function(){ 
    $("#image-9").mouseenter(function(){    
        $(this).attr("src","images/humber-screen2.png");  //swap picture on hover   
    });     
    $("#image-9").mouseleave(function(){       
        $(this).attr("src","images/humber-screen1.png");     
    }); 
    $("#image-9").on('click', function(){
        window.location.href = `myhumber.html`;   //connects to portfolio template on click 
   });
});