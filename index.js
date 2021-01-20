
for(var i=0; i<document.querySelectorAll(".drum").length ; i++){

 document.querySelectorAll(".drum")[i].addEventListener("click",function (){
     
   var buttonInnerHTML = this.innerHTML;

 keyBoard(buttonInnerHTML);  

 buttonAnimation(buttonInnerHTML);

});

}

document.addEventListener("keydown",function(key){

    keyBoard(event.key);

buttonAnimation(event.key);

});


function keyBoard (key){

    switch (key) {
        case "a":
            var crash = new Audio('crash.mp3');
            crash.play();
            break;
        case "s":
            var kick = new Audio('kick-bass.mp3');    
            kick.play();
            break;
        case "d":
            var snare = new Audio('snare.mp3');
            snare.play();
            break;
        case "j":
            var tom1 = new Audio('tom-1.mp3');
            tom1.play();
            break;
        case "k":
            var tom2 = new Audio('tom-2.mp3');
            tom2.play();
            break;
        case "l":
            var tom3 = new Audio('tom-3.mp3');
            tom3.play();
            break;
        case "w":
            var tom4 = new Audio('tom-4.mp3');
            tom4.play();
            break;             
        default:
            console.log(buttonInnerHTML);
            break;
    }

}

function buttonAnimation(currentKey){
var activeButton = document.querySelector("." + currentKey);

activeButton.classList.add("pressed");

setTimeout(function(){
    activeButton.classList.remove("pressed")
},100);

}