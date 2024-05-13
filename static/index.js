
var hardcodedSmallScreenBarDistances = [0.1125, 0.37, 0.63, 0.8875]

var id = 0;
function ClickNav(id){
    /*
    var lines = document.getElementsByClassName("underscore");
    for (var i = 0; i < lines.length; i++){
        lines[i].classList.add("hidden");
    }
    lines[id].classList.remove("hidden");
    */

    //Move the carusell
    var offset = -100 * id;
    var movestr = offset + "vw";
    var carousell = document.getElementById("carousell");
    var current = carousell.style.left.substring(0, carousell.style.left.length -2)
    if (current == null){
        current = 0
    }
    current = current /-100

    var diff = Math.abs(id - current)
    var final = diff + 0.7
    carousell.style.transition = " left " + 0.3*diff+"s"
    carousell.style.left = movestr;

    //Move the navbar icon
    var line = document.getElementById("underscore");

    if (window.innerWidth < 600){
        line.style.left = hardcodedSmallScreenBarDistances[id]*window.innerWidth-25+"px";
    }else{
        var screedwidth = window.innerWidth;
        var offset = (id+1)*screedwidth/5-25;

        var tovw = (offset/screedwidth)*100;
    
        line.style.left = tovw+"vw";
    }
    
}
//The nav icon gets abit out of line when the screen is updated.
function UpdateScreenWidth(){
    var line = document.getElementById("underscore");
    if (window.innerWidth < 600){
        line.style.left = hardcodedSmallScreenBarDistances[id]*window.innerWidth-25+"px";
    }else{
        var screedwidth = window.innerWidth;
        var offset = (id+1)*screedwidth/5-25;
        var tovw = (offset/screedwidth)*100;
        line.style.left = tovw+"vw";  
    }
    
}
window.onresize = UpdateScreenWidth;

ClickNav(3);



