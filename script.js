var launchDate = new Date("Dec 10, 2022 12:00:00").getTime();
var x = setInterval(function(){
   var now = new Date().getTime();
   var t = launchDate - now;
        var days = Math.floor(t/(1000*60*60*24));
        if(days<10){days = "0" + days;}
       var hours = Math.floor((t%(1000* 60* 60* 24))/(1000*60*60));
        if(hours<10){hours = "0" + hours;}
        
        var mins = Math.floor((t%(1000* 60* 60))/(1000*60));
        if(mins<10){hours = "0" + mins;}

        var secs = Math.floor((t%(1000* 60))/(1000));
        if(secs<10){hours = "0" + secs;}

        document.getElementById("countdown").innerHTML = days + "d: "+ hours + "hrs: " + mins + "mins: "+ secs + "s"
        
    
}, 1000);


    