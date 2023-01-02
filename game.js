var gamePattern = [];
var userClickedPattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence(){

    var randmNumber = Math.floor(Math.random() * 4);;
    var randomChosenColour = buttonColours[randmNumber];
    gamePattern.push(randomChosenColour);
    
    var id = "#" + randomChosenColour;
    $(id).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
}

$(".btn").click(function() {

    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    // alert(userChosenColour);

    playSound(userChosenColour);

    animatePress(userChosenColour);

});


function playSound(name){

    var sound = "sounds/" + name + ".mp3";    
    var audio = new Audio(sound);
    audio.play();
}

function animatePress(currentColour){

    var btn = "." + currentColour;
    $(btn).addClass("pressed");

    setTimeout(function() { 
        $(btn).removeClass("pressed");
    }, 100);    

}
