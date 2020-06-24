// level1
$(document).ready(function() {
    $(".btn1").click(function(){
        $(".box1a").css("animation-name","FadeTopLeft");
        $(".box1b").css("animation-name","FadeBottomRight");
        $(".time").css("transform","scale(0)");
    	$(".text1").css("transform","scale(0)");
    	$(".btn1").css("transform","scale(0)");
       
    var s = 0;
 	setInterval(function() {
    s++;
    var remain = s;
    var hours = Math.floor(remain / 3600);
    remain -= hours * 3600;
    var mins = Math.floor(remain / 60);
    remain -= mins * 60;
    var secs = remain;
    // Update the display timer
    if (hours<10) { hours = "0" + hours; }
    if (mins<10) { mins = "0" + mins; }
    if (secs<10) { secs = "0" + secs; }
    document.getElementById("clock").innerHTML = hours + ":" + mins + ":" + secs; 
}
, 88);
    }); 
});

// level2
$(document).ready(function() {
    $(".btn2").click(function(){
   
    	$(".box2a").css("animation-name","LeftFade");
        $(".box2b").css("animation-name","RightFade");
        $(".ti2").css("transform","scale(0)");
        $(".text2").css("transform","scale(0)");
        $(".btn2").css("transform","scale(0)");
      
     var t =0;  
	setInterval(function() {
    t++;
    var remain = t;
    var hours = Math.floor(remain / 3600);
    remain -= hours * 3600;
    var mins = Math.floor(remain / 60);
    remain -= mins * 60;
    var secs = remain;
    // Update the display timer
    if (hours<10) { hours = "0" + hours; }
    if (mins<10) { mins = "0" + mins; }
    if (secs<10) { secs = "0" + secs; }
    document.querySelector(".time").innerHTML = hours + ":" + mins + ":" + secs; 
}, 175);

});
});

// level3
$(document).ready(function() {
    $(".btn3").click(function(){
   
    	$(".box3a").css("animation-name","FadeTopRight");
        $(".box3b").css("animation-name","FadeBottomLeft");
        $(".ti3").css("transform","scale(0)");
        $(".text3").css("transform","scale(0)");
        $(".btn3").css("transform","scale(0)");
      
        var t =0;  
        setInterval(function() {
            t++;
            var remain = t;
            var hours = Math.floor(remain / 3600);
            remain -= hours * 3600;
            var mins = Math.floor(remain / 60);
            remain -= mins * 60;
            var secs = remain;
            // Update the display timer
            if (hours<10) { hours = "0" + hours; }
            if (mins<10) { mins = "0" + mins; }
            if (secs<10) { secs = "0" + secs; }
            document.querySelector(".ti2").innerHTML = hours + ":" + mins + ":" + secs; 
        }, 250);

});
});

// lvl4
$(document).ready(function() {
    $(".btn4").click(function(){
   
    	$(".box4a").css("animation-name","FadeTop");
        $(".box4b").css("animation-name","FadeBottom");
        $(".ti4").css("transform","scale(0)");
        $(".text4").css("transform","scale(0)");
        $(".btn4").css("transform","scale(0)");
      
        var t =0;  
        setInterval(function() {
            t++;
            var remain = t;
            var hours = Math.floor(remain / 3600);
            remain -= hours * 3600;
            var mins = Math.floor(remain / 60);
            remain -= mins * 60;
            var secs = remain;
            // Update the display timer
            if (hours<10) { hours = "0" + hours; }
            if (mins<10) { mins = "0" + mins; }
            if (secs<10) { secs = "0" + secs; }
            document.querySelector(".ti3").innerHTML = hours + ":" + mins + ":" + secs; 
        }, 500);

});
});

// level 5
$(document).ready(function() {
    $(".btn5").click(function(){
        var audio= new Audio("incept.mp3");
        audio.play();
    	$(".box5").css("transform","scale(0)");
        $(".btn5").css("transform","scale(0)");
        

        var r =0;  
        setInterval(function() {
            r++;
            var remain = r;
            var hours = Math.floor(remain / 3600);
            remain -= hours * 3600;
            var mins = Math.floor(remain / 60);
            remain -= mins * 60;
            var secs = remain;
            // Update the display timer
            if (hours<10) { hours = "0" + hours; }
            if (mins<10) { mins = "0" + mins; }
            if (secs<10) { secs = "0" + secs; }
            document.querySelector(".ti4").innerHTML = hours + ":" + mins + ":" + secs; 
        }, 1000);
    });
});