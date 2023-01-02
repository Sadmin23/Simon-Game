var gamePattern = [];

var userClickedPattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence(){
    var randmNumber = Math.floor(Math.random() * 4);;

    var randomChosenColour = buttonColours[randmNumber];
    
    gamePattern.push(randomChosenColour);
    
    var id = "#" + randomChosenColour;
    
    var sound = randomChosenColour + ".mp3";
    
    $(id).fadeIn(100).fadeOut(100).fadeIn(100);
    
    var audio = new Audio("sounds/blue.mp3");
    audio.play();
}

$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
});