

document.getElementById("sectionsContainer").children[0].setAttribute("id", "scr0")

var sliderCounter = 1;
var numOfElements = document.getElementById("slider").childElementCount;
window.onload = function() {

    for (var c = 2; c <= numOfElements; c++) {
        document.getElementById("e" + c).style.display = "none";
    }
    for (var i = 0; i < num_of_dishes; i++) {
        document.getElementsByClassName("body2Element")[i].classList.remove("getReady");
        //document.getElementsByClassName("body2Element")[i].style.visibility = "hidden"
    }


    



}


document.getElementById("scrolRight").onclick = function() {
    "use strict";



    if (sliderCounter == numOfElements) {
        document.getElementById("e" + numOfElements).style.display = "none";
        document.getElementById("e1").style.display = "flex";
        sliderCounter = 1;
    } else {
        document.getElementById("e" + sliderCounter).style.display = "none";
        sliderCounter++;
        document.getElementById("e" + sliderCounter).style.display = "flex";

    }
    document.getElementById("showCounter").textContent = sliderCounter + " of " + numOfElements;
    for (var c = 1; c <= numOfElements; c++) {
        document.getElementById("e" + c).classList.remove("animLeft")
    }
    for (var c = 1; c <= numOfElements; c++) {
        document.getElementById("e" + c).classList.add("animRight")
    }

}
document.getElementById("scrolLeft").onclick = function() {
    "use strict";


    if (sliderCounter == 1) {
        document.getElementById("e1").style.display = "none";
        document.getElementById("e6").style.display = "flex";
        sliderCounter = numOfElements;
    } else {
        document.getElementById("e" + sliderCounter).style.display = "none";
        sliderCounter--;
        document.getElementById("e" + sliderCounter).style.display = "flex";

    }
    document.getElementById("showCounter").textContent = sliderCounter + " of " + numOfElements;
    for (var c = 1; c <= numOfElements; c++) {
        document.getElementById("e" + c).classList.remove("animRight")
    }
    for (var c = 1; c <= numOfElements; c++) {
        document.getElementById("e" + c).classList.add("animLeft")
    }
}



//end scroll $$$$$$$#########@@@@@@@##%$Q################%@#@#
var num_of_dishes = document.getElementById("body2Cont").childElementCount;
var cc = 0;

window.onscroll = function() {
    "use strict";
    if (window.scrollY > 1000) {
        for (var i = 0; i < num_of_dishes; i++) {
            //document.getElementsByClassName("body2Element")[i].style.visibility = "visible";
            document.getElementById("body2Cont").children[i].classList.add("getReady");
        }
    }
}



    
document.getElementById("scrollButtons1").onclick = function(){
    "use strict";
    document.getElementById("scrollButtons1").classList.add("activ");
    document.getElementById("scrollButtons2").classList.remove("activ");
}

document.getElementById("scrollButtons2").onclick = function(){
    "use strict";
    document.getElementById("scrollButtons2").classList.add("activ");
    document.getElementById("scrollButtons1").classList.remove("activ");
}
    

