
// Sound variables 

let crash = new Audio("Sounds/crash.mp3");
let ride = new Audio("Sounds/ride.mp3");
let floorTom = new Audio("Sounds/floortom.mp3");
let midTom = new Audio("Sounds/midtom.mp3");
let highTom = new Audio("Sounds/hightom.mp3");
let kick = new Audio("Sounds/Bass-Drum-Hit-Level-6a-www.fesliyanstudios.com.mp3");
let snare = new Audio("Sounds/Snare.mp3");
let hiHatOpen = new Audio("Sounds/Hi-hat-Open.mp3");
let hiHatClosed = new Audio("Sounds/Hi-hat closed.mp3");

// tanget variables 

let tanE = document.querySelector(".E")
let tanF = document.querySelector(".F")
let tanR = document.querySelector(".R")
let tanG = document.querySelector(".G")
let tanV = document.querySelector(".V")
let tanH = document.querySelector(".H")
let tanI = document.querySelector(".I")
let tanJ = document.querySelector(".J")
let tanK = document.querySelector(".K")

// Adding event listener

document.addEventListener("keydown", (e) => {
    if(e.key == "e") {
        crash.currentTime = 0;
        crash.play();
        tanE.style.transform = "scale(1.15)";  
    } 
    else if(e.key == "r") {
        ride.currentTime = 0;
        ride.play();
        tanR.style.transform = "scale(1.15)";  
    }
    else if(e.key == "f") {
        floorTom.currentTime = 0;
        floorTom.play();
        tanF.style.transform = "scale(1.15)";  
    }
    else if(e.key == "g") {
        midTom.currentTime = 0;
        midTom.play();
        tanG.style.transform = "scale(1.15)";  
    }
    else if(e.key == "h") {
        highTom.currentTime = 0;
        highTom.play();
        tanH.style.transform = "scale(1.15)";  
    }
    else if(e.key == "v" || e.key == "b") {
        kick.currentTime = 0;
        kick.play();
        tanV.style.transform = "scale(1.15)";  
    }
    else if(e.key == "j") {
        snare.currentTime = 0;
        snare.play();
        tanJ.style.transform = "scale(1.15)";  
    }
    else if(e.key == "i") {
        hiHatOpen.currentTime = 0;
        hiHatOpen.play();
        tanI.style.transform = "scale(1.15)";  
    }
    else if(e.key == "k") {
        hiHatClosed.currentTime = 0;
        hiHatClosed.play();
        tanK.style.transform = "scale(1.15)";  
    }    
    }
);

document.addEventListener("keyup", (e) => {
    if(e.key == "e") {
        tanE.style.transform = "scale(1.0)";  
    } 
    else if(e.key == "r") {
        tanR.style.transform = "scale(1.0)"; 
    }
    else if(e.key == "f") {
        tanF.style.transform = "scale(1.0)"; 
    }
    else if(e.key == "g") {
        tanG.style.transform = "scale(1.0)"; 
    }
    else if(e.key == "h") {
        tanH.style.transform = "scale(1.0)"; 
    }
    else if(e.key == "v" || e.key == "b") {
        tanV.style.transform = "scale(1.0)"; 
    }
    else if(e.key == "j") {
        tanJ.style.transform = "scale(1.0)"; 
    }
    else if(e.key == "i") {
        tanI.style.transform = "scale(1.0)"; 
    }
    else if(e.key == "k") {
        tanK.style.transform = "scale(1.0)"; 
    }    
    }
);


